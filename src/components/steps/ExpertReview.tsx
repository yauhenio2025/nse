import React from 'react';
import { getReviewContent } from '@/utils/reviewContent';
import './ExpertReview.css';

interface ExpertReviewProps {
  selectedField: string;
  selectedModules: string[];
  onNext: () => void;
  onBack: () => void;
}

export const ExpertReview: React.FC<ExpertReviewProps> = ({
  selectedField,
  selectedModules,
  onNext,
  onBack
}) => {
  const reviewContent = getReviewContent(selectedField, selectedModules);

  const handleEdit = (section: string) => {
    // In a real app, this would open an editor
    alert(`Schema editor would open for ${section} section`);
  };

  return (
    <div className="expert-review-container">
      <h2>Expert Review & Approval</h2>
      <p>Review the generated schema and make any necessary modifications before deployment.</p>
      
      <div className="review-sections">
        <div className="schema-section">
          <h3>Core Concepts</h3>
          <div className="section-content">
            {reviewContent.coreConcepts}
          </div>
          <button className="btn btn-secondary" onClick={() => handleEdit('core-concepts')}>
            Edit
          </button>
        </div>
        
        <div className="schema-section">
          <h3>Learning Progressions</h3>
          <div className="section-content">
            {reviewContent.learningProgressions}
          </div>
          <button className="btn btn-secondary" onClick={() => handleEdit('progressions')}>
            Edit
          </button>
        </div>
        
        <div className="schema-section">
          <h3>Interactive Elements</h3>
          <div className="section-content">
            {reviewContent.interactiveElements}
          </div>
          <button className="btn btn-secondary" onClick={() => handleEdit('interactive')}>
            Edit
          </button>
        </div>
      </div>
      
      <div className="action-buttons">
        <button className="btn btn-secondary" onClick={onBack}>Back</button>
        <button className="btn" onClick={onNext}>
          Approve & Generate Learning System
        </button>
      </div>
    </div>
  );
};