import React, { useState } from 'react';
import './MALab.css';

// Import components with correct export names
import BaseSuperstuctureEngine from './components/BaseSuperstuctureEngine';
import ClassConsciousnessLab from './components/ClassConsciousnessLab';
import ModeOfProductionArchaeologist from './components/ModeOfProductionArchaeologist';
import SocialReproductionObservatory from './components/SocialReproductionObservatory';
import AlienationExperienceChamber from './components/AlienationExperienceChamber';

type ModuleType = 'base-superstructure' | 'class-consciousness' | 'modes-production' | 'social-reproduction' | 'alienation';

const MALab: React.FC = () => {
  const [activeModule, setActiveModule] = useState<ModuleType>('base-superstructure');
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState<React.ReactNode>(null);

  const handleShowPopup = (content: React.ReactNode) => {
    setPopupContent(content);
    setShowPopup(true);
  };

  const renderModule = () => {
    switch (activeModule) {
      case 'base-superstructure':
        return <BaseSuperstuctureEngine onShowPopup={handleShowPopup} />;
      case 'class-consciousness':
        return <ClassConsciousnessLab onShowPopup={handleShowPopup} />;
      case 'modes-production':
        return <ModeOfProductionArchaeologist onShowPopup={handleShowPopup} />;
      case 'social-reproduction':
        return <SocialReproductionObservatory onShowPopup={handleShowPopup} />;
      case 'alienation':
        return <AlienationExperienceChamber onShowPopup={handleShowPopup} />;
      default:
        return (
          <div className="module-placeholder">
            <h2>Welcome to Marxist Anthropology Laboratory</h2>
            <p>Explore the intersection of historical materialism, modes of production, and class consciousness.</p>
            <div className="module-overview">
              <div className="overview-grid">
                <div className="overview-card">
                  <h3>🏗️ Base & Superstructure</h3>
                  <p>Examine the relationship between economic base and ideological superstructure in different societies.</p>
                </div>
                <div className="overview-card">
                  <h3>⚡ Class Consciousness</h3>
                  <p>Analyze the development of class awareness and its role in social transformation.</p>
                </div>
                <div className="overview-card">
                  <h3>🔧 Modes of Production</h3>
                  <p>Archaeological investigation of different economic systems throughout history.</p>
                </div>
                <div className="overview-card">
                  <h3>🔄 Social Reproduction</h3>
                  <p>Study how societies reproduce their social relations and structures over time.</p>
                </div>
                <div className="overview-card">
                  <h3>💔 Alienation Experience</h3>
                  <p>Interactive exploration of Marx's theory of alienation in capitalist production.</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="ma-lab">
      <header className="ma-header">
        <h1>Marxist Anthropology Laboratory</h1>
        <p className="ma-subtitle">
          Historical materialism, modes of production, class consciousness
        </p>
        <p className="ma-description">
          Interactive tools for exploring Marxist analysis of social formations
        </p>
      </header>
      
      <nav className="ma-nav">
        <button 
          className={activeModule === 'base-superstructure' ? 'active' : ''}
          onClick={() => setActiveModule('base-superstructure')}
        >
          🏗️ Base & Superstructure
        </button>
        <button 
          className={activeModule === 'class-consciousness' ? 'active' : ''}
          onClick={() => setActiveModule('class-consciousness')}
        >
          ⚡ Class Consciousness
        </button>
        <button 
          className={activeModule === 'modes-production' ? 'active' : ''}
          onClick={() => setActiveModule('modes-production')}
        >
          🔧 Modes of Production
        </button>
        <button 
          className={activeModule === 'social-reproduction' ? 'active' : ''}
          onClick={() => setActiveModule('social-reproduction')}
        >
          🔄 Social Reproduction
        </button>
        <button 
          className={activeModule === 'alienation' ? 'active' : ''}
          onClick={() => setActiveModule('alienation')}
        >
          💔 Alienation
        </button>
      </nav>
      
      <main className="ma-content">
        {renderModule()}
      </main>

      {/* Info Popup */}
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="close-btn"
              onClick={() => setShowPopup(false)}
            >
              ×
            </button>
            {popupContent}
          </div>
        </div>
      )}
    </div>
  );
};

export default MALab;