import React, { useState, useEffect } from 'react';
import { FIELD_DATA } from '@/data/fields';
import './ModuleSelector.css';

interface ModuleSelectorProps {
  selectedField: string;
  onModulesSelected: (modules: string[]) => void;
  selectedModules: string[];
  onNext: () => void;
  onBack: () => void;
}

export const ModuleSelector: React.FC<ModuleSelectorProps> = ({
  selectedField,
  onModulesSelected,
  selectedModules,
  onNext,
  onBack
}) => {
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const fieldData = FIELD_DATA[selectedField];

  useEffect(() => {
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 2000);
  }, []);

  const toggleModule = (moduleId: string) => {
    if (selectedModules.includes(moduleId)) {
      onModulesSelected(selectedModules.filter(id => id !== moduleId));
    } else {
      onModulesSelected([...selectedModules, moduleId]);
    }
  };

  return (
    <div className="module-selector-container">
      <h2>{fieldData.modulesHeader}</h2>
      <p>{fieldData.modulesSubheader}</p>
      
      {isAnalyzing ? (
        <div className="ai-thinking">
          <div className="loading"></div>
          <span>AI is analyzing your {selectedField.toUpperCase()} texts and generating custom modules...</span>
        </div>
      ) : (
        <>
          <div className="modules-grid">
            {fieldData.modules.map((module) => (
              <div
                key={module.id}
                className={`module-card ${selectedModules.includes(module.id) ? 'selected' : ''}`}
                onClick={() => toggleModule(module.id)}
              >
                <h3>{module.title}</h3>
                <p>{module.description}</p>
                <div className="module-tags">
                  {module.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="selection-info">
            Selected: {selectedModules.length} / {fieldData.modules.length} modules
            {selectedModules.length < 5 && (
              <span className="warning"> (Select at least 5)</span>
            )}
          </div>
        </>
      )}
      
      <div className="action-buttons">
        <button className="btn btn-secondary" onClick={onBack}>Back</button>
        {selectedModules.length >= 5 && (
          <button className="btn" onClick={onNext}>
            Generate Knowledge Schema
          </button>
        )}
      </div>
    </div>
  );
};