// src/topic/gsh/ProgressBar.tsx

import React from 'react';
import styles from './ProgressBar.module.css';

interface Props {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<Props> = ({ currentStep, totalSteps }) => {
  return (
    <div className={styles.progressBar}>
      {Array.from({ length: totalSteps }, (_, i) => (
        <div
          key={i}
          className={`${styles.progressStep} ${i < currentStep ? styles.completed : ''}`}
        >
          <span>{i + 1}</span>
        </div>
      ))}
      <span className={styles.progressLabel}>Your Learning Journey</span>
    </div>
  );
};

export default ProgressBar;