'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MainLayout } from '@/components/layout/MainLayout';
import { ProgressBar } from '@/components/common/ProgressBar';
import { FieldSelector } from '@/components/steps/FieldSelector';
import { FileUpload } from '@/components/steps/FileUpload';
import { ModuleSelector } from '@/components/steps/ModuleSelector';
import { SchemaGeneration } from '@/components/steps/SchemaGeneration';
import { ExpertReview } from '@/components/steps/ExpertReview';
import { DeployedComponents } from '@/components/steps/DeployedComponents';
import './page.css';

const STEPS = [
  { number: 1, label: 'Field' },
  { number: 2, label: 'Upload' },
  { number: 3, label: 'Modules' },
  { number: 4, label: 'Schema' },
  { number: 5, label: 'Review' },
  { number: 6, label: 'Deploy' }
];

export default function Home() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedField, setSelectedField] = useState<string>('');
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);
  const [selectedModules, setSelectedModules] = useState<string[]>([]);

  const handleFieldSelect = (fieldId: string) => {
    setSelectedField(fieldId);
  };

  const handleNextStep = () => {
    // Special handling for Expert Review step
    if (currentStep === 5 && selectedField) {
      // Navigate directly to the appropriate lab
      router.push(`/topic/${selectedField}`);
    } else if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <FieldSelector
            onFieldSelect={handleFieldSelect}
            selectedField={selectedField}
            onNext={handleNextStep}
          />
        );
      case 2:
        return (
          <FileUpload
            selectedField={selectedField}
            onFilesUploaded={setUploadedFiles}
            onNext={handleNextStep}
            onBack={handlePreviousStep}
          />
        );
      case 3:
        return (
          <ModuleSelector
            selectedField={selectedField}
            onModulesSelected={setSelectedModules}
            selectedModules={selectedModules}
            onNext={handleNextStep}
            onBack={handlePreviousStep}
          />
        );
      case 4:
        return (
          <SchemaGeneration
            selectedField={selectedField}
            selectedModules={selectedModules}
            onNext={handleNextStep}
            onBack={handlePreviousStep}
          />
        );
      case 5:
        return (
          <ExpertReview
            selectedField={selectedField}
            selectedModules={selectedModules}
            onNext={handleNextStep}
            onBack={handlePreviousStep}
          />
        );
      case 6:
        return (
          <DeployedComponents
            selectedField={selectedField}
            selectedModules={selectedModules}
          />
        );
      default:
        return null;
    }
  };

  return (
    <MainLayout>
      <ProgressBar 
        currentStep={currentStep} 
        steps={STEPS}
        onStepClick={setCurrentStep}
      />
      <div className="content-section">
        {renderStep()}
      </div>
    </MainLayout>
  );
}