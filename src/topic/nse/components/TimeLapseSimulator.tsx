import React, { useState, useEffect, useRef } from 'react';
import { 
  timeLapseData, 
  insights, 
  getCountryDevelopmentStage,
  getPositionFromGDP,
  getPositionFromComplexity,
  formatWage
} from '../../../data/nse/timeLapseData';
import './TimeLapseSimulator.css';

const TimeLapseSimulator: React.FC = () => {
  const [currentYear, setCurrentYear] = useState(1960);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedCountries, setSelectedCountries] = useState<string[]>(['japan', 'korea', 'china', 'vietnam', 'bangladesh']);
  const [showTransfers, setShowTransfers] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const allCountries = ['japan', 'korea', 'taiwan', 'china', 'india', 'bangladesh', 'vietnam'];
  const countryFlags: Record<string, string> = {
    japan: '🇯🇵',
    korea: '🇰🇷',
    taiwan: '🇹🇼',
    china: '🇨🇳',
    india: '🇮🇳',
    bangladesh: '🇧🇩',
    vietnam: '🇻🇳'
  };

  const countryColors: Record<string, string> = {
    japan: '#ff6b6b',
    korea: '#f093fb',
    taiwan: '#667eea',
    china: '#fa709a',
    india: '#f77062',
    bangladesh: '#4facfe',
    vietnam: '#43e97b'
  };

  useEffect(() => {
    if (isPlaying && currentYear < 2020) {
      intervalRef.current = setInterval(() => {
        setCurrentYear(prev => {
          if (prev >= 2020) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 10;
        });
      }, 3000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, currentYear]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentYear(1960);
  };

  const handleYearChange = (year: number) => {
    setCurrentYear(year);
    setIsPlaying(false);
  };

  const toggleCountry = (country: string) => {
    if (selectedCountries.includes(country)) {
      setSelectedCountries(selectedCountries.filter(c => c !== country));
    } else {
      setSelectedCountries([...selectedCountries, country]);
    }
  };

  const currentData = timeLapseData[currentYear];
  const currentInsight = insights[currentYear];
  const transfers = currentData.transfers || [];

  // Industrial complexity levels for Y-axis
  const complexityLevels = [
    { level: 10, label: 'Innovation & R&D' },
    { level: 9, label: 'High-Tech Services' },
    { level: 8, label: 'Semiconductors' },
    { level: 7, label: 'Electronics Design' },
    { level: 6, label: 'Automobiles' },
    { level: 5, label: 'Electronics Assembly' },
    { level: 4, label: 'Heavy Industry' },
    { level: 3, label: 'Light Manufacturing' },
    { level: 2, label: 'Textiles & Garments' },
    { level: 1, label: 'Agriculture' }
  ];

  return (
    <div className="time-lapse-simulator">
      <h2 className="module-title">⏱️ East Asian Development Trajectories (1960-2020)</h2>
      
      <div className="country-selector-panel">
        <h4>Select Countries to Track:</h4>
        <div className="country-toggles">
          {allCountries.map(country => (
            <label key={country} className="country-toggle">
              <input
                type="checkbox"
                checked={selectedCountries.includes(country)}
                onChange={() => toggleCountry(country)}
              />
              <span>{countryFlags[country]} {country.charAt(0).toUpperCase() + country.slice(1)}</span>
            </label>
          ))}
        </div>
        <label className="transfer-toggle">
          <input
            type="checkbox"
            checked={showTransfers}
            onChange={(e) => setShowTransfers(e.target.checked)}
          />
          <span>Show Industrial Transfers</span>
        </label>
      </div>

      <div className="timeline-container visualization-panel">
        {/* Y-axis labels */}
        <div className="complexity-axis">
          {complexityLevels.map((level) => (
            <div 
              key={level.level}
              className="axis-label"
              style={{ bottom: `${getPositionFromComplexity(level.level)}%` }}
            >
              {level.label}
            </div>
          ))}
        </div>

        {/* Grid lines */}
        <div className="grid-container">
          {complexityLevels.map((level) => (
            <div 
              key={level.level}
              className="grid-line"
              style={{ bottom: `${getPositionFromComplexity(level.level)}%` }}
            />
          ))}
        </div>

        {/* X-axis (GDP/Wages) */}
        <div className="gdp-axis">
          <span>$100</span>
          <span>$1,000</span>
          <span>$10,000</span>
          <span>$40,000</span>
          <span className="axis-label-gdp">GDP/capita</span>
        </div>

        {/* Main visualization area */}
        <div className="visualization-area">
          {/* Industrial transfers */}
          {showTransfers && transfers.length > 0 && (
            <svg className="transfer-layer">
              <defs>
                {transfers.map((transfer, idx) => (
                  <marker
                    key={`marker-${idx}`}
                    id={`arrowhead-${idx}`}
                    markerWidth="10"
                    markerHeight="10"
                    refX="9"
                    refY="3"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 10 3, 0 6"
                      fill={countryColors[transfer.from]}
                      opacity="0.6"
                    />
                  </marker>
                ))}
              </defs>
              {transfers.map((transfer, idx) => {
                const fromCountry = currentData[transfer.from];
                const toCountry = currentData[transfer.to];
                if (!fromCountry || !toCountry) return null;

                const fromX = getPositionFromGDP(fromCountry.gdp);
                const fromY = getPositionFromComplexity(fromCountry.industrialComplexity);
                const toX = getPositionFromGDP(toCountry.gdp);
                const toY = getPositionFromComplexity(toCountry.industrialComplexity);

                return (
                  <g key={`transfer-${idx}`}>
                    <path
                      d={`M ${fromX}% ${100-fromY}% Q ${(fromX+toX)/2}% ${100-(fromY+toY)/2-20}% ${toX}% ${100-toY}%`}
                      stroke={countryColors[transfer.from]}
                      strokeWidth="2"
                      fill="none"
                      opacity="0.4"
                      markerEnd={`url(#arrowhead-${idx})`}
                      strokeDasharray="5,5"
                      className="transfer-arrow"
                    />
                    <text
                      x={`${(fromX+toX)/2}%`}
                      y={`${100-(fromY+toY)/2-10}%`}
                      textAnchor="middle"
                      className="transfer-label"
                    >
                      {transfer.industry} ({transfer.jobs}M jobs)
                    </text>
                  </g>
                );
              })}
            </svg>
          )}

          {/* Country indicators */}
          {selectedCountries.map((country) => {
            const data = currentData[country];
            if (!data) return null;
            
            const xPos = getPositionFromGDP(data.gdp);
            const yPos = getPositionFromComplexity(data.industrialComplexity);
            
            return (
              <div 
                key={country}
                className="country-position"
                style={{ 
                  left: `${xPos}%`,
                  bottom: `${yPos}%`,
                }}
              >
                <div 
                  className="country-indicator"
                  style={{ 
                    background: `linear-gradient(135deg, ${countryColors[country]}, ${countryColors[country]}dd)`,
                    boxShadow: `0 0 30px ${countryColors[country]}66`
                  }}
                >
                  <span className="flag">{countryFlags[country]}</span>
                  
                  {/* Wage indicator */}
                  <div className="wage-indicator">
                    {formatWage(data.wage)}/mo
                  </div>
                  
                  {/* Jobs indicator for major manufacturers */}
                  {data.manufacturingJobs && data.manufacturingJobs > 10 && (
                    <div className="jobs-indicator">
                      {data.manufacturingJobs}M jobs
                    </div>
                  )}
                  
                  {/* Hover info */}
                  <div className="country-info detailed">
                    <strong>{country.charAt(0).toUpperCase() + country.slice(1)} ({currentYear})</strong>
                    <div className="info-content">
                      <p><span>Industry:</span> {data.industry}</p>
                      <p><span>GDP/capita:</span> ${data.gdp.toLocaleString()}</p>
                      <p><span>Wage:</span> {formatWage(data.wage)}/month</p>
                      <p><span>Stage:</span> {getCountryDevelopmentStage(data.gdp, data.wage)}</p>
                      {data.majorPolicy && <p><span>Policy:</span> {data.majorPolicy}</p>}
                      {data.challenge && <p><span>Challenge:</span> {data.challenge}</p>}
                      {data.receivingFrom && (
                        <p className="transfer-info receiving">↓ Receiving from: {data.receivingFrom.join(', ')}</p>
                      )}
                      {data.transferringTo && (
                        <p className="transfer-info sending">↑ Transferring to: {data.transferringTo.join(', ')}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Flying Geese Formation Indicator */}
          {currentInsight.flyingGeeseFormation && currentInsight.flyingGeeseFormation.length > 1 && (
            <div className="flying-geese-indicator">
              <div className="formation-label">Flying Geese Formation:</div>
              <div className="formation-countries">
                {currentInsight.flyingGeeseFormation.map((country, idx) => (
                  <React.Fragment key={country}>
                    {idx > 0 && <span className="arrow">→</span>}
                    <span className="country-flag">{countryFlags[country] || '🌍'}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Timeline and controls */}
      <div className="timeline-controls">
        <div className="timeline-track">
          <div 
            className="timeline-progress"
            style={{ width: `${((currentYear - 1960) / 60) * 100}%` }}
          />
        </div>
        
        <div className="year-markers">
          {[1960, 1970, 1980, 1990, 2000, 2010, 2020].map(year => (
            <span
              key={year} 
              onClick={() => handleYearChange(year)}
              className={`year-marker ${year === currentYear ? 'active' : ''}`}
            >
              {year}
            </span>
          ))}
        </div>
        
        <div className="controls">
          <button 
            onClick={handlePlayPause}
            className="control-btn"
          >
            {isPlaying ? '⏸️ Pause' : '▶️ Play'}
          </button>
          <button 
            onClick={handleReset}
            className="control-btn"
          >
            🔄 Reset
          </button>
          <div className="year-display">
            Year: <span>{currentYear}</span>
          </div>
        </div>
      </div>
      
      {/* Insights panel */}
      <div className="insights-panel">
        <h3>📊 {currentYear} - Key Developments</h3>
        
        <div className="insights-grid">
          <div className="key-pattern">
            <strong>🔍 Pattern Recognition</strong>
            <p>{currentInsight.keyPattern}</p>
          </div>
          
          <div className="nse-lesson">
            <strong>🎓 NSE Framework Lesson</strong>
            <p>{currentInsight.lesson}</p>
          </div>
        </div>
        
        <p className="summary">{currentInsight.summary}</p>
        
        {/* Key metrics */}
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-value">
              {selectedCountries.filter(c => currentData[c]?.wage > 500).length}
            </div>
            <div className="metric-label">High-wage countries</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">
              {transfers.reduce((sum, t) => sum + t.jobs, 0)}M
            </div>
            <div className="metric-label">Jobs transferring</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">
              {selectedCountries.filter(c => currentData[c]?.industrialComplexity >= 7).length}
            </div>
            <div className="metric-label">High-tech countries</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">
              ${Math.max(...selectedCountries.map(c => currentData[c]?.wage || 0))}
            </div>
            <div className="metric-label">Highest wage/mo</div>
          </div>
        </div>
        
        {/* Country details grid */}
        <div className="country-details">
          <h4>Country Details:</h4>
          <div className="details-grid">
            {selectedCountries.map(country => {
              const data = currentData[country];
              if (!data) return null;
              
              return (
                <div key={country} className="country-detail-card">
                  <div className="detail-header">
                    <span className="country-flag">{countryFlags[country]}</span>
                    <span className="country-name">
                      {country.charAt(0).toUpperCase() + country.slice(1)}
                    </span>
                  </div>
                  <div className="detail-content">
                    <p><strong>Industry:</strong> {data.industry}</p>
                    <p><strong>GDP/capita:</strong> ${data.gdp.toLocaleString()}</p>
                    <p><strong>Wage:</strong> {formatWage(data.wage)}/month</p>
                    <p><strong>Mfg Jobs:</strong> {data.manufacturingJobs}M</p>
                    {data.receivingFrom && (
                      <p className="transfer-info receiving">↓ Receiving from: {data.receivingFrom.join(', ')}</p>
                    )}
                    {data.transferringTo && (
                      <p className="transfer-info sending">↑ Transferring to: {data.transferringTo.join(', ')}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLapseSimulator;