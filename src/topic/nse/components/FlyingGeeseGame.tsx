import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { AlertCircle, TrendingUp, Building2, GraduationCap, Globe, Factory, Coins, TreePine, Zap, Users, BarChart3, Info } from 'lucide-react';

// Import from the correct relative path
import { 
  flyingGeeseData,
  industriesDatabase,
  canTransferIndustry,
  calculateTransferImpact,
  attemptIndustryUpgrade,
  checkMiddleIncomeTrap,
  generateRandomEvent,
  type Country,
  type Industry,
  type GameEvent,
  type Challenge,
  type TransferResult,
  type DevelopmentStage,
  type Infrastructure,
  type EducationLevel
} from '../../../data/nse/flyingGeeseData';

// Import the CSS file
import './FlyingGeeseGame.css';

// Policy types and interfaces
interface PolicyState {
  [countryId: string]: {
    infrastructureInvestment: number; // 0-100
    educationFocus: 'primary' | 'secondary' | 'tertiary' | 'technical';
    fdiPolicy: 'restrictive' | 'moderate' | 'open';
    industrialZones: number;
    environmentalRegulations: number; // 0-100
    budget: number;
    politicalCapital: number;
    activeProjects: Project[];
  };
}

interface Project {
  id: string;
  type: 'infrastructure' | 'education' | 'industrial' | 'environmental';
  name: string;
  cost: number;
  duration: number; // years
  progress: number; // 0-100
  impact: string;
}

interface TransferDiagnostic {
  canTransfer: boolean;
  viabilityScore: number; // 0-100
  requirements: Array<{
    type: string;
    description: string;
    required: number;
    current: number;
    met: boolean;
  }>;
  recommendation: string;
}

interface UpgradeDiagnostic {
  canUpgrade: boolean;
  viabilityScore: number;
  pathways: Array<{
    targetIndustry: string;
    requirements: Array<{
      type: string;
      description: string;
      required: number;
      current: number;
      met: boolean;
    }>;
    readiness: number; // 0-100
  }>;
  recommendation: string;
}

interface GameState {
  year: number;
  countries: Record<string, Country>;
  transferHistory: Array<{
    from: string;
    to: string;
    industry: string;
    year: number;
    type: 'transfer' | 'upgrade';
  }>;
  score: number;
  currentEvent?: GameEvent;
  selectedTransfer?: {
    from: string;
    industry: string;
  };
  selectedUpgrade?: {
    country: string;
    fromIndustry: string;
  };
  mode: 'transfer' | 'upgrade' | 'policy';
}


