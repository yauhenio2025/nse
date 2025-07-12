// src/data/gsh/solidarityNetworks.ts

import { NetworkNode, NetworkConnection, NetworkNodeDetails } from '../types/globalSouthHistory';

export const networkNodes: NetworkNode[] = [
  // Leader Nodes
  {
    id: 'gandhi',
    name: 'Gandhi',
    type: 'leader',
    position: { top: '20%', left: '30%' }
  },
  {
    id: 'nkrumah',
    name: 'Nkrumah',
    type: 'leader',
    position: { top: '40%', left: '50%' }
  },
  {
    id: 'castro',
    name: 'Castro',
    type: 'leader',
    position: { top: '60%', left: '25%' }
  },
  {
    id: 'sukarno',
    name: 'Sukarno',
    type: 'leader',
    position: { top: '35%', left: '70%' }
  },
  {
    id: 'nyerere',
    name: 'Nyerere',
    type: 'leader',
    position: { top: '55%', left: '60%' }
  },
  {
    id: 'nasser',
    name: 'Nasser',
    type: 'leader',
    position: { top: '25%', left: '55%' }
  },
  {
    id: 'mandela',
    name: 'Mandela',
    type: 'leader',
    position: { top: '70%', left: '45%' }
  },
  {
    id: 'nehru',
    name: 'Nehru',
    type: 'leader',
    position: { top: '15%', left: '45%' }
  },

  // Movement Nodes
  {
    id: 'non-aligned',
    name: 'Non-Aligned Movement',
    type: 'movement',
    position: { top: '25%', left: '10%' }
  },
  {
    id: 'tricontinental',
    name: 'Tricontinental',
    type: 'movement',
    position: { top: '70%', left: '70%' }
  },
  {
    id: 'afro-asian',
    name: 'Afro-Asian Solidarity',
    type: 'movement',
    position: { top: '45%', left: '85%' }
  },
  {
    id: 'pan-africanism',
    name: 'Pan-Africanism',
    type: 'movement',
    position: { top: '80%', left: '30%' }
  },

  // Conference Nodes
  {
    id: 'bandung',
    name: 'Bandung 1955',
    type: 'conference',
    position: { top: '50%', left: '40%' }
  },
  {
    id: 'cairo',
    name: 'Cairo 1961',
    type: 'conference',
    position: { top: '30%', left: '35%' }
  },
  {
    id: 'havana',
    name: 'Havana 1966',
    type: 'conference',
    position: { top: '60%', left: '80%' }
  }
];

export const networkConnections: NetworkConnection[] = [
  // Ideological connections
  { from: 'gandhi', to: 'nkrumah', type: 'ideological', strength: 0.9, description: 'Non-violence philosophy' },
  { from: 'gandhi', to: 'mandela', type: 'ideological', strength: 0.8, description: 'Satyagraha influence' },
  { from: 'nkrumah', to: 'nyerere', type: 'ideological', strength: 0.9, description: 'Pan-Africanism' },
  { from: 'castro', to: 'nyerere', type: 'ideological', strength: 0.7, description: 'Socialist solidarity' },
  { from: 'nehru', to: 'nasser', type: 'ideological', strength: 0.8, description: 'Non-alignment' },
  
  // Conference connections
  { from: 'nehru', to: 'sukarno', type: 'conference', strength: 0.9, description: 'Bandung Conference' },
  { from: 'nasser', to: 'sukarno', type: 'conference', strength: 0.9, description: 'Bandung Conference' },
  { from: 'nkrumah', to: 'nasser', type: 'conference', strength: 0.8, description: 'Cairo Conference' },
  { from: 'bandung', to: 'nehru', type: 'conference', strength: 1.0, description: 'Key organizer' },
  { from: 'bandung', to: 'sukarno', type: 'conference', strength: 1.0, description: 'Host' },
  { from: 'cairo', to: 'nasser', type: 'conference', strength: 1.0, description: 'Host' },
  
  // Support connections
  { from: 'castro', to: 'mandela', type: 'support', strength: 0.8, description: 'Military training' },
  { from: 'nasser', to: 'nkrumah', type: 'support', strength: 0.7, description: 'Political support' },
  { from: 'nyerere', to: 'mandela', type: 'support', strength: 0.9, description: 'Safe haven for ANC' },
  
  // Personal connections
  { from: 'nehru', to: 'gandhi', type: 'personal', strength: 0.9, description: 'Political protégé' },
  { from: 'nkrumah', to: 'nyerere', type: 'personal', strength: 0.8, description: 'Close friendship' },
  
  // Movement connections
  { from: 'non-aligned', to: 'nehru', type: 'movement', strength: 1.0, description: 'Co-founder' },
  { from: 'non-aligned', to: 'nasser', type: 'movement', strength: 1.0, description: 'Co-founder' },
  { from: 'pan-africanism', to: 'nkrumah', type: 'movement', strength: 1.0, description: 'Leading voice' },
  { from: 'tricontinental', to: 'castro', type: 'movement', strength: 0.9, description: 'Key supporter' }
];

