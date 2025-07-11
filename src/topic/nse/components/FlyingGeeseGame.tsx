import React, { useState } from 'react';
import { 
  flyingGeeseData,
  canTransferIndustry,
  calculateTransferImpact,
  type Country
} from '../../../data/nse/flyingGeeseData';

import './FlyingGeeseGame.css';

interface GameState {
  year: number;
  transfers: number;
  score: number;
  countries: Record<string, Country>;
  transferHistory: Array<{
    from: string;
    to: string;
    industry: string;
    year: number;
  }>;
}

const FlyingGeeseGame: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    year: 1960,
    transfers: 0,
    score: 0,
    countries: flyingGeeseData.countries[1960],
    transferHistory: []
  });
  
  const [selectedTransfer, setSelectedTransfer] = useState<{
    from: string;
    industry: string;
  } | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [selectedYear, setSelectedYear] = useState(1960);
  const [showHistoricalComparison, setShowHistoricalComparison] = useState(false);

  const availableYears = Object.keys(flyingGeeseData.countries).map(Number).sort();

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
    setGameState({
      ...gameState,
      year,
      countries: flyingGeeseData.countries[year]
    });
    setSelectedTransfer(null);
  };

  const handleTransferClick = (fromCountry: string, industry: string) => {
    if (selectedTransfer?.from === fromCountry && selectedTransfer?.industry === industry) {
      setSelectedTransfer(null);
      return;
    }
    setSelectedTransfer({ from: fromCountry, industry });
  };

  const handleCountryClick = (toCountryId: string) => {
    if (!selectedTransfer) return;
    
    const fromCountry = gameState.countries[selectedTransfer.from];
    const toCountry = gameState.countries[toCountryId];
    
    if (!fromCountry || !toCountry) return;
    
    const transferCheck = canTransferIndustry(
      fromCountry,
      toCountry,
      selectedTransfer.industry
    );
    
    if (!transferCheck.canTransfer) {
      setFeedbackMessage(`[X] ${transferCheck.reason}`);
      setShowFeedback(true);
      setTimeout(() => setShowFeedback(false), 3000);
      return;
    }
    
    // Calculate impact
    const impact = calculateTransferImpact(
      fromCountry,
      toCountry,
      selectedTransfer.industry
    );
    
    // Update game state
    const newState = { ...gameState };
    newState.countries[selectedTransfer.from] = impact.fromCountry;
    newState.countries[toCountryId] = impact.toCountry;
    newState.transfers++;
    newState.score += 100;
    newState.transferHistory.push({
      from: selectedTransfer.from,
      to: toCountryId,
      industry: selectedTransfer.industry,
      year: gameState.year
    });
    
    setGameState(newState);
    setFeedbackMessage(`[SUCCESS] ${impact.narrative}`);
    setShowFeedback(true);
    setSelectedTransfer(null);
    setTimeout(() => setShowFeedback(false), 5000);
  };

  const getHistoricalContext = () => {
    return flyingGeeseData.historicalTransfers.filter(
      t => Math.abs(t.year - gameState.year) <= 10
    );
  };

  const getStageInfo = (country: Country) => {
    return flyingGeeseData.stageLessons[country.stage];
  };

  const countryFlags: Record<string, string> = {
    japan: 'JP',
    korea: 'KR',
    taiwan: 'TW',
    china: 'CN',
    india: 'IN',
    bangladesh: 'BD',
    vietnam: 'VN',
    singapore: 'SG',
    malaysia: 'MY'
  };

  const countryColors: Record<string, string> = {
    japan: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
    korea: 'linear-gradient(135deg, #f093fb, #f5576c)',
    taiwan: 'linear-gradient(135deg, #667eea, #764ba2)',
    china: 'linear-gradient(135deg, #fa709a, #fee140)',
    india: 'linear-gradient(135deg, #f77062, #fe5196)',
    bangladesh: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    vietnam: 'linear-gradient(135deg, #43e97b, #38f9d7)',
    singapore: 'linear-gradient(135deg, #667eea, #00d2ff)',
    malaysia: 'linear-gradient(135deg, #fccb90, #d57eeb)'
  };

  return (
    <div className="flying-geese-game">
      <h2 className="module-title">Master the Flying Geese Pattern</h2>
      
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
      
      <div className="pattern-visualizer">
        <div className="industry-flow" style={{ top: '20px' }}></div>
        <div className="industry-flow" style={{ top: '80px', animationDelay: '0.5s' }}></div>
        <div className="industry-flow" style={{ top: '140px', animationDelay: '1s' }}></div>
      </div>
      
      <div className="game-stats">
        <div className="stat-card">
          <h4>Transfers Made</h4>
          <div className="stat-value">{gameState.transfers}</div>
        </div>
        <div className="stat-card">
          <h4>Current Year</h4>
          <div className="stat-value">{gameState.year}s</div>
        </div>
        <div className="stat-card">
          <h4>Active Countries</h4>
          <div className="stat-value">{Object.keys(gameState.countries).length}</div>
        </div>
        <div className="stat-card">
          <h4>Development Score</h4>
          <div className="stat-value">{gameState.score}</div>
        </div>
      </div>
      
      <div className="countries-grid">
        {Object.values(gameState.countries).map(country => (
          <div 
            key={country.id} 
            className={`country-card ${country.stage} ${selectedTransfer?.from === country.id ? 'selected' : ''}`}
            onClick={() => selectedTransfer && handleCountryClick(country.id)}
          >
            <div className="country-header">
              <span className="country-flag">[{countryFlags[country.id] || country.flag}]</span>
              <span className="country-gdp">${country.gdp}/capita</span>
            </div>
            <h3>{country.name}</h3>
            
            <div className="stage-indicator">
              Stage: <strong>{country.stage}</strong>
            </div>
            
            <div className="industries-list">
              <h4>Industries:</h4>
              {country.industries.map((industry, index) => {
                const rules = flyingGeeseData.transferRules[industry];
                const canTransfer = rules && country.canTransferTo && 
                  country.industries.includes(industry);
                
                return (
                  <span 
                    key={index}
                    className={`industry-chip ${canTransfer ? 'transferable' : ''} ${
                      selectedTransfer?.from === country.id && 
                      selectedTransfer?.industry === industry ? 'selected' : ''
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (canTransfer) handleTransferClick(country.id, industry);
                    }}
                  >
                    {industry}
                  </span>
                );
              })}
            </div>
            
            {country.historicalNote && (
              <div className="historical-note">
                <em>{country.historicalNote}</em>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {selectedTransfer && (
        <div className="transfer-instruction">
          <p>Click on a country to transfer <strong>{selectedTransfer.industry}</strong> from <strong>{gameState.countries[selectedTransfer.from].name}</strong></p>
        </div>
      )}
      
      {showFeedback && (
        <div className="feedback-popup">
          <p>{feedbackMessage}</p>
        </div>
      )}
      
      <div className="game-info-panels">
        <div className="historical-context">
          <h3>Historical Context ({gameState.year}s)</h3>
          <div className="historical-transfers">
            {getHistoricalContext().map((transfer, index) => (
              <div key={index} className="historical-transfer">
                <strong>{transfer.year}:</strong> {transfer.from} to {transfer.to} ({transfer.industry})
                <p className="impact">{transfer.impact}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="transfer-history">
          <h3>Your Transfer History</h3>
          {gameState.transferHistory.length === 0 ? (
            <p className="empty-history">No transfers yet. Click on green industries to start!</p>
          ) : (
            <ul>
              {gameState.transferHistory.map((transfer, index) => (
                <li key={index}>
                  {transfer.year}: {transfer.from} to {transfer.to} ({transfer.industry})
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <div className="stage-lessons">
          <h3>Development Stage Lessons</h3>
          <button 
            onClick={() => setShowHistoricalComparison(!showHistoricalComparison)}
            className="toggle-btn"
          >
            {showHistoricalComparison ? 'Hide' : 'Show'} Stage Details
          </button>
          
          {showHistoricalComparison && (
            <div className="stage-details">
              {Object.entries(flyingGeeseData.stageLessons).map(([stage, lesson]) => (
                <div key={stage} className="stage-lesson">
                  <h4>{stage.charAt(0).toUpperCase() + stage.slice(1).replace('-', ' ')}</h4>
                  <p><strong>Challenges:</strong> {lesson.challenges.join(', ')}</p>
                  <p><strong>Opportunities:</strong> {lesson.opportunities.join(', ')}</p>
                  <p><strong>Strategy:</strong> {lesson.strategy}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="nse-principles-panel">
        <h3>NSE Principles in the Flying Geese Pattern</h3>
        <div className="principles-grid">
          <div className="principle">
            <h4>1. Sequential Development</h4>
            <p>Countries follow similar paths but at different times. Today's garment exporter is tomorrow's electronics assembler.</p>
          </div>
          <div className="principle">
            <h4>2. Win-Win Transfers</h4>
            <p>When industries transfer, both countries benefit: the sender upgrades to higher-value activities, the receiver gains proven industries.</p>
          </div>
          <div className="principle">
            <h4>3. Endowment Evolution</h4>
            <p>Success in labor-intensive industries leads to capital accumulation, enabling progression to more sophisticated sectors.</p>
          </div>
          <div className="principle">
            <h4>4. Windows of Opportunity</h4>
            <p>Countries must be ready when opportunities arise. Having the right infrastructure and policies matters.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlyingGeeseGame;