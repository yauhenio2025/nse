// src/data/gsh/counterNarratives.ts

import { NarrativeSource } from '../types/globalSouthHistory';

export const narrativeSources: NarrativeSource[] = [
  // Colonial Archives
  {
    id: 'colonial-report',
    category: 'colonial',
    title: 'British Colonial Office Report (1920)',
    icon: '📜',
    perspective: 'Colonial Administrative',
    text: 'The 1857 disturbances began when misguided sepoys refused to use new rifle cartridges. What followed was a mutiny that threatened the civilizing mission of the Empire. British forces acted swiftly to restore order and protect loyal subjects from the barbarism of the rebels. The subsequent reorganization under Crown rule brought more efficient governance.',
    bias: 20
  },
  {
    id: 'missionary',
    category: 'colonial',
    title: 'Missionary Diary (1885)',
    icon: '✝️',
    perspective: 'Christian Missionary',
    text: 'The rebellion of 1857 was a tragic setback for the spread of Christian civilization. Native soldiers, inflamed by heathen superstitions about cartridge grease, turned against their benefactors. We witnessed scenes of savagery that confirmed the need for continued missionary work to uplift these benighted souls.',
    bias: 25
  },
  {
    id: 'trading-company',
    category: 'colonial',
    title: 'East India Company Records (1857)',
    icon: '💰',
    perspective: 'East India Company',
    text: 'The 1857 uprising disrupted profitable trade networks built over centuries. Ungrateful sepoys, who had benefited from Company employment, destroyed infrastructure and attacked commercial centers. The losses in revenue and property were substantial, necessitating military action to protect investments.',
    bias: 15
  },

  // Indigenous Voices
  {
    id: 'oral-history',
    category: 'indigenous',
    title: 'Oral History: Village Elder (1975)',
    icon: '🗣️',
    perspective: 'Indigenous Memory',
    text: 'Our elders spoke of 1857 as the year the earth trembled with righteous anger. Villages that had never united came together - Hindu and Muslim, prince and peasant - to fight the firangis who stole our wealth and insulted our gods. Though we lost, that year planted seeds of freedom that would grow for generations.',
    bias: 80
  },
  {
    id: 'resistance-leader',
    category: 'indigenous',
    title: 'Resistance Leader\'s Letters (1858)',
    icon: '✊',
    perspective: 'Resistance Letter (1858)',
    text: 'Brothers and sisters, we fight not merely against greased cartridges but against the systematic plunder of Hindustan. The Company has destroyed our industries, stolen our revenues, and imposed their alien rule. Every village must rise! Every hand must resist! Our children deserve to inherit a free motherland.',
    bias: 90
  },
  {
    id: 'folk-songs',
    category: 'indigenous',
    title: 'Folk Songs & Poetry (collected 1950s)',
    icon: '🎵',
    perspective: 'Folk Traditions',
    text: 'The songs of 1857 still echo in our villages: "Firangi came with sweet words / But bitter was their rule / They took our sons for their wars / Our daughters for their shame / Rise, O soil of Bharat / Your children call for freedom!"',
    bias: 85
  },

  // Contemporary Scholars
  {
    id: 'postcolonial',
    category: 'scholarly',
    title: 'Postcolonial Historian (2010)',
    icon: '📚',
    perspective: 'Critical Historical Analysis',
    text: '1857 represents a watershed in anti-colonial resistance, systematically misrepresented in imperial historiography as a "mutiny." This was a popular uprising uniting diverse social groups against economic exploitation, cultural imperialism, and political subjugation. The rebellion\'s suppression involved mass atrocities erased from colonial accounts.',
    bias: 70
  },
  {
    id: 'subaltern',
    category: 'scholarly',
    title: 'Subaltern Studies Scholar (1995)',
    icon: '🎓',
    perspective: 'Subaltern Studies',
    text: 'Reading 1857 "against the grain" reveals voices colonial archives sought to silence. Peasant participation shows this was not merely a sepoy mutiny but a broader social revolution. Women like Rani Lakshmibai challenged both colonial and patriarchal structures. The uprising\'s failure led to deeper entrenchment of colonial racial hierarchies.',
    bias: 75
  },
  {
    id: 'feminist',
    category: 'scholarly',
    title: 'Feminist Historian (2018)',
    icon: '♀️',
    perspective: 'Feminist Historical Reading',
    text: 'Women\'s roles in 1857 have been systematically erased or romanticized. Beyond warrior queens, thousands of ordinary women supported the rebellion through intelligence networks, supplies, and direct combat. Colonial repression specifically targeted women to break community resistance. Gender-based violence was a tool of imperial control.',
    bias: 78
  },

  // Material Evidence
  {
    id: 'artifacts',
    category: 'material',
    title: 'Archaeological Findings (2018)',
    icon: '🏺',
    perspective: 'Archaeological Evidence',
    text: 'Material evidence from 1857 sites reveals the scale of violence on both sides. Excavations show hasty fortifications, mass graves, and burned settlements. Artifact distributions suggest broader participation than written records indicate. Weapon caches found in villages contradict colonial claims of a purely military mutiny.',
    bias: 65
  },
  {
    id: 'economic-data',
    category: 'material',
    title: 'Economic Records Analysis (2020)',
    icon: '📊',
    perspective: 'Economic Analysis',
    text: 'Economic data from 1850s India shows systematic deindustrialization and wealth extraction preceding 1857. Tax records reveal crushing revenue demands. Export data shows raw material drain and manufactured goods dumping. The rebellion coincided with widespread economic distress, supporting thesis of economic causation.',
    bias: 68
  },
  {
    id: 'photographs',
    category: 'material',
    title: 'Historical Photographs (1860s)',
    icon: '📷',
    perspective: 'Visual Documentation',
    text: 'Contemporary photographs, though staged by colonial authorities, inadvertently reveal truths. Images meant to show "savage rebels" instead document dignified resistance fighters. Photos of executions and destroyed cities evidence colonial brutality. The camera, meant to serve empire, became witness against it.',
    bias: 60
  }
];

export const narrativeComparison = {
  agreements: [
    'A major uprising occurred in 1857',
    'It began with sepoys but spread wider',
    'The cartridge issue was a trigger',
    'It was ultimately suppressed by British forces'
  ],
  disagreements: [
    {
      aspect: 'Nature',
      colonial: 'Mutiny/Betrayal',
      indigenous: 'War of Independence',
      critical: 'Popular Uprising'
    },
    {
      aspect: 'Causes',
      colonial: 'Religious superstition',
      indigenous: 'Oppression & exploitation',
      critical: 'Structural colonialism'
    },
    {
      aspect: 'Participants',
      colonial: 'Misguided sepoys',
      indigenous: 'United Indians',
      critical: 'Cross-class alliance'
    },
    {
      aspect: 'Violence',
      colonial: 'Rebel savagery',
      indigenous: 'Justified resistance',
      critical: 'Colonial state terrorism'
    },
    {
      aspect: 'Outcome',
      colonial: 'Order restored',
      indigenous: 'Seeds of freedom planted',
      critical: 'Deepened racial control'
    }
  ]
};