import React, { useState, useEffect } from 'react';
import { FIELD_DATA } from '@/data/fields';
import { generateSchema } from '@/utils/schemaGenerator';
import './SchemaGeneration.css';

interface SchemaGenerationProps {
  selectedField: string;
  selectedModules: string[];
  onNext: () => void;
  onBack: () => void;
}

export const SchemaGeneration: React.FC<SchemaGenerationProps> = ({
  selectedField,
  selectedModules,
  onNext,
  onBack
}) => {
  const [isGenerating, setIsGenerating] = useState(true);
  const [schema, setSchema] = useState<string>('');
  const fieldData = FIELD_DATA[selectedField];

  useEffect(() => {
    // Simulate schema generation
    setTimeout(() => {
      const generatedSchema = generateSchema(selectedField, selectedModules);
      setSchema(generatedSchema);
      setIsGenerating(false);
    }, 3000);
  }, [selectedField, selectedModules]);

  return (
    <div className="schema-generation-container">
      <h2>{fieldData.schemaHeader}</h2>
      <p>Our AI is creating a structured knowledge graph based on your selected modules.</p>
      
      {isGenerating ? (
        <div className="ai-thinking">
          <div className="loading"></div>
          <span>Analyzing document structure and generating optimal schema...</span>
        </div>
      ) : (
        <div className="schema-preview">
          <h3>Generated Schema Preview</h3>
          <div className="schema-editor">
            <pre>{schema}</pre>
          </div>
        </div>
      )}
      
      <div className="action-buttons">
        <button className="btn btn-secondary" onClick={onBack}>Back</button>
        {!isGenerating && (
          <button className="btn" onClick={onNext}>
            Review & Approve Schema
          </button>
        )}
      </div>
    </div>
  );
};