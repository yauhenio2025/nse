import React, { useState, useEffect } from 'react';
import { FIELD_DATA } from '@/data/fields';
import './FileUpload.css';

interface FileUploadProps {
  selectedField: string;
  onFilesUploaded: (files: any[]) => void;
  onNext: () => void;
  onBack: () => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  selectedField,
  onFilesUploaded,
  onNext,
  onBack
}) => {
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  
  const fieldData = FIELD_DATA[selectedField];

  const simulateUpload = () => {
    setIsUploading(true);
    const files = fieldData.files;
    
    files.forEach((file, index) => {
      setTimeout(() => {
        setUploadedFiles(prev => [...prev, file]);
        
        if (index === files.length - 1) {
          setIsUploading(false);
          onFilesUploaded(files);
        }
      }, (index + 1) * 500);
    });
  };

  return (
    <div className="file-upload-container">
      <h2>{fieldData.uploadHeader}</h2>
      <p>{fieldData.uploadSubheader}</p>
      
      <div 
        className="upload-area"
        onClick={simulateUpload}
        style={{ cursor: isUploading ? 'not-allowed' : 'pointer' }}
      >
        <div className="upload-icon">📚</div>
        <h3>Drop files here or click to upload</h3>
        <p>Supports PDF, DOCX, TXT, and EPUB formats</p>
      </div>
      
      {uploadedFiles.length > 0 && (
        <div className="uploaded-files">
          {uploadedFiles.map((file, index) => (
            <div key={index} className="file-card">
              <h4>{file.name}</h4>
              {file.author && <p className="author-info">{file.author}</p>}
              <p>{file.type} • {file.size}</p>
              <div className="file-tags">
                <span className="tag">Processed</span>
                <span className="tag">{selectedField.toUpperCase()} Core Text</span>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="action-buttons">
        <button className="btn btn-secondary" onClick={onBack}>Back</button>
        {uploadedFiles.length > 0 && (
          <button className="btn" onClick={onNext}>
            Continue to Module Selection
          </button>
        )}
      </div>
    </div>
  );
};