import React, { useState } from 'react';
import './NSELab.css';

// Import your NSE components
import MicroFoundationBuilder from './components/MicroFoundationBuilder';
import CausalChainConstructor from './components/CausalChainConstructor';
import TimeLapseSimulator from './components/TimeLapseSimulator';
import SocraticDialogue from './components/SocraticDialogue';
import FlyingGeeseGame from './components/FlyingGeeseGame';

type ModuleType = 'micro-foundations' | 'causal-chain' | 'time-lapse' | 'socratic' | 'flying-geese';

const NSELab: React.FC = () => {
  const [activeModule, setActiveModule] = useState<ModuleType>('micro-foundations');

  const renderModule = () => {
    switch (activeModule) {
      case 'micro-foundations':
        return <MicroFoundationBuilder />;
      case 'causal-chain':
        return <CausalChainConstructor />;
      case 'time-lapse':
        return <TimeLapseSimulator />;
      case 'socratic':
        return <SocraticDialogue />;
      case 'flying-geese':
        return <FlyingGeeseGame />;
      default:
        return (
          <div className="module-placeholder">
            <h2>Welcome to New Structural Economics Lab</h2>
            <p>Select a module from the navigation above to begin your learning journey.</p>
            <div className="module-overview">
              <div className="overview-grid">
                <div className="overview-card">
                  <h3>🔬 Micro-Foundations</h3>
                  <p>Build economic models from the ground up using individual agent behaviors and market mechanisms.</p>
                </div>
                <div className="overview-card">
                  <h3>🔗 Causal Chains</h3>
                  <p>Explore cause-and-effect relationships in economic development and structural transformation.</p>
                </div>
                <div className="overview-card">
                  <h3>⏰ Time-Lapse</h3>
                  <p>Simulate economic development over time and observe structural changes in real-time.</p>
                </div>
                <div className="overview-card">
                  <h3>💭 Socratic Dialogue</h3>
                  <p>Engage in guided discussions about key NSE concepts and their real-world applications.</p>
                </div>
                <div className="overview-card">
                  <h3>🦢 Flying Geese</h3>
                  <p>Experience the flying geese model of economic development and industrial upgrading.</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="nse-lab">
      <header className="nse-header">
        <h1>New Structural Economics Laboratory</h1>
        <p className="nse-subtitle">
          Development theory, comparative advantage, structural transformation
        </p>
        <p className="nse-description">
          Interactive tools for understanding economic development through the NSE framework
        </p>
      </header>
      
      <nav className="nse-nav">
        <button 
          className={activeModule === 'micro-foundations' ? 'active' : ''}
          onClick={() => setActiveModule('micro-foundations')}
        >
          🔬 Micro-Foundations
        </button>
        <button 
          className={activeModule === 'causal-chain' ? 'active' : ''}
          onClick={() => setActiveModule('causal-chain')}
        >
          🔗 Causal Chain
        </button>
        <button 
          className={activeModule === 'time-lapse' ? 'active' : ''}
          onClick={() => setActiveModule('time-lapse')}
        >
          ⏰ Time-Lapse
        </button>
        <button 
          className={activeModule === 'socratic' ? 'active' : ''}
          onClick={() => setActiveModule('socratic')}
        >
          💭 Socratic Dialogue
        </button>
        <button 
          className={activeModule === 'flying-geese' ? 'active' : ''}
          onClick={() => setActiveModule('flying-geese')}
        >
          🦢 Flying Geese
        </button>
      </nav>
      
      <main className="nse-content">
        {renderModule()}
      </main>
    </div>
  );
};

export default NSELab;