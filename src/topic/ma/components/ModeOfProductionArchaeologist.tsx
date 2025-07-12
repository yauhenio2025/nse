import React, { useState } from 'react';
import { strataLayers, modesComparison, StrataLayer } from '../../data/ma/modesOfProduction';
import './ModeOfProductionArchaeologist.css';

interface Props {
  onShowPopup: (content: React.ReactNode) => void;
}

export const ModeOfProductionArchaeologist: React.FC<Props> = ({ onShowPopup }) => {
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  const [currentAnalysis, setCurrentAnalysis] = useState<string>('Click on the layers above to excavate different modes of production. Each artifact reveals the social relations and contradictions of its era.');

  const handleLayerClick = (layer: StrataLayer) => {
    setSelectedMode(layer.mode);
    const analysis = `
      <h3>${layer.title} (${layer.dateRange})</h3>
      <p><strong>Forces of Production:</strong> ${layer.analysis.forces}</p>
      <p><strong>Relations of Production:</strong> ${layer.analysis.relations}</p>
      <p><strong>Key Contradictions:</strong></p>
      <ul>
        ${layer.analysis.contradictions.map(c => `<li>${c}</li>`).join('')}
      </ul>
      <p><strong>Forms of Resistance:</strong> ${layer.analysis.resistance}</p>
    `;
    setCurrentAnalysis(analysis);
  };

  const compareModesOfProduction = () => {
    const content = (
      <div>
        <h2>Comparative Analysis of Modes of Production</h2>
        <table className="comparison-table">
          <thead>
            <tr>
              {modesComparison.headers.map((header, i) => (
                <th key={i}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {modesComparison.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="key-insight">
          <strong>Key Insight:</strong> Each mode contains contradictions that eventually lead to its transformation into a new mode. The engine of history is class struggle arising from these contradictions.
        </p>
      </div>
    );
    onShowPopup(content);
  };

  const traceEvolution = () => {
    const content = (
      <div>
        <h2>Evolution of Labor Through History</h2>
        <div className="evolution-timeline">
          <div className="evolution-stage">
            <h3>🏹 Primitive Communism</h3>
            <p>Collective labor for collective benefit. No exploitation.</p>
          </div>
          <div className="evolution-arrow">↓</div>
          <div className="evolution-stage">
            <h3>🏰 Feudalism</h3>
            <p>Personal bondage. Direct surplus extraction through corvée.</p>
          </div>
          <div className="evolution-arrow">↓</div>
          <div className="evolution-stage">
            <h3>🏭 Capitalism</h3>
            <p>"Free" wage labor. Hidden surplus extraction through wage system.</p>
          </div>
          <div className="evolution-arrow">↓</div>
          <div className="evolution-stage">
            <h3>🚩 Socialism</h3>
            <p>Associated producers. Conscious planning for social needs.</p>
          </div>
        </div>
      </div>
    );
    onShowPopup(content);
  };

  const analyzeContradictions = () => {
    const content = (
      <div>
        <h2>Contradictions Driving Historical Change</h2>
        <div className="contradictions-analysis">
          <h3>Capitalism's Central Contradictions</h3>
          <ul>
            <li><strong>Social Production vs. Private Appropriation:</strong> Workers cooperate to produce, but capitalists own the results</li>
            <li><strong>Use Value vs. Exchange Value:</strong> Human needs subordinated to profit</li>
            <li><strong>Forces vs. Relations:</strong> Technology enables abundance, but property relations enforce scarcity</li>
            <li><strong>Capital vs. Labor:</strong> System needs workers as consumers but drives down wages</li>
          </ul>
          <h3>Resolution Through Crisis</h3>
          <p>These contradictions intensify until revolutionary transformation becomes necessary.</p>
        </div>
      </div>
    );
    onShowPopup(content);
  };

  return (
    <div className="production-archaeologist">
      <h2 className="section-title">⛏️ Excavate the Layers of Human History</h2>
      
      <div className="dig-site">
        {strataLayers.map((layer) => (
          <div
            key={layer.id}
            className={`strata-layer ${selectedMode === layer.mode ? 'selected' : ''}`}
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