import React, { useState } from 'react';
import './GSHLab.css';

const GSHLab: React.FC = () => {
  const [activeModule, setActiveModule] = useState('colonial-extraction');

  return (
    <div className="gsh-lab">
      <div className="gsh-background">
        <div className="wave"></div>
      </div>
      
      <header className="gsh-header">
        <h1>Global South History Laboratory</h1>
        <p>Explore resistance, resilience, and revolution through interactive learning</p>
        <p className="subtitle">Decolonizing historical narratives through active engagement</p>
      </header>
      
      <nav className="gsh-nav">
        <button 
          className={`module-btn ${activeModule === 'colonial-extraction' ? 'active' : ''}`}
          onClick={() => setActiveModule('colonial-extraction')}
        >
          🌍 Colonial Extraction
        </button>
        <button 
          className={`module-btn ${activeModule === 'parallel-histories' ? 'active' : ''}`}
          onClick={() => setActiveModule('parallel-histories')}
        >
          ⚡ Parallel Histories
        </button>
        <button 
          className={`module-btn ${activeModule === 'counter-narrative' ? 'active' : ''}`}
          onClick={() => setActiveModule('counter-narrative')}
        >
          📖 Counter-Narratives
        </button>
        <button 
          className={`module-btn ${activeModule === 'decolonization' ? 'active' : ''}`}
          onClick={() => setActiveModule('decolonization')}
        >
          🎯 Decolonization Paths
        </button>
        <button 
          className={`module-btn ${activeModule === 'solidarity' ? 'active' : ''}`}
          onClick={() => setActiveModule('solidarity')}
        >
          🤝 Solidarity Networks
        </button>
      </nav>
      
      <main className="gsh-content">
        <div className="module-container">
          {activeModule === 'colonial-extraction' && <ColonialExtractionModule />}
          {activeModule === 'parallel-histories' && <ParallelHistoriesModule />}
          {activeModule === 'counter-narrative' && <CounterNarrativeModule />}
          {activeModule === 'decolonization' && <DecolonizationModule />}
          {activeModule === 'solidarity' && <SolidarityModule />}
        </div>
      </main>
      
      <div className="progress-indicator">
        <div className="progress-step completed">1</div>
        <div className="progress-step">2</div>
        <div className="progress-step">3</div>
        <div className="progress-step">4</div>
        <div className="progress-step">5</div>
        <span className="progress-label">Your Learning Journey</span>
      </div>
    </div>
  );
};

// Module Components
const ColonialExtractionModule: React.FC = () => (
  <div className="module-content">
    <h2 className="module-title">🌍 Trace the Flows of Colonial Extraction</h2>
    <div className="extraction-map">
      <div className="world-map">
        <div className="resource-node colony" style={{ top: '60%', left: '20%' }}>
          <span>🌴</span>
          <div className="node-label">West Africa</div>
        </div>
        <div className="resource-node colony" style={{ top: '70%', left: '45%' }}>
          <span>💎</span>
          <div className="node-label">Congo</div>
        </div>
        <div className="resource-node colony" style={{ top: '50%', left: '65%' }}>
          <span>🌾</span>
          <div className="node-label">India</div>
        </div>
        <div className="resource-node metropole" style={{ top: '20%', left: '40%' }}>
          <span>🏛️</span>
          <div className="node-label">London</div>
        </div>
        <div className="resource-node metropole" style={{ top: '25%', left: '45%' }}>
          <span>🗼</span>
          <div className="node-label">Paris</div>
        </div>
      </div>
      <div className="extraction-panel">
        <h3>Extraction Data</h3>
        <div className="data-section">
          <h4>Time Period: 1800-1900</h4>
          <div className="data-item">
            <span>Total Extracted:</span>
            <span className="value">$45 trillion</span>
          </div>
          <div className="data-item">
            <span>Lives Lost:</span>
            <span className="value">47 million</span>
          </div>
          <div className="data-item">
            <span>Resources Taken:</span>
            <span className="value">Immeasurable</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ParallelHistoriesModule: React.FC = () => (
  <div className="module-content">
    <h2 className="module-title">⚡ Discover Simultaneous Struggles</h2>
    <div className="timeline-container">
      <div className="timeline-header">
        <div className="year-marker">1857</div>
        <div className="year-marker">1884</div>
        <div className="year-marker">1919</div>
        <div className="year-marker">1955</div>
        <div className="year-marker">1960</div>
      </div>
      <div className="regions-grid">
        <div className="region-column">
          <h3>🇮🇳 South Asia</h3>
          <div className="event-card resistance">
            <h4>1857: Sepoy Rebellion</h4>
            <p>First war of independence</p>
          </div>
          <div className="event-card cultural">
            <h4>1885: Indian National Congress</h4>
            <p>Political awakening</p>
          </div>
        </div>
        <div className="region-column">
          <h3>🌍 Africa</h3>
          <div className="event-card resistance">
            <h4>1823-1900: Ashanti Resistance</h4>
            <p>Century-long resistance</p>
          </div>
          <div className="event-card independence">
            <h4>1960: Year of Africa</h4>
            <p>17 nations gain independence</p>
          </div>
        </div>
        <div className="region-column">
          <h3>🌎 Latin America</h3>
          <div className="event-card independence">
            <h4>1791-1804: Haitian Revolution</h4>
            <p>First successful slave revolt</p>
          </div>
          <div className="event-card resistance">
            <h4>1910: Mexican Revolution</h4>
            <p>Zapata: "Land and Liberty!"</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CounterNarrativeModule: React.FC = () => (
  <div className="module-content">
    <h2 className="module-title">📖 Build History from Multiple Perspectives</h2>
    <div className="narrative-builder">
      <div className="source-selector">
        <h3>Select Your Sources:</h3>
        <div className="source-item">📜 Colonial Archives</div>
        <div className="source-item selected">🗣️ Oral Histories</div>
        <div className="source-item selected">✊ Resistance Letters</div>
        <div className="source-item">📚 Academic Analysis</div>
      </div>
      <div className="narrative-display">
        <h3>The 1857 Rebellion</h3>
        <div className="narrative-section">
          <div className="perspective-tag">Indigenous Memory</div>
          <p>Our elders spoke of 1857 as the year the earth trembled with righteous anger...</p>
        </div>
        <div className="narrative-section">
          <div className="perspective-tag">Resistance Letter</div>
          <p>Brothers and sisters, we fight not merely against greased cartridges but against systematic plunder...</p>
        </div>
      </div>
    </div>
  </div>
);

const DecolonizationModule: React.FC = () => (
  <div className="module-content">
    <h2 className="module-title">🎯 Simulate Paths to Independence</h2>
    <div className="dynamics-simulator">
      <div className="factor-controls">
        <h3>Adjust Factors:</h3>
        <div className="factor-slider">
          <label>International Pressure</label>
          <input type="range" min="0" max="100" defaultValue="50" />
          <span className="value">50%</span>
        </div>
        <div className="factor-slider">
          <label>Armed Resistance</label>
          <input type="range" min="0" max="100" defaultValue="30" />
          <span className="value">30%</span>
        </div>
        <div className="factor-slider">
          <label>Civil Disobedience</label>
          <input type="range" min="0" max="100" defaultValue="70" />
          <span className="value">70%</span>
        </div>
      </div>
      <div className="outcome-display">
        <h3>Projected Outcome</h3>
        <p>Mass civil disobedience creates unstoppable moral pressure...</p>
        <div className="metrics">
          <div>Timeline: 15-20 years</div>
          <div>Violence Level: Low</div>
          <div>Stability: High</div>
        </div>
      </div>
    </div>
  </div>
);

const SolidarityModule: React.FC = () => (
  <div className="module-content">
    <h2 className="module-title">🤝 Trace Connections of Resistance</h2>
    <div className="network-visualization">
      <div className="network-canvas">
        <div className="network-node leader" style={{ top: '20%', left: '30%' }}>
          Gandhi
        </div>
        <div className="network-node leader" style={{ top: '40%', left: '50%' }}>
          Nkrumah
        </div>
        <div className="network-node leader" style={{ top: '60%', left: '25%' }}>
          Castro
        </div>
        <div className="network-node movement" style={{ top: '50%', left: '70%' }}>
          Non-Aligned
        </div>
        <div className="network-node conference" style={{ top: '35%', left: '45%' }}>
          Bandung 1955
        </div>
      </div>
      <div className="connection-filters">
        <button className="filter-btn active">All Connections</button>
        <button className="filter-btn">Ideological</button>
        <button className="filter-btn">Conferences</button>
        <button className="filter-btn">Support</button>
      </div>
    </div>
  </div>
);

export default GSHLab;