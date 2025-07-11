// Shared type definitions for NSE data

export interface NSEConcept {
  id: string;
  name: string;
  description: string;
  formula?: string;
  examples: string[];
  relatedConcepts?: string[];
}

export interface DevelopmentStage {
  name: string;
  gdpRange: [number, number];
  characteristics: string[];
  typicalIndustries: string[];
  challenges: string[];
  opportunities: string[];
}

export interface PolicyIntervention {
  type: 'facilitating' | 'distorting';
  name: string;
  description: string;
  effects: {
    shortTerm: string;
    longTerm: string;
  };
  examples: string[];
}

// Educational feedback types
export interface LearningObjective {
  concept: string;
  understanding: 'basic' | 'intermediate' | 'advanced';
  nextSteps: string[];
}

export interface Feedback {
  correct: boolean;
  explanation: string;
  concept: string;
  deepDive?: string;
  relatedExample?: string;
}