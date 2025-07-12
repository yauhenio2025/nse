// src/topic/gsh/GSHLab.tsx

import React, { useState, useCallback } from 'react';
import styles from './GSHLab.module.css';
import { GlobalSouthMode } from '../../types/globalSouthHistory';
import ColonialExtraction from './ColonialExtraction';
import ParallelHistories from './ParallelHistories';
import CounterNarrative from './CounterNarrative';
import DecolonizationDynamics from './DecolonizationDynamics';
import SolidarityNetworks from './SolidarityNetworks';
import AnimatedBackground from './AnimatedBackground';
import ProgressBar from './ProgressBar';
import InfoPopup from './InfoPopup';
import HelpButton from './HelpButton';

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

  const getModeIndex = (modeId: GlobalSouthMode['id']): number => {
    return modes.findIndex(mode => mode.id === modeId) + 1;
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

      <ProgressBar currentStep={getModeIndex(currentMode)} totalSteps={modes.length} />
      
      <HelpButton onClick={() => showPopup(getHelpContent())} />
      
      {popupContent && (
        <InfoPopup content={popupContent} onClose={closePopup} />
      )}
    </div>
  );
};

const getHelpContent = (): string => {
  return `
    <h2>Global South History Laboratory Guide</h2>
    
    <h3>Welcome to Your Decolonial Learning Journey</h3>
    <p>This interactive laboratory helps you understand Global South history through five interconnected modules.</p>
    
    <h3>🌍 Colonial Extraction Visualizer</h3>
    <p>Explore how colonialism systematically extracted wealth from the Global South. Click on nodes to see detailed data. Change time periods to understand the evolution of exploitation.</p>
    
    <h3>⚡ Parallel Histories Explorer</h3>
    <p>Discover how liberation struggles across the world happened simultaneously and influenced each other. Click events for details.</p>
    
    <h3>📖 Counter-Narrative Constructor</h3>
    <p>Build historical narratives from multiple perspectives to see how power shapes "truth." Select different sources and analyze bias.</p>
    
    <h3>🎯 Decolonization Dynamics Simulator</h3>
    <p>Experiment with different paths to independence. Adjust factors to see how various strategies lead to different outcomes.</p>
    
    <h3>🤝 Solidarity Networks Mapper</h3>
    <p>Trace connections between liberation leaders and movements. Click nodes to learn about key figures.</p>
  `;
};

export default GSHLab;