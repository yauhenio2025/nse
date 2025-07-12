// src/data/gsh/parallelHistories.ts

import { HistoricalEvent, EventDetails } from '../types/globalSouthHistory';

export const regions = [
  { id: 'south-asia', name: 'South Asia', icon: '🇮🇳' },
  { id: 'africa', name: 'Africa', icon: '🌍' },
  { id: 'latin-america', name: 'Latin America', icon: '🌎' },
  { id: 'southeast-asia', name: 'Southeast Asia', icon: '🌏' }
];

export const yearMarkers = ['1857', '1884', '1919', '1955', '1960'];

export const historicalEvents: HistoricalEvent[] = [
  // South Asia Events
  {
    id: 'sepoy-mutiny',
    year: '1857',
    title: 'Sepoy Rebellion',
    description: 'First war of independence against British rule',
    type: 'resistance',
    icon: '⚔️',
    region: 'south-asia',
    connections: ['Global 1848 revolutions']
  },
  {
    id: 'indian-national-congress',
    year: '1885',
    title: 'Indian National Congress',
    description: 'Political awakening and organized resistance',
    type: 'cultural',
    icon: '🎭',
    region: 'south-asia'
  },
  {
    id: 'jallianwala',
    year: '1919',
    title: 'Jallianwala Bagh',
    description: 'Massacre sparks mass movement',
    type: 'resistance',
    icon: '⚔️',
    region: 'south-asia'
  },
  {
    id: 'quit-india',
    year: '1942',
    title: 'Quit India Movement',
    description: 'Final push for independence',
    type: 'independence',
    icon: '🕊️',
    region: 'south-asia'
  },
  {
    id: 'partition',
    year: '1947',
    title: 'Independence & Partition',
    description: 'Freedom with tragic division',
    type: 'independence',
    icon: '🕊️',
    region: 'south-asia'
  },

  // Africa Events
  {
    id: 'ashanti-wars',
    year: '1823-1900',
    title: 'Ashanti Resistance',
    description: 'Century-long resistance to British',
    type: 'resistance',
    icon: '⚔️',
    region: 'africa'
  },
  {
    id: 'berlin-conference',
    year: '1884',
    title: 'Berlin Conference',
    description: 'Africa divided without African input',
    type: 'economic',
    icon: '💰',
    region: 'africa'
  },
  {
    id: 'ethiopia-adwa',
    year: '1896',
    title: 'Battle of Adwa',
    description: 'Ethiopia defeats Italy, maintains independence',
    type: 'resistance',
    icon: '⚔️',
    region: 'africa'
  },
  {
    id: 'pan-african',
    year: '1919',
    title: 'Pan-African Congress',
    description: 'Diaspora and continent unite',
    type: 'cultural',
    icon: '🎭',
    region: 'africa'
  },
  {
    id: 'year-of-africa',
    year: '1960',
    title: 'Year of Africa',
    description: '17 nations gain independence',
    type: 'independence',
    icon: '🕊️',
    region: 'africa'
  },

  // Latin America Events
  {
    id: 'haitian-revolution',
    year: '1791-1804',
    title: 'Haitian Revolution',
    description: 'First successful slave revolt',
    type: 'independence',
    icon: '🕊️',
    region: 'latin-america'
  },
  {
    id: 'mexico-reform',
    year: '1857',
    title: 'War of Reform',
    description: 'Mexico fights for secular state',
    type: 'resistance',
    icon: '⚔️',
    region: 'latin-america'
  },
  {
    id: 'cuba-independence',
    year: '1895',
    title: 'Cuban War of Independence',
    description: 'José Martí leads liberation struggle',
    type: 'independence',
    icon: '🕊️',
    region: 'latin-america'
  },
  {
    id: 'mexican-revolution',
    year: '1910',
    title: 'Mexican Revolution',
    description: 'Zapata: "Land and Liberty!"',
    type: 'resistance',
    icon: '⚔️',
    region: 'latin-america'
  },
  {
    id: 'cuba-revolution',
    year: '1959',
    title: 'Cuban Revolution',
    description: 'Socialist transformation in the Americas',
    type: 'independence',
    icon: '🕊️',
    region: 'latin-america'
  },

  // Southeast Asia Events
  {
    id: 'java-war',
    year: '1825-1830',
    title: 'Java War',
    description: 'Prince Diponegoro\'s resistance',
    type: 'resistance',
    icon: '⚔️',
    region: 'southeast-asia'
  },
  {
    id: 'philippines-revolution',
    year: '1896',
    title: 'Philippine Revolution',
    description: 'First anti-colonial revolution in Asia',
    type: 'resistance',
    icon: '⚔️',
    region: 'southeast-asia'
  },
  {
    id: 'indonesia-awakening',
    year: '1908',
    title: 'Budi Utomo',
    description: 'Indonesian national awakening begins',
    type: 'cultural',
    icon: '🎭',
    region: 'southeast-asia'
  },
  {
    id: 'vietnam-independence',
    year: '1945',
    title: 'Vietnamese Independence',
    description: 'Ho Chi Minh declares independence',
    type: 'independence',
    icon: '🕊️',
    region: 'southeast-asia'
  },
  {
    id: 'bandung',
    year: '1955',
    title: 'Bandung Conference',
    description: 'Non-aligned movement born',
    type: 'cultural',
    icon: '🎭',
    region: 'southeast-asia'
  }
];

