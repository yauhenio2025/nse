import React from 'react';
import './ProgressBar.css';

interface Step {
  number: number;
  label: string;
}

interface ProgressBarProps {
  currentStep: number;
  steps: Step[];
  onStepClick?: (step: number) => void;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ 
  currentStep, 
  steps, 
  onStepClick 
}) => {
  return (
    <div className="progress-bar">
      {steps.map((step) => (
        <div
          key={step.number}
          className={`progress-step ${
            currentStep === step.number ? 'active' : ''
          } ${currentStep > step.number ? 'completed' : ''}`}
          onClick={() => onStepClick?.(step.number)}
        >
          <div className="step-circle">{step.number}</div>
          <div className="step-label">{step.label}</div>
        </div>
      ))}
    </div>
  );
};