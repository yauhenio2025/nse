import React, { useState } from 'react';
import { baseModes, dialecticalMotion, BaseMode } from '@/data/ma/baseAndSuperstructure';
import './BaseSuperstuctureEngine.css';

interface Props {
  onShowPopup: (content: React.ReactNode) => void;
}

export const BaseSuperstuctureEngine: React.FC<Props> = ({ onShowPopup }) => {
  const [selectedBase, setSelectedBase] = useState<string | null>(null);
  const [currentSuperstructure, setCurrentSuperstructure] = useState<BaseMode | null>(null);

  const selectBase = (baseId: string) => {
    const base = baseModes.find(b => b.id === baseId);
    if (base) {
      setSelectedBase(baseId);
      setCurrentSuperstructure(base);
    }
  };

  const showDialecticalMotion = () => {
    const content = (
      <div className="dialectical-motion-popup">
        <h2>The Dialectical Relationship</h2>
        <div className="dialectical-stages">
          <div className="stage">
            <h3>Thesis</h3>
            <p>{dialecticalMotion.thesis}</p>
          </div>
          <div className="stage">
            <h3>Antithesis</h3>
            <p>{dialecticalMotion.antithesis}</p>
          </div>
          <div className="stage">
            <h3>Synthesis</h3>
            <p>{dialecticalMotion.synthesis}</p>
          </div>
        </div>
        <div className="example">
          <strong>Example:</strong> {dialecticalMotion.example}
        </div>
      </div>
    );
    onShowPopup(content);
  };

  const addContradiction = () => {
    const content = (
      <div>
        <h2>Introducing Contradictions</h2>
        <p>When forces of production develop beyond the relations of production, contradictions emerge:</p>
        <ul>
          <li><strong>Capitalism:</strong> AI/automation vs. wage labor system</li>
          <li><strong>Feudalism:</strong> Money economy vs. personal bonds</li>
          <li><strong>State Socialism:</strong> Global markets vs. national planning</li>
        </ul>
        <p>These contradictions eventually lead to revolutionary transformation.</p>
      </div>
    );
    onShowPopup(content);
  };

  const predictTransformation = () => {
    if (!currentSuperstructure) {
      alert('Please select a base mode first!');
      return;
    }
    
    const content = (
      <div>
        <h2>Predicting Historical Transformation</h2>
        <p>Based on the current contradictions in <strong>{currentSuperstructure.title}</strong>:</p>
        <div className="transformation-prediction">
          <h3>Likely Direction:</h3>
          <p>The internal contradictions suggest movement toward a new mode of production that resolves current tensions between forces and relations of production.</p>
          
          <h3>Key Factors:</h3>
          <ul>
            <li>Development of productive forces</li>
            <li>Class struggle intensity</li>
            <li>Ideological hegemony breakdown</li>
            <li>International conditions</li>
          </ul>
        </div>
      </div>
    );
    onShowPopup(content);
  };

  return (
    <div className="base-superstructure-engine">
      <h2 className="section-title">⚙️ Base-Superstructure Dialectic</h2>
      
      <div className="dialectic-container">
        <div className="base-section">
          <h3>🏗️ Economic Base</h3>
          <p>The material foundation of society - how people produce to survive</p>
          
          <div className="base-modes">
            {baseModes.map((mode) => (
              <div
                key={mode.id}
                className={`base-mode ${selectedBase === mode.id ? 'active' : ''}`}
                onClick={() => selectBase(mode.id)}
              >
                <span className="mode-icon">{mode.icon}</span>
                <div className="mode-info">
                  <strong>{mode.title}</strong><br />
                  {mode.description}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="superstructure-section">
          <h3>🏛️ Superstructure</h3>
          <p>Legal, political, and cultural institutions that arise from the base</p>
          
          <div className="superstructure-elements">
            {currentSuperstructure ? (
              currentSuperstructure.superstructure.map((element, index) => (
                <div key={index} className="super-element">
                  <strong>{element.icon} {element.title}</strong><br />
                  {element.description}
                </div>
              ))
            ) : (
              <p className="placeholder-text">
                Select an economic base to see corresponding superstructure...
              </p>
            )}
          </div>
        </div>
      </div>
      
      <div className="dialectic-controls">
        <button className="control-btn" onClick={showDialecticalMotion}>
          🔄 Show Dialectical Motion
        </button>
        <button className="control-btn" onClick={addContradiction}>
          ⚡ Introduce Contradiction
        </button>
        <button className="control-btn" onClick={predictTransformation}>
          🔮 Predict Transformation
        </button>
      </div>
    </div>
  );
};

export default BaseSuperstuctureEngine;