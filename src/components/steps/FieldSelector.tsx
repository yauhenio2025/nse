import React from 'react';
import { FIELDS } from '@/data/fields';
import './FieldSelector.css';

interface FieldSelectorProps {
  onFieldSelect: (fieldId: string) => void;
  selectedField: string;
  onNext: () => void;
}

export const FieldSelector: React.FC<FieldSelectorProps> = ({
  onFieldSelect,
  selectedField,
  onNext
}) => {
  const handleFieldClick = (fieldId: string) => {
    onFieldSelect(fieldId);
  };

  const handleProceed = () => {
    if (selectedField) {
      onNext();
    }
  };

  return (
    <div className="field-selector-container">
      <h2>Select Your Academic Field</h2>
      <p>Choose the discipline for which you want to create interactive learning materials.</p>
      
      <div className="field-selector">
        {FIELDS.map((field) => (
          <div
            key={field.id}
            className={`field-option ${selectedField === field.id ? 'selected' : ''}`}
            onClick={() => handleFieldClick(field.id)}
          >
            <div className="field-icon">{field.icon}</div>
            <h3>{field.name}</h3>
            <p>{field.description}</p>
          </div>
        ))}
      </div>
      
      {selectedField && (
        <div className="action-buttons">
          <button className="btn" onClick={handleProceed}>
            Proceed to Upload Materials
          </button>
        </div>
      )}
    </div>
  );
};