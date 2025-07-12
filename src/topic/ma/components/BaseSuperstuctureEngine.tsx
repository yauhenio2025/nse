import React, { useState } from 'react';
import { baseModes, dialecticalMotion, BaseMode } from '../../data/ma/baseAndSuperstructure';
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
    
    const predictions: { [key: string]: string } = {
      'capitalist-production': 'Automation and AI create conditions for post-scarcity, making socialist planning feasible',
      'feudal-agriculture': 'Merchant capital and urban growth dissolve feudal bonds, creating capitalism',
      'socialist-planning': 'Either democratic deepening toward communism or market reforms toward capitalism',
      'hunter-gatherer': 'Agricultural revolution creates surplus, enabling class society'
    };
    
    const content = (
      <div>
        <h2>Predicted Transformation</h2>
        <p><strong>Current Base:</strong> {currentSuperstructure.title}</p>
        <p><strong>Transformation Path:</strong> {predictions[currentSuperstructure.id]}</p>
        <p><strong>Key Factor:</strong> Development of productive forces beyond current relations</p>
      </div>
    );
    onShowPopup(content);
  };

  return (
    <div className="dialectic-engine">
      <h2 className="section-title">⚙️ See How Economic Base Shapes Cultural Superstructure</h2>
      
      <div className="dialectic-container">
        <div className="base-section">
          <h3>Economic Base</h3>
          {baseModes.map((base) => (
            <div
              key={base.id}
              className={`base-element ${selectedBase === base.id ? 'selected' : ''}`}
              onClick={() => selectBase(base.id)}
            >
              <strong>{base.icon} {base.title}</strong><br />
              {base.description}
            </div>
          ))}
        </div>
        
        <div className="dialectic-arrows">
          <div className="arrow-up">⬆️</div>
          <div className="arrow-label">
            Determines<br />&<br />Shapes
          </div>
          <div className="arrow-down">⬇️</div>
          <div className="arrow-label">Reinforces</div>
        </div>
        
        <div className="superstructure-section">
          <h3>Cultural Superstructure</h3>
          <div id="superstructureElements">
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