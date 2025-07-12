import React, { useState } from 'react';
import { alienationScenarios, AlienationScenario } from '../../data/ma/alienation';
import './AlienationExperienceChamber.css';

interface Props {
  onShowPopup: (content: React.ReactNode) => void;
}

export const AlienationExperienceChamber: React.FC<Props> = ({ onShowPopup }) => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [currentScenario, setCurrentScenario] = useState<AlienationScenario | null>(null);

  const experienceAlienation = (type: string) => {
    const scenario = alienationScenarios.find(s => s.type === type);
    if (scenario) {
      setSelectedType(type);
      setCurrentScenario(scenario);
    }
  };

  const showAlienationSolutions = () => {
    if (!currentScenario) return;

    const content = (
      <div>
        <h2>Overcoming Alienation</h2>
        <p><strong>Immediate Strategies:</strong> {currentScenario.solutions.join(', ')}</p>
        <p><strong>Ultimate Solution:</strong> Transform the mode of production - move from capitalism (production for profit) to socialism (production for human needs).</p>
        <p><strong>Historical Examples:</strong> Worker cooperatives, Paris Commune, Yugoslav self-management, Mondragon cooperatives</p>
      </div>
    );
    onShowPopup(content);
  };

  return (
    <div className="alienation-chamber">
      <h2 className="section-title">🔗 Experience the Four Forms of Alienation</h2>
      
      <div className="worker-perspective">
        {alienationScenarios.map((scenario) => (
          <div
            key={scenario.type}
            className={`alienation-type ${selectedType === scenario.type ? 'selected' : ''}`}
            onClick={() => experienceAlienation(scenario.type)}
          >
            <div className="alienation-icon">{scenario.icon}</div>
            <h3>{scenario.title}</h3>
            <p>{scenario.description}</p>
          </div>
        ))}
      </div>
      
      <div className="experience-viewer">
        {currentScenario ? (
          <>
            <h2>{currentScenario.title}</h2>
            <div className="scenario-content">
              <h3>{currentScenario.scenario.setting}</h3>
              <div className="scenario-narrative">
                <p><em>{currentScenario.scenario.narrative}</em></p>
                <div className="scenario-details">
                  {currentScenario.scenario.details.map((detail, index) => (
                    <p key={index}><strong>{detail.label}:</strong> {detail.value}</p>
                  ))}
                </div>
                <p className="alienation-effect">
                  <strong>The Alienation:</strong> {currentScenario.scenario.alienationEffect}
                </p>
              </div>
              <p><strong>Marx's Analysis:</strong> "{currentScenario.marxQuote}"</p>
              <p className="historical-parallel">
                <strong>Historical Parallel:</strong> {currentScenario.historicalParallel}
              </p>
            </div>
            <div className="solution-button">
              <button className="control-btn" onClick={showAlienationSolutions}>
                💡 Explore Solutions
              </button>
            </div>
          </>
        ) : (
          <>
            <h3>Select an alienation type to begin...</h3>
            <p>Experience how capitalism transforms human relationships and consciousness through interactive scenarios.</p>
          </>
        )}
      </div>
    </div>
  );
};