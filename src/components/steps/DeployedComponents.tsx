import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FIELD_DATA } from '@/data/fields';
import './DeployedComponents.css';

interface DeployedComponentsProps {
  selectedField: string;
  selectedModules: string[];
}

export const DeployedComponents: React.FC<DeployedComponentsProps> = ({
  selectedField,
  selectedModules
}) => {
  const router = useRouter();
  const [deployedModules, setDeployedModules] = useState<string[]>([]);
  const fieldData = FIELD_DATA[selectedField];

useEffect(() => {
  // Clear previous modules when selectedModules change
  setDeployedModules([]); // Added: Clear array on new selection
  
  // Simulate deployment animation
  selectedModules.forEach((moduleId, index) => {
    setTimeout(() => {
      setDeployedModules(prev => {
        // Added: Check if moduleId already exists to prevent duplicates
        if (prev.includes(moduleId)) {
          return prev;
        }
        return [...prev, moduleId];
      });
    }, (index + 1) * 300);
  });
}, [selectedModules]);


  const handleLaunch = () => {
    // Navigate to the appropriate topic page
    router.push(`/topic/${selectedField}`);
  };

  const getModule = (moduleId: string) => {
    return fieldData.modules.find(m => m.id === moduleId);
  };

  return (
    <div className="deployed-components-container">
      <h2>{fieldData.deployHeader}</h2>
      <p>{fieldData.deploySubheader}</p>
      
      <div className="components-grid">
        {deployedModules.map((moduleId) => {
          const module = getModule(moduleId);
          if (!module) return null;
          
          return (
            <div key={moduleId} className="component-preview">
              <h3>{module.title}</h3>
              <p>{module.description}</p>
              <div className="live-demo">
                <div className="demo-content">
                  <div className="loading"></div>
                  <p>{selectedField.toUpperCase()} Component Ready</p>
                </div>
              </div>
              <button className="btn btn-secondary">Preview Component</button>
            </div>
          );
        })}
      </div>
      
      <div className="action-buttons">
        <button className="btn" onClick={handleLaunch}>
          {fieldData.launchText}
        </button>
        <button className="btn btn-secondary">Export Components</button>
        <button className="btn btn-secondary" onClick={() => window.location.reload()}>
          Create Another
        </button>
      </div>
    </div>
  );
};