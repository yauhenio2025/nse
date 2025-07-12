// src/topic/gsh/GSHLab.tsx

import React, { useState, useCallback, useEffect } from 'react';
import styles from './GSHLab.module.css';
import { GlobalSouthMode } from '../../types/globalSouthHistory';

// Import all components
import ColonialExtraction from './components/ColonialExtraction';
import ParallelHistories from './components/ParallelHistories';
import CounterNarrative from './components/CounterNarrative';
import DecolonizationDynamics from './components/DecolonizationDynamics';
import SolidarityNetworks from './components/SolidarityNetworks';
import AnimatedBackground from './components/AnimatedBackground';
import ProgressBar from './components/ProgressBar';
import InfoPopup from './components/InfoPopup';
import HelpButton from './components/HelpButton';

const modes: GlobalSouthMode[] = [
  { id: 'extraction', label: 'Colonial Extraction', icon: '🌍' },
  { id: 'parallel', label: 'Parallel Histories', icon: '⚡' },
  { id: 'counter', label: 'Counter-Narratives', icon: '📖' },
  { id: 'decolonization', label: 'Decolonization Paths', icon: '🎯' },
  { id: 'solidarity', label: 'Solidarity Networks', icon: '🤝' }
];

const GSHLab: React.FC = () => {
  const [currentMode, setCurrentMode] = useState<GlobalSouthMode['id']>('extraction');
  const [popupContent, setPopupContent] = useState<string | null>(null);

  const handleModeSwitch = useCallback((modeId: GlobalSouthMode['id']) => {
    setCurrentMode(modeId);
  }, []);

  const showPopup = useCallback((content: string) => {
    setPopupContent(content);
  }, []);

  const closePopup = useCallback(() => {
    setPopupContent(null);
  }, []);

  const showHelp = useCallback(() => {
    const helpContent = `
      <h2>Global South History Laboratory Guide</h2>
      
      <h3>Welcome to Your Decolonial Learning Journey</h3>
      <p>This interactive laboratory helps you understand Global South history through five interconnected modules, each revealing different aspects of resistance, resilience, and revolution.</p>
      
      <h3>🌍 Colonial Extraction Visualizer</h3>
      <p>Explore how colonialism systematically extracted wealth from the Global South. Click on nodes to see detailed data. Change time periods to understand the evolution of exploitation. The flowing particles represent actual resources, people, and wealth stolen from colonies.</p>
      
      <h3>⚡ Parallel Histories Explorer</h3>
      <p>Discover how liberation struggles across the world happened simultaneously and influenced each other. Click events for details. Notice patterns: resistance movements often sparked others, creating waves of decolonization.</p>
      
      <h3>📖 Counter-Narrative Constructor</h3>
      <p>Build historical narratives from multiple perspectives to see how power shapes "truth." Select different sources and watch how the same event - the 1857 Rebellion - changes dramatically based on who tells the story. Analyze bias to become a critical reader of history.</p>
      
      <h3>🎯 Decolonization Dynamics Simulator</h3>
      <p>Experiment with different paths to independence. Adjust factors to see how various strategies lead to different outcomes. Based on real cases, this shows the complex calculations liberation movements faced.</p>
      
      <h3>🤝 Solidarity Networks Mapper</h3>
      <p>Trace connections between liberation leaders and movements. Click nodes to learn about key figures. Filter by connection type to see how ideas, material support, and personal relationships created a global anti-colonial network.</p>
      
      <h3>Key Learning Concepts</h3>
      <ul>
        <li><strong>Extraction:</strong> Colonialism as systematic theft of resources, labor, and life</li>
        <li><strong>Resistance:</strong> Multiple forms - armed, civil, cultural, economic</li>
        <li><strong>Solidarity:</strong> Global South unity against shared oppression</li>
        <li><strong>Perspective:</strong> History changes based on who tells it</li>
        <li><strong>Agency:</strong> Colonized peoples as active agents, not passive victims</li>
      </ul>
      
      <h3>Tips for Deep Learning</h3>
      <ul>
        <li>Start with Colonial Extraction to understand what people were fighting against</li>
        <li>Use Parallel Histories to see patterns across regions</li>
        <li>Counter-Narratives reveals how colonial history was written to justify exploitation</li>
        <li>Decolonization Dynamics shows there's no single path to freedom</li>
        <li>Solidarity Networks demonstrates the power of unity</li>
      </ul>
      
      <h3>Navigation Tips</h3>
      <ul>
        <li>Use the progress bar at the bottom to jump between modules</li>
        <li>Press 1-5 keys to quickly switch between modes</li>
        <li>Press ESC to close any popup</li>
        <li>Click the ? button anytime for help</li>
      </ul>
      
      <h3>Remember</h3>
      <p>This history isn't just past - colonial structures persist today. Understanding these patterns helps us recognize and resist ongoing forms of imperialism and work toward true liberation.</p>
    `;
    showPopup(helpContent);
  }, [showPopup]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closePopup();
      } else if (e.key >= '1' && e.key <= '5') {
        const modeIndex = parseInt(e.key) - 1;
        if (modes[modeIndex]) {
          setCurrentMode(modes[modeIndex].id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closePopup]);

  const renderCurrentMode = () => {
    switch (currentMode) {
      case 'extraction':
        return <ColonialExtraction showPopup={showPopup} />;
      case 'parallel':
        return <ParallelHistories showPopup={showPopup} />;
      case 'counter':
        return <CounterNarrative showPopup={showPopup} />;
      case 'decolonization':
        return <DecolonizationDynamics showPopup={showPopup} />;
      case 'solidarity':
        return <SolidarityNetworks showPopup={showPopup} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <AnimatedBackground />
      
      <div className={styles.content}>
        <header className={styles.header}>
          <h1>Global South History Laboratory</h1>
          <p className={styles.subtitle}>
            Explore resistance, resilience, and revolution through interactive learning
          </p>
          <p className={styles.description}>
            Decolonizing historical narratives through active engagement
          </p>
        </header>

        <div className={styles.modeSelector}>
          {modes.map((mode) => (
            <button
              key={mode.id}
              className={`${styles.modeBtn} ${currentMode === mode.id ? styles.active : ''}`}
              onClick={() => handleModeSwitch(mode.id)}
            >
              <span className={styles.modeIcon}>{mode.icon}</span>
              <span className={styles.modeLabel}>{mode.label}</span>
            </button>
          ))}
        </div>

        <div className={styles.learningArea}>
          {renderCurrentMode()}
        </div>
      </div>

      <ProgressBar 
        currentMode={currentMode} 
        onModeChange={handleModeSwitch} 
      />
      
      <HelpButton onClick={showHelp} />

      {popupContent && (
        <InfoPopup content={popupContent} onClose={closePopup} />
      )}
    </div>
  );
};

export default GSHLab;