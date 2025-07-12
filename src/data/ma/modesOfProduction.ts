export interface Artifact {
  icon: string;
  title: string;
  mode: string;
  relations: string;
  contradiction: string;
}

export interface StrataLayer {
  id: string;
  mode: string;
  title: string;
  dateRange: string;
  style: {
    top: string;
    background: string;
  };
  artifacts: Artifact[];
  analysis: {
    forces: string;
    relations: string;
    contradictions: string[];
    resistance: string;
  };
}

export const strataLayers: StrataLayer[] = [
  {
    id: 'late-capitalism',
    mode: 'late-capitalism',
    title: 'Late Capitalism',
    dateRange: '1970s-Present',
    style: {
      top: '5%',
      background: 'rgba(50, 50, 50, 0.8)'
    },
    artifacts: [
      {
        icon: '📱',
        title: 'Smartphone (2020s)',
        mode: 'Late Capitalism',
        relations: 'Platform labor, surveillance capitalism',
        contradiction: 'Constant connectivity yet isolation'
      },
      {
        icon: '💳',
        title: 'Credit Card',
        mode: 'Financialized Capitalism',
        relations: 'Debt peonage, consumer credit',
        contradiction: 'Spending future labor today'
      },
      {
        icon: '🏢',
        title: 'Corporate Office',
        mode: 'Neoliberal Capitalism',
        relations: 'Precarious employment, gig economy',
        contradiction: 'Flexibility means insecurity'
      }
    ],
    analysis: {
      forces: 'Digital technology, automation, AI, global supply chains',
      relations: 'Platform capitalism, gig economy, financialization, debt-based consumption',
      contradictions: [
        'Technological unemployment vs. consumer purchasing power',
        'Socialized knowledge production vs. intellectual property',
        'Global production vs. national regulation',
        'Ecological limits vs. infinite growth imperative'
      ],
      resistance: 'Occupy movements, platform cooperatives, degrowth, commons movements'
    }
  },
  {
    id: 'industrial-capitalism',
    mode: 'industrial-capitalism',
    title: 'Industrial Capitalism',
    dateRange: '1750-1970',
    style: {
      top: '20%',
      background: 'rgba(60, 60, 40, 0.8)'
    },
    artifacts: [
      {
        icon: '🏭',
        title: 'Factory (1850s)',
        mode: 'Industrial Capitalism',
        relations: 'Wage labor, factory discipline',
        contradiction: 'Social production, private appropriation'
      },
      {
        icon: '⏰',
        title: 'Time Clock',
        mode: 'Industrial Capitalism',
        relations: 'Time discipline, labor commodification',
        contradiction: 'Time becomes money, life becomes work'
      },
      {
        icon: '🚂',
        title: 'Railroad',
        mode: 'Industrial Capitalism',
        relations: 'Market expansion, spatial fix',
        contradiction: 'Annihilation of space by time'
      }
    ],
    analysis: {
      forces: 'Steam power, factories, mass production, railroads',
      relations: 'Wage labor, factory discipline, bourgeoisie vs. proletariat',
      contradictions: [
        'Social production vs. private appropriation',
        'Tendency of profit rate to fall',
        'Overproduction crises',
        'Labor as commodity vs. human needs'
      ],
      resistance: 'Trade unions, socialist parties, communist revolutions, eight-hour day movement'
    }
  },
  {
    id: 'merchant-capitalism',
    mode: 'merchant-capitalism',
    title: 'Merchant Capitalism',
    dateRange: '1450-1750',
    style: {
      top: '40%',
      background: 'rgba(80, 60, 40, 0.8)'
    },
    artifacts: [
      {
        icon: '⚓',
        title: 'Ship Anchor (1600s)',
        mode: 'Merchant Capitalism',
        relations: 'Colonial trade, primitive accumulation',
        contradiction: '"Discovery" means dispossession'
      },
      {
        icon: '💰',
        title: 'Gold Coins',
        mode: 'Merchant Capitalism',
        relations: 'Money economy, market exchange',
        contradiction: 'Universal equivalent alienates'
      },
      {
        icon: '⛓️',
        title: 'Shackles',
        mode: 'Merchant Capitalism',
        relations: 'Slave trade, forced labor',
        contradiction: 'Human beings as commodities'
      }
    ],
    analysis: {
      forces: 'Long-distance trade, navigation, colonial plantations',
      relations: 'Primitive accumulation, enclosures, slavery, colonial extraction',
      contradictions: [
        'M-C-M\' circuit (money-commodity-more money)',
        'Violent separation of producers from means of production',
        'Creation of "free" labor through dispossession',
        'Accumulation through plunder and trade'
      ],
      resistance: 'Created conditions for industrial capitalism through capital accumulation and proletarianization'
    }
  },
  {
    id: 'feudalism',
    mode: 'feudalism',
    title: 'Feudalism',
    dateRange: '500-1450 CE',
    style: {
      top: '60%',
      background: 'rgba(100, 80, 50, 0.8)'
    },
    artifacts: [
      {
        icon: '🏰',
        title: 'Castle (1200s)',
        mode: 'Feudalism',
        relations: 'Lord and serf, personal domination',
        contradiction: 'Agrarian surplus supports warrior class'
      },
      {
        icon: '⚔️',
        title: 'Knight\'s Sword',
        mode: 'Feudalism',
        relations: 'Military service for land',
        contradiction: 'Violence maintains "natural" order'
      },
      {
        icon: '⛪',
        title: 'Church Bell',
        mode: 'Feudalism',
        relations: 'Religious ideology, tithe extraction',
        contradiction: 'Spiritual authority, material wealth'
      }
    ],
    analysis: {
      forces: 'Agricultural tools, three-field system, water mills',
      relations: 'Lord-serf relationship, personal domination, corvée labor',
      contradictions: [
        'Extra-economic coercion (military/religious)',
        'Production for use + surplus extraction',
        'Limited markets, mostly subsistence',
        'Rigid social hierarchy justified by religion'
      ],
      resistance: 'Black Death, peasant revolts, emergence of towns, money economy'
    }
  },
  {
    id: 'primitive-communism',
    mode: 'primitive-communism',
    title: 'Primitive Communism',
    dateRange: 'Prehistoric',
    style: {
      top: '80%',
      background: 'rgba(120, 100, 60, 0.8)'
    },
    artifacts: [
      {
        icon: '🏹',
        title: 'Hunting Bow (10,000 BCE)',
        mode: 'Primitive Communism',
        relations: 'Collective ownership, reciprocity',
        contradiction: 'No class divisions, gender equality'
      },
      {
        icon: '🏺',
        title: 'Communal Pot',
        mode: 'Primitive Communism',
        relations: 'Sharing economy, gift exchange',
        contradiction: 'Use-value, not exchange-value'
      },
      {
        icon: '🔥',
        title: 'Hearth',
        mode: 'Primitive Communism',
        relations: 'Band society, egalitarian',
        contradiction: 'Collective decision-making'
      }
    ],
    analysis: {
      forces: 'Simple tools, hunting/gathering technology',
      relations: 'Collective ownership, reciprocal sharing, egalitarian',
      contradictions: [
        'No private property in means of production',
        'No systematic surplus or exploitation',
        'Gender equality (before agricultural revolution)',
        'Decision-making by consensus'
      ],
      resistance: 'Proves class society is not "natural" or eternal - humans lived without classes for 95% of our existence'
    }
  }
];

export const modesComparison = {
  headers: ['Mode', 'Ownership', 'Labor Form', 'Surplus Extraction', 'Crisis Tendency'],
  rows: [
    ['Primitive Communism', 'Collective', 'Communal', 'None', 'Environmental only'],
    ['Ancient Slavery', 'Master owns slaves', 'Forced labor', 'Direct coercion', 'Slave revolts'],
    ['Feudalism', 'Lord owns land', 'Serf labor', 'Rent/corvée', 'Peasant uprisings'],
    ['Capitalism', 'Private property', 'Wage labor', 'Surplus value', 'Overproduction'],
    ['Socialism', 'Social ownership', 'Associated producers', 'Social fund', 'Planning problems']
  ]
};