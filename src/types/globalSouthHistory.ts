// src/types/globalSouthHistory.ts - Additional interfaces (if needed)

// Extend existing GlobalSouthMode interface with any new properties
export interface GlobalSouthMode {
  id: 'extraction' | 'parallel' | 'counter' | 'decolonization' | 'solidarity';
  label: string;
  icon: string;
  completed?: boolean; // For progress tracking
}

// Add progress tracking interface
export interface ProgressState {
  currentMode: GlobalSouthMode['id'];
  completedModes: Set<GlobalSouthMode['id']>;
  totalModes: number;
}

// Enhanced popup content interface
export interface PopupContent {
  title?: string;
  content: string;
  type?: 'info' | 'help' | 'comparison' | 'details';
}

// Animation control interface
export interface AnimationSettings {
  particleCount: number;
  animationSpeed: number;
  enableBlur: boolean;
  enableBackdropFilter: boolean;
}

// Network tooltip interface for SolidarityNetworks
export interface NetworkTooltip {
  visible: boolean;
  x: number;
  y: number;
  content: {
    from: string;
    to: string;
    type: string;
    description: string;
  };
}

// Enhanced connection interface
export interface NetworkConnection {
  from: string;
  to: string;
  type: 'ideological' | 'conference' | 'support' | 'personal' | 'movement';
  strength: number;
  description: string;
  visible?: boolean; // For filtering
}

// Component props interfaces
export interface ComponentProps {
  showPopup: (content: string) => void;
  isActive?: boolean;
  animationEnabled?: boolean;
}

// Help system interface
export interface HelpContent {
  id: string;
  title: string;
  content: string;
  tags: string[];
  relatedModes: GlobalSouthMode['id'][];
}

// Keyboard navigation interface
export interface KeyboardControls {
  modeKeys: Record<string, GlobalSouthMode['id']>;
  specialKeys: Record<string, () => void>;
}

// Progress tracking state interface
export interface ProgressTracker {
  visited: Set<GlobalSouthMode['id']>;
  timeSpent: Record<GlobalSouthMode['id'], number>;
  interactionsCount: Record<GlobalSouthMode['id'], number>;
  startTime: Date;
}