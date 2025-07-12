import React, { useState, useEffect } from 'react';
import { 
  elements, 
  checkCombination,
  type Element,
  type CombinationResult,
  type CountryCase 
} from '../../../data/nse/microFoundationData';
import './MicroFoundationBuilder.css';

const MicroFoundationBuilder: React.FC = () => {
  const [draggedElement, setDraggedElement] = useState<Element | null>(null);
  const [droppedElements, setDroppedElements] = useState<string[]>([]);
  const [currentResult, setCurrentResult] = useState<CombinationResult | null>(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [selectedCountryCase, setSelectedCountryCase] = useState<CountryCase | null>(null);
  const [showLessons, setShowLessons] = useState(false);
  const [expandedElement, setExpandedElement] = useState<string | null>(null);
  const [touchedElement, setTouchedElement] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  const handleDragStart = (element: Element) => {
    setDraggedElement(element);
    setExpandedElement(null); // Close any expanded element when dragging starts
    // Clear any pending hover timeout
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const handleDragEnd = () => {
    setDraggedElement(null);
    setIsDragActive(false);
    // Clear any pending hover timeout
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
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
    setSelectedCountryCase(null);
  };

  const checkCombinationResult = (elementIds: string[]) => {
    const result = checkCombination(elementIds);
    setCurrentResult(result);
    setSelectedCountryCase(null);
    setShowLessons(false);
  };

  const reset = () => {
    setDroppedElements([]);
    setCurrentResult(null);
    setSelectedCountryCase(null);
    setShowLessons(false);
  };

  const getElementById = (id: string) => elements.find(el => el.id === id);

  // Handle element detail interactions
  const handleElementMouseEnter = (elementId: string) => {
    if (!draggedElement && !isDragActive) {
      // Set a delay before expanding to avoid accidental expansions
      const timeout = setTimeout(() => {
        setExpandedElement(elementId);
      }, 800); // 800ms delay
      setHoverTimeout(timeout);
    }
  };

  const handleElementMouseLeave = () => {
    // Clear any pending timeout
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setExpandedElement(null);
  };

  const handleElementClick = (e: React.MouseEvent, elementId: string) => {
    e.stopPropagation();
    // Toggle on click for mobile/accessibility
    if (touchedElement === elementId) {
      setTouchedElement(null);
    } else {
      setTouchedElement(elementId);
    }
  };

  // Group elements by category
  const elementsByCategory = elements.reduce((acc, element) => {
    if (!acc[element.category]) {
      acc[element.category] = [];
    }
    acc[element.category].push(element);
    return acc;
  }, {} as Record<string, Element[]>);

  const categoryTitles: Record<string, string> = {
    endowment: '📊 Factor Endowments',
    infrastructure: '🏗️ Infrastructure',
    government: '🏛️ Government Policy',
    market: '🌐 Market Access',
    time: '⏳ Dynamic Factors'
  };

  const getOutcomeColor = (outcome?: string) => {
    switch (outcome) {
      case 'success': return 'success-outcome';
      case 'failure': return 'failure-outcome';
      case 'mixed': return 'mixed-outcome';
      default: return '';
    }
  };

  const isElementExpanded = (elementId: string) => {
    return expandedElement === elementId || touchedElement === elementId;
  };

  return (
    <div className="micro-foundation-layout">
      {/* Left Sidebar - Elements */}
      <div className="elements-sidebar">
        <h3>Economic Elements</h3>
        <p className="sidebar-instruction">Drag elements to combine →</p>
        
        {Object.entries(elementsByCategory).map(([category, categoryElements]) => (
          <div key={category} className="element-category-section">
            <h4 className="category-header">{categoryTitles[category]}</h4>
            <div className="category-elements">
              {categoryElements.map((element) => (
                <div
                  key={element.id}
                  className={`element-card-compact ${isElementExpanded(element.id) ? 'expanded' : ''} ${draggedElement?.id === element.id ? 'dragging' : ''}`}
                  draggable
                  onDragStart={() => handleDragStart(element)}
                  onDragEnd={handleDragEnd}
                  onMouseEnter={() => handleElementMouseEnter(element.id)}
                  onMouseLeave={handleElementMouseLeave}
                  onClick={(e) => handleElementClick(e, element.id)}
                >
                  <div className="element-main-content">
                    <span className="element-icon-small">{element.icon}</span>
                    <div className="element-info">
                      <h5>{element.name}</h5>
                      <p className="element-short-desc">{element.description}</p>
                    </div>
                    <span className="info-indicator">ⓘ</span>
                  </div>
                  {isElementExpanded(element.id) && element.detailedExplanation && (
                    <div className="element-detailed-info">
                      <div className="detail-divider"></div>
                      <p className="element-detailed-text">{element.detailedExplanation}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        <div className="module-header">
          <h2>🧪 Combine Economic Elements to Discover NSE Principles</h2>
          <p>Drag and drop elements to see how they interact according to New Structural Economics</p>
        </div>

        {/* Drop Zone - Prominent Position */}
        <div 
          className={`combination-zone-main ${isDragActive ? 'drag-active' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {droppedElements.length === 0 ? (
            <div className="drop-placeholder">
              <div className="placeholder-icon">🎯</div>
              <p>Drop economic elements here to explore their interactions</p>
              <p className="hint-text">Try combining "Abundant Labor" + "Scarce Capital" to start</p>
            </div>
          ) : (
            <div className="dropped-elements-grid">
              {droppedElements.map(elementId => {
                const element = getElementById(elementId);
                if (!element) return null;
                
                return (
                  <div key={elementId} className="dropped-element-card">
                    <button 
                      className="remove-element-btn" 
                      onClick={() => removeElement(elementId)}
                      title="Remove element"
                    >
                      ×
                    </button>
                    <div className="element-icon-large">{element.icon}</div>
                    <h5>{element.name}</h5>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <button className="reset-btn" onClick={reset}>
          🔄 Reset Combination
        </button>
      </div>

      {/* Right Sidebar - Results & Learning */}
      <div className={`results-sidebar ${currentResult ? 'active' : ''}`}>
        <h3>📚 Discovery Results</h3>
        
        {currentResult ? (
          <div className="result-content">
            {/* Result Header */}
            <div className={`result-header ${currentResult.viability || ''}`}>
              <h4>{currentResult.result}</h4>
              {currentResult.viability && (
                <span className={`viability-badge ${currentResult.viability}`}>
                  {currentResult.viability === 'viable' ? '✅ Economically Viable' : 
                   currentResult.viability === 'non-viable' ? '❌ Not Viable' : 
                   '⚠️ Conditional'}
                </span>
              )}
            </div>

            {/* Core Explanation */}
            <div className="result-section">
              <h5>💡 Explanation</h5>
              <p>{currentResult.explanation}</p>
            </div>

            {/* Economic Formula */}
            {currentResult.formula && (
              <div className="result-section formula-section">
                <h5>📐 Economic Formula</h5>
                <code>{currentResult.formula}</code>
              </div>
            )}

            {/* NSE Principle */}
            {currentResult.principle && (
              <div className="result-section principle-section">
                <h5>🎓 NSE Principle</h5>
                <p>{currentResult.principle}</p>
              </div>
            )}

            {/* Quantitative Evidence */}
            {currentResult.quantitativeEvidence && (
              <div className="result-section evidence-section">
                <h5>📊 Quantitative Evidence</h5>
                <p>{currentResult.quantitativeEvidence}</p>
              </div>
            )}

            {/* Historical Context */}
            {currentResult.historicalContext && (
              <div className="result-section history-section">
                <h5>📜 Historical Context</h5>
                <p>{currentResult.historicalContext}</p>
              </div>
            )}

            {/* Country Cases */}
            {currentResult.countryCases && currentResult.countryCases.length > 0 && (
              <div className="result-section country-cases-section">
                <h5>🌍 Country Examples</h5>
                <div className="country-cases-grid">
                  {currentResult.countryCases.map((countryCase, index) => (
                    <div 
                      key={index} 
                      className={`country-case-card ${getOutcomeColor(countryCase.outcome)} ${selectedCountryCase === countryCase ? 'selected' : ''}`}
                      onClick={() => setSelectedCountryCase(selectedCountryCase === countryCase ? null : countryCase)}
                    >
                      <h6>{countryCase.country}</h6>
                      <p className="period">{countryCase.period}</p>
                      <span className={`outcome-badge ${countryCase.outcome}`}>
                        {countryCase.outcome === 'success' ? '✅' : 
                         countryCase.outcome === 'failure' ? '❌' : '⚡'}
                      </span>
                    </div>
                  ))}
                </div>

                {selectedCountryCase && (
                  <div className="country-detail-panel">
                    <h6>{selectedCountryCase.country} - {selectedCountryCase.period}</h6>
                    {selectedCountryCase.gdpGrowth && (
                      <p><strong>GDP Growth:</strong> {selectedCountryCase.gdpGrowth}</p>
                    )}
                    {selectedCountryCase.exports && (
                      <p><strong>Exports:</strong> {selectedCountryCase.exports}</p>
                    )}
                    {selectedCountryCase.employment && (
                      <p><strong>Employment:</strong> {selectedCountryCase.employment}</p>
                    )}
                    {selectedCountryCase.keyData && (
                      <div className="key-data-list">
                        <strong>Key Facts:</strong>
                        <ul>
                          {selectedCountryCase.keyData.map((data, idx) => (
                            <li key={idx}>{data}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Timeline */}
            {currentResult.timeline && (
              <div className="result-section timeline-section">
                <h5>⏱️ Development Timeline</h5>
                <p>{currentResult.timeline}</p>
              </div>
            )}

            {/* Comparative Analysis */}
            {currentResult.comparativeAnalysis && (
              <div className="result-section comparative-section">
                <h5>⚖️ Comparative Analysis</h5>
                <p>{currentResult.comparativeAnalysis}</p>
              </div>
            )}

            {/* Lessons Learned Toggle */}
            {(currentResult.lessonsLearned || currentResult.commonMistakes || currentResult.successFactors) && (
              <div className="lessons-section">
                <button 
                  className="lessons-toggle-btn"
                  onClick={() => setShowLessons(!showLessons)}
                >
                  {showLessons ? '📖 Hide' : '📖 Show'} Lessons & Insights
                </button>

                {showLessons && (
                  <div className="lessons-content">
                    {currentResult.lessonsLearned && (
                      <div className="lesson-subsection">
                        <h6>✅ Key Lessons</h6>
                        <ul>
                          {currentResult.lessonsLearned.map((lesson, idx) => (
                            <li key={idx}>{lesson}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {currentResult.commonMistakes && (
                      <div className="lesson-subsection">
                        <h6>⚠️ Common Mistakes</h6>
                        <ul>
                          {currentResult.commonMistakes.map((mistake, idx) => (
                            <li key={idx}>{mistake}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {currentResult.successFactors && (
                      <div className="lesson-subsection">
                        <h6>🌟 Success Factors</h6>
                        <ul>
                          {currentResult.successFactors.map((factor, idx) => (
                            <li key={idx}>{factor}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Policy Implications */}
            {currentResult.policyImplications && (
              <div className="result-section policy-section">
                <h5>📋 Policy Implications</h5>
                <p>{currentResult.policyImplications}</p>
              </div>
            )}

            {/* Related Combinations */}
            {currentResult.relatedCombinations && (
              <div className="result-section related-section">
                <h5>🔗 Try These Next</h5>
                <ul className="related-list">
                  {currentResult.relatedCombinations.map((related, idx) => (
                    <li key={idx}>{related}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Next Question */}
            {currentResult.nextQuestion && (
              <div className="result-section next-question">
                <h5>🤔 Think About</h5>
                <p>{currentResult.nextQuestion}</p>
              </div>
            )}
          </div>
        ) : (
          <div className="no-result">
            <p>Combine elements to discover economic principles!</p>
            <div className="suggested-combinations">
              <h5>📚 Learning Pathways:</h5>
              <div className="learning-paths">
                <div className="learning-path">
                  <h6>🎯 Basic Principle Path</h6>
                  <ol>
                    <li>Labor + Capital (endowments)</li>
                    <li>Add Infrastructure</li>
                    <li>Add Time to see transformation</li>
                  </ol>
                </div>
                <div className="learning-path">
                  <h6>🌟 Success Story Path</h6>
                  <ol>
                    <li>Labor + Capital + Infrastructure</li>
                    <li>Add SEZ + Export Promotion</li>
                    <li>Add Time for full story</li>
                  </ol>
                </div>
                <div className="learning-path">
                  <h6>❌ Failure Analysis Path</h6>
                  <ol>
                    <li>Labor + Import Substitution</li>
                    <li>Natural Resources + Import Substitution</li>
                    <li>Compare with success cases</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MicroFoundationBuilder;