const FlyingGeeseGame = () => {
  // Check if data is loaded
  if (!flyingGeeseData || !industriesDatabase) {
    return (
      <div className="flying-geese-game">
        <div className="error-state">
          <AlertCircle size={48} />
          <h2>Loading Error</h2>
          <p>Flying Geese data not available. Please ensure the data file is loaded.</p>
        </div>
      </div>
    );
  }

  const availableYears = Object.keys(flyingGeeseData.countries || {}).map(Number).sort();
  const [selectedYear, setSelectedYear] = useState(availableYears[0] || 1960);
  const [showDiagnostic, setShowDiagnostic] = useState(null);
  const [diagnosticPosition, setDiagnosticPosition] = useState({ x: 0, y: 0 });
  
  const initialCountries = flyingGeeseData.countries?.[selectedYear] || {};
  
  const [gameState, setGameState] = useState({
    year: selectedYear,
    countries: initialCountries,
    transferHistory: [],
    score: 0,
    mode: 'transfer',
    selectedTransfer: null,
    selectedUpgrade: null,
    currentEvent: null
  });
  
  const [policyState, setPolicyState] = useState(() => {
    const initial = {};
    Object.keys(initialCountries).forEach(countryId => {
      initial[countryId] = {
        infrastructureInvestment: 50,
        educationFocus: 'secondary',
        fdiPolicy: initialCountries[countryId].fdiPolicy || 'moderate',
        industrialZones: initialCountries[countryId].infrastructure?.industrialZones || 0,
        environmentalRegulations: 50,
        budget: initialCountries[countryId].gdp * 0.2, // 20% of GDP
        politicalCapital: 100,
        activeProjects: []
      };
    });
    return initial;
  });
  
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackType, setFeedbackType] = useState('info');
  const [selectedPolicyCountry, setSelectedPolicyCountry] = useState(null);
  const [showTransferMatrix, setShowTransferMatrix] = useState(false);
  const [showPathfinder, setShowPathfinder] = useState(false);

  // Calculate transfer diagnostic
  const getTransferDiagnostic = useCallback((fromCountry, toCountry, industryName) => {
    const industry = fromCountry.industries.find(i => i.name === industryName);
    const rules = flyingGeeseData.transferRules[industryName];
    
    if (!industry || !rules) {
      return {
        canTransfer: false,
        viabilityScore: 0,
        requirements: [],
        recommendation: 'Invalid industry or no transfer rules defined'
      };
    }
    
    const requirements = [];
    let metRequirements = 0;
    
    // Wage gap requirement
    const wageGap = fromCountry.wageLevel / toCountry.wageLevel;
    const wageReq = {
      type: 'wage',
      description: 'Wage gap',
      required: rules.minWageGap,
      current: wageGap,
      met: wageGap >= rules.minWageGap
    };
    requirements.push(wageReq);
    if (wageReq.met) metRequirements++;
    
    // Recipient wage ceiling
    const wageReq2 = {
      type: 'wage-ceiling',
      description: 'Recipient wage level',
      required: rules.maxRecipientWage,
      current: toCountry.wageLevel,
      met: toCountry.wageLevel <= rules.maxRecipientWage
    };
    requirements.push(wageReq2);
    if (wageReq2.met) metRequirements++;
    
    // Infrastructure
    const infraReq = {
      type: 'infrastructure',
      description: 'Infrastructure quality',
      required: rules.minInfrastructure,
      current: toCountry.infrastructure.overall,
      met: toCountry.infrastructure.overall >= rules.minInfrastructure
    };
    requirements.push(infraReq);
    if (infraReq.met) metRequirements++;
    
    // Political stability
    const stabilityReq = {
      type: 'stability',
      description: 'Political stability',
      required: 50,
      current: toCountry.politicalStability,
      met: toCountry.politicalStability >= 50
    };
    requirements.push(stabilityReq);
    if (stabilityReq.met) metRequirements++;
    
    // Environmental capacity
    if (industry.pollutionLevel > 60) {
      const envReq = {
        type: 'environment',
        description: 'Environmental capacity',
        required: 30,
        current: toCountry.environmentalHealth,
        met: toCountry.environmentalHealth >= 30
      };
      requirements.push(envReq);
      if (envReq.met) metRequirements++;
    }
    
    // Already has industry check
    const hasIndustry = toCountry.industries.some(i => i.name === industryName);
    if (hasIndustry) {
      requirements.push({
        type: 'unique',
        description: 'Industry not present',
        required: 0,
        current: 1,
        met: false
      });
    }
    
    const viabilityScore = Math.round((metRequirements / requirements.length) * 100);
    const canTransfer = metRequirements === requirements.length && !hasIndustry;
    
    let recommendation = '';
    if (canTransfer) {
      recommendation = `✅ Ready for transfer! ${rules.feedback}`;
    } else if (viabilityScore >= 75) {
      recommendation = `🟡 Almost ready. Address remaining requirements.`;
    } else if (viabilityScore >= 50) {
      recommendation = `🟠 Moderate readiness. Focus on infrastructure and wage competitiveness.`;
    } else {
      recommendation = `🔴 Not ready. Major investments needed in infrastructure and stability.`;
    }
    
    return {
      canTransfer,
      viabilityScore,
      requirements,
      recommendation
    };
  }, []);

  // Calculate upgrade diagnostic
  const getUpgradeDiagnostic = useCallback((country, fromIndustryName) => {
    const currentIndustry = country.industries.find(i => i.name === fromIndustryName);
    if (!currentIndustry) {
      return {
        canUpgrade: false,
        viabilityScore: 0,
        pathways: [],
        recommendation: 'Industry not found'
      };
    }
    
    const pathways = [];
    const possibleUpgrades = Object.entries(industriesDatabase)
      .filter(([name, ind]) => {
        // Can't upgrade to same industry or one already owned
        if (name === fromIndustryName || country.industries.some(i => i.name === name)) {
          return false;
        }
        // Must be higher tech level
        return ind.technologyLevel > currentIndustry.technologyLevel;
      });
    
    possibleUpgrades.forEach(([targetName, targetIndustry]) => {
      const requirements = [];
      let metRequirements = 0;
      
      if (targetIndustry.upgradeRequirements) {
        targetIndustry.upgradeRequirements.forEach(req => {
          let current = 0;
          switch (req.type) {
            case 'infrastructure':
              current = country.infrastructure.overall;
              break;
            case 'education':
              current = country.education.technicalSkills;
              break;
            case 'capital':
              current = country.gdp / 100;
              break;
            case 'technology':
              current = country.industries.reduce((sum, ind) => sum + ind.technologyLevel, 0) / country.industries.length;
              break;
            case 'policy':
              current = country.fdiPolicy === 'open' ? 80 : country.fdiPolicy === 'moderate' ? 50 : 20;
              break;
          }
          
          const met = current >= req.minimum;
          if (met) metRequirements++;
          
          requirements.push({
            type: req.type,
            description: req.description,
            required: req.minimum,
            current,
            met
          });
        });
      }
      
      const readiness = targetIndustry.upgradeRequirements 
        ? Math.round((metRequirements / requirements.length) * 100)
        : 50;
      
      pathways.push({
        targetIndustry: targetName,
        requirements,
        readiness
      });
    });
    
    // Sort by readiness
    pathways.sort((a, b) => b.readiness - a.readiness);
    
    const bestPathway = pathways[0];
    const viabilityScore = bestPathway ? bestPathway.readiness : 0;
    
    let recommendation = '';
    if (viabilityScore >= 90) {
      recommendation = `✅ Ready to upgrade to ${bestPathway.targetIndustry}!`;
    } else if (viabilityScore >= 70) {
      recommendation = `🟡 Close to upgrading. Focus on: ${bestPathway.requirements.filter(r => !r.met).map(r => r.type).join(', ')}`;
    } else if (viabilityScore >= 50) {
      recommendation = `🟠 Upgrade possible with investments in infrastructure and education`;
    } else {
      recommendation = `🔴 Major development needed before upgrading`;
    }
    
    return {
      canUpgrade: country.canUpgrade && pathways.length > 0,
      viabilityScore,
      pathways: pathways.slice(0, 5), // Top 5 pathways
      recommendation
    };
  }, []);

  // Handle showing diagnostic on click
  const handleIndustryClick = useCallback((e, countryId, industryName, mode) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    
    if (mode === 'transfer') {
      const country = gameState.countries[countryId];
      const diagnostic = {
        type: 'transfer',
        countryId,
        industryName,
        fromCountry: country,
        possibleDestinations: Object.entries(gameState.countries)
          .filter(([id]) => id !== countryId)
          .map(([id, toCountry]) => ({
            country: toCountry,
            diagnostic: getTransferDiagnostic(country, toCountry, industryName)
          }))
          .sort((a, b) => b.diagnostic.viabilityScore - a.diagnostic.viabilityScore)
      };
      
      setShowDiagnostic(diagnostic);
      setDiagnosticPosition({
        x: rect.left + rect.width / 2,
        y: rect.bottom + 10
      });
      
      // Also handle selection for actual transfer
      if (gameState.selectedTransfer?.from === countryId && 
          gameState.selectedTransfer?.industry === industryName) {
        setGameState(prev => ({ ...prev, selectedTransfer: null }));
      } else {
        setGameState(prev => ({ 
          ...prev, 
          selectedTransfer: { from: countryId, industry: industryName },
          selectedUpgrade: null 
        }));
      }
    } else if (mode === 'upgrade') {
      const country = gameState.countries[countryId];
      const diagnostic = {
        type: 'upgrade',
        countryId,
        industryName,
        country,
        diagnostic: getUpgradeDiagnostic(country, industryName)
      };
      
      setShowDiagnostic(diagnostic);
      setDiagnosticPosition({
        x: rect.left + rect.width / 2,
        y: rect.bottom + 10
      });
      
      // Handle selection
      if (gameState.selectedUpgrade?.country === countryId && 
          gameState.selectedUpgrade?.fromIndustry === industryName) {
        setGameState(prev => ({ ...prev, selectedUpgrade: null }));
      } else {
        setGameState(prev => ({ 
          ...prev, 
          selectedUpgrade: { country: countryId, fromIndustry: industryName },
          selectedTransfer: null 
        }));
      }
    }
  }, [gameState, getTransferDiagnostic, getUpgradeDiagnostic]);

  // Policy implementation functions
  const implementPolicy = useCallback((countryId, policyType, value) => {
    const country = gameState.countries[countryId];
    const policy = policyState[countryId];
    
    let cost = 0;
    let politicalCost = 0;
    let impact = {};
    
    switch (policyType) {
      case 'infrastructure':
        cost = Math.round(country.gdp * 0.05 * (value / 100));
        impact = {
          infrastructure: {
            ...country.infrastructure,
            overall: Math.min(100, country.infrastructure.overall + value * 0.2)
          }
        };
        break;
        
      case 'education':
        cost = Math.round(country.gdp * 0.03);
        politicalCost = 10;
        const educationBonus = {
          primary: { literacy: 5, primaryCompletion: 10 },
          secondary: { secondaryCompletion: 10, technicalSkills: 5 },
          tertiary: { tertiaryEnrollment: 15, technicalSkills: 10 },
          technical: { technicalSkills: 20 }
        };
        const bonus = educationBonus[value] || {};
        impact = {
          education: {
            ...country.education,
            ...Object.fromEntries(
              Object.entries(bonus).map(([key, val]) => [
                key, 
                Math.min(100, country.education[key] + val)
              ])
            )
          }
        };
        break;
        
      case 'industrialZone':
        cost = Math.round(country.gdp * 0.1);
        politicalCost = 20;
        impact = {
          infrastructure: {
            ...country.infrastructure,
            industrialZones: country.infrastructure.industrialZones + 1
          }
        };
        break;
        
      case 'fdiPolicy':
        politicalCost = value === 'open' ? 30 : 15;
        impact = { fdiPolicy: value };
        break;
        
      case 'environmental':
        cost = Math.round(country.gdp * 0.02 * (value / 100));
        politicalCost = value > 70 ? 25 : 10;
        impact = {
          environmentalHealth: Math.min(100, country.environmentalHealth + value * 0.1)
        };
        break;
    }
    
    // Check if can afford
    if (cost > policy.budget) {
      showFeedbackMessage('❌ Insufficient budget!', 'error');
      return;
    }
    
    if (politicalCost > policy.politicalCapital) {
      showFeedbackMessage('❌ Insufficient political capital!', 'error');
      return;
    }
    
    // Apply policy
    setPolicyState(prev => ({
      ...prev,
      [countryId]: {
        ...prev[countryId],
        budget: prev[countryId].budget - cost,
        politicalCapital: prev[countryId].politicalCapital - politicalCost
      }
    }));
    
    setGameState(prev => ({
      ...prev,
      countries: {
        ...prev.countries,
        [countryId]: {
          ...prev.countries[countryId],
          ...impact
        }
      },
      score: prev.score + 50
    }));
    
    showFeedbackMessage('✅ Policy implemented successfully!', 'success');
  }, [gameState, policyState]);

  // Calculate Transfer Matrix
  const transferMatrix = useMemo(() => {
    if (!showTransferMatrix) return null;
    
    const matrix = {};
    Object.entries(gameState.countries).forEach(([fromId, fromCountry]) => {
      matrix[fromId] = {};
      Object.entries(gameState.countries).forEach(([toId, toCountry]) => {
        if (fromId === toId) {
          matrix[fromId][toId] = null;
          return;
        }
        
        const transfers = {};
        fromCountry.industries.forEach(industry => {
          if (industry.transferable) {
            const diagnostic = getTransferDiagnostic(fromCountry, toCountry, industry.name);
            transfers[industry.name] = diagnostic.viabilityScore;
          }
        });
        matrix[fromId][toId] = transfers;
      });
    });
    return matrix;
  }, [gameState.countries, showTransferMatrix, getTransferDiagnostic]);

  // Pathfinder calculation
  const getOptimalPath = useCallback((countryId) => {
    const country = gameState.countries[countryId];
    const path = [];
    
    // Current status
    path.push({
      stage: 'current',
      description: `Current: ${country.stage} stage`,
      industries: country.industries.map(i => i.name),
      gdp: country.gdp
    });
    
    // Next immediate upgrades
    const immediateUpgrades = [];
    country.industries.forEach(ind => {
      const diagnostic = getUpgradeDiagnostic(country, ind.name);
      if (diagnostic.pathways[0] && diagnostic.pathways[0].readiness >= 70) {
        immediateUpgrades.push({
          from: ind.name,
          to: diagnostic.pathways[0].targetIndustry,
          readiness: diagnostic.pathways[0].readiness
        });
      }
    });
    
    if (immediateUpgrades.length > 0) {
      path.push({
        stage: 'immediate',
        description: 'Immediate upgrades available',
        upgrades: immediateUpgrades,
        requirements: 'Minor investments needed'
      });
    }
    
    // Medium term (need infrastructure/education)
    const mediumTermGoals = [];
    if (country.infrastructure.overall < 70) {
      mediumTermGoals.push('Improve infrastructure to 70+');
    }
    if (country.education.technicalSkills < 60) {
      mediumTermGoals.push('Boost technical education to 60+');
    }
    
    if (mediumTermGoals.length > 0) {
      path.push({
        stage: 'medium',
        description: 'Medium term (2-5 years)',
        goals: mediumTermGoals,
        targetIndustries: ['Electronics', 'Machinery', 'Chemicals']
      });
    }
    
    // Long term vision
    path.push({
      stage: 'long',
      description: 'Long term vision (5-10 years)',
      target: country.gdp < 8000 ? 'Reach advanced industrial stage' : 'Innovation economy',
      industries: ['Semiconductors', 'Biotechnology', 'AI & Robotics'],
      warning: country.gdp > 5000 && country.gdp < 12000 ? '⚠️ Middle-income trap risk' : null
    });
    
    return path;
  }, [gameState.countries, getUpgradeDiagnostic]);

  // Handle year change
  const handleYearChange = (year) => {
    const yearData = flyingGeeseData.countries[year];
    if (!yearData) return;
    
    setSelectedYear(year);
    setGameState({
      year,
      countries: yearData,
      transferHistory: [],
      score: 0,
      mode: 'transfer',
      selectedTransfer: null,
      selectedUpgrade: null,
      currentEvent: null
    });
    
    // Reset policy state
    const newPolicyState = {};
    Object.keys(yearData).forEach(countryId => {
      newPolicyState[countryId] = {
        infrastructureInvestment: 50,
        educationFocus: 'secondary',
        fdiPolicy: yearData[countryId].fdiPolicy || 'moderate',
        industrialZones: yearData[countryId].infrastructure?.industrialZones || 0,
        environmentalRegulations: 50,
        budget: yearData[countryId].gdp * 0.2,
        politicalCapital: 100,
        activeProjects: []
      };
    });
    setPolicyState(newPolicyState);
  };

  // Show feedback
  const showFeedbackMessage = (message, type = 'info') => {
    setFeedbackMessage(message);
    setFeedbackType(type);
    setShowFeedback(true);
    setTimeout(() => setShowFeedback(false), 5000);
  };

  // Handle country click for transfers
  const handleCountryClick = (toCountryId) => {
    if (gameState.selectedTransfer && gameState.mode === 'transfer') {
      performTransfer(toCountryId);
    }
  };

  // Perform transfer
  const performTransfer = (toCountryId) => {
    if (!gameState.selectedTransfer) return;
    
    const fromCountry = gameState.countries[gameState.selectedTransfer.from];
    const toCountry = gameState.countries[toCountryId];
    
    const transferCheck = canTransferIndustry(
      fromCountry,
      toCountry,
      gameState.selectedTransfer.industry
    );
    
    if (!transferCheck.canTransfer) {
      showFeedbackMessage(`❌ ${transferCheck.reason}`, 'error');
      return;
    }
    
    const result = calculateTransferImpact(
      fromCountry,
      toCountry,
      gameState.selectedTransfer.industry
    );
    
    if (result.success) {
      const newCountries = {
        ...gameState.countries,
        [gameState.selectedTransfer.from]: result.fromCountry,
        [toCountryId]: result.toCountry
      };
      
      setGameState(prev => ({
        ...prev,
        countries: newCountries,
        transferHistory: [...prev.transferHistory, {
          from: gameState.selectedTransfer.from,
          to: toCountryId,
          industry: gameState.selectedTransfer.industry,
          year: gameState.year,
          type: 'transfer'
        }],
        score: prev.score + 100,
        selectedTransfer: null
      }));
      
      showFeedbackMessage(`✅ ${result.narrative}`, 'success');
    }
  };

  // Perform upgrade
  const performUpgrade = (toIndustry) => {
    if (!gameState.selectedUpgrade) return;
    
    const country = gameState.countries[gameState.selectedUpgrade.country];
    const result = attemptIndustryUpgrade(
      country,
      gameState.selectedUpgrade.fromIndustry,
      toIndustry
    );
    
    if (!result.success) {
      showFeedbackMessage(`❌ ${result.reason}`, 'error');
      return;
    }
    
    const newCountries = {
      ...gameState.countries,
      [gameState.selectedUpgrade.country]: result.updatedCountry
    };
    
    setGameState(prev => ({
      ...prev,
      countries: newCountries,
      transferHistory: [...prev.transferHistory, {
        from: gameState.selectedUpgrade.country,
        to: toIndustry,
        industry: `${gameState.selectedUpgrade.fromIndustry} → ${toIndustry}`,
        year: gameState.year,
        type: 'upgrade'
      }],
      score: prev.score + 150,
      selectedUpgrade: null
    }));
    
    showFeedbackMessage(
      `✅ ${country.name} upgraded from ${gameState.selectedUpgrade.fromIndustry} to ${toIndustry}!`,
      'success'
    );
  };

  // Helper functions
  const getStageColor = (stage) => {
    const colors = {
      'pre-industrial': '#6c757d',
      'early-industrial': '#17a2b8',
      'industrial': '#28a745',
      'advanced': '#007bff',
      'innovation': '#6f42c1',
      'middle-income-trap': '#dc3545'
    };
    return colors[stage] || '#6c757d';
  };

  const getIndustryIcon = (type) => {
    const icons = {
      'labor-intensive': '👷',
      'capital-intensive': '🏭',
      'technology-intensive': '💻',
      'knowledge-intensive': '🧬'
    };
    return icons[type || 'labor-intensive'] || '📦';
  };

  const countryFlags = {
    japan: '🇯🇵',
    korea: '🇰🇷',
    taiwan: '🇹🇼',
    china: '🇨🇳',
    india: '🇮🇳',
    bangladesh: '🇧🇩',
    vietnam: '🇻🇳',
    singapore: '🇸🇬',
    malaysia: '🇲🇾',
    ethiopia: '🇪🇹',
    mexico: '🇲🇽'
  };

  const calculateGlobalStats = () => {
    const countries = Object.values(gameState.countries);
    const totalGDP = countries.reduce((sum, c) => sum + c.gdp, 0);
    const avgWage = countries.reduce((sum, c) => sum + c.wageLevel, 0) / countries.length;
    const avgPollution = countries.reduce((sum, c) => sum + c.environmentalHealth, 0) / countries.length;
    const industrialJobs = countries.reduce((sum, c) => 
      sum + c.industries.reduce((s, i) => s + i.employmentShare, 0), 0
    );
    
    return { totalGDP, avgWage, avgPollution, industrialJobs };
  };

  const globalStats = calculateGlobalStats();

  // Render diagnostic tooltip
  const renderDiagnostic = () => {
    if (!showDiagnostic) return null;
    
    const { type, countryId, industryName } = showDiagnostic;
    
    return (
      <div 
        className="diagnostic-tooltip"
        style={{
          position: 'fixed',
          left: diagnosticPosition.x,
          top: diagnosticPosition.y,
          transform: 'translateX(-50%)',
          zIndex: 1000
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="diagnostic-header">
          <h4>{type === 'transfer' ? '🔄 Transfer Analysis' : '⬆️ Upgrade Analysis'}</h4>
          <button onClick={() => setShowDiagnostic(null)}>✕</button>
        </div>
        
        {type === 'transfer' && (
          <div className="transfer-diagnostic">
            <h5>{industryName} from {showDiagnostic.fromCountry.name}</h5>
            <div className="destination-list">
              {showDiagnostic.possibleDestinations.slice(0, 5).map(({ country, diagnostic }) => (
                <div key={country.id} className={`destination-item ${diagnostic.canTransfer ? 'can-transfer' : ''}`}>
                  <div className="destination-header">
                    <span>{countryFlags[country.id]} {country.name}</span>
                    <span className="viability-score" style={{
                      color: diagnostic.viabilityScore >= 75 ? '#28a745' : 
                             diagnostic.viabilityScore >= 50 ? '#ffc107' : '#dc3545'
                    }}>
                      {diagnostic.viabilityScore}%
                    </span>
                  </div>
                  <div className="requirements-list">
                    {diagnostic.requirements.map((req, idx) => (
                      <div key={idx} className={`requirement ${req.met ? 'met' : 'unmet'}`}>
                        <span className="req-icon">{req.met ? '✅' : '❌'}</span>
                        <span className="req-desc">{req.description}</span>
                        <span className="req-value">
                          {Math.round(req.current)}/{req.required}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="recommendation">{diagnostic.recommendation}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {type === 'upgrade' && (
          <div className="upgrade-diagnostic">
            <h5>Upgrade paths for {industryName}</h5>
            <div className="pathway-list">
              {showDiagnostic.diagnostic.pathways.map((pathway, idx) => (
                <div key={idx} className={`pathway-item ${pathway.readiness >= 70 ? 'ready' : ''}`}>
                  <div className="pathway-header">
                    <span>{getIndustryIcon(industriesDatabase[pathway.targetIndustry]?.type)} {pathway.targetIndustry}</span>
                    <span className="readiness-score" style={{
                      color: pathway.readiness >= 70 ? '#28a745' : 
                             pathway.readiness >= 50 ? '#ffc107' : '#dc3545'
                    }}>
                      {pathway.readiness}%
                    </span>
                  </div>
                  {pathway.requirements.length > 0 && (
                    <div className="requirements-list">
                      {pathway.requirements.map((req, idx) => (
                        <div key={idx} className={`requirement ${req.met ? 'met' : 'unmet'}`}>
                          <span className="req-icon">{req.met ? '✅' : '❌'}</span>
                          <span className="req-desc">{req.description}</span>
                          <span className="req-value">
                            {Math.round(req.current)}/{req.required}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="recommendation">{showDiagnostic.diagnostic.recommendation}</div>
          </div>
        )}
      </div>
    );
  };

  // Render Policy Analysis Mode
  const renderPolicyAnalysis = () => {
    if (gameState.mode !== 'policy') return null;
    
    return (
      <div className="policy-analysis-container">
        <div className="policy-tools">
          <button 
            className={`policy-tool-btn ${showTransferMatrix ? 'active' : ''}`}
            onClick={() => setShowTransferMatrix(!showTransferMatrix)}
          >
            <BarChart3 size={20} />
            Transfer Matrix
          </button>
          <button 
            className={`policy-tool-btn ${showPathfinder ? 'active' : ''}`}
            onClick={() => setShowPathfinder(!showPathfinder)}
          >
            <TrendingUp size={20} />
            Development Pathfinder
          </button>
          <button 
            className="policy-tool-btn"
            onClick={() => showFeedbackMessage('🚧 What-if Analysis coming soon!', 'info')}
          >
            <Info size={20} />
            What-if Analysis
          </button>
        </div>
        
        {showTransferMatrix && transferMatrix && (
          <div className="transfer-matrix-view">
            <h3>🔄 Industry Transfer Viability Matrix</h3>
            <div className="matrix-legend">
              <span className="legend-item high">■ 75-100%: High viability</span>
              <span className="legend-item medium">■ 50-74%: Medium viability</span>
              <span className="legend-item low">■ 0-49%: Low viability</span>
            </div>
            <div className="matrix-grid">
              <div className="matrix-header">
                <div className="matrix-cell"></div>
                {Object.keys(gameState.countries).map(id => (
                  <div key={id} className="matrix-cell header">
                    {countryFlags[id]} {gameState.countries[id].name}
                  </div>
                ))}
              </div>
              {Object.entries(transferMatrix).map(([fromId, toCountries]) => (
                <div key={fromId} className="matrix-row">
                  <div className="matrix-cell header">
                    {countryFlags[fromId]} {gameState.countries[fromId].name}
                  </div>
                  {Object.entries(toCountries).map(([toId, industries]) => (
                    <div key={toId} className="matrix-cell">
                      {industries ? (
                        <div className="industry-scores">
                          {Object.entries(industries).map(([ind, score]) => (
                            <div 
                              key={ind} 
                              className="score-chip"
                              style={{
                                backgroundColor: score >= 75 ? '#28a745' : 
                                               score >= 50 ? '#ffc107' : '#dc3545',
                                opacity: 0.8
                              }}
                              title={`${ind}: ${score}%`}
                            >
                              {ind.substring(0, 3)}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <span className="no-transfer">-</span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {showPathfinder && (
          <div className="pathfinder-view">
            <h3>🎯 Optimal Development Paths</h3>
            <div className="pathfinder-grid">
              {Object.entries(gameState.countries).map(([countryId, country]) => {
                const path = getOptimalPath(countryId);
                const trapAnalysis = checkMiddleIncomeTrap(country);
                
                return (
                  <div key={countryId} className="pathfinder-country">
                    <h4>{countryFlags[countryId]} {country.name}</h4>
                    {trapAnalysis.inTrap && (
                      <div className="trap-warning-banner">
                        ⚠️ Middle-Income Trap Risk Detected!
                      </div>
                    )}
                    <div className="development-path">
                      {path.map((stage, idx) => (
                        <div key={idx} className={`path-stage ${stage.stage}`}>
                          <div className="stage-header">{stage.description}</div>
                          {stage.industries && (
                            <div className="stage-industries">
                              {stage.industries.map((ind, i) => (
                                <span key={i} className="industry-tag">{ind}</span>
                              ))}
                            </div>
                          )}
                          {stage.upgrades && (
                            <div className="stage-upgrades">
                              {stage.upgrades.map((up, i) => (
                                <div key={i} className="upgrade-item">
                                  {up.from} → {up.to} ({up.readiness}%)
                                </div>
                              ))}
                            </div>
                          )}
                          {stage.goals && (
                            <ul className="stage-goals">
                              {stage.goals.map((goal, i) => (
                                <li key={i}>{goal}</li>
                              ))}
                            </ul>
                          )}
                          {stage.warning && (
                            <div className="stage-warning">{stage.warning}</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        
        {selectedPolicyCountry && (
          <div className="policy-dashboard">
            <h3>
              📋 Policy Dashboard: {countryFlags[selectedPolicyCountry]} {gameState.countries[selectedPolicyCountry].name}
            </h3>
            <div className="policy-resources">
              <div className="resource-item">
                <Coins size={20} />
                <span>Budget: ${policyState[selectedPolicyCountry].budget.toFixed(0)}M</span>
              </div>
              <div className="resource-item">
                <Zap size={20} />
                <span>Political Capital: {policyState[selectedPolicyCountry].politicalCapital}</span>
              </div>
            </div>
            
            <div className="policy-controls">
              <div className="policy-section">
                <h4><Building2 size={20} /> Infrastructure Investment</h4>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={policyState[selectedPolicyCountry].infrastructureInvestment}
                  onChange={(e) => {
                    setPolicyState(prev => ({
                      ...prev,
                      [selectedPolicyCountry]: {
                        ...prev[selectedPolicyCountry],
                        infrastructureInvestment: parseInt(e.target.value)
                      }
                    }));
                  }}
                />
                <span>{policyState[selectedPolicyCountry].infrastructureInvestment}%</span>
                <button 
                  className="policy-apply-btn"
                  onClick={() => implementPolicy(selectedPolicyCountry, 'infrastructure', policyState[selectedPolicyCountry].infrastructureInvestment)}
                >
                  Apply (Cost: ${Math.round(gameState.countries[selectedPolicyCountry].gdp * 0.05 * (policyState[selectedPolicyCountry].infrastructureInvestment / 100))}M)
                </button>
              </div>
              
              <div className="policy-section">
                <h4><GraduationCap size={20} /> Education Focus</h4>
                <select 
                  value={policyState[selectedPolicyCountry].educationFocus}
                  onChange={(e) => {
                    setPolicyState(prev => ({
                      ...prev,
                      [selectedPolicyCountry]: {
                        ...prev[selectedPolicyCountry],
                        educationFocus: e.target.value
                      }
                    }));
                  }}
                >
                  <option value="primary">Primary Education</option>
                  <option value="secondary">Secondary Education</option>
                  <option value="tertiary">Tertiary Education</option>
                  <option value="technical">Technical Training</option>
                </select>
                <button 
                  className="policy-apply-btn"
                  onClick={() => implementPolicy(selectedPolicyCountry, 'education', policyState[selectedPolicyCountry].educationFocus)}
                >
                  Implement (Cost: ${Math.round(gameState.countries[selectedPolicyCountry].gdp * 0.03)}M, 10 PC)
                </button>
              </div>
              
              <div className="policy-section">
                <h4><Globe size={20} /> FDI Policy</h4>
                <select 
                  value={policyState[selectedPolicyCountry].fdiPolicy}
                  onChange={(e) => {
                    setPolicyState(prev => ({
                      ...prev,
                      [selectedPolicyCountry]: {
                        ...prev[selectedPolicyCountry],
                        fdiPolicy: e.target.value
                      }
                    }));
                  }}
                >
                  <option value="restrictive">Restrictive</option>
                  <option value="moderate">Moderate</option>
                  <option value="open">Open</option>
                </select>
                <button 
                  className="policy-apply-btn"
                  onClick={() => implementPolicy(selectedPolicyCountry, 'fdiPolicy', policyState[selectedPolicyCountry].fdiPolicy)}
                >
                  Change Policy ({policyState[selectedPolicyCountry].fdiPolicy === 'open' ? '30' : '15'} PC)
                </button>
              </div>
              
              <div className="policy-section">
                <h4><Factory size={20} /> Create Industrial Zone</h4>
                <button 
                  className="policy-apply-btn"
                  onClick={() => implementPolicy(selectedPolicyCountry, 'industrialZone', 1)}
                >
                  Build New Zone (Cost: ${Math.round(gameState.countries[selectedPolicyCountry].gdp * 0.1)}M, 20 PC)
                </button>
              </div>
              
              <div className="policy-section">
                <h4><TreePine size={20} /> Environmental Regulations</h4>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={policyState[selectedPolicyCountry].environmentalRegulations}
                  onChange={(e) => {
                    setPolicyState(prev => ({
                      ...prev,
                      [selectedPolicyCountry]: {
                        ...prev[selectedPolicyCountry],
                        environmentalRegulations: parseInt(e.target.value)
                      }
                    }));
                  }}
                />
                <span>{policyState[selectedPolicyCountry].environmentalRegulations}%</span>
                <button 
                  className="policy-apply-btn"
                  onClick={() => implementPolicy(selectedPolicyCountry, 'environmental', policyState[selectedPolicyCountry].environmentalRegulations)}
                >
                  Implement ({policyState[selectedPolicyCountry].environmentalRegulations > 70 ? '25' : '10'} PC)
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flying-geese-game" onClick={() => setShowDiagnostic(null)}>
      <style jsx>{`
        .flying-geese-game {
          padding: 20px;
          max-width: 1600px;
          margin: 0 auto;
          background: #0f0f23;
          color: #fff;
          min-height: 100vh;
        }
        
        .error-state {
          text-align: center;
          padding: 60px 20px;
          color: #dc3545;
        }
        
        .game-header {
          text-align: center;
          margin-bottom: 30px;
        }
        
        .game-header h2 {
          font-size: 2.5em;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 10px;
        }
        
        .subtitle {
          color: #aaa;
          font-size: 1.1em;
        }
        
        .mode-selector {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 30px;
        }
        
        .mode-btn {
          padding: 12px 30px;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          color: #fff;
          font-size: 1em;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .mode-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
        }
        
        .mode-btn.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-color: transparent;
          box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
        }
        
        .year-selector {
          margin-bottom: 30px;
          text-align: center;
        }
        
        .year-selector h3 {
          color: #667eea;
          margin-bottom: 15px;
        }
        
        .year-buttons {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        
        .year-btn {
          padding: 10px 20px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          color: #fff;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .year-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: #667eea;
          transform: translateY(-2px);
        }
        
        .year-btn.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-color: transparent;
        }
        
        .global-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }
        
        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          padding: 20px;
          border-radius: 12px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .stat-card h4 {
          color: #667eea;
          margin-bottom: 10px;
          font-size: 0.9em;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .stat-value {
          font-size: 2.5em;
          font-weight: bold;
          color: #fff;
          margin-bottom: 5px;
        }
        
        .stat-change {
          font-size: 0.85em;
          color: #aaa;
        }
        
        .countries-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 25px;
          margin-bottom: 40px;
        }
        
        .country-card {
          background: rgba(255, 255, 255, 0.05);
          border: 3px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 20px;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
        }
        
        .country-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        }
        
        .country-card.selected {
          border-color: #f093fb;
          background: rgba(240, 147, 251, 0.1);
        }
        
        .country-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
        }
        
        .country-flag {
          font-size: 2em;
        }
        
        .country-name {
          flex: 1;
          font-size: 1.2em;
          font-weight: bold;
        }
        
        .country-gdp {
          font-size: 0.9em;
          color: #28a745;
          font-weight: bold;
        }
        
        .country-metrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 15px;
          font-size: 0.85em;
        }
        
        .metric {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 5px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 6px;
        }
        
        .metric-label {
          color: #888;
          font-size: 0.8em;
        }
        
        .metric-value {
          color: #fff;
          font-weight: bold;
        }
        
        .stage-indicator {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
        }
        
        .stage-badge {
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 0.85em;
          color: #fff;
          text-transform: uppercase;
          font-weight: bold;
          letter-spacing: 0.5px;
        }
        
        .industries-section h4 {
          font-size: 0.9em;
          color: #667eea;
          margin-bottom: 10px;
        }
        
        .industries-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        
        .industry-chip {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(255, 255, 255, 0.08);
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.8em;
          border: 2px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .industry-chip:hover {
          transform: scale(1.05);
          background: rgba(255, 255, 255, 0.15);
        }
        
        .industry-chip.selected {
          background: rgba(102, 126, 234, 0.3);
          border-color: #667eea;
          transform: scale(1.1);
        }
        
        .diagnostic-tooltip {
          background: rgba(16, 16, 32, 0.98);
          border: 2px solid #667eea;
          border-radius: 12px;
          padding: 20px;
          max-width: 500px;
          max-height: 600px;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
        }
        
        .diagnostic-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }
        
        .diagnostic-header h4 {
          margin: 0;
          color: #f093fb;
        }
        
        .diagnostic-header button {
          background: none;
          border: none;
          color: #fff;
          font-size: 1.2em;
          cursor: pointer;
        }
        
        .destination-item, .pathway-item {
          background: rgba(255, 255, 255, 0.05);
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 10px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .destination-item.can-transfer {
          border-color: #28a745;
          background: rgba(40, 167, 69, 0.1);
        }
        
        .pathway-item.ready {
          border-color: #28a745;
          background: rgba(40, 167, 69, 0.1);
        }
        
        .destination-header, .pathway-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          font-weight: bold;
        }
        
        .viability-score, .readiness-score {
          font-size: 1.2em;
          font-weight: bold;
        }
        
        .requirements-list {
          margin: 10px 0;
        }
        
        .requirement {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 5px 0;
          font-size: 0.85em;
        }
        
        .requirement.met {
          color: #28a745;
        }
        
        .requirement.unmet {
          color: #dc3545;
        }
        
        .req-icon {
          font-size: 0.9em;
        }
        
        .req-desc {
          flex: 1;
        }
        
        .req-value {
          font-weight: bold;
        }
        
        .recommendation {
          margin-top: 10px;
          padding: 10px;
          background: rgba(102, 126, 234, 0.2);
          border-radius: 6px;
          font-size: 0.9em;
          line-height: 1.4;
        }
        
        .policy-analysis-container {
          margin-top: 30px;
        }
        
        .policy-tools {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 30px;
        }
        
        .policy-tool-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          color: #fff;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .policy-tool-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: #667eea;
        }
        
        .policy-tool-btn.active {
          background: rgba(102, 126, 234, 0.3);
          border-color: #667eea;
        }
        
        .transfer-matrix-view, .pathfinder-view {
          background: rgba(255, 255, 255, 0.05);
          padding: 30px;
          border-radius: 16px;
          margin-bottom: 30px;
        }
        
        .transfer-matrix-view h3, .pathfinder-view h3 {
          color: #f093fb;
          margin-bottom: 20px;
          text-align: center;
        }
        
        .matrix-legend {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .legend-item {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        .legend-item.high::before {
          content: '';
          width: 20px;
          height: 20px;
          background: #28a745;
          display: inline-block;
        }
        
        .legend-item.medium::before {
          content: '';
          width: 20px;
          height: 20px;
          background: #ffc107;
          display: inline-block;
        }
        
        .legend-item.low::before {
          content: '';
          width: 20px;
          height: 20px;
          background: #dc3545;
          display: inline-block;
        }
        
        .matrix-grid {
          overflow-x: auto;
        }
        
        .matrix-header, .matrix-row {
          display: flex;
        }
        
        .matrix-cell {
          min-width: 120px;
          padding: 10px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
        }
        
        .matrix-cell.header {
          background: rgba(255, 255, 255, 0.1);
          font-weight: bold;
        }
        
        .industry-scores {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          justify-content: center;
        }
        
        .score-chip {
          padding: 2px 6px;
          border-radius: 10px;
          font-size: 0.7em;
          color: #fff;
          font-weight: bold;
        }
        
        .no-transfer {
          color: #666;
        }
        
        .pathfinder-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 20px;
        }
        
        .pathfinder-country {
          background: rgba(255, 255, 255, 0.03);
          padding: 20px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .pathfinder-country h4 {
          color: #667eea;
          margin-bottom: 15px;
        }
        
        .trap-warning-banner {
          background: rgba(220, 53, 69, 0.2);
          border: 1px solid #dc3545;
          padding: 10px;
          border-radius: 6px;
          margin-bottom: 15px;
          text-align: center;
          color: #ff6b6b;
          font-weight: bold;
        }
        
        .development-path {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .path-stage {
          background: rgba(255, 255, 255, 0.05);
          padding: 15px;
          border-radius: 8px;
          border-left: 3px solid #667eea;
        }
        
        .path-stage.immediate {
          border-left-color: #28a745;
        }
        
        .path-stage.medium {
          border-left-color: #ffc107;
        }
        
        .path-stage.long {
          border-left-color: #17a2b8;
        }
        
        .stage-header {
          font-weight: bold;
          margin-bottom: 10px;
          color: #f093fb;
        }
        
        .stage-industries, .stage-upgrades {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 10px;
        }
        
        .industry-tag {
          background: rgba(102, 126, 234, 0.3);
          padding: 4px 10px;
          border-radius: 15px;
          font-size: 0.85em;
        }
        
        .upgrade-item {
          background: rgba(40, 167, 69, 0.2);
          padding: 4px 10px;
          border-radius: 15px;
          font-size: 0.85em;
        }
        
        .stage-goals {
          margin-top: 10px;
          padding-left: 20px;
        }
        
        .stage-goals li {
          margin-bottom: 5px;
          color: #ccc;
        }
        
        .stage-warning {
          margin-top: 10px;
          padding: 8px;
          background: rgba(220, 53, 69, 0.2);
          border: 1px solid #dc3545;
          border-radius: 6px;
          color: #ff6b6b;
          text-align: center;
        }
        
        .policy-dashboard {
          background: rgba(255, 255, 255, 0.05);
          padding: 30px;
          border-radius: 16px;
          margin-bottom: 30px;
        }
        
        .policy-dashboard h3 {
          color: #f093fb;
          margin-bottom: 20px;
        }
        
        .policy-resources {
          display: flex;
          gap: 30px;
          margin-bottom: 30px;
        }
        
        .resource-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
        }
        
        .policy-controls {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }
        
        .policy-section {
          background: rgba(255, 255, 255, 0.03);
          padding: 20px;
          border-radius: 10px;
        }
        
        .policy-section h4 {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #667eea;
          margin-bottom: 15px;
        }
        
        .policy-section input[type="range"] {
          width: 100%;
          margin: 10px 0;
        }
        
        .policy-section select {
          width: 100%;
          padding: 8px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 6px;
          color: #fff;
          margin-bottom: 10px;
        }
        
        .policy-apply-btn {
          width: 100%;
          padding: 10px;
          margin-top: 10px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          border-radius: 6px;
          color: #fff;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .policy-apply-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
        }
        
        .feedback-popup {
          position: fixed;
          top: 20px;
          right: 20px;
          background: rgba(0, 0, 0, 0.9);
          padding: 20px 30px;
          border-radius: 12px;
          border: 2px solid #667eea;
          z-index: 1000;
          animation: slideInRight 0.3s ease;
          max-width: 400px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        }
        
        .feedback-popup.success {
          border-color: #28a745;
          background: rgba(40, 167, 69, 0.1);
        }
        
        .feedback-popup.error {
          border-color: #dc3545;
          background: rgba(220, 53, 69, 0.1);
        }
        
        .feedback-popup.warning {
          border-color: #ffc107;
          background: rgba(255, 193, 7, 0.1);
        }
        
        .feedback-popup.info {
          border-color: #17a2b8;
          background: rgba(23, 162, 184, 0.1);
        }
        
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
      
      <div className="game-header">
        <h2>Master the Flying Geese Pattern</h2>
        <p className="subtitle">Navigate industrialization, avoid the middle-income trap, and achieve sustainable development</p>
      </div>
      
      <div className="mode-selector">
        <button 
          className={`mode-btn ${gameState.mode === 'transfer' ? 'active' : ''}`}
          onClick={() => setGameState(prev => ({ ...prev, mode: 'transfer' }))}
        >
          🔄 Transfer Industries
        </button>
        <button 
          className={`mode-btn ${gameState.mode === 'upgrade' ? 'active' : ''}`}
          onClick={() => setGameState(prev => ({ ...prev, mode: 'upgrade' }))}
        >
          ⬆️ Upgrade Industries
        </button>
        <button 
          className={`mode-btn ${gameState.mode === 'policy' ? 'active' : ''}`}
          onClick={() => setGameState(prev => ({ ...prev, mode: 'policy' }))}
        >
          📋 Policy Analysis
        </button>
      </div>
      
      <div className="year-selector">
        <h3>Select Time Period:</h3>
        <div className="year-buttons">
          {availableYears.map(year => (
            <button
              key={year}
              className={`year-btn ${selectedYear === year ? 'active' : ''}`}
              onClick={() => handleYearChange(year)}
            >
              {year}s
            </button>
          ))}
        </div>
      </div>
      
      <div className="global-stats">
        <div className="stat-card">
          <h4>Global GDP</h4>
          <div className="stat-value">${(globalStats.totalGDP / 1000).toFixed(1)}K</div>
          <div className="stat-change">Per capita</div>
        </div>
        <div className="stat-card">
          <h4>Average Wage</h4>
          <div className="stat-value">${globalStats.avgWage.toFixed(0)}</div>
          <div className="stat-change">Monthly</div>
        </div>
        <div className="stat-card">
          <h4>Environmental Health</h4>
          <div className="stat-value">{globalStats.avgPollution.toFixed(0)}%</div>
          <div className="stat-change" style={{color: globalStats.avgPollution < 50 ? '#dc3545' : '#28a745'}}>
            {globalStats.avgPollution < 50 ? 'Degrading' : 'Stable'}
          </div>
        </div>
        <div className="stat-card">
          <h4>Development Score</h4>
          <div className="stat-value">{gameState.score}</div>
          <div className="stat-change">Points</div>
        </div>
      </div>
      
      {gameState.mode === 'policy' ? (
        <div className="countries-grid">
          {Object.values(gameState.countries).map(country => {
            const trapAnalysis = checkMiddleIncomeTrap(country);
            
            return (
              <div 
                key={country.id} 
                className={`country-card ${country.stage} ${
                  selectedPolicyCountry === country.id ? 'selected' : ''
                } ${trapAnalysis.inTrap ? 'middle-income-trap' : ''}`}
                onClick={() => setSelectedPolicyCountry(country.id)}
                style={{ borderColor: getStageColor(country.stage) }}
              >
                <div className="country-header">
                  <span className="country-flag">{countryFlags[country.id]}</span>
                  <span className="country-name">{country.name}</span>
                  <span className="country-gdp">${country.gdp}/capita</span>
                </div>
                
                <div className="country-metrics">
                  <div className="metric">
                    <span className="metric-label">Budget:</span>
                    <span className="metric-value">${policyState[country.id].budget.toFixed(0)}M</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Pol. Capital:</span>
                    <span className="metric-value">{policyState[country.id].politicalCapital}</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">FDI Policy:</span>
                    <span className="metric-value">{country.fdiPolicy}</span>
                  </div>
                </div>
                
                <div className="stage-indicator">
                  <span className="stage-badge" style={{ backgroundColor: getStageColor(country.stage) }}>
                    {country.stage.replace('-', ' ')}
                  </span>
                  {trapAnalysis.inTrap && <span className="trap-warning">⚠️ Trap Risk</span>}
                </div>
                
                <p style={{ marginTop: '15px', fontSize: '0.85em', color: '#aaa' }}>
                  Click to manage policies
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <div className="countries-grid">
            {Object.values(gameState.countries).map(country => {
              const trapAnalysis = checkMiddleIncomeTrap(country);
              
              return (
                <div 
                  key={country.id} 
                  className={`country-card ${country.stage} ${
                    gameState.selectedTransfer?.from === country.id ? 'selected' : ''
                  } ${trapAnalysis.inTrap ? 'middle-income-trap' : ''}`}
                  onClick={() => handleCountryClick(country.id)}
                  style={{ borderColor: getStageColor(country.stage) }}
                >
                  <div className="country-header">
                    <span className="country-flag">{countryFlags[country.id]}</span>
                    <span className="country-name">{country.name}</span>
                    <span className="country-gdp">${country.gdp}/capita</span>
                  </div>
                  
                  <div className="country-metrics">
                    <div className="metric">
                      <span className="metric-label">Wage:</span>
                      <span className="metric-value">${country.wageLevel}/mo</span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">Stability:</span>
                      <span className="metric-value">{country.politicalStability}%</span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">Infrastructure:</span>
                      <span className="metric-value">{country.infrastructure.overall.toFixed(0)}%</span>
                    </div>
                  </div>
                  
                  <div className="stage-indicator">
                    <span className="stage-badge" style={{ backgroundColor: getStageColor(country.stage) }}>
                      {country.stage.replace('-', ' ')}
                    </span>
                    {trapAnalysis.inTrap && <span className="trap-warning">⚠️ Trap Risk</span>}
                  </div>
                  
                  <div className="industries-section">
                    <h4>Industries:</h4>
                    <div className="industries-grid">
                      {country.industries.map((industry, idx) => (
                        <div 
                          key={idx}
                          className={`industry-chip ${
                            (gameState.selectedTransfer?.from === country.id && 
                             gameState.selectedTransfer?.industry === industry.name) ||
                            (gameState.selectedUpgrade?.country === country.id && 
                             gameState.selectedUpgrade?.fromIndustry === industry.name) ? 'selected' : ''
                          }`}
                          onClick={(e) => handleIndustryClick(e, country.id, industry.name, gameState.mode)}
                          title="Click for detailed analysis"
                        >
                          <span className="industry-icon">{getIndustryIcon(industry.type)}</span>
                          <span className="industry-name">{industry.name}</span>
                          <span className="industry-stats">
                            ({Math.round(industry.employmentShare * 100)}% jobs)
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {country.historicalNote && (
                    <div className="historical-note" style={{ 
                      fontSize: '0.85em', 
                      color: '#888', 
                      fontStyle: 'italic', 
                      marginTop: '15px',
                      paddingTop: '15px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                      <em>{country.historicalNote}</em>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          {gameState.selectedTransfer && (
            <div className="transfer-instruction" style={{
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)',
              padding: '20px',
              borderRadius: '12px',
              textAlign: 'center',
              marginBottom: '30px',
              border: '2px solid rgba(102, 126, 234, 0.3)'
            }}>
              <p>
                Select destination country for <strong style={{color: '#f093fb'}}>{gameState.selectedTransfer.industry}</strong> 
                {' '}from <strong style={{color: '#f093fb'}}>{gameState.countries[gameState.selectedTransfer.from].name}</strong>
              </p>
              <p className="hint" style={{fontSize: '0.9em', color: '#aaa', fontStyle: 'italic'}}>
                Countries need lower wages and adequate infrastructure
              </p>
            </div>
          )}
          
          {gameState.selectedUpgrade && (
            <div className="upgrade-panel" style={{
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)',
              padding: '20px',
              borderRadius: '12px',
              textAlign: 'center',
              marginBottom: '30px',
              border: '2px solid rgba(102, 126, 234, 0.3)'
            }}>
              <h3>Upgrade {gameState.selectedUpgrade.fromIndustry}</h3>
              <p>Select target industry for {gameState.countries[gameState.selectedUpgrade.country].name}:</p>
              <div className="upgrade-options" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '15px',
                marginTop: '20px'
              }}>
                {Object.entries(industriesDatabase)
                  .filter(([name, ind]) => {
                    const hasIndustry = gameState.countries[gameState.selectedUpgrade.country]?.industries?.some(i => i.name === name);
                    return !hasIndustry && ind.type !== 'labor-intensive';
                  })
                  .map(([name, industry]) => (
                    <button
                      key={name}
                      className="upgrade-option"
                      onClick={() => performUpgrade(name)}
                      style={{
                        padding: '15px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '2px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '10px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      {getIndustryIcon(industry.type)} {name}
                      <span className="tech-level" style={{fontSize: '0.8em', color: '#aaa'}}>
                        Tech: {industry.technologyLevel}
                      </span>
                    </button>
                  ))}
              </div>
            </div>
          )}
        </>
      )}
      
      {renderPolicyAnalysis()}
      {renderDiagnostic()}
      
      {showFeedback && (
        <div className={`feedback-popup ${feedbackType}`}>
          <p>{feedbackMessage}</p>
        </div>
      )}
    </div>
  );
};

export default FlyingGeeseGame;