export const eventDetails: Record<string, EventDetails> = {
  'sepoy-mutiny': {
    title: '1857 Sepoy Rebellion / First War of Independence',
    content: 'What British historians called the "Sepoy Mutiny" was actually the first major unified resistance against colonial rule in India.',
    causes: [
      'Enfield rifle cartridges rumored to be greased with cow and pig fat',
      'Doctrine of Lapse annexing princely states',
      'Economic exploitation and high taxation',
      'Cultural insensitivity and missionary activities'
    ],
    keyFigures: [
      { name: 'Mangal Pandey', role: 'First martyr, sparked the rebellion' },
      { name: 'Rani Lakshmibai', role: 'Queen of Jhansi, warrior leader' },
      { name: 'Bahadur Shah Zafar', role: 'Last Mughal Emperor, symbolic leader' },
      { name: 'Tantia Tope', role: 'Brilliant military strategist' }
    ],
    impact: [
      'End of East India Company rule',
      'Beginning of direct Crown rule',
      'Birth of organized nationalist movement',
      'Inspiration for future independence struggles'
    ],
    globalConnections: 'The rebellion coincided with global upheavals of 1848-1857, including European revolutions and the Taiping Rebellion in China.'
  },
  'bandung': {
    title: '1955 Bandung Conference - Birth of the Third World',
    content: '29 newly independent Asian and African nations met in Bandung, Indonesia, representing 1.5 billion people - over half the world\'s population.',
    keyFigures: [
      { name: 'Sukarno', role: 'Host and visionary' },
      { name: 'Nehru', role: 'Non-alignment advocate' },
      { name: 'Nasser', role: 'Arab nationalism leader' },
      { name: 'Zhou Enlai', role: 'Communist representation' },
      { name: 'Nkrumah', role: 'Pan-African voice' }
    ],
    impact: [
      'Created the Non-Aligned Movement',
      'Challenged bipolar Cold War order',
      'Asserted right to independent development',
      'Established South-South cooperation',
      'Inspired decolonization movements globally'
    ]
  },
  'haitian-revolution': {
    title: '1791-1804 Haitian Revolution',
    content: 'The only successful slave revolt in history that created an independent nation.',
    keyFigures: [
      { name: 'Toussaint L\'Ouverture', role: 'Military genius and statesman' },
      { name: 'Jean-Jacques Dessalines', role: 'First ruler of independent Haiti' },
      { name: 'Henri Christophe', role: 'Revolutionary general and king' }
    ],
    impact: [
      'Terrified slaveholding classes worldwide',
      'Inspired slave rebellions across Americas',
      'Forced Napoleon to sell Louisiana to USA',
      'Proved African military and political capability'
    ]
  }
};

export const crossRegionalConnections = {
  '1857': [
    { region: 'India', event: 'Sepoy Rebellion against British' },
    { region: 'Mexico', event: 'War of Reform (liberals vs conservatives)' },
    { region: 'China', event: 'Taiping Rebellion continues' },
    { region: 'USA', event: 'Build-up to Civil War' }
  ],
  '1919-1920': [
    { region: 'India', event: 'Jallianwala Bagh massacre → Non-cooperation' },
    { region: 'Egypt', event: '1919 Revolution against British' },
    { region: 'Korea', event: 'March 1st Movement' },
    { region: 'Pan-Africa', event: 'First Pan-African Congress in Paris' }
  ],
  '1955-1960': [
    { region: 'Bandung', event: '29 nations unite' },
    { region: 'Egypt', event: 'Suez Crisis - Egypt nationalizes canal' },
    { region: 'Ghana', event: 'First sub-Saharan nation independence' },
    { region: 'Africa', event: '17 nations gain independence in 1960' }
  ]
};