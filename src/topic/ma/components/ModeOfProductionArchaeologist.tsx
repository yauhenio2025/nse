import React, { useState } from 'react';
import { strataLayers, modesComparison, StrataLayer } from '@/data/ma/modesOfProduction';
import './ModeOfProductionArchaeologist.css';

interface Props {
  onShowPopup: (content: React.ReactNode) => void;
}

export const ModeOfProductionArchaeologist: React.FC<Props> = ({ onShowPopup }) => {
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  const [currentAnalysis, setCurrentAnalysis] = useState<string>('Click on the layers above to excavate different modes of production. Each artifact reveals the social relations and contradictions of its era.');

  const handleLayerClick = (layer: StrataLayer) => {
    setSelectedMode(layer.id);
    setCurrentAnalysis(layer.analysis);
  };

  const compareModesOfProduction = () => {
    const content = (
      <div className="modes-comparison">
        <h2>Comparative Analysis of Production Modes</h2>
        <div className="comparison-grid">
          {modesComparison.map((mode, idx) => (
            <div key={idx} className="mode-comparison-card">
              <h3>{mode.era}</h3>
              <p><strong>Dominant Class Relations:</strong> {mode.relations}</p>
              <p><strong>Key Contradiction:</strong> {mode.contradiction}</p>
              <p><strong>Historical Resolution:</strong> {mode.resolution}</p>
            </div>
          ))}
        </div>
      </div>
    );
    onShowPopup(content);
  };

  const traceEvolution = () => {
    const content = (
      <div className="evolution-trace">
        <h2>Evolution of Labor Relations</h2>
        <div className="evolution-timeline">
          {strataLayers.map((layer, idx) => (
            <div key={idx} className="evolution-stage">
              <h3>{layer.title}</h3>
              <p><strong>Labor Form:</strong> {layer.laborForm}</p>
              <p><strong>Property Relations:</strong> {layer.propertyForm}</p>
              <p><strong>Surplus Extraction:</strong> {layer.surplusForm}</p>
              {idx < strataLayers.length - 1 && <div className="evolution-arrow">↓</div>}
            </div>
          ))}
        </div>
        <div className="contradictions-analysis">
          <h3>Primary Contradictions</h3>
          <ul>
            <li><strong>Primitive Communism:</strong> Scarcity vs. egalitarian distribution</li>
            <li><strong>Feudalism:</strong> Personal bonds vs. market relations</li>
            <li><strong>Capitalism:</strong> Social production vs. private appropriation</li>
            <li><strong>Socialism:</strong> National planning vs. global markets</li>
          </ul>
        </div>
      </div>
    );
    onShowPopup(content);
  };

  const analyzeContradictions = () => {
    if (!selectedMode) {
      alert('Please select a mode of production first!');
      return;
    }

    const layer = strataLayers.find(l => l.id === selectedMode);
    if (!layer) return;

    const content = (
      <div className="contradiction-analysis">
        <h2>Contradictions in {layer.title}</h2>
        <p><strong>Primary Contradiction:</strong> {layer.primaryContradiction}</p>
        <div className="contradiction-details">
          <h3>Internal Tensions:</h3>
          <ul>
            {layer.contradictions.map((contradiction, idx) => (
              <li key={idx}>
                <strong>{contradiction.aspect}:</strong> {contradiction.description}
              </li>
            ))}
          </ul>
        </div>
        <div className="resolution">
          <h3>Historical Resolution:</h3>
          <p>{layer.historicalOutcome}</p>
        </div>
      </div>
    );
    onShowPopup(content);
  };

  return (
    <div className="mode-archaeologist">
      <h2 className="section-title">🛠️ Mode of Production Archaeologist</h2>
      
      <div className="archaeological-site">
        {strataLayers.map((layer, index) => (
          <div
            key={layer.id}
            className={`strata-layer ${layer.id} ${selectedMode === layer.id ? 'selected' : ''}`}
            style={layer.style}
            onClick={() => handleLayerClick(layer)}
            data-mode={layer.mode}
          >
            {layer.artifacts.map((artifact, index) => (
              <div key={index} className="artifact">
                <span>{artifact.icon}</span>
                <div className="artifact-info">
                  <strong>{artifact.title}</strong><br />
                  Mode: {artifact.mode}<br />
                  Relations: {artifact.relations}<br />
                  Contradiction: {artifact.contradiction}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      
      <div className="analysis-panel">
        <h3>Historical Materialist Analysis</h3>
        <div dangerouslySetInnerHTML={{ __html: currentAnalysis }} />
        <div className="control-buttons">
          <button className="control-btn" onClick={compareModesOfProduction}>
            📊 Compare All Modes
          </button>
          <button className="control-btn" onClick={traceEvolution}>
            📈 Trace Evolution of Labor
          </button>
          <button className="control-btn" onClick={analyzeContradictions}>
            ⚡ Analyze Contradictions
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModeOfProductionArchaeologist;