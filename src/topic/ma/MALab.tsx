import React, { useState } from 'react';
import './MALab.css';

const MALab: React.FC = () => {
  const [activeModule, setActiveModule] = useState('archaeologist');

  return (
    <div className="ma-lab">
      <div className="ma-background">
        <div className="red-wave"></div>
      </div>
      
      <header className="ma-header">
        <h1>Marxist Anthropology Laboratory</h1>
        <p>Explore the material foundations of human society and consciousness</p>
        <p className="subtitle">Understanding culture through the lens of historical materialism</p>
      </header>
      
      <nav className="ma-nav">
        <button 
          className={`module-btn ${activeModule === 'archaeologist' ? 'active' : ''}`}
          onClick={() => setActiveModule('archaeologist')}
        >
          ⛏️ Mode of Production Archaeologist
        </button>
        <button 
          className={`module-btn ${activeModule === 'alienation' ? 'active' : ''}`}
          onClick={() => setActiveModule('alienation')}
        >
          🔗 Alienation Experience Chamber
        </button>
        <button 
          className={`module-btn ${activeModule === 'dialectic' ? 'active' : ''}`}
          onClick={() => setActiveModule('dialectic')}
        >
          ⚙️ Base-Superstructure Engine
        </button>
        <button 
          className={`module-btn ${activeModule === 'consciousness' ? 'active' : ''}`}
          onClick={() => setActiveModule('consciousness')}
        >
          🧠 Class Consciousness Lab
        </button>
        <button 
          className={`module-btn ${activeModule === 'reproduction' ? 'active' : ''}`}
          onClick={() => setActiveModule('reproduction')}
        >
          🔄 Social Reproduction Observatory
        </button>
      </nav>
      
      <main className="ma-content">
        <div className="module-container">
          {activeModule === 'archaeologist' && <ProductionArchaeologistModule />}
          {activeModule === 'alienation' && <AlienationChamberModule />}
          {activeModule === 'dialectic' && <DialecticEngineModule />}
          {activeModule === 'consciousness' && <ConsciousnessLabModule />}
          {activeModule === 'reproduction' && <ReproductionObservatoryModule />}
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
const ProductionArchaeologistModule: React.FC = () => (
  <div className="module-content">
    <h2 className="module-title">⛏️ Excavate the Layers of Human History</h2>
    <div className="dig-site">
      <div className="strata-layer capitalism" style={{ top: '5%' }}>
        <div className="artifact">
          <span>📱</span>
          <div className="artifact-info">
            <strong>Smartphone (2020s)</strong><br />
            Mode: Late Capitalism<br />
            Relations: Platform labor
          </div>
        </div>
        <div className="artifact">
          <span>💳</span>
          <div className="artifact-info">
            <strong>Credit Card</strong><br />
            Mode: Financialized Capitalism<br />
            Relations: Debt peonage
          </div>
        </div>
        <div className="artifact">
          <span>🏢</span>
          <div className="artifact-info">
            <strong>Corporate Office</strong><br />
            Mode: Neoliberal Capitalism<br />
            Relations: Precarious employment
          </div>
        </div>
      </div>
      
      <div className="strata-layer industrial" style={{ top: '25%' }}>
        <div className="artifact">
          <span>🏭</span>
          <div className="artifact-info">
            <strong>Factory (1850s)</strong><br />
            Mode: Industrial Capitalism<br />
            Relations: Wage labor
          </div>
        </div>
        <div className="artifact">
          <span>⏰</span>
          <div className="artifact-info">
            <strong>Time Clock</strong><br />
            Mode: Industrial Capitalism<br />
            Relations: Time discipline
          </div>
        </div>
      </div>
      
      <div className="strata-layer feudal" style={{ top: '50%' }}>
        <div className="artifact">
          <span>🏰</span>
          <div className="artifact-info">
            <strong>Castle (1200s)</strong><br />
            Mode: Feudalism<br />
            Relations: Lord and serf
          </div>
        </div>
        <div className="artifact">
          <span>⛪</span>
          <div className="artifact-info">
            <strong>Church Bell</strong><br />
            Mode: Feudalism<br />
            Relations: Religious ideology
          </div>
        </div>
      </div>
      
      <div className="strata-layer primitive" style={{ top: '75%' }}>
        <div className="artifact">
          <span>🏹</span>
          <div className="artifact-info">
            <strong>Hunting Bow</strong><br />
            Mode: Primitive Communism<br />
            Relations: Collective ownership
          </div>
        </div>
        <div className="artifact">
          <span>🔥</span>
          <div className="artifact-info">
            <strong>Hearth</strong><br />
            Mode: Primitive Communism<br />
            Relations: Band society
          </div>
        </div>
      </div>
    </div>
    
    <div className="analysis-panel">
      <h3>Historical Materialist Analysis</h3>
      <p>Click on the layers above to excavate different modes of production. Each artifact reveals the social relations and contradictions of its era.</p>
    </div>
  </div>
);

const AlienationChamberModule: React.FC = () => (
  <div className="module-content">
    <h2 className="module-title">🔗 Experience the Four Forms of Alienation</h2>
    <div className="alienation-grid">
      <div className="alienation-type">
        <div className="alienation-icon">📦</div>
        <h3>Alienation from Product</h3>
        <p>The worker doesn't own what they produce</p>
      </div>
      <div className="alienation-type">
        <div className="alienation-icon">⚙️</div>
        <h3>Alienation from Labor Process</h3>
        <p>Work becomes external, forced activity</p>
      </div>
      <div className="alienation-type">
        <div className="alienation-icon">🧬</div>
        <h3>Alienation from Species-Being</h3>
        <p>Separated from human creative essence</p>
      </div>
      <div className="alienation-type">
        <div className="alienation-icon">👥</div>
        <h3>Alienation from Others</h3>
        <p>Competition replaces cooperation</p>
      </div>
    </div>
    
    <div className="experience-viewer">
      <h3>Amazon Warehouse Worker - 2023</h3>
      <div className="experience-content">
        <p><em>You scan, pack, and ship 300 items per hour. Luxury goods, electronics, books - a constant stream of commodities you'll never afford.</em></p>
        <div className="metrics">
          <div>Your Labor: 10 hrs × 300 items = 3,000 products</div>
          <div>Your Wage: $15/hour = $150/day</div>
          <div>Value Created: ~$150,000/day</div>
        </div>
        <p className="alienation-insight">The products of your labor confront you as alien objects, belonging to another.</p>
      </div>
    </div>
  </div>
);

const DialecticEngineModule: React.FC = () => (
  <div className="module-content">
    <h2 className="module-title">⚙️ See How Economic Base Shapes Cultural Superstructure</h2>
    <div className="dialectic-container">
      <div className="base-section">
        <h3>Economic Base</h3>
        <div className="base-element">
          <strong>🏭 Capitalist Production</strong><br />
          Private ownership, wage labor, profit motive
        </div>
        <div className="base-element">
          <strong>🌾 Feudal Agriculture</strong><br />
          Land ownership, serf labor, subsistence
        </div>
      </div>
      
      <div className="dialectic-arrows">
        <div className="arrow-up">⬆️</div>
        <div className="arrow-label">Determines & Shapes</div>
        <div className="arrow-down">⬇️</div>
        <div className="arrow-label">Reinforces</div>
      </div>
      
      <div className="superstructure-section">
        <h3>Cultural Superstructure</h3>
        <div className="super-element">
          <strong>⚖️ Liberal Democracy</strong><br />
          Formal equality, property rights supreme
        </div>
        <div className="super-element">
          <strong>🎓 Competitive Education</strong><br />
          Sorting mechanism for class positions
        </div>
        <div className="super-element">
          <strong>🏛️ Individualist Ideology</strong><br />
          Success/failure as personal responsibility
        </div>
      </div>
    </div>
  </div>
);

const ConsciousnessLabModule: React.FC = () => (
  <div className="module-content">
    <h2 className="module-title">🧠 Trace the Development of Class Consciousness</h2>
    <div className="social-positions">
      <div className="class-position selected">
        <h3>👷 Industrial Worker</h3>
        <p>Sells labor power<br />No means of production<br />Creates surplus value</p>
      </div>
      <div className="class-position">
        <h3>🏪 Petty Bourgeois</h3>
        <p>Small business owner<br />Works + owns<br />Contradictory position</p>
      </div>
      <div className="class-position">
        <h3>💼 Capitalist</h3>
        <p>Owns means of production<br />Purchases labor power<br />Appropriates surplus</p>
      </div>
    </div>
    
    <div className="consciousness-spectrum">
      <div className="consciousness-marker" style={{ left: '30%' }}></div>
      <div className="spectrum-labels">
        <span>False Consciousness</span>
        <span>Trade Union Consciousness</span>
        <span>Revolutionary Consciousness</span>
      </div>
    </div>
    
    <div className="material-conditions">
      <div className="condition-card">
        <span className="condition-icon">💰</span>
        <div>
          <h4>Economic Crisis</h4>
          <p>Unemployment rises, wages fall</p>
          <button className="apply-btn">Apply</button>
        </div>
      </div>
      <div className="condition-card">
        <span className="condition-icon">✊</span>
        <div>
          <h4>Strike Victory</h4>
          <p>Collective action succeeds</p>
          <button className="apply-btn">Apply</button>
        </div>
      </div>
      <div className="condition-card">
        <span className="condition-icon">📚</span>
        <div>
          <h4>Political Education</h4>
          <p>Study groups, theory reading</p>
          <button className="apply-btn">Apply</button>
        </div>
      </div>
    </div>
  </div>
);

const ReproductionObservatoryModule: React.FC = () => (
  <div className="module-content">
    <h2 className="module-title">🔄 Observe How Capitalism Reproduces Itself Daily</h2>
    <div className="daily-cycle-container">
      <div className="daily-cycle">
        <div className="cycle-center">
          <span>💰</span>
        </div>
        
        <div className="activity-node" style={{ top: '10%', left: '50%' }}>
          <span>⏰</span>
          <small>Wake</small>
        </div>
        <div className="activity-node" style={{ top: '25%', right: '15%' }}>
          <span>🚇</span>
          <small>Commute</small>
        </div>
        <div className="activity-node" style={{ top: '50%', right: '5%' }}>
          <span>🏢</span>
          <small>Work</small>
        </div>
        <div className="activity-node" style={{ bottom: '25%', right: '15%' }}>
          <span>🛒</span>
          <small>Shop</small>
        </div>
        <div className="activity-node" style={{ bottom: '10%', left: '50%' }}>
          <span>📺</span>
          <small>Media</small>
        </div>
        <div className="activity-node" style={{ bottom: '25%', left: '15%' }}>
          <span>🛏️</span>
          <small>Sleep</small>
        </div>
        <div className="activity-node" style={{ top: '50%', left: '5%' }}>
          <span>👶</span>
          <small>Care</small>
        </div>
      </div>
      
      <div className="reproduction-analysis">
        <div className="analysis-metric">
          <h4>Labor Power Reproduction</h4>
          <p>8 hrs rest + 2 hrs preparation</p>
        </div>
        <div className="analysis-metric">
          <h4>Ideological Reproduction</h4>
          <p>3 hrs media consumption</p>
        </div>
        <div className="analysis-metric">
          <h4>Surplus Extraction</h4>
          <p>$200 created, $50 received</p>
        </div>
      </div>
    </div>
  </div>
);

export default MALab;