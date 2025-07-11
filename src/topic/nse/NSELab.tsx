import React, { useState } from 'react';
import MicroFoundationBuilder from './components/MicroFoundationBuilder';
import CausalChainConstructor from './components/CausalChainConstructor';
import TimeLapseSimulator from './components/TimeLapseSimulator';
import SocraticDialogue from './components/SocraticDialogue';
import FlyingGeeseGame from './components/FlyingGeeseGame';
import './NSELab.css';

const NSELab: React.FC = () => {
  const [activeModule, setActiveModule] = useState('micro-foundation');

  const renderModule = () => {
    switch (activeModule) {
      case 'micro-foundation':
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
        return <div>Module not found</div>;
    }
  };

  return (
    <div className="nse-lab">
      <header className="nse-header">
        <h1>NSE Living Economy Laboratory</h1>
        <p>Build economic understanding through active experimentation</p>
        <p className="subtitle">Based on New Structural Economics by Justin Yifu Lin</p>
      </header>
      
      <nav className="nse-nav">
        <button 
          className={activeModule === 'micro-foundation' ? 'active' : ''}
          onClick={() => setActiveModule('micro-foundation')}
        >
          Micro-Foundation Builder
        </button>
        <button 
          className={activeModule === 'causal-chain' ? 'active' : ''}
          onClick={() => setActiveModule('causal-chain')}
        >
          Causal Chain
        </button>
        <button 
          className={activeModule === 'time-lapse' ? 'active' : ''}
          onClick={() => setActiveModule('time-lapse')}
        >
          Time-Lapse
        </button>
        <button 
          className={activeModule === 'socratic' ? 'active' : ''}
          onClick={() => setActiveModule('socratic')}
        >
          Socratic Dialogue
        </button>
        <button 
          className={activeModule === 'flying-geese' ? 'active' : ''}
          onClick={() => setActiveModule('flying-geese')}
        >
          Flying Geese
        </button>
      </nav>
      
      <main className="nse-content">
        {renderModule()}
      </main>
    </div>
  );
};

export default NSELab;