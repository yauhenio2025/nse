import React, { useState } from 'react';
import { getReviewContent } from '@/utils/reviewContent';
import './ExpertReview.css';

interface ExpertReviewProps {
  selectedField: string;
  selectedModules: string[];
  onNext: () => void;
  onBack: () => void;
}

interface EditableContent {
  coreConcepts: string;
  learningProgressions: string;
  interactiveElements: string;
}

export const ExpertReview: React.FC<ExpertReviewProps> = ({
  selectedField,
  selectedModules,
  onNext,
  onBack
}) => {
  const reviewContent = getReviewContent(selectedField, selectedModules);
  
  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [content, setContent] = useState<EditableContent>({
    coreConcepts: reviewContent.coreConcepts,
    learningProgressions: reviewContent.learningProgressions,
    interactiveElements: reviewContent.interactiveElements
  });

  const handleEdit = (section: string) => {
    setEditingSection(editingSection === section ? null : section);
  };

  const handleContentChange = (section: keyof EditableContent, value: string) => {
    setContent(prev => ({
      ...prev,
      [section]: value
    }));
  };

  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  return (
    <div className="expert-review-container">
      <h2>Expert Review & Approval</h2>
      <p>Review the generated schema and make any necessary modifications before deployment.</p>
      
      <div className="review-sections">
        <div className="schema-section">
          <h3>Core Concepts</h3>
          {editingSection === 'coreConcepts' ? (
            <textarea
              className="section-edit"
              value={stripHtml(content.coreConcepts)}
              onChange={(e) => handleContentChange('coreConcepts', e.target.value)}
              rows={10}
            />
          ) : (
            <div 
              className="section-content" 
              dangerouslySetInnerHTML={{ __html: content.coreConcepts }}
            />
          )}
          <button className="btn btn-secondary" onClick={() => handleEdit('coreConcepts')}>
            {editingSection === 'coreConcepts' ? 'Save' : 'Edit'}
          </button>
        </div>
        
        <div className="schema-section">
          <h3>Learning Progressions</h3>
          {editingSection === 'learningProgressions' ? (
            <textarea
              className="section-edit"
              value={stripHtml(content.learningProgressions)}
              onChange={(e) => handleContentChange('learningProgressions', e.target.value)}
              rows={10}
            />
          ) : (
            <div 
              className="section-content" 
              dangerouslySetInnerHTML={{ __html: content.learningProgressions }}
            />
          )}
          <button className="btn btn-secondary" onClick={() => handleEdit('learningProgressions')}>
            {editingSection === 'learningProgressions' ? 'Save' : 'Edit'}
          </button>
        </div>
        
        <div className="schema-section">
          <h3>Interactive Elements</h3>
          {editingSection === 'interactiveElements' ? (
            <textarea
              className="section-edit"
              value={stripHtml(content.interactiveElements)}
              onChange={(e) => handleContentChange('interactiveElements', e.target.value)}
              rows={10}
            />
          ) : (
            <div 
              className="section-content" 
              dangerouslySetInnerHTML={{ __html: content.interactiveElements }}
            />
          )}
          <button className="btn btn-secondary" onClick={() => handleEdit('interactiveElements')}>
            {editingSection === 'interactiveElements' ? 'Save' : 'Edit'}
          </button>
        </div>
      </div>
      
      <div className="action-buttons">
        <button className="btn btn-secondary" onClick={onBack}>Back</button>
        <button className="btn" onClick={onNext}>
          Approve & Launch Learning System
        </button>
      </div>
    </div>
  );
};