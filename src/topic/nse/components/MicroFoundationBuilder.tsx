import React, { useState } from 'react';
import { 
  elements, 
  checkCombination,
  type Element,
  type CombinationResult 
} from '../../../data/nse/microFoundationData';
import './MicroFoundationBuilder.css';

const MicroFoundationBuilder: React.FC = () => {
  const [draggedElement, setDraggedElement] = useState<Element | null>(null);
  const [droppedElements, setDroppedElements] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [currentResult, setCurrentResult] = useState<CombinationResult | null>(null);
  const [isDragActive, setIsDragActive] = useState(false);

  const handleDragStart = (element: Element) => {
    setDraggedElement(element);
  };

  const handleDragEnd = () => {
    setDraggedElement(null);
    setIsDragActive(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = () => {
    setIsDragActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(false);
    
    if (draggedElement && !droppedElements.includes(draggedElement.id)) {
      const newElements = [...droppedElements, draggedElement.id];
      setDroppedElements(newElements);
      checkCombinationResult(newElements);
    }
  };

  const removeElement = (elementId: string) => {
    const newElements = droppedElements.filter(id => id !== elementId);
    setDroppedElements(newElements);
    checkCombinationResult(newElements);
  };

  const checkCombinationResult = (elementIds: string[]) => {
    const result = checkCombination(elementIds);
    
    if (result) {
      setCurrentResult(result);
      setShowResult(true);
    } else {
      setShowResult(false);
      setCurrentResult(null);
    }
  };

  const reset = () => {
    setDroppedElements([]);
    setShowResult(false);
    setCurrentResult(null);
  };

  const getElementById = (id: string) => elements.find(el => el.id === id);

  // Group elements by category
  const elementsByCategory = elements.reduce((acc, element) => {
    if (!acc[element.category]) {
      acc[element.category] = [];
    }
    acc[element.category].push(element);
    return acc;
  }, {} as Record<string, Element[]>);

  const categoryTitles: Record<string, string> = {
    endowment: 'Factor Endowments',
    infrastructure: 'Infrastructure',
    government: 'Government Policy',
    market: 'Market Access',
    time: 'Dynamic Factors'
  };

  return (
    <div className="micro-foundation-builder">
      <h2 className="module-title">Combine Economic Elements to Discover NSE Principles</h2>
      
      {/* Elements organized by category */}
      {Object.entries(elementsByCategory).map(([category, categoryElements]) => (
        <div key={category} className="element-category">
          <h3 className="category-title">{categoryTitles[category] || category}</h3>
          <div className="elements-grid">
            {categoryElements.map((element) => (
              <div
                key={element.id}
                className="element-card"
                draggable
                onDragStart={() => handleDragStart(element)}
                onDragEnd={handleDragEnd}
              >
                <div className="element-icon">{element.icon}</div>
                <h3>{element.name}</h3>
                <p>{element.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      {/* Drop Zone */}
      <div 
        className={`combination-zone ${isDragActive ? 'drag-active' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {droppedElements.length === 0 ? (
          <p className="placeholder-text">Drag elements here to combine them...</p>
        ) : (
          <div className="dropped-elements">
            {droppedElements.map(elementId => {
              const element = getElementById(elementId);
              if (!element) return null;
              
              return (
                <div key={elementId} className="dropped-element">
                  <button 
                    className="remove-btn" 
                    onClick={() => removeElement(elementId)}
                  >
                    &times;
                  </button>
                  <div className="element-icon">{element.icon}</div>
                  <h4>{element.name}</h4>
                </div>
              );
            })}
          </div>
        )}
      </div>
      
      {/* Controls */}
      <div className="controls">
        <button className="control-btn" onClick={reset}>
          Reset
        </button>
      </div>
      
      {/* Results */}
      {showResult && currentResult && (
        <div className="result-display">
          <h3>Discovery: {currentResult.result}</h3>
          <p>{currentResult.explanation}</p>
          
          {currentResult.formula && (
            <div className="formula">
              <strong>Economic Formula:</strong>
              <p>{currentResult.formula}</p>
            </div>
          )}
          
          {currentResult.examples && (
            <div className="examples">
              <strong>Real-World Examples:</strong>
              <p>{currentResult.examples}</p>
            </div>
          )}
          
          {currentResult.principle && (
            <div className="principle">
              <strong>NSE Principle:</strong>
              <p>{currentResult.principle}</p>
            </div>
          )}
          
          {currentResult.viability && (
            <div className={`viability-indicator ${currentResult.viability}`}>
              {currentResult.viability === 'viable' && 'Economically Viable'}
              {currentResult.viability === 'non-viable' && 'Not Viable'}
              {currentResult.viability === 'conditional' && 'Conditionally Viable'}
            </div>
          )}
          
          {currentResult.nextQuestion && (
            <div className="next-question">
              <strong>Think About:</strong>
              <p>{currentResult.nextQuestion}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MicroFoundationBuilder;