// src/topic/gsh/DecolonizationDynamics.tsx

import React, { useState, useEffect } from 'react';
import styles from './DecolonizationDynamics.module.css';
import { 
  decolonizationPresets,
  milestones,
  generateOutcomeNarrative,
  generateKeyEvents,
  calculateOutcome
} from '../../data/gsh/decolonizationDynamics';
import { DecolonizationFactors } from '../../types/globalSouthHistory';

interface Props {
  showPopup: (content: string) => void;
}

const DecolonizationDynamics: React.FC<Props> = ({ showPopup }) => {
  const [factors, setFactors] = useState<DecolonizationFactors>({
    intPressure: 50,
    armedResistance: 30,
    civilDisobedience: 70,
    econPressure: 40,
    eliteNegotiation: 60
  });

  const [outcome, setOutcome] = useState(calculateOutcome(factors));
  const [narrative, setNarrative] = useState('');
  const [keyEvents, setKeyEvents] = useState<string[]>([]);

  useEffect(() => {
    const newOutcome = calculateOutcome(factors);
    setOutcome(newOutcome);
    
    const avgIntensity = Object.values(factors).reduce((a, b) => a + b, 0) / 5;
    setNarrative(generateOutcomeNarrative(avgIntensity, factors));
    setKeyEvents(generateKeyEvents(factors));
  }, [factors]);

  const handleFactorChange = (factorName: keyof DecolonizationFactors, value: number) => {
    setFactors(prev => ({
      ...prev,
      [factorName]: value
    }));
  };

  const loadPreset = (presetId: string) => {
    const preset = decolonizationPresets.find(p => p.id === presetId);
    if (preset) {
      setFactors(preset.factors);
    }
  };

  const getMilestoneStyle = (index: number) => {
    const progress = outcome.speed;
    const basePosition = 10 + (index * 20);
    const adjustment = (progress - 50) * 0.1;
    const position = Math.max(5, Math.min(95, basePosition + adjustment));
    
    let backgroundColor = 'rgba(46, 213, 115, 0.8)';
    let borderColor = '#2ed573';
    
    if (factors.armedResistance > 70) {
      backgroundColor = 'rgba(255, 107, 107, 0.8)';
      borderColor = '#ff6b6b';
    } else if (factors.civilDisobedience > 70) {
      backgroundColor = 'rgba(46, 213, 115, 0.8)';
      borderColor = '#2ed573';
    }
    
    return {
      left: `${position}%`,
      background: backgroundColor,
      borderColor: borderColor
    };
  };

  return (
    <div className={styles.decolonizationDynamics}>
      <h2 className={styles.sectionTitle}>🎯 Simulate Paths to Independence</h2>
      
      <div className={styles.dynamicsGrid}>
        <div className={styles.factorPanel}>
          <h3>Adjust Factors:</h3>
          
          <div className={styles.factorSlider}>
            <label>International Pressure</label>
            <div className={styles.sliderContainer}>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={factors.intPressure}
                onChange={(e) => handleFactorChange('intPressure', parseInt(e.target.value))}
              />
              <span className={styles.factorValue}>{factors.intPressure}%</span>
            </div>
          </div>
          
          <div className={styles.factorSlider}>
            <label>Armed Resistance</label>
            <div className={styles.sliderContainer}>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={factors.armedResistance}
                onChange={(e) => handleFactorChange('armedResistance', parseInt(e.target.value))}
              />
              <span className={styles.factorValue}>{factors.armedResistance}%</span>
            </div>
          </div>
          
          <div className={styles.factorSlider}>
            <label>Civil Disobedience</label>
            <div className={styles.sliderContainer}>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={factors.civilDisobedience}
                onChange={(e) => handleFactorChange('civilDisobedience', parseInt(e.target.value))}
              />
              <span className={styles.factorValue}>{factors.civilDisobedience}%</span>
            </div>
          </div>
          
          <div className={styles.factorSlider}>
            <label>Economic Pressure</label>
            <div className={styles.sliderContainer}>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={factors.econPressure}
                onChange={(e) => handleFactorChange('econPressure', parseInt(e.target.value))}
              />
              <span className={styles.factorValue}>{factors.econPressure}%</span>
            </div>
          </div>
          
          <div className={styles.factorSlider}>
            <label>Elite Negotiations</label>
            <div className={styles.sliderContainer}>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={factors.eliteNegotiation}
                onChange={(e) => handleFactorChange('eliteNegotiation', parseInt(e.target.value))}
              />
              <span className={styles.factorValue}>{factors.eliteNegotiation}%</span>
            </div>
          </div>
          
          <div className={styles.presetButtons}>
            {decolonizationPresets.map(preset => (
              <button 
                key={preset.id}
                className={styles.controlBtn} 
                onClick={() => loadPreset(preset.id)}
              >
                {preset.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className={styles.dynamicsVisualization}>
          <h3>Independence Journey</h3>
          
          <div className={styles.timelinePath}>
            <div 
              className={styles.timelineProgress}
              style={{ width: `${Math.min(outcome.speed, 90)}%` }}
            />
          </div>
          
          {milestones.map((milestone, index) => (
            <div 
              key={milestone.id}
              className={styles.milestoneNode}
              style={getMilestoneStyle(index)}
              title={milestone.label}
            >
              {milestone.icon}
              <span className={styles.milestoneLabel}>{milestone.label}</span>
            </div>
          ))}
          
          <div className={styles.outcomeDisplay}>
            <h4>Projected Outcome:</h4>
            <p className={styles.outcomeText}>{narrative}</p>
            
            <div className={styles.outcomeMetrics}>
              <div className={styles.metric}>
                <strong>Timeline:</strong>
                <span className={styles.metricValue}>{outcome.timeline}</span>
              </div>
              <div className={styles.metric}>
                <strong>Violence Level:</strong>
                <span className={styles.metricValue}>{outcome.violenceLevel}</span>
              </div>
              <div className={styles.metric}>
                <strong>Stability:</strong>
                <span className={styles.metricValue}>{outcome.stabilityLevel}</span>
              </div>
            </div>
            
            <div className={styles.keyEvents}>
              <strong>Key Events:</strong>
              <ul>
                {keyEvents.map((event, index) => (
                  <li key={index}>{event}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecolonizationDynamics;