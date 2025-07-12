// src/topic/gsh/components/ProgressBar.tsx

import React from 'react';
import styles from './ProgressBar.module.css';
import { GlobalSouthMode } from '../../../types/globalSouthHistory';

interface Props {
  currentMode: GlobalSouthMode['id'];
  onModeChange: (mode: GlobalSouthMode['id']) => void;
}

const modes: { id: GlobalSouthMode['id']; label: string }[] = [
  { id: 'extraction', label: 'Extraction' },
  { id: 'parallel', label: 'Parallel' },
  { id: 'counter', label: 'Counter' },
  { id: 'decolonization', label: 'Decolonization' },
  { id: 'solidarity', label: 'Solidarity' }
];

const ProgressBar: React.FC<Props> = ({ currentMode, onModeChange }) => {
  const getCurrentStepIndex = (): number => {
    return modes.findIndex(mode => mode.id === currentMode);
  };

  const getStepClass = (index: number): string => {
    const currentIndex = getCurrentStepIndex();
    
    if (index < currentIndex) {
      return `${styles.progressStep} ${styles.completed}`;
    } else if (index === currentIndex) {
      return `${styles.progressStep} ${styles.current}`;
    } else {
      return styles.progressStep;
    }
  };

  const handleStepClick = (index: number) => {
    onModeChange(modes[index].id);
  };

  return (
    <div className={styles.progressBar}>
      {modes.map((mode, index) => (
        <div
          key={mode.id}
          className={getStepClass(index)}
          onClick={() => handleStepClick(index)}
          title={`${mode.label} - Step ${index + 1}`}
        >
          <span>{index + 1}</span>
        </div>
      ))}
      <span className={styles.progressLabel}>Your Learning Journey</span>
    </div>
  );
};

export default ProgressBar;