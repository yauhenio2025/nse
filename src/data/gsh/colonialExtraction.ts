// src/data/gsh/colonialExtraction.ts
// This file should ONLY contain data exports, no JSX

import { ExtractionPeriod, ColonyNode, MetropoleNode } from '@/types/globalSouthHistory';

export const extractionPeriods: ExtractionPeriod[] = [
  {
    id: 'early-colonial',
    label: 'Early Colonial Period',
    timeRange: '1500-1650',
    totalExtracted: '$2.4 trillion (inflation-adjusted)',
    livesLost: '15-20 million',
    resources: 'Gold, silver, spices, slaves',
    flows: [
      { from: 'americas', to: 'spain', resource: 'Gold & Silver', amount: '$800B' },
      { from: 'africa', to: 'americas', resource: 'Human Labor', amount: '12M people' },
      { from: 'asia', to: 'europe', resource: 'Spices & Silk', amount: '$600B' }
    ]
  },
  {
    id: 'mercantile',
    label: 'Mercantile Expansion',
    timeRange: '1650-1750',
    totalExtracted: '$3.8 trillion',
    livesLost: '25-30 million',
    resources: 'Sugar, tobacco, textiles, tea',
    flows: [
      { from: 'caribbean', to: 'britain', resource: 'Sugar', amount: '$1.2T' },
      { from: 'americas', to: 'spain', resource: 'Tobacco & Cotton', amount: '$900B' },
      { from: 'india', to: 'britain', resource: 'Textiles & Tea', amount: '$1.1T' }
    ]
  },
  {
    id: 'industrial-colonial',
    label: 'Industrial Colonial Period',
    timeRange: '1750-1850',
    totalExtracted: '$8.2 trillion',
    livesLost: '40-50 million',
    resources: 'Raw materials, manufactured goods markets',
    flows: [
      { from: 'india', to: 'britain', resource: 'Cotton & Opium', amount: '$3.2T' },
      { from: 'africa', to: 'europe', resource: 'Palm Oil & Minerals', amount: '$1.8T' },
      { from: 'americas', to: 'europe', resource: 'Coffee & Rubber', amount: '$2.1T' }
    ]
  },
  {
    id: 'high-imperialism',
    label: 'High Imperialism',
    timeRange: '1850-1914',
    totalExtracted: '$15.6 trillion',
    livesLost: '60-80 million',
    resources: 'Strategic minerals, agricultural products, markets',
    flows: [
      { from: 'africa', to: 'europe', resource: 'Diamonds & Gold', amount: '$4.8T' },
      { from: 'asia', to: 'europe', resource: 'Tin & Rubber', amount: '$3.9T' },
      { from: 'india', to: 'britain', resource: 'Indigo & Jute', amount: '$4.2T' },
      { from: 'americas', to: 'usa', resource: 'Copper & Oil', amount: '$2.7T' }
    ]
  }
];

export const colonyNodes: ColonyNode[] = [
  {
    id: 'india',
    name: 'India',
    position: { top: '45%', left: '75%' },
    icon: '🇮🇳',
    resources: ['Cotton', 'Opium', 'Indigo', 'Tea', 'Jute'],
    colonizers: ['Britain'],
    impact: 'GDP declined from 27% to 3% of world total. Deindustrialization destroyed textile industry. Famines killed 30M+.',
    resistance: 'Sepoy Rebellion (1857), Swadeshi movement, Non-cooperation movement, Quit India movement'
  },
  {
    id: 'congo',
    name: 'Congo',
    position: { top: '65%', left: '55%' },
    icon: '🇨🇩',
    resources: ['Rubber', 'Ivory', 'Copper', 'Diamonds'],
    colonizers: ['Belgium'],
    impact: 'Population halved under Leopold II. Forced labor system. Infrastructure built only for extraction.',
    resistance: 'Rebellions led by local chiefs, Worker strikes in mines, Anti-colonial uprisings'
  },
  {
    id: 'algeria',
    name: 'Algeria',
    position: { top: '40%', left: '52%' },
    icon: '🇩🇿',
    resources: ['Agricultural land', 'Wine', 'Phosphates'],
    colonizers: ['France'],
    impact: 'Land dispossession of indigenous population. Cultural suppression. Economic dependency.',
    resistance: 'Abd al-Qadir resistance, Mokrani Revolt, FLN liberation war'
  },
  {
    id: 'indonesia',
    name: 'Indonesia',
    position: { top: '70%', left: '85%' },
    icon: '🇮🇩',
    resources: ['Spices', 'Coffee', 'Sugar', 'Oil', 'Rubber'],
    colonizers: ['Netherlands'],
    impact: 'Cultivation System forced agricultural production. Traditional economy disrupted.',
    resistance: 'Java War, Aceh War, Padri War, Indonesian National Revolution'
  },
  {
    id: 'mexico',
    name: 'Mexico',
    position: { top: '50%', left: '20%' },
    icon: '🇲🇽',
    resources: ['Silver', 'Gold', 'Agricultural products'],
    colonizers: ['Spain'],
    impact: 'Indigenous population declined by 90%. Encomienda system. Cultural destruction.',
    resistance: 'Indigenous rebellions, Independence movements, Zapatista uprising'
  },
  {
    id: 'south-africa',
    name: 'South Africa',
    position: { top: '85%', left: '58%' },
    icon: '🇿🇦',
    resources: ['Gold', 'Diamonds', 'Agricultural land'],
    colonizers: ['Britain', 'Netherlands'],
    impact: 'Apartheid system. Land dispossession. Migrant labor system.',
    resistance: 'Zulu resistance, Boer War resistance, ANC liberation struggle'
  }
];

export const metropoleNodes: MetropoleNode[] = [
  {
    id: 'london',
    name: 'London',
    position: { top: '25%', left: '50%' },
    icon: '🇬🇧'
  },
  {
    id: 'paris',
    name: 'Paris',
    position: { top: '30%', left: '52%' },
    icon: '🇫🇷'
  },
  {
    id: 'madrid',
    name: 'Madrid',
    position: { top: '35%', left: '48%' },
    icon: '🇪🇸'
  },
  {
    id: 'amsterdam',
    name: 'Amsterdam',
    position: { top: '22%', left: '52%' },
    icon: '🇳🇱'
  },
  {
    id: 'brussels',
    name: 'Brussels',
    position: { top: '28%', left: '52%' },
    icon: '🇧🇪'
  }
];

export const globalImpactData = {
  gdpTransfer: '$45 trillion (1765-1938)',
  industrialGrowthEU: '350% increase (funded by colonial wealth)',
  colonialDecline: '75% GDP drop in colonized regions',
  developmentGap: 'Created modern North-South wealth divide'
};