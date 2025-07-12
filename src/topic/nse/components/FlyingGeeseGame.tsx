import React, { useState, useEffect } from 'react';
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
  type Challenge
} from '../../../data/nse/flyingGeeseData';

import './FlyingGeeseGame.css';

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

const FlyingGeeseGame: React.FC = () => {
  const availableYears = Object.keys(flyingGeeseData.countries || {}).map(Number).sort();
  const [selectedYear, setSelectedYear] = useState(availableYears[0] || 1960);
  
  const initialCountries = flyingGeeseData.countries?.[selectedYear] || {};
  
  const [gameState, setGameState] = useState<GameState>({
    year: selectedYear,
    countries: initialCountries,
    transferHistory: [],
    score: 0,
    mode: 'transfer'
  });
  
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [showTrapAnalysis, setShowTrapAnalysis] = useState<string | null>(null);
  const [showIndustryDetails, setShowIndustryDetails] = useState(false);

  // Check for random events
  useEffect(() => {
    if (!gameState.countries || Object.keys(gameState.countries).length === 0) return;
    
    const eventCheck = setInterval(() => {
      const event = generateRandomEvent(Object.values(gameState.countries));
      if (event && !gameState.currentEvent) {
        setGameState(prev => ({ ...prev, currentEvent: event }));
      }
    }, 30000); // Check every 30 seconds
    
    return () => clearInterval(eventCheck);
  }, [gameState.countries, gameState.currentEvent]);

  const handleYearChange = (year: number) => {
    const yearData = flyingGeeseData.countries[year];
    if (!yearData) {
      console.error(`No data found for year ${year}`);
      return;
    }
    
    setSelectedYear(year);
    setGameState({
      ...gameState,
      year,
      countries: yearData,
      transferHistory: [],
      score: 0,
      selectedTransfer: undefined,
      selectedUpgrade: undefined
    });
  };

  const handleTransferClick = (fromCountry: string, industry: string) => {
    if (gameState.mode !== 'transfer') return;
    
    if (gameState.selectedTransfer?.from === fromCountry && 
        gameState.selectedTransfer?.industry === industry) {
      setGameState(prev => ({ ...prev, selectedTransfer: undefined }));
      return;
    }
    
    setGameState(prev => ({ 
      ...prev, 
      selectedTransfer: { from: fromCountry, industry },
      selectedUpgrade: undefined 
    }));
  };

  const handleUpgradeClick = (countryId: string, fromIndustry: string) => {
    if (gameState.mode !== 'upgrade') return;
    
    if (gameState.selectedUpgrade?.country === countryId && 
        gameState.selectedUpgrade?.fromIndustry === fromIndustry) {
      setGameState(prev => ({ ...prev, selectedUpgrade: undefined }));
      return;
    }
    
    setGameState(prev => ({ 
      ...prev, 
      selectedUpgrade: { country: countryId, fromIndustry },
      selectedTransfer: undefined 
    }));
  };

  const handleCountryClick = (toCountryId: string) => {
    if (gameState.selectedTransfer && gameState.mode === 'transfer') {
      performTransfer(toCountryId);
    }
  };

  const performTransfer = (toCountryId: string) => {
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
          from: gameState.selectedTransfer!.from,
          to: toCountryId,
          industry: gameState.selectedTransfer!.industry,
          year: gameState.year,
          type: 'transfer'
        }],
        score: prev.score + 100,
        selectedTransfer: undefined
      }));
      
      showFeedbackMessage(`✅ ${result.narrative}`, 'success');
      
      if (result.sideEffects && result.sideEffects.length > 0) {
        setTimeout(() => {
          showFeedbackMessage(
            `⚠️ Side effects: ${result.sideEffects.map(e => e.description).join(', ')}`,
            'warning'
          );
        }, 3000);
      }
    }
  };

  const performUpgrade = (toIndustry: string) => {
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
      [gameState.selectedUpgrade.country]: result.updatedCountry!
    };
    
    setGameState(prev => ({
      ...prev,
      countries: newCountries,
      transferHistory: [...prev.transferHistory, {
        from: gameState.selectedUpgrade!.country,
        to: toIndustry,
        industry: `${gameState.selectedUpgrade!.fromIndustry} → ${toIndustry}`,
        year: gameState.year,
        type: 'upgrade'
      }],
      score: prev.score + 150,
      selectedUpgrade: undefined
    }));
    
    showFeedbackMessage(
      `✅ ${country.name} upgraded from ${gameState.selectedUpgrade.fromIndustry} to ${toIndustry}!`,
      'success'
    );
  };

  const handleEventChoice = (choiceIndex: number) => {
    if (!gameState.currentEvent || !gameState.currentEvent.choices) return;
    
    const choice = gameState.currentEvent.choices[choiceIndex];
    
    // Apply consequences
    const updatedCountries = { ...gameState.countries };
    choice.consequences.forEach(effect => {
      if (effect.countryId === 'all') {
        Object.keys(updatedCountries).forEach(id => {
          if (effect.gdpChange) {
            updatedCountries[id] = {
              ...updatedCountries[id],
              gdp: Math.round(updatedCountries[id].gdp * (1 + effect.gdpChange / 100))
            };
          }
        });
      }
    });
    
    setGameState(prev => ({
      ...prev,
      countries: updatedCountries,
      currentEvent: undefined
    }));
    
    showFeedbackMessage(`Applied: ${choice.label}`, 'info');
  };

  const showFeedbackMessage = (message: string, type: 'success' | 'error' | 'warning' | 'info') => {
    setFeedbackMessage(message);
    setShowFeedback(true);
    setTimeout(() => setShowFeedback(false), 5000);
  };

  const getStageColor = (stage: string) => {
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

  const getIndustryIcon = (type: string | undefined) => {
    const icons = {
      'labor-intensive': '👷',
      'capital-intensive': '🏭',
      'technology-intensive': '💻',
      'knowledge-intensive': '🧬'
    };
    return icons[type || 'labor-intensive'] || '📦';
  };

  const countryFlags: Record<string, string> = {
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
    const countries = gameState.countries ? Object.values(gameState.countries) : [];
    if (countries.length === 0) {
      return { totalGDP: 0, avgWage: 0, avgPollution: 0, industrialJobs: 0 };
    }
    
    const totalGDP = countries.reduce((sum, c) => sum + c.gdp, 0);
    const avgWage = countries.reduce((sum, c) => sum + c.wageLevel, 0) / countries.length;
    const avgPollution = countries.reduce((sum, c) => sum + c.environmentalHealth, 0) / countries.length;
    const industrialJobs = countries.reduce((sum, c) => 
      sum + c.industries.reduce((s, i) => s + i.employmentShare, 0), 0
    );
    
    return { totalGDP, avgWage, avgPollution, industrialJobs };
  };

  const globalStats = calculateGlobalStats();

  if (!flyingGeeseData.countries || availableYears.length === 0) {
    return (
      <div className="flying-geese-game">
        <div className="error-state">
          <h2>Loading error: No data available</h2>
          <p>The Flying Geese data could not be loaded</p>
        </div>
      </div>
    );
  }

  if (!gameState.countries || Object.keys(gameState.countries).length === 0) {
    return (
      <div className="flying-geese-game">
        <div className="error-state">
          <h2>No data available for the selected year</h2>
          <p>Please select a different time period</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flying-geese-game">
      <div className="game-header">
        <h2>Master the Flying Geese Pattern</h2>
        <p className="subtitle">Navigate industrialization, avoid the middle-income trap, and achieve sustainable development</p>
      </div>
      
      {/* Game Mode Selector */}
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
      
      {/* Year Selector */}
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
      
      {/* Global Statistics */}
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
      
      {/* Countries Grid */}
      <div className="countries-grid">
        {gameState.countries && Object.values(gameState.countries).map(country => {
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
                  {country.industries && country.industries.filter(industry => industry && industry.name).map((industry, idx) => {
                    const canTransfer = gameState.mode === 'transfer' && 
                      industry.transferable === true && 
                      country.canTransferTo && 
                      country.canTransferTo.length > 0 &&
                      flyingGeeseData.transferRules[industry.name];
                    
                    const canUpgrade = gameState.mode === 'upgrade' && 
                      country.canUpgrade === true;
                    
                    const isClickable = canTransfer || canUpgrade;
                    
                    return (
                      <div 
                        key={idx}
                        className={`industry-chip ${
                          canTransfer ? 'transferable' : ''
                        } ${canUpgrade ? 'upgradeable' : ''} ${
                          (gameState.selectedTransfer?.from === country.id && 
                           gameState.selectedTransfer?.industry === industry.name) ||
                          (gameState.selectedUpgrade?.country === country.id && 
                           gameState.selectedUpgrade?.fromIndustry === industry.name) ? 'selected' : ''
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (canTransfer) handleTransferClick(country.id, industry.name);
                          if (canUpgrade) handleUpgradeClick(country.id, industry.name);
                        }}
                        style={{ cursor: isClickable ? 'pointer' : 'default' }}
                        title={`Tech Level: ${industry.technologyLevel || 0}, Pollution: ${industry.pollutionLevel || 0}`}
                      >
                        <span className="industry-icon">{getIndustryIcon(industry.type || 'labor-intensive')}</span>
                        <span className="industry-name">{industry.name}</span>
                        <span className="industry-stats">
                          ({Math.round((industry.employmentShare || 0.1) * 100)}% jobs)
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {country.challenges && country.challenges.length > 0 && (
                <div className="challenges-section">
                  <h5>Challenges:</h5>
                  {country.challenges
                    .filter(c => c && (c.severity === 'critical' || c.severity === 'high'))
                    .map((challenge, idx) => (
                    <div key={idx} className={`challenge-badge ${challenge.severity}`}>
                      {challenge.type === 'infrastructure' && '🏗️'}
                      {challenge.type === 'political' && '⚡'}
                      {challenge.type === 'environmental' && '🌍'}
                      {challenge.type === 'economic' && '💰'}
                      {challenge.type === 'social' && '👥'}
                      {challenge.description}
                    </div>
                  ))}
                </div>
              )}
              
              {trapAnalysis.inTrap && (
                <button
                  className="trap-details-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowTrapAnalysis(showTrapAnalysis === country.id ? null : country.id);
                  }}
                >
                  {showTrapAnalysis === country.id ? 'Hide' : 'Show'} Trap Analysis
                </button>
              )}
              
              {showTrapAnalysis === country.id && trapAnalysis.inTrap && (
                <div className="trap-analysis">
                  <h5>Middle-Income Trap Symptoms:</h5>
                  <ul>
                    {trapAnalysis.symptoms.map((symptom, idx) => (
                      <li key={idx}>{symptom}</li>
                    ))}
                  </ul>
                  <h5>Recommended Solutions:</h5>
                  <ul>
                    {trapAnalysis.solutions.map((solution, idx) => (
                      <li key={idx}>{solution}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {country.historicalNote && (
                <div className="historical-note">
                  <em>{country.historicalNote}</em>
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      {/* Transfer/Upgrade Instructions */}
      {gameState.selectedTransfer && (
        <div className="transfer-instruction">
          <p>
            Select destination country for <strong>{gameState.selectedTransfer.industry}</strong> 
            {' '}from <strong>{gameState.countries[gameState.selectedTransfer.from].name}</strong>
          </p>
          <p className="hint">Countries need lower wages and adequate infrastructure</p>
        </div>
      )}
      
      {gameState.selectedUpgrade && (
        <div className="upgrade-panel">
          <h3>Upgrade {gameState.selectedUpgrade.fromIndustry}</h3>
          <p>Select target industry for {gameState.countries[gameState.selectedUpgrade.country].name}:</p>
          <div className="upgrade-options">
            {industriesDatabase && Object.entries(industriesDatabase)
              .filter(([name, ind]) => {
                const hasIndustry = gameState.selectedUpgrade && 
                  gameState.countries[gameState.selectedUpgrade.country]?.industries?.some(i => i.name === name);
                return !hasIndustry && ind.type !== 'labor-intensive'; // Can only upgrade to higher types
              })
              .map(([name, industry]) => (
                <button
                  key={name}
                  className="upgrade-option"
                  onClick={() => performUpgrade(name)}
                >
                  {getIndustryIcon(industry.type)} {name}
                  <span className="tech-level">Tech: {industry.technologyLevel}</span>
                </button>
              ))}
          </div>
        </div>
      )}
      
      {/* Random Events */}
      {gameState.currentEvent && (
        <div className="event-popup">
          <h3>{gameState.currentEvent.title}</h3>
          <p>{gameState.currentEvent.description}</p>
          {gameState.currentEvent.choices ? (
            <div className="event-choices">
              {gameState.currentEvent.choices.map((choice, idx) => (
                <button
                  key={idx}
                  className="event-choice"
                  onClick={() => handleEventChoice(idx)}
                >
                  {choice.label}
                  {choice.cost && <span className="choice-cost"> (Cost: ${choice.cost})</span>}
                </button>
              ))}
            </div>
          ) : (
            <button onClick={() => setGameState(prev => ({ ...prev, currentEvent: undefined }))}>
              OK
            </button>
          )}
        </div>
      )}
      
      {/* Feedback Messages */}
      {showFeedback && (
        <div className={`feedback-popup ${feedbackMessage.startsWith('✅') ? 'success' : 
          feedbackMessage.startsWith('❌') ? 'error' : 
          feedbackMessage.startsWith('⚠️') ? 'warning' : 'info'}`}>
          <p>{feedbackMessage}</p>
        </div>
      )}
      
      {/* Info Panels */}
      <div className="info-panels">
        {/* Transfer History */}
        <div className="panel transfer-history">
          <h3>Development History</h3>
          {gameState.transferHistory.length === 0 ? (
            <p className="empty-state">No transfers or upgrades yet</p>
          ) : (
            <ul>
              {gameState.transferHistory.slice(-10).reverse().map((transfer, idx) => (
                <li key={idx} className={transfer.type}>
                  <span className="year">{transfer.year}:</span>
                  {transfer.type === 'transfer' ? (
                    <span>{transfer.from} → {transfer.to} ({transfer.industry})</span>
                  ) : (
                    <span>{transfer.from} upgraded {transfer.industry}</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {/* Industry Details */}
        <div className="panel industry-details">
          <h3>Industry Requirements</h3>
          <button 
            className="toggle-btn"
            onClick={() => setShowIndustryDetails(!showIndustryDetails)}
          >
            {showIndustryDetails ? 'Hide' : 'Show'} Details
          </button>
          
          {showIndustryDetails && industriesDatabase && (
            <div className="industry-list">
              {Object.entries(industriesDatabase)
                .filter(([_, ind]) => ind && ind.transferable)
                .map(([name, industry]) => (
                  <div key={name} className="industry-detail">
                    <h4>{getIndustryIcon(industry.type)} {name}</h4>
                    <div className="industry-specs">
                      <span>Tech: {industry.technologyLevel}</span>
                      <span>Pollution: {industry.pollutionLevel}</span>
                      <span>Productivity: {industry.productivityLevel}</span>
                    </div>
                    {industry.upgradeRequirements && (
                      <div className="requirements">
                        {industry.upgradeRequirements.map((req, idx) => (
                          <span key={idx} className="requirement">
                            {req.description} ({req.minimum}+)
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
            </div>
          )}
        </div>
        
        {/* NSE Principles */}
        <div className="panel nse-principles">
          <h3>New Structural Economics Principles</h3>
          <div className="principles-list">
            <div className="principle">
              <h4>1. Endowment Structure Evolution</h4>
              <p>Countries develop by accumulating capital and upgrading from labor to capital to technology-intensive industries</p>
            </div>
            <div className="principle">
              <h4>2. Comparative Advantage Following</h4>
              <p>Success comes from developing industries suited to current factor endowments, not leapfrogging</p>
            </div>
            <div className="principle">
              <h4>3. Government as Facilitator</h4>
              <p>State helps overcome coordination failures and provides infrastructure, but markets pick winners</p>
            </div>
            <div className="principle">
              <h4>4. Leading Dragon Effect</h4>
              <p>China's size means it releases 85 million manufacturing jobs vs Japan's 9.7 million in 1960s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlyingGeeseGame;