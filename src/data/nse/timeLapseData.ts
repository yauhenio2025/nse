export interface CountrySnapshot {
  industry: string;
  gdp: number;
  wage: number; // Monthly wage for unskilled worker in USD
  industrialComplexity: number; // 1-10 scale
  exports: string;
  majorPolicy?: string;
  challenge?: string;
  manufacturingJobs?: number; // in millions
  receivingFrom?: string[]; // Countries transferring industries to this country
  transferringTo?: string[]; // Countries this country is transferring to
}

export interface IndustrialTransfer {
  from: string;
  to: string;
  industry: string;
  year: number;
  jobs: number; // in millions
}

export interface YearData {
  [country: string]: CountrySnapshot;
  transfers?: IndustrialTransfer[];
}

export interface InsightData {
  summary: string;
  keyPattern: string;
  lesson: string;
  flyingGeeseFormation?: string[];
}

export const industrialComplexityScale = {
  'Agriculture': 1,
  'Textiles & Garments': 2,
  'Light Manufacturing': 3,
  'Heavy Industry': 4,
  'Electronics Assembly': 5,
  'Automobiles': 6,
  'Electronics Design': 7,
  'Semiconductors': 8,
  'High-Tech & Services': 9,
  'Innovation & R&D': 10
};

export const timeLapseData: Record<number, YearData> = {
  1960: {
    japan: {
      industry: 'Textiles & Light Manufacturing',
      gdp: 3000,
      wage: 50,
      industrialComplexity: 3,
      exports: 'Labor-intensive goods',
      majorPolicy: 'Export promotion via MITI',
      manufacturingJobs: 9.7
    },
    korea: {
      industry: 'Agriculture & Import Substitution',
      gdp: 158,
      wage: 10,
      industrialComplexity: 1,
      exports: 'Primary products, wigs',
      majorPolicy: 'Five-Year Plans begin',
      manufacturingJobs: 0.5
    },
    taiwan: {
      industry: 'Agriculture & Sugar',
      gdp: 200,
      wage: 12,
      industrialComplexity: 1,
      exports: 'Sugar, agricultural products',
      majorPolicy: 'Land reform complete',
      manufacturingJobs: 0.3
    },
    china: {
      industry: 'Central Planning',
      gdp: 90,
      wage: 5,
      industrialComplexity: 1,
      exports: 'Minimal (closed economy)',
      challenge: 'Great Leap Forward failure',
      manufacturingJobs: 10
    },
    india: {
      industry: 'Import Substitution',
      gdp: 85,
      wage: 5,
      industrialComplexity: 1,
      exports: 'Tea, jute, cotton',
      majorPolicy: 'License Raj system',
      manufacturingJobs: 5
    },
    bangladesh: {
      industry: 'Agriculture (East Pakistan)',
      gdp: 200,
      wage: 8,
      industrialComplexity: 1,
      exports: 'Jute (90% of exports)',
      challenge: 'Political instability',
      manufacturingJobs: 0.2
    },
    vietnam: {
      industry: 'War Economy',
      gdp: 100,
      wage: 5,
      industrialComplexity: 1,
      exports: 'Minimal due to war',
      challenge: 'Vietnam War ongoing',
      manufacturingJobs: 0.1
    }
  },
  
  1970: {
    japan: {
      industry: 'Steel, Ships & Chemicals',
      gdp: 5000,
      wage: 120,
      industrialComplexity: 4,
      exports: 'Heavy industrial goods',
      majorPolicy: 'Moving up value chain',
      manufacturingJobs: 12,
      transferringTo: ['korea', 'taiwan']
    },
    korea: {
      industry: 'Textiles & Light Manufacturing',
      gdp: 410,
      wage: 25,
      industrialComplexity: 2,
      exports: 'Textiles, plywood',
      majorPolicy: 'Heavy Chemical Industry drive planned',
      manufacturingJobs: 1.5,
      receivingFrom: ['japan']
    },
    taiwan: {
      industry: 'Electronics Assembly',
      gdp: 500,
      wage: 30,
      industrialComplexity: 3,
      exports: 'Electronics, textiles',
      majorPolicy: 'Export Processing Zones',
      manufacturingJobs: 1.0,
      receivingFrom: ['japan']
    },
    china: {
      industry: 'Heavy Industry (inefficient)',
      gdp: 115,
      wage: 6,
      industrialComplexity: 2,
      exports: 'Still closed economy',
      challenge: 'Cultural Revolution',
      manufacturingJobs: 15
    },
    india: {
      industry: 'Heavy Industry (protected)',
      gdp: 120,
      wage: 6,
      industrialComplexity: 2,
      exports: 'Limited manufactured goods',
      challenge: 'Inefficient state enterprises',
      manufacturingJobs: 8
    },
    bangladesh: {
      industry: 'Post-Independence Recovery',
      gdp: 180,
      wage: 7,
      industrialComplexity: 1,
      exports: 'Jute declining',
      majorPolicy: 'Nationalization of industries',
      manufacturingJobs: 0.3
    },
    vietnam: {
      industry: 'Socialist Agriculture',
      gdp: 95,
      wage: 4,
      industrialComplexity: 1,
      exports: 'Rice (when available)',
      challenge: 'Post-war reconstruction',
      manufacturingJobs: 0.2
    },
    transfers: [
      { from: 'japan', to: 'korea', industry: 'Textiles', year: 1970, jobs: 1.2 },
      { from: 'japan', to: 'taiwan', industry: 'Electronics Assembly', year: 1970, jobs: 0.8 }
    ]
  },
  
  1980: {
    japan: {
      industry: 'Electronics & Automobiles',
      gdp: 10000,
      wage: 300,
      industrialComplexity: 7,
      exports: 'Cars, electronics globally',
      majorPolicy: 'Quality revolution (Toyota, Sony)',
      manufacturingJobs: 13,
      transferringTo: ['korea', 'taiwan', 'china']
    },
    korea: {
      industry: 'Ships, Steel & Construction',
      gdp: 1778,
      wage: 80,
      industrialComplexity: 4,
      exports: 'Ships (#1 globally), steel',
      majorPolicy: 'Chaebol-led development',
      manufacturingJobs: 2.3,
      receivingFrom: ['japan']
    },
    taiwan: {
      industry: 'PC Components',
      gdp: 2500,
      wage: 100,
      industrialComplexity: 5,
      exports: 'Computer parts',
      majorPolicy: 'Science parks established',
      manufacturingJobs: 1.8,
      receivingFrom: ['japan']
    },
    china: {
      industry: 'Early Reforms Beginning',
      gdp: 195,
      wage: 10,
      industrialComplexity: 2,
      exports: 'Starting textile exports',
      majorPolicy: 'Special Economic Zones (Shenzhen)',
      manufacturingJobs: 50,
      receivingFrom: ['japan', 'korea', 'taiwan']
    },
    india: {
      industry: 'Mixed Economy Stagnation',
      gdp: 275,
      wage: 12,
      industrialComplexity: 2,
      exports: 'Textiles, gems',
      challenge: 'Hindu rate of growth (3.5%)',
      manufacturingJobs: 10
    },
    bangladesh: {
      industry: 'First Garment Factories',
      gdp: 250,
      wage: 10,
      industrialComplexity: 2,
      exports: 'First RMG exports ($1M)',
      majorPolicy: 'Desh-Daewoo collaboration',
      manufacturingJobs: 0.5,
      receivingFrom: ['korea']
    },
    vietnam: {
      industry: 'Failed Central Planning',
      gdp: 100,
      wage: 5,
      industrialComplexity: 1,
      exports: 'Minimal',
      challenge: 'Economic crisis, inflation',
      manufacturingJobs: 0.3
    },
    transfers: [
      { from: 'japan', to: 'china', industry: 'Textiles', year: 1980, jobs: 2.0 },
      { from: 'korea', to: 'bangladesh', industry: 'Garments', year: 1980, jobs: 0.3 }
    ]
  },
  
  1990: {
    japan: {
      industry: 'High-Tech & Finance',
      gdp: 25000,
      wage: 800,
      industrialComplexity: 9,
      exports: 'Technology, capital goods',
      challenge: 'Asset bubble forming',
      manufacturingJobs: 14,
      transferringTo: ['china', 'asean']
    },
    korea: {
      industry: 'Electronics & Cars',
      gdp: 6642,
      wage: 250,
      industrialComplexity: 6,
      exports: 'Samsung, Hyundai emerging',
      majorPolicy: 'Democratic transition',
      manufacturingJobs: 3.5,
      transferringTo: ['china', 'vietnam']
    },
    taiwan: {
      industry: 'Semiconductors',
      gdp: 8000,
      wage: 300,
      industrialComplexity: 8,
      exports: 'TSMC founded 1987',
      majorPolicy: 'Moving to chip design',
      manufacturingJobs: 2.5,
      transferringTo: ['china']
    },
    china: {
      industry: 'Labor-Intensive Manufacturing',
      gdp: 390,
      wage: 30,
      industrialComplexity: 3,
      exports: 'Textiles, toys booming',
      majorPolicy: 'Coastal development strategy',
      manufacturingJobs: 80,
      receivingFrom: ['japan', 'korea', 'taiwan']
    },
    india: {
      industry: 'Early IT Services',
      gdp: 370,
      wage: 20,
      industrialComplexity: 3,
      exports: 'Software services beginning',
      majorPolicy: 'Partial liberalization',
      manufacturingJobs: 12
    },
    bangladesh: {
      industry: 'Garments Expansion',
      gdp: 300,
      wage: 15,
      industrialComplexity: 2,
      exports: 'RMG $600M (50% of exports)',
      majorPolicy: 'Multi-Fiber Arrangement benefits',
      manufacturingJobs: 1.0,
      receivingFrom: ['korea', 'china']
    },
    vietnam: {
      industry: 'Doi Moi Reforms',
      gdp: 150,
      wage: 10,
      industrialComplexity: 2,
      exports: 'Rice, coffee',
      majorPolicy: 'Market reforms beginning',
      manufacturingJobs: 0.5
    },
    transfers: [
      { from: 'japan', to: 'china', industry: 'Electronics Assembly', year: 1990, jobs: 3.0 },
      { from: 'korea', to: 'china', industry: 'Light Manufacturing', year: 1990, jobs: 1.5 },
      { from: 'taiwan', to: 'china', industry: 'Electronics', year: 1990, jobs: 1.0 }
    ]
  },
  
  2000: {
    japan: {
      industry: 'Innovation & Services',
      gdp: 38000,
      wage: 1500,
      industrialComplexity: 10,
      exports: 'High-tech, robotics',
      challenge: 'Lost decade of stagnation',
      manufacturingJobs: 12
    },
    korea: {
      industry: 'IT & Semiconductors',
      gdp: 12257,
      wage: 500,
      industrialComplexity: 8,
      exports: 'Memory chips, displays',
      majorPolicy: 'Broadband infrastructure',
      manufacturingJobs: 4.0,
      transferringTo: ['china', 'vietnam']
    },
    taiwan: {
      industry: 'Chip Manufacturing Leader',
      gdp: 15000,
      wage: 600,
      industrialComplexity: 9,
      exports: 'Semiconductors (TSMC dominant)',
      majorPolicy: 'China manufacturing links',
      manufacturingJobs: 3.0,
      transferringTo: ['china']
    },
    china: {
      industry: 'World\'s Factory',
      gdp: 1053,
      wage: 50,
      industrialComplexity: 4,
      exports: 'Everything manufactured',
      majorPolicy: 'WTO entry (2001)',
      manufacturingJobs: 125,
      receivingFrom: ['japan', 'korea', 'taiwan'],
      transferringTo: ['vietnam', 'bangladesh']
    },
    india: {
      industry: 'IT Services Boom',
      gdp: 450,
      wage: 30,
      industrialComplexity: 5,
      exports: 'Software $6B',
      majorPolicy: 'Y2K opportunity captured',
      manufacturingJobs: 15
    },
    bangladesh: {
      industry: 'Garments Dominance',
      gdp: 400,
      wage: 20,
      industrialComplexity: 2,
      exports: 'RMG $5B (75% of exports)',
      majorPolicy: 'Backward linkage development',
      manufacturingJobs: 2.0,
      receivingFrom: ['china', 'korea']
    },
    vietnam: {
      industry: 'Light Manufacturing',
      gdp: 400,
      wage: 25,
      industrialComplexity: 3,
      exports: 'Textiles, footwear growing',
      majorPolicy: 'US trade agreement',
      manufacturingJobs: 2.0,
      receivingFrom: ['korea', 'china']
    },
    transfers: [
      { from: 'china', to: 'vietnam', industry: 'Footwear', year: 2000, jobs: 0.5 },
      { from: 'china', to: 'bangladesh', industry: 'Garments', year: 2000, jobs: 0.8 }
    ]
  },
  
  2010: {
    japan: {
      industry: 'Advanced Technology',
      gdp: 43000,
      wage: 2000,
      industrialComplexity: 10,
      exports: 'Components, robotics',
      challenge: 'Tsunami, nuclear crisis',
      manufacturingJobs: 10
    },
    korea: {
      industry: 'Global Brands',
      gdp: 23087,
      wage: 800,
      industrialComplexity: 9,
      exports: 'Samsung, LG, Hyundai global',
      majorPolicy: 'Green growth strategy',
      manufacturingJobs: 4.5,
      transferringTo: ['vietnam', 'bangladesh']
    },
    taiwan: {
      industry: 'Tech Manufacturing Hub',
      gdp: 20000,
      wage: 700,
      industrialComplexity: 9,
      exports: '60% of semiconductors',
      majorPolicy: 'ECFA with mainland China',
      manufacturingJobs: 3.5
    },
    china: {
      industry: 'Moving Up Value Chain',
      gdp: 4550,
      wage: 350,
      industrialComplexity: 6,
      exports: 'Electronics, machinery',
      majorPolicy: 'Indigenous innovation push',
      manufacturingJobs: 150,
      transferringTo: ['vietnam', 'bangladesh', 'africa']
    },
    india: {
      industry: 'Services-Led Growth',
      gdp: 1350,
      wage: 100,
      industrialComplexity: 5,
      exports: 'IT services $60B',
      challenge: 'Manufacturing lags',
      manufacturingJobs: 20
    },
    bangladesh: {
      industry: 'Garments Powerhouse',
      gdp: 700,
      wage: 60,
      industrialComplexity: 2,
      exports: 'RMG $18B (#2 globally)',
      challenge: 'Rana Plaza tragedy (2013)',
      manufacturingJobs: 4.0,
      receivingFrom: ['china', 'korea']
    },
    vietnam: {
      industry: 'Electronics Assembly',
      gdp: 1200,
      wage: 80,
      industrialComplexity: 5,
      exports: 'Samsung phones, Intel chips',
      majorPolicy: 'FDI attraction success',
      manufacturingJobs: 5.0,
      receivingFrom: ['korea', 'china', 'japan']
    },
    transfers: [
      { from: 'china', to: 'vietnam', industry: 'Electronics Assembly', year: 2010, jobs: 3.0 },
      { from: 'china', to: 'bangladesh', industry: 'Garments', year: 2010, jobs: 2.0 },
      { from: 'korea', to: 'vietnam', industry: 'Electronics', year: 2010, jobs: 1.5 }
    ]
  },
  
  2020: {
    japan: {
      industry: 'Society 5.0',
      gdp: 40000,
      wage: 2500,
      industrialComplexity: 10,
      exports: 'AI, robotics, materials',
      majorPolicy: 'Automation for aging society',
      manufacturingJobs: 8
    },
    korea: {
      industry: 'Digital Innovation Leader',
      gdp: 31762,
      wage: 1200,
      industrialComplexity: 10,
      exports: 'Memory, displays, EVs, K-culture',
      majorPolicy: 'Digital New Deal',
      manufacturingJobs: 4.0,
      transferringTo: ['vietnam', 'bangladesh', 'africa']
    },
    taiwan: {
      industry: 'Semiconductor Monopoly',
      gdp: 28000,
      wage: 1000,
      industrialComplexity: 10,
      exports: '92% of advanced chips',
      challenge: 'Geopolitical tensions',
      manufacturingJobs: 3.0
    },
    china: {
      industry: 'Tech Power + Manufacturing',
      gdp: 10500,
      wage: 1000,
      industrialComplexity: 8,
      exports: 'High-tech, EVs, solar',
      majorPolicy: 'Dual circulation, tech self-reliance',
      manufacturingJobs: 130,
      transferringTo: ['vietnam', 'bangladesh', 'africa', 'cambodia']
    },
    india: {
      industry: 'Digital Services Giant',
      gdp: 2000,
      wage: 150,
      industrialComplexity: 6,
      exports: 'IT $150B, pharma',
      majorPolicy: 'Make in India struggling',
      manufacturingJobs: 25
    },
    bangladesh: {
      industry: 'Seeking Diversification',
      gdp: 2000,
      wage: 100,
      industrialComplexity: 3,
      exports: 'RMG $35B (still 85%)',
      challenge: 'Need to move beyond garments',
      manufacturingJobs: 6.0,
      receivingFrom: ['china', 'korea']
    },
    vietnam: {
      industry: 'New Asian Tiger',
      gdp: 3500,
      wage: 200,
      industrialComplexity: 6,
      exports: 'Electronics $100B+',
      majorPolicy: 'China+1 beneficiary',
      manufacturingJobs: 10.0,
      receivingFrom: ['china', 'korea', 'japan']
    },
    transfers: [
      { from: 'china', to: 'vietnam', industry: 'Electronics', year: 2020, jobs: 5.0 },
      { from: 'china', to: 'bangladesh', industry: 'Garments', year: 2020, jobs: 3.0 },
      { from: 'china', to: 'africa', industry: 'Light Manufacturing', year: 2020, jobs: 10.0 }
    ]
  }
};

export const insights: Record<number, InsightData> = {
  1960: {
    summary: "Post-war Asia begins with agriculture and primary exports. Only Japan has started industrialization.",
    keyPattern: "All countries except Japan are pre-industrial with GDP under $300/capita and wages under $15/month",
    lesson: "Every development journey starts from factor endowments - for most of Asia, this meant abundant labor and scarce capital.",
    flyingGeeseFormation: ['japan']
  },
  1970: {
    summary: "First movers (Japan, Taiwan, Korea) enter light manufacturing as Japan moves to heavy industry. Monthly wages in Japan reach $120.",
    keyPattern: "Flying geese pattern emerges - Japan upgrades, NIEs take over textiles. First industrial transfers begin.",
    lesson: "Industrial upgrading creates opportunities for followers - this is the beginning of the East Asian Miracle.",
    flyingGeeseFormation: ['japan', 'korea', 'taiwan']
  },
  1980: {
    summary: "China opens up and joins the flying geese. NIEs move to heavy industry and electronics. Wage gaps drive transfers.",
    keyPattern: "Each country moves up one rung as leader vacates lower rungs. Japan's wages reach $300/month.",
    lesson: "Reform and opening (China) plus export orientation (NIEs) drive rapid catch-up growth.",
    flyingGeeseFormation: ['japan', 'korea', 'taiwan', 'china']
  },
  1990: {
    summary: "Globalization accelerates industrial transfer. China becomes workshop with $30/month wages, India finds services niche.",
    keyPattern: "Production chains fragment - design in NIEs, manufacturing in China. Major job transfers underway.",
    lesson: "Countries can find multiple paths - India's IT services show manufacturing isn't the only way.",
    flyingGeeseFormation: ['japan', 'korea', 'taiwan', 'china', 'vietnam', 'bangladesh']
  },
  2000: {
    summary: "China dominates global manufacturing with 125 million jobs. Vietnam and Bangladesh emerge as new garment exporters.",
    keyPattern: "Second wave of flying geese as China's wages rise to $50/month. Transfer to lower-wage countries begins.",
    lesson: "The pattern repeats - as China upgrades, labor-intensive industries move to Vietnam and Bangladesh.",
    flyingGeeseFormation: ['japan', 'korea', 'taiwan', 'china', 'vietnam', 'bangladesh']
  },
  2010: {
    summary: "Technology defines new leaders. China's wages reach $350/month, triggering massive industrial transfers.",
    keyPattern: "Value chains regionalize - ASEAN benefits from 'China Plus One'. China prepares to transfer 85 million jobs.",
    lesson: "Middle-income countries must innovate or stagnate - Korea and Taiwan succeed, others struggle.",
    flyingGeeseFormation: ['japan', 'korea', 'taiwan', 'china', 'vietnam', 'bangladesh', 'india']
  },
  2020: {
    summary: "Geopolitics reshapes trade. China's wages hit $1000/month. Vietnam emerges as new manufacturing hub.",
    keyPattern: "Supply chain diversification accelerates - Vietnam biggest winner. Africa enters as new frontier.",
    lesson: "The flying geese continue but politics now matters as much as economics. Opportunities remain for latecomers.",
    flyingGeeseFormation: ['japan', 'korea', 'taiwan', 'china', 'vietnam', 'bangladesh', 'india', 'africa']
  }
};

// Helper functions
export function getIndustryComplexityScore(industry: string): number {
  for (const [key, value] of Object.entries(industrialComplexityScale)) {
    if (industry.toLowerCase().includes(key.toLowerCase())) {
      return value;
    }
  }
  return 5;
}

export function getCountryDevelopmentStage(gdp: number, wage: number): string {
  if (gdp < 500 && wage < 20) return 'Pre-industrial';
  if (gdp < 2000 && wage < 100) return 'Early industrial';
  if (gdp < 10000 && wage < 500) return 'Industrial';
  if (gdp < 25000 && wage < 1000) return 'Advanced industrial';
  return 'Post-industrial';
}

export function getPositionFromGDP(gdp: number): number {
  // Logarithmic scale for visual positioning
  return Math.min(90, Math.max(10, Math.log10(gdp / 100) * 30));
}

export function getPositionFromComplexity(complexity: number): number {
  // Linear scale for complexity (1-10) mapped to percentage
  return Math.min(90, Math.max(10, complexity * 9));
}

export function formatWage(wage: number): string {
  return wage >= 1000 ? `$${(wage/1000).toFixed(1)}k` : `$${wage}`;
}