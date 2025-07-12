// types/globalSouthHistory.ts

export interface ExtractionPeriod {
  id: string;
  label: string;
  timeRange: string;
  totalExtracted: string;
  livesLost: string;
  resources: string;
  flows: ExtractionFlow[];
}

export interface ExtractionFlow {
  from: string;
  to: string;
  resource: string;
  amount: string;
}

export interface ColonyNode {
  id: string;
  name: string;
  position: { top: string; left: string };
  icon: string;
  resources: string[];
  colonizers: string[];
  impact: string;
  resistance: string;
}

export interface MetropoleNode {
  id: string;
  name: string;
  position: { top: string; left: string };
  icon: string;
}

export interface HistoricalEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  type: 'resistance' | 'independence' | 'cultural' | 'economic';
  icon: string;
  region: string;
  connections?: string[];
  details?: EventDetails;
}

export interface EventDetails {
  title: string;
  content: string;
  causes?: string[];
  keyFigures?: KeyFigure[];
  impact?: string[];
  globalConnections?: string;
}

export interface KeyFigure {
  name: string;
  role: string;
}

export interface NarrativeSource {
  id: string;
  category: 'colonial' | 'indigenous' | 'scholarly' | 'material';
  title: string;
  icon: string;
  perspective: string;
  text: string;
  bias: number;
}

export interface DecolonizationFactors {
  intPressure: number;
  armedResistance: number;
  civilDisobedience: number;
  econPressure: number;
  eliteNegotiation: number;
}

export interface DecolonizationOutcome {
  timeline: string;
  violenceLevel: string;
  stabilityLevel: string;
  narrative: string;
  keyEvents: string[];
}

export interface DecolonizationPreset {
  id: string;
  name: string;
  factors: DecolonizationFactors;
  description: string;
}

export interface NetworkNode {
  id: string;
  name: string;
  type: 'leader' | 'movement' | 'conference';
  position: { top: string; left: string };
  details?: NetworkNodeDetails;
}

export interface NetworkNodeDetails {
  title: string;
  content: string;
  achievements?: string[];
  philosophy?: string[];
  connections?: string[];
  legacy?: string;
}

export interface NetworkConnection {
  from: string;
  to: string;
  type: 'ideological' | 'conference' | 'support' | 'personal' | 'movement';
  strength: number;
  description: string;
}

export interface GlobalSouthMode {
  id: 'extraction' | 'parallel' | 'counter' | 'decolonization' | 'solidarity';
  label: string;
  icon: string;
}