export const nodeDetails: Record<string, NetworkNodeDetails> = {
  gandhi: {
    title: 'Mohandas K. Gandhi (1869-1948)',
    content: 'Architect of Nonviolent Resistance',
    philosophy: [
      'Satyagraha: Truth force - resistance through non-violence',
      'Ahimsa: Non-violence as highest ethical principle',
      'Swaraj: Self-rule, both personal and political'
    ],
    achievements: [
      'South Africa struggles (1893-1915)',
      'Champaran Satyagraha (1917)',
      'Salt March (1930)',
      'Quit India Movement (1942)'
    ],
    connections: [
      'Martin Luther King Jr. - US Civil Rights',
      'Nelson Mandela - Early ANC strategy',
      'Kwame Nkrumah - Positive Action campaign',
      'Cesar Chavez - Farm workers movement'
    ],
    legacy: 'Proved that empire could be defeated without arms. His methods inspired liberation movements worldwide.'
  },
  nkrumah: {
    title: 'Kwame Nkrumah (1909-1972)',
    content: 'Father of African Independence',
    achievements: [
      'Led Ghana to independence (1957) - first sub-Saharan African nation',
      'Founded Organization of African Unity',
      'Promoted Pan-African unity',
      'Developed "African Socialism" ideology'
    ],
    philosophy: [
      '"Seek ye first the political kingdom"',
      'Neo-colonialism as last stage of imperialism',
      'United States of Africa vision',
      'African Personality concept'
    ],
    connections: [
      'Influenced by Gandhi\'s methods',
      'Close to Nyerere, Nasser, and Sékou Touré',
      'Mentored many African liberation leaders'
    ]
  },
  castro: {
    title: 'Fidel Castro (1926-2016)',
    content: 'Revolutionary Leader of Cuba',
    achievements: [
      '26th of July Movement (1953-1959)',
      'Guerrilla warfare in Sierra Maestra',
      'Overthrew Batista dictatorship (1959)',
      'Survived 600+ CIA assassination attempts'
    ],
    philosophy: [
      'Anti-imperialism',
      'International solidarity',
      '"Homeland or Death"',
      'Education and healthcare as rights'
    ],
    connections: [
      'Supported African liberation movements',
      'Cuban troops in Angola against apartheid',
      'Medical internationalism - doctors worldwide',
      'Latin American unity advocate'
    ],
    legacy: 'Symbol of resistance to US hegemony. Cuba\'s support crucial for African liberation.'
  },
  sukarno: {
    title: 'Sukarno (1901-1970)',
    content: 'Founding Father of Indonesia',
    achievements: [
      'Founded Indonesian National Party (1927)',
      'Proclaimed independence (1945)',
      'Hosted Bandung Conference (1955)',
      'Developed Pancasila philosophy'
    ],
    philosophy: [
      'Pancasila - Five Principles',
      'NASAKOM - Unity of Nationalism, Religion, and Communism',
      'Guided Democracy',
      'Third World solidarity'
    ]
  },
  nyerere: {
    title: 'Julius Nyerere (1922-1999)',
    content: 'Mwalimu - The Teacher',
    achievements: [
      'Led Tanganyika/Tanzania to independence peacefully',
      'Developed Ujamaa (African Socialism)',
      'United Tanzania from 120+ ethnic groups',
      'Made Tanzania haven for liberation movements'
    ],
    philosophy: [
      'African familyhood as basis for socialism',
      'Self-reliance (Kujitegemea)',
      'People-centered development',
      'Education for liberation'
    ],
    connections: [
      'ANC bases in Tanzania',
      'FRELIMO support against Portugal',
      'Overthrew Idi Amin in Uganda',
      'Frontline States leadership'
    ]
  },
  nehru: {
    title: 'Jawaharlal Nehru (1889-1964)',
    content: 'Architect of Non-Alignment',
    achievements: [
      'Gandhi\'s political heir',
      'First Prime Minister of India',
      'Co-founded Non-Aligned Movement',
      '"Tryst with Destiny" speech'
    ],
    philosophy: [
      'Democratic socialism',
      'Panchsheel (Five Principles)',
      'Scientific temper',
      'Unity in diversity'
    ],
    connections: [
      'Close to Nasser, Sukarno, Tito',
      'Mentored African leaders',
      'Daughter Indira continued non-aligned leadership'
    ]
  },
  nasser: {
    title: 'Gamal Abdel Nasser (1918-1970)',
    content: 'Leader of Arab Nationalism',
    achievements: [
      'Free Officers coup (1952)',
      'Suez Canal nationalization (1956)',
      'United Arab Republic attempt',
      'Aswan High Dam project'
    ],
    philosophy: [
      'Arab unity against imperialism',
      'Arab socialism',
      'Support for Palestinian cause',
      'Voice of the Arabs radio'
    ],
    legacy: 'Inspired Arab dignity and resistance. Suez Crisis marked end of European colonialism.'
  },
  mandela: {
    title: 'Nelson Mandela (1918-2013)',
    content: 'Global Icon of Liberation',
    achievements: [
      'ANC Youth League founder',
      'Defiance Campaign (1952)',
      '27 years imprisonment',
      'Negotiated transition (1990-1994)'
    ],
    philosophy: [
      'Ubuntu - human interconnectedness',
      'Reconciliation over revenge',
      'Non-racialism',
      'Constitutional democracy'
    ],
    connections: [
      'Trained in Algeria and Ethiopia',
      'Cuban military support',
      'Frontline States sanctuary',
      'Global anti-apartheid movement'
    ]
  },
  'non-aligned': {
    title: 'Non-Aligned Movement',
    content: 'Third World Unity Platform',
    achievements: [
      'Bandung Conference (1955) - spiritual foundation',
      'Belgrade Conference (1961) - formal establishment',
      '120 member states today',
      'Challenged Cold War binary'
    ],
    philosophy: [
      'Independence from power blocs',
      'Support for liberation movements',
      'Peaceful coexistence',
      'Economic justice'
    ]
  },
  'bandung': {
    title: 'Bandung Conference 1955',
    content: 'The Asian-African Conference',
    achievements: [
      '29 countries represented',
      '1.5 billion people (54% of world)',
      'First Global South summit',
      'Ten Principles adopted'
    ],
    legacy: 'The first intercontinental conference of colored peoples in history'
  }
};

export const connectionFilters = [
  { id: 'all', label: 'All Connections' },
  { id: 'ideological', label: 'Ideological Links' },
  { id: 'conference', label: 'Conference Networks' },
  { id: 'support', label: 'Material Support' },
  { id: 'personal', label: 'Personal Relations' }
];