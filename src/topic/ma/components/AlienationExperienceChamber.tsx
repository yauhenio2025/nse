import React, { useState } from 'react';
import { alienationScenarios, AlienationScenario } from '@/data/ma/alienation';
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
          <div className="scenario-content">
            <h2>{currentScenario.title} Experience</h2>
            <h3>{currentScenario.scenario.setting}</h3>
            
            <div className="scenario-narrative">
              <em>{currentScenario.scenario.narrative}</em>
              
              <div className="scenario-details">
                {currentScenario.scenario.details.map((detail, idx) => (
                  <p key={idx}>
                    <strong>{detail.label}:</strong> {detail.value}
                  </p>
                ))}
              </div>
            </div>
            
            <div className="alienation-effect">
              <strong>Alienation Effect:</strong> {currentScenario.scenario.alienationEffect}
            </div>
            
            <div className="historical-parallel">
              <strong>Marx on this form of alienation:</strong> "{currentScenario.marxQuote}"
            </div>
            
            <div className="historical-parallel">
              <strong>Historical Parallel:</strong> {currentScenario.historicalParallel}
            </div>
            
            <div className="solution-button">
              <button className="btn" onClick={showAlienationSolutions}>
                🛠️ Explore Solutions
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h3>Select an alienation type above to explore worker experiences</h3>
            <p>Marx identified four forms of alienation under capitalism. Each represents a different way that workers become estranged from their human essence through the capitalist production process.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlienationExperienceChamber;