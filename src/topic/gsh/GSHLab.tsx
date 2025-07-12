import React, { useState, useCallback } from 'react';
import './GSHLab.css';

// Import all your GSH mock data
import { extractionPeriods, colonyNodes, metropoleNodes } from '@/data/gsh/colonialExtraction';
import { regions, yearMarkers, historicalEvents } from '@/data/gsh/parallelHistories';
import { narrativeSources } from '@/data/gsh/counterNarratives';
import { decolonizationPresets } from '@/data/gsh/decolonizationDynamics';
import { networkNodes, networkConnections } from '@/data/gsh/solidarityNetworks';

interface GlobalSouthMode {
  id: 'extraction' | 'parallel' | 'counter' | 'decolonization' | 'solidarity';
  label: string;
  icon: string;
}

const modes: GlobalSouthMode[] = [
  { id: 'extraction', label: 'Colonial Extraction', icon: '🌍' },
  { id: 'parallel', label: 'Parallel Histories', icon: '⚡' },
  { id: 'counter', label: 'Counter-Narratives', icon: '📖' },
  { id: 'decolonization', label: 'Decolonization Paths', icon: '🕊️' },
  { id: 'solidarity', label: 'Solidarity Networks', icon: '🤝' }
];

const GSHLab: React.FC = () => {
  const [currentMode, setCurrentMode] = useState<GlobalSouthMode['id']>('extraction');
  const [showInfoPopup, setShowInfoPopup] = useState(false);
  const [popupContent, setPopupContent] = useState('');

  const handleModeChange = useCallback((mode: GlobalSouthMode['id']) => {
    setCurrentMode(mode);
  }, []);

  const showInfo = useCallback((content: string) => {
    setPopupContent(content);
    setShowInfoPopup(true);
  }, []);

  const renderCurrentMode = () => {
    switch (currentMode) {
      case 'extraction':
        return (
          <div className="mode-content">
            <h2>Colonial Extraction Visualizer</h2>
            <p>Explore the flow of wealth from colonies to imperial centers</p>
            <div className="extraction-overview">
              <div className="stats-grid">
                <div className="stat-card">
                  <h3>Total Extracted</h3>
                  <p>$2.4 trillion (inflation-adjusted)</p>
                </div>
                <div className="stat-card">
                  <h3>Lives Lost</h3>
                  <p>15-20 million</p>
                </div>
                <div className="stat-card">
                  <h3>Key Resources</h3>
                  <p>Gold, silver, spices, slaves</p>
                </div>
                <div className="stat-card">
                  <h3>Time Period</h3>
                  <p>Early Colonial Period (1500-1650)</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'parallel':
        return (
          <div className="mode-content">
            <h2>Parallel Histories</h2>
            <p>Discover simultaneous resistance movements across the Global South</p>
            <div className="parallel-overview">
              <div className="timeline-preview">
                <h3>Interconnected Movements</h3>
                <ul>
                  <li>1857 - Indian Rebellion & Taiping Rebellion</li>
                  <li>1916 - Easter Rising & Arab Revolt</li>
                  <li>1947-1949 - Indian Independence & Indonesian Revolution</li>
                  <li>1960s - African Independence & Latin American Liberation</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'counter':
        return (
          <div className="mode-content">
            <h2>Counter-Narratives</h2>
            <p>Challenge dominant historical narratives with alternative perspectives</p>
            <div className="counter-overview">
              <div className="narrative-types">
                <div className="narrative-card">
                  <h3>🏛️ Colonial Sources</h3>
                  <p>Official imperial records and colonial administrators</p>
                </div>
                <div className="narrative-card">
                  <h3>🌿 Indigenous Sources</h3>
                  <p>Oral traditions and indigenous historical accounts</p>
                </div>
                <div className="narrative-card">
                  <h3>📚 Scholarly Sources</h3>
                  <p>Modern academic research and historical analysis</p>
                </div>
                <div className="narrative-card">
                  <h3>🏺 Material Sources</h3>
                  <p>Archaeological evidence and material culture</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'decolonization':
        return (
          <div className="mode-content">
            <h2>Decolonization Paths</h2>
            <p>Simulate different paths to independence and their outcomes</p>
            <div className="decolonization-overview">
              <div className="path-options">
                <div className="path-card">
                  <h3>Negotiated Independence</h3>
                  <p>Peaceful transition through diplomatic means</p>
                </div>
                <div className="path-card">
                  <h3>Armed Struggle</h3>
                  <p>Liberation through organized resistance</p>
                </div>
                <div className="path-card">
                  <h3>Civil Disobedience</h3>
                  <p>Non-violent mass resistance movements</p>
                </div>
                <div className="path-card">
                  <h3>Economic Pressure</h3>
                  <p>Independence through economic leverage</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'solidarity':
        return (
          <div className="mode-content">
            <h2>Solidarity Networks</h2>
            <p>Map the connections between liberation movements worldwide</p>
            <div className="solidarity-overview">
              <div className="network-preview">
                <h3>Key Connections</h3>
                <ul>
                  <li>Pan-African Congress (1919-1945)</li>
                  <li>Bandung Conference (1955)</li>
                  <li>Tricontinental Conference (1966)</li>
                  <li>Non-Aligned Movement (1961-present)</li>
                </ul>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="gsh-lab">
      <div className="lab-container">
        <header className="lab-header">
          <h1>Global South History Laboratory</h1>
          <p className="lab-subtitle">
            Explore resistance, resilience, and revolution through interactive learning
          </p>
          <p className="lab-description">
            Decolonizing historical narratives through active engagement
          </p>
        </header>

        <nav className="mode-selector">
          {modes.map((mode) => (
            <button
              key={mode.id}
              className={`mode-btn ${currentMode === mode.id ? 'active' : ''}`}
              onClick={() => handleModeChange(mode.id)}
            >
              <span className="mode-icon">{mode.icon}</span>
              <span className="mode-label">{mode.label}</span>
            </button>
          ))}
        </nav>

        <main className="learning-area">
          {renderCurrentMode()}
        </main>

        {showInfoPopup && (
          <div className="info-popup-overlay" onClick={() => setShowInfoPopup(false)}>
            <div className="info-popup" onClick={(e) => e.stopPropagation()}>
              <button 
                className="close-btn"
                onClick={() => setShowInfoPopup(false)}
              >
                ×
              </button>
              <div dangerouslySetInnerHTML={{ __html: popupContent }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GSHLab;