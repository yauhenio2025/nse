// src/data/gsh/decolonizationDynamics.ts

import { DecolonizationPreset } from '../types/globalSouthHistory';

export const decolonizationPresets: DecolonizationPreset[] = [
  {
    id: 'india',
    name: 'India Model',
    factors: {
      intPressure: 65,
      armedResistance: 15,
      civilDisobedience: 90,
      econPressure: 45,
      eliteNegotiation: 75
    },
    description: 'Gandhi\'s non-violent resistance combined with Nehru\'s negotiations'
  },
  {
    id: 'algeria',
    name: 'Algeria Model',
    factors: {
      intPressure: 40,
      armedResistance: 95,
      civilDisobedience: 25,
      econPressure: 30,
      eliteNegotiation: 15
    },
    description: 'FLN\'s armed struggle against French colonialism'
  },
  {
    id: 'ghana',
    name: 'Ghana Model',
    factors: {
      intPressure: 75,
      armedResistance: 5,
      civilDisobedience: 85,
      econPressure: 65,
      eliteNegotiation: 90
    },
    description: 'Nkrumah\'s "Positive Action" campaign'
  },
  {
    id: 'vietnam',
    name: 'Vietnam Model',
    factors: {
      intPressure: 55,
      armedResistance: 90,
      civilDisobedience: 40,
      econPressure: 20,
      eliteNegotiation: 10
    },
    description: 'Ho Chi Minh\'s protracted people\'s war'
  }
];

export const milestones = [
  { id: 'awakening', label: 'Awakening', icon: '📢' },
  { id: 'mobilization', label: 'Mobilization', icon: '✊' },
  { id: 'recognition', label: 'Recognition', icon: '🌍' },
  { id: 'negotiations', label: 'Negotiations', icon: '🤝' },
  { id: 'independence', label: 'Independence!', icon: '🎉' }
];

export const generateOutcomeNarrative = (
  avgIntensity: number,
  factors: {
    armedResistance: number;
    civilDisobedience: number;
    eliteNegotiation: number;
    intPressure: number;
    econPressure: number;
  }
): string => {
  if (factors.armedResistance > 70 && factors.civilDisobedience < 30) {
    return 'Armed struggle dominates the independence movement. Liberation comes through military victory but at high human cost. Post-independence challenges include demobilization, reconciliation, and preventing military dominance in politics.';
  } else if (factors.civilDisobedience > 70 && factors.armedResistance < 30) {
    return 'Mass civil disobedience creates unstoppable moral pressure. The colonial power finds it impossible to govern without cooperation. Independence comes with strong civic institutions and culture of non-violent political participation.';
  } else if (factors.eliteNegotiation > 70 && avgIntensity < 50) {
    return 'Negotiated transition preserves stability but may limit transformation. Colonial structures and relationships persist. Risk of neo-colonial dependency and limited social change.';
  } else if (factors.intPressure > 70 && factors.econPressure > 70) {
    return 'International pressure and economic crisis force rapid decolonization. Independence comes quickly but possibly before strong institutions develop. External support crucial for stability.';
  } else if (factors.armedResistance > 50 && factors.civilDisobedience > 50) {
    return 'Combined strategy of armed resistance and civil disobedience. Multiple fronts pressure colonial power while maintaining domestic and international legitimacy. Complex but potentially effective path.';
  } else {
    return 'Mixed strategy combining multiple approaches. The path to independence involves negotiations, protests, international diplomacy, and selective resistance. Success depends on maintaining coalition unity and adapting to changing circumstances.';
  }
};

export const generateKeyEvents = (factors: {
  civilDisobedience: number;
  armedResistance: number;
  intPressure: number;
  econPressure: number;
  eliteNegotiation: number;
}): string[] => {
  const events: string[] = [];
  
  if (factors.civilDisobedience > 60) {
    events.push('Mass boycott of colonial goods');
    events.push('General strikes paralyze administration');
  }
  if (factors.armedResistance > 60) {
    events.push('Guerrilla warfare in rural areas');
    events.push('Sabotage of colonial infrastructure');
  }
  if (factors.intPressure > 60) {
    events.push('UN condemns colonial rule');
    events.push('International sanctions imposed');
  }
  if (factors.econPressure > 60) {
    events.push('Colonial economy becomes unprofitable');
    events.push('Metropolitan taxpayers oppose colonial wars');
  }
  if (factors.eliteNegotiation > 60) {
    events.push('Constitutional conferences begin');
    events.push('Power-sharing agreements negotiated');
  }
  
  return events;
};

export const calculateOutcome = (factors: {
  intPressure: number;
  armedResistance: number;
  civilDisobedience: number;
  econPressure: number;
  eliteNegotiation: number;
}) => {
  const violence = (factors.armedResistance * 2.5 + (100 - factors.civilDisobedience) * 0.5) / 3;
  const speed = (factors.intPressure * 1.5 + factors.econPressure + factors.armedResistance * 1.2 + factors.civilDisobedience * 0.8) / 4;
  const stability = (factors.eliteNegotiation * 1.5 + factors.civilDisobedience * 1.2 - factors.armedResistance * 0.8 + 50) / 3;
  
  let timeline: string;
  if (speed > 80) {
    timeline = '3-7 years';
  } else if (speed > 60) {
    timeline = '7-15 years';
  } else if (speed > 40) {
    timeline = '15-25 years';
  } else {
    timeline = '25-40 years';
  }
  
  let violenceLevel: string;
  if (violence > 70) {
    violenceLevel = 'High (Armed conflict)';
  } else if (violence > 40) {
    violenceLevel = 'Moderate (Some clashes)';
  } else {
    violenceLevel = 'Low (Peaceful transition)';
  }
  
  let stabilityLevel: string;
  if (stability > 70) {
    stabilityLevel = 'High (Strong institutions)';
  } else if (stability > 40) {
    stabilityLevel = 'Moderate (Some challenges)';
  } else {
    stabilityLevel = 'Low (Risk of conflict)';
  }
  
  return {
    timeline,
    violenceLevel,
    stabilityLevel,
    speed,
    violence,
    stability
  };
};