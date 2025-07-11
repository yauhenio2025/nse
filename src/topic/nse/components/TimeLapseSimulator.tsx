import React, { useState, useEffect, useRef } from 'react';
import { 
  timeLapseData, 
  insights, 
  getCountryDevelopmentStage,
  getPositionFromGDP 
} from '../../../data/nse/timeLapseData';
import './TimeLapseSimulator.css';

const TimeLapseSimulator: React.FC = () => {
  const [currentYear, setCurrentYear] = useState(1960);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedCountries, setSelectedCountries] = useState<string[]>(['korea', 'china', 'bangladesh']);
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
    japan: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
    korea: 'linear-gradient(135deg, #f093fb, #f5576c)',
    taiwan: 'linear-gradient(135deg, #667eea, #764ba2)',
    china: 'linear-gradient(135deg, #fa709a, #fee140)',
    india: 'linear-gradient(135deg, #f77062, #fe5196)',
    bangladesh: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    vietnam: 'linear-gradient(135deg, #43e97b, #38f9d7)'
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
      }, 2000);
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

  return (
    <div className="time-lapse-simulator">
      <h2 className="module-title">⏱️ Watch Development Trajectories Unfold (1960-2020)</h2>
      
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
      </div>

      <div className="timeline-container">
        <div className="development-track">
          {selectedCountries.map((country, index) => {
            const data = currentData[country];
            if (!data) return null;
            
            return (
              <div 
                key={country}
                className={`country-indicator ${country}`}
                style={{ 
                  left: `${getPositionFromGDP(data.gdp)}%`,
                  top: `${(index * 50) + 20}px`,
                  background: countryColors[country]
                }}
              >
                <span className="flag">{countryFlags[country]}</span>
                <div className="country-info">
                  <strong>{country.charAt(0).toUpperCase() + country.slice(1)} {currentYear}</strong><br />
                  {data.industry}<br />
                  ${data.gdp.toLocaleString()}/capita<br />
                  {data.majorPolicy || data.challenge}
                </div>
              </div>
            );
          })}
        </div>
        
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
              className={`year-marker ${year === currentYear ? 'active' : ''}`}
              onClick={() => handleYearChange(year)}
              style={{ cursor: 'pointer' }}
            >
              {year}
            </span>
          ))}
        </div>
      </div>
      
      <div className="controls">
        <button className="control-btn" onClick={handlePlayPause}>
          {isPlaying ? '⏸️ Pause' : '▶️ Play'}
        </button>
        <button className="control-btn" onClick={handleReset}>
          🔄 Reset
        </button>
        <div className="year-display">
          Year: <span>{currentYear}</span>
        </div>
      </div>
      
      <div className="insights-panel">
        <h3>📅 {currentYear} - Key Developments</h3>
        <p className="summary">{currentInsight.summary}</p>
        
        <div className="key-pattern">
          <strong>🔍 Pattern Recognition:</strong>
          <p>{currentInsight.keyPattern}</p>
        </div>
        
        <div className="nse-lesson">
          <strong>🎓 NSE Lesson:</strong>
          <p>{currentInsight.lesson}</p>
        </div>
        
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
                    <p><strong>Stage:</strong> {getCountryDevelopmentStage(data.gdp)}</p>
                    <p><strong>Industry:</strong> {data.industry}</p>
                    <p><strong>GDP/capita:</strong> ${data.gdp.toLocaleString()}</p>
                    <p><strong>Exports:</strong> {data.exports}</p>
                    {data.majorPolicy && <p><strong>Policy:</strong> {data.majorPolicy}</p>}
                    {data.challenge && <p><strong>Challenge:</strong> {data.challenge}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="flying-geese-observation">
          <h4>🦢 Flying Geese Pattern Observation:</h4>
          {currentYear >= 1970 && (
            <p>
              Notice how industries move from higher-income to lower-income countries as wages rise. 
              {currentYear >= 1980 && " Japan's textiles moved to Korea/Taiwan in the 1970s."}
              {currentYear >= 1990 && " Korea's textiles are now moving to China."}
              {currentYear >= 2000 && " China's simple manufacturing is beginning to move to Vietnam and Bangladesh."}
              {currentYear >= 2010 && " The pattern continues with each country climbing the development ladder."}
            </p>
          )}
        </div>
        
        <div className="comparative-advantage-tracker">
          <h4>📊 Comparative Advantage Shifts:</h4>
          <ul>
            {selectedCountries.map(country => {
              const data = currentData[country];
              return (
                <li key={country}>
                  <strong>{country.charAt(0).toUpperCase() + country.slice(1)}:</strong> 
                  {' '}Comparative advantage in {data.industry.toLowerCase()} 
                  (matches its ${data.gdp}/capita income level)
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      
      <div className="nse-framework-explanation">
        <h3>📚 Understanding Through NSE Framework</h3>
        <div className="framework-grid">
          <div className="framework-concept">
            <h4>1. Endowment-Determined Structure</h4>
            <p>Each country's industrial structure reflects its factor endowments at that time. 
            Countries with low wages excel at labor-intensive industries, while capital-rich countries 
            move to capital-intensive sectors.</p>
          </div>
          <div className="framework-concept">
            <h4>2. Dynamic Structural Change</h4>
            <p>Success in industries matching comparative advantage leads to capital accumulation, 
            wage increases, and natural progression to more sophisticated industries. This is 
            endogenous structural change.</p>
          </div>
          <div className="framework-concept">
            <h4>3. Flying Geese Pattern</h4>
            <p>As lead countries upgrade, they transfer mature industries to followers. This creates 
            win-win situations where leaders move up the value chain while followers industrialize.</p>
          </div>
          <div className="framework-concept">
            <h4>4. Government Facilitation</h4>
            <p>Successful countries had governments that identified and facilitated industries matching 
            their comparative advantage, rather than protecting non-viable industries.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLapseSimulator;