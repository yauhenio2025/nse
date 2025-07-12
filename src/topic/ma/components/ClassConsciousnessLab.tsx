import React, { useState } from 'react';
import { classPositions, materialConditions, ConsciousnessEffect } from '../../data/ma/classConsciousness';
import './ClassConsciousnessLab.css';

interface Props {
  onShowPopup: (content: React.ReactNode) => void;
}

export const ClassConsciousnessLab: React.FC<Props> = ({ onShowPopup }) => {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [consciousnessLevel, setConsciousnessLevel] = useState(10);
  const [appliedConditions, setAppliedConditions] = useState<string[]>([]);

  const selectClass = (classId: string) => {
    setSelectedClass(classId);
    const classData = classPositions.find(c => c.id === classId);
    if (classData) {
      setConsciousnessLevel(classData.baseConsciousness);
      setAppliedConditions([]);
    }
  };

  const applyCondition = (conditionId: string) => {
    if (!selectedClass) {
      alert('Please select a class position first!');
      return;
    }

    const condition = materialConditions.find(c => c.id === conditionId);
    if (condition && !appliedConditions.includes(conditionId)) {
      const effect = condition.effects[selectedClass] || 0;
      const newLevel = Math.max(0, Math.min(100, consciousnessLevel + effect));
      setConsciousnessLevel(newLevel);
      setAppliedConditions([...appliedConditions, conditionId]);
      
      showConditionEffect(condition, effect);
    }
  };

  const showConditionEffect = (condition: any, effect: number) => {
    const effectType = effect > 0 ? 'positive' : effect < 0 ? 'negative' : 'neutral';
    const content = (
      <div className="condition-effect-popup">
        <h3>{condition.title} Applied</h3>
        <p className={`effect-${effectType}`}>
          Consciousness {effect > 0 ? 'increased' : 'decreased'} by {Math.abs(effect)}%
        </p>
        <p>{condition.analysis[selectedClass!]}</p>
      </div>
    );
    
    // Show temporary popup
    const popup = document.createElement('div');
    popup.className = 'temporary-popup';
    popup.innerHTML = content.props.children.toString();
    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 4000);
  };

  const getConsciousnessStage = () => {
    if (consciousnessLevel < 33) return 'False Consciousness';
    if (consciousnessLevel < 66) return 'Trade Union Consciousness';
    return 'Revolutionary Consciousness';
  };

  const getConsciousnessDescription = () => {
    const stage = getConsciousnessStage();
    const descriptions: { [key: string]: string } = {
      'False Consciousness': 'Accepts capitalist ideology as natural. Sees poverty as personal failure, wealth as personal virtue. May even oppose own class interests.',
      'Trade Union Consciousness': 'Recognizes need for collective action for immediate gains (wages, conditions) but doesn\'t question system itself. "A fair day\'s wage for a fair day\'s work."',
      'Revolutionary Consciousness': 'Understands capitalism as historically specific system of exploitation. Recognizes need for fundamental transformation. Class for itself, not just in itself.'
    };
    return descriptions[stage];
  };

  return (
    <div className="consciousness-lab">
      <h2 className="section-title">🧠 Trace the Development of Class Consciousness</h2>
      
      <div className="social-positions">
        {classPositions.map((position) => (
          <div
            key={position.id}
            className={`class-position ${selectedClass === position.id ? 'selected' : ''}`}
            onClick={() => selectClass(position.id)}
          >
            <h3>{position.icon} {position.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: position.description }} />
          </div>
        ))}
      </div>
      
      <div className="consciousness-spectrum">
        <div 
          className="consciousness-marker" 
          style={{ left: `${consciousnessLevel}%` }}
        />
      </div>
      <div className="spectrum-labels">
        <span>False Consciousness</span>
        <span>Trade Union Consciousness</span>
        <span>Revolutionary Consciousness</span>
      </div>
      
      <div className="material-conditions">
        {materialConditions.map((condition) => (
          <div key={condition.id} className="condition-card">
            <span className="condition-icon">{condition.icon}</span>
            <div>
              <h4>{condition.title}</h4>
              <p>{condition.description}</p>
              <button 
                className="control-btn apply-btn"
                onClick={() => applyCondition(condition.id)}
                disabled={appliedConditions.includes(condition.id)}
              >
                {appliedConditions.includes(condition.id) ? 'Applied' : 'Apply'}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="consciousness-analysis">
        <h3>Current Consciousness Analysis</h3>
        {selectedClass ? (
          <>
            <p><strong>Current Stage:</strong> {getConsciousnessStage()}</p>
            <p><strong>Consciousness Level:</strong> {consciousnessLevel}%</p>
            <p><strong>Class:</strong> {classPositions.find(c => c.id === selectedClass)?.title}</p>
            <p className="consciousness-description">{getConsciousnessDescription()}</p>
          </>
        ) : (
          <p>Select a class position to begin exploring how material conditions shape consciousness...</p>
        )}
      </div>
    </div>
  );
};