import React, { useState } from 'react';
import { classPositions, materialConditions, ConsciousnessEffect } from '@/data/ma/classConsciousness';
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
    onShowPopup(content);
  };

  const getConsciousnessStage = () => {
    if (consciousnessLevel < 25) return 'False Consciousness';
    if (consciousnessLevel < 50) return 'Trade Union Consciousness'; 
    if (consciousnessLevel < 75) return 'Class Consciousness';
    return 'Revolutionary Consciousness';
  };

  const getConsciousnessDescription = () => {
    const descriptions: { [key: string]: string } = {
      'False Consciousness': 'Believes capitalist ideology. Sees individual solutions to structural problems. Blames self for systemic issues.',
      'Trade Union Consciousness': 'Recognizes need for collective action on wages/conditions. Still accepts capitalist framework.',
      'Class Consciousness': 'Understands class position and exploitation. Sees capitalism as the problem, not just individual capitalists.',
      'Revolutionary Consciousness': 'Recognizes need for fundamental transformation. Class for itself, not just in itself.'
    };
    return descriptions[getConsciousnessStage()];
  };

  const analyzeClassConflict = () => {
    if (!selectedClass) {
      alert('Please select a class first!');
      return;
    }

    const currentClass = classPositions.find(c => c.id === selectedClass);
    const content = (
      <div>
        <h2>Class Conflict Analysis</h2>
        <h3>Current Position: {currentClass?.title}</h3>
        <p><strong>Material Interests:</strong></p>
        <ul>
          {currentClass?.materialInterests?.map((interest, idx) => (
            <li key={idx}>{interest}</li>
          )) || []}
        </ul>
        <p><strong>Consciousness Level:</strong> {consciousnessLevel}%</p>
        <p><strong>Revolutionary Potential:</strong> {
          consciousnessLevel > 70 ? 'High - Ready for organized action' :
          consciousnessLevel > 40 ? 'Medium - Developing awareness' :
          'Low - Focus on building class solidarity'
        }</p>
      </div>
    );
    onShowPopup(content);
  };

  const resetExperiment = () => {
    setSelectedClass(null);
    setConsciousnessLevel(10);
    setAppliedConditions([]);
  };

  return (
    <div className="consciousness-lab">
      <h2 className="section-title">🧠 Class Consciousness Laboratory</h2>
      
      <div className="social-positions">
        {classPositions.map((position) => (
          <div
            key={position.id}
            className={`class-position ${selectedClass === position.id ? 'active' : ''}`}
            onClick={() => selectClass(position.id)}
          >
            <div className="class-icon">{position.icon}</div>
            <h3>{position.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: position.description }} />
            <div className="material-interests">
              <strong>Key Interests:</strong>
              <ul>
                {(position.materialInterests || []).slice(0, 3).map((interest, idx) => (
                  <li key={idx}>{interest}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      <div className="consciousness-meter">
        <h3>Class Consciousness Level: {consciousnessLevel}%</h3>
        <div className="consciousness-bar">
          <div 
            className="consciousness-fill" 
            style={{ width: `${consciousnessLevel}%` }}
          ></div>
        </div>
        <div className="consciousness-description">
          {consciousnessLevel < 25 && "False consciousness dominates - individual explanations for collective problems"}
          {consciousnessLevel >= 25 && consciousnessLevel < 50 && "Growing awareness of shared conditions and interests"}
          {consciousnessLevel >= 50 && consciousnessLevel < 75 && "Clear understanding of class position and antagonisms"}
          {consciousnessLevel >= 75 && "Revolutionary consciousness - ready for collective action"}
        </div>
      </div>
      
      <div className="material-conditions">
        <h3>Apply Material Conditions</h3>
        <div className="conditions-grid">
          {materialConditions.map((condition) => (
            <div
              key={condition.id}
              className={`condition-btn ${appliedConditions.includes(condition.id) ? 'applied' : ''}`}
              onClick={() => applyCondition(condition.id)}
            >
              <span className="condition-icon">{condition.icon}</span>
              <strong>{condition.title}</strong>
              <p>{condition.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="lab-controls">
        <button className="control-btn" onClick={analyzeClassConflict}>
          ⚔️ Analyze Class Conflict
        </button>
        <button className="control-btn" onClick={resetExperiment}>
          🔄 Reset Experiment
        </button>
      </div>
    </div>
  );
};

export default ClassConsciousnessLab;