import React, { useState } from 'react';
import { 
  countries, 
  getIndustriesForCountry, 
  evaluateIndustryChoice,
  type CountryStartingCondition,
  type IndustryChoice 
} from '../../../data/nse/causalChainData';

import './CausalChainConstructor.css';

const CausalChainConstructor: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [evaluation, setEvaluation] = useState<{
    viable: boolean;
    score: number;
    feedback: string[];
  } | null>(null);

  const getCountry = (): CountryStartingCondition | undefined => {
    return countries[selectedCountry];
  };

  const getIndustry = (): IndustryChoice | undefined => {
    const industries = getIndustriesForCountry(selectedCountry);
    return industries.find(i => i.id === selectedIndustry);
  };

  const handleCountrySelect = (countryId: string) => {
    setSelectedCountry(countryId);
    setSelectedIndustry('');
    setShowResult(false);
    setEvaluation(null);
  };

  const handleIndustrySelect = (industryId: string) => {
    if (!selectedCountry) return;
    
    setSelectedIndustry(industryId);
    const evaluationResult = evaluateIndustryChoice(selectedCountry, industryId);
    setEvaluation(evaluationResult);
    setShowResult(true);
  };

  const selectedCountryData = getCountry();
  const selectedIndustryData = getIndustry();
  const availableIndustries = selectedCountry ? getIndustriesForCountry(selectedCountry) : [];

  return (
    <div className="causal-chain-constructor">
      <h2 className="module-title">🔗 Build and Test Economic Development Paths</h2>
      
      <div className="country-selector">
        <h3>Select a Starting Country & Year:</h3>
        <div className="country-grid">
          {Object.values(countries).map(country => (
            <div 
              key={country.id}
              className={`country-option ${selectedCountry === country.id ? 'selected' : ''}`}
              onClick={() => handleCountrySelect(country.id)}
            >
              <span className="country-flag">{country.flag}</span>
              <h4>{country.name}</h4>
              <div className="country-stats">
                <p>💰 ${country.gdpPerCapita}/capita</p>
                <p>👥 {(country.laborForce.total / 1000000).toFixed(0)}M workers</p>
                <p>📚 {country.laborForce.literacy}% literacy</p>
                <p>💸 {country.capital.interestRate}% interest</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCountry && (
        <div className="chain-builder">
          <div className="chain-node start-node">
            <h3>{selectedCountryData?.name}</h3>
            <div className="node-details">
              <p>💰 GDP/capita: ${selectedCountryData?.gdpPerCapita}</p>
              <p>👥 {selectedCountryData?.laborForce.agricultural}% agricultural</p>
              <p>📚 {selectedCountryData?.laborForce.literacy}% literacy</p>
              <p>🏭 Exports: ${selectedCountryData?.exports.total}B</p>
            </div>
          </div>
          
          <div className="chain-arrow">→</div>
          
          <div className="chain-node choice-node">
            <h3>Choose Industry Strategy</h3>
            <div className="industry-choices">
              {availableIndustries.map(industry => (
                <div 
                  key={industry.id}
                  className={`industry-option ${selectedIndustry === industry.id ? 'selected' : ''}`}
                  onClick={() => handleIndustrySelect(industry.id)}
                >
                  <span className="industry-icon">{industry.icon}</span>
                  <h4>{industry.name}</h4>
                  <p className="capital-req">
                    💰 ${(industry.requirements.capitalPerWorker / 1000).toFixed(0)}k/worker
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="chain-arrow">→</div>
          
          <div className={`chain-node outcome-node ${selectedIndustry ? 'active' : ''}`}>
            <h3>Outcome</h3>
            {selectedIndustry && selectedIndustryData ? (
              <div className={selectedIndustryData.viable ? 'viable' : 'non-viable'}>
                <p>{selectedIndustryData.outcome}</p>
              </div>
            ) : (
              <p className="placeholder">?</p>
            )}
          </div>
        </div>
      )}
      
      {showResult && selectedIndustry && selectedIndustryData && evaluation && (
        <div className={`result-panel ${evaluation.viable ? 'success' : 'failure'}`}>
          <h3>📊 NSE Economic Analysis:</h3>
          
          <div className="evaluation-score">
            <div className="score-bar">
              <div 
                className="score-fill" 
                style={{ width: `${evaluation.score}%` }}
              />
            </div>
            <p className="score-text">Viability Score: {evaluation.score}%</p>
          </div>
          
          <div className="evaluation-feedback">
            {evaluation.feedback.map((item, index) => (
              <p key={index} className="feedback-item">{item}</p>
            ))}
          </div>
          
          <p className="explanation">{selectedIndustryData.explanation}</p>
          
          <div className="details-box">
            <strong>Detailed Analysis:</strong>
            <p>{selectedIndustryData.details.split('\n').map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}</p>
          </div>
          
          {selectedIndustryData.realWorldExample && (
            <div className="example-box">
              <strong>🌍 Real-World Evidence:</strong>
              <p>{selectedIndustryData.realWorldExample}</p>
            </div>
          )}
          
          <div className="lesson-box">
            <strong>🎓 Core NSE Lesson:</strong>
            <p>{selectedIndustryData.lesson}</p>
          </div>
          
          <div className="formula-box">
            <strong>Economic Formula:</strong>
            <p>{selectedIndustryData.formula}</p>
          </div>
          
          <div className="nse-principles">
            <h4>📚 NSE Teaching Points:</h4>
            <ul>
              <li><strong>Endowment Structure:</strong> The country's factor endowments (labor, capital, resources) determine its optimal industrial structure at each development stage.</li>
              <li><strong>Viability:</strong> Industries that match endowments are self-sustaining; those that don't require permanent subsidies.</li>
              <li><strong>Dynamic Change:</strong> Success in appropriate industries leads to capital accumulation and endowment upgrading, enabling progression to more sophisticated industries.</li>
              <li><strong>Government Role:</strong> Facilitate industries with comparative advantage, not protect those without it.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CausalChainConstructor;