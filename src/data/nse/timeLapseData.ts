export interface CountrySnapshot {
  industry: string;
  gdp: number;
  position: number; // 0-100 representing development level
  exports: string;
  majorPolicy?: string;
  challenge?: string;
}

export interface YearData {
  [country: string]: CountrySnapshot;
}

export interface InsightData {
  summary: string;
  keyPattern: string;
  lesson: string;
}

export const timeLapseData: Record<number, YearData> = {
  1960: {
    japan: {
      industry: 'Textiles & Light Manufacturing',
      gdp: 3000,
      position: 20,
      exports: 'Labor-intensive goods',
      majorPolicy: 'Export promotion via MITI'
    },
    korea: {
      industry: 'Agriculture & Import Substitution',
      gdp: 158,
      position: 5,
      exports: 'Primary products, wigs',
      majorPolicy: 'Five-Year Plans begin'
    },
    taiwan: {
      industry: 'Agriculture & Sugar',
      gdp: 200,
      position: 5,
      exports: 'Sugar, agricultural products',
      majorPolicy: 'Land reform complete'
    },
    china: {
      industry: 'Central Planning',
      gdp: 90,
      position: 5,
      exports: 'Minimal (closed economy)',
      challenge: 'Great Leap Forward failure'
    },
    india: {
      industry: 'Import Substitution',
      gdp: 85,
      position: 5,
      exports: 'Tea, jute, cotton',
      majorPolicy: 'License Raj system'
    },
    bangladesh: {
      industry: 'Agriculture (East Pakistan)',
      gdp: 200,
      position: 5,
      exports: 'Jute (90% of exports)',
      challenge: 'Political instability'
    },
    vietnam: {
      industry: 'War Economy',
      gdp: 100,
      position: 5,
      exports: 'Minimal due to war',
      challenge: 'Vietnam War ongoing'
    }
  },
  
  1970: {
    japan: {
      industry: 'Steel, Ships & Chemicals',
      gdp: 5000,
      position: 30,
      exports: 'Heavy industrial goods',
      majorPolicy: 'Moving up value chain'
    },
    korea: {
      industry: 'Textiles & Light Manufacturing',
      gdp: 410,
      position: 10,
      exports: 'Textiles, plywood',
      majorPolicy: 'Heavy Chemical Industry drive planned'
    },
    taiwan: {
      industry: 'Electronics Assembly',
      gdp: 500,
      position: 12,
      exports: 'Electronics, textiles',
      majorPolicy: 'Export Processing Zones'
    },
    china: {
      industry: 'Heavy Industry (inefficient)',
      gdp: 115,
      position: 5,
      exports: 'Still closed economy',
      challenge: 'Cultural Revolution'
    },
    india: {
      industry: 'Heavy Industry (protected)',
      gdp: 120,
      position: 6,
      exports: 'Limited manufactured goods',
      challenge: 'Inefficient state enterprises'
    },
    bangladesh: {
      industry: 'Post-Independence Recovery',
      gdp: 180,
      position: 5,
      exports: 'Jute declining',
      majorPolicy: 'Nationalization of industries'
    },
    vietnam: {
      industry: 'Socialist Agriculture',
      gdp: 95,
      position: 5,
      exports: 'Rice (when available)',
      challenge: 'Post-war reconstruction'
    }
  },
  
  1980: {
    japan: {
      industry: 'Electronics & Automobiles',
      gdp: 10000,
      position: 45,
      exports: 'Cars, electronics globally',
      majorPolicy: 'Quality revolution (Toyota, Sony)'
    },
    korea: {
      industry: 'Ships, Steel & Construction',
      gdp: 1778,
      position: 20,
      exports: 'Ships (#1 globally), steel',
      majorPolicy: 'Chaebol-led development'
    },
    taiwan: {
      industry: 'PC Components',
      gdp: 2500,
      position: 25,
      exports: 'Computer parts',
      majorPolicy: 'Science parks established'
    },
    china: {
      industry: 'Early Reforms Beginning',
      gdp: 195,
      position: 8,
      exports: 'Starting textile exports',
      majorPolicy: 'Special Economic Zones (Shenzhen)'
    },
    india: {
      industry: 'Mixed Economy Stagnation',
      gdp: 275,
      position: 8,
      exports: 'Textiles, gems',
      challenge: 'Hindu rate of growth (3.5%)'
    },
    bangladesh: {
      industry: 'First Garment Factories',
      gdp: 250,
      position: 7,
      exports: 'First RMG exports ($1M)',
      majorPolicy: 'Desh-Daewoo collaboration'
    },
    vietnam: {
      industry: 'Failed Central Planning',
      gdp: 100,
      position: 5,
      exports: 'Minimal',
      challenge: 'Economic crisis, inflation'
    }
  },
  
  1990: {
    japan: {
      industry: 'High-Tech & Finance',
      gdp: 25000,
      position: 60,
      exports: 'Technology, capital goods',
      challenge: 'Asset bubble forming'
    },
    korea: {
      industry: 'Electronics & Cars',
      gdp: 6642,
      position: 35,
      exports: 'Samsung, Hyundai emerging',
      majorPolicy: 'Democratic transition'
    },
    taiwan: {
      industry: 'Semiconductors',
      gdp: 8000,
      position: 40,
      exports: 'TSMC founded 1987',
      majorPolicy: 'Moving to chip design'
    },
    china: {
      industry: 'Labor-Intensive Manufacturing',
      gdp: 390,
      position: 15,
      exports: 'Textiles, toys booming',
      majorPolicy: 'Coastal development strategy'
    },
    india: {
      industry: 'Early IT Services',
      gdp: 370,
      position: 10,
      exports: 'Software services beginning',
      majorPolicy: 'Partial liberalization'
    },
    bangladesh: {
      industry: 'Garments Expansion',
      gdp: 300,
      position: 10,
      exports: 'RMG $600M (50% of exports)',
      majorPolicy: 'Multi-Fiber Arrangement benefits'
    },
    vietnam: {
      industry: 'Doi Moi Reforms',
      gdp: 150,
      position: 6,
      exports: 'Rice, coffee',
      majorPolicy: 'Market reforms beginning'
    }
  },
  
  2000: {
    japan: {
      industry: 'Innovation & Services',
      gdp: 38000,
      position: 70,
      exports: 'High-tech, robotics',
      challenge: 'Lost decade of stagnation'
    },
    korea: {
      industry: 'IT & Semiconductors',
      gdp: 12257,
      position: 45,
      exports: 'Memory chips, displays',
      majorPolicy: 'Broadband infrastructure'
    },
    taiwan: {
      industry: 'Chip Manufacturing Leader',
      gdp: 15000,
      position: 50,
      exports: 'Semiconductors (TSMC dominant)',
      majorPolicy: 'China manufacturing links'
    },
    china: {
      industry: 'World\'s Factory',
      gdp: 1053,
      position: 25,
      exports: 'Everything manufactured',
      majorPolicy: 'WTO entry (2001)'
    },
    india: {
      industry: 'IT Services Boom',
      gdp: 450,
      position: 12,
      exports: 'Software $6B',
      majorPolicy: 'Y2K opportunity captured'
    },
    bangladesh: {
      industry: 'Garments Dominance',
      gdp: 400,
      position: 13,
      exports: 'RMG $5B (75% of exports)',
      majorPolicy: 'Backward linkage development'
    },
    vietnam: {
      industry: 'Light Manufacturing',
      gdp: 400,
      position: 12,
      exports: 'Textiles, footwear growing',
      majorPolicy: 'US trade agreement'
    }
  },
  
  2010: {
    japan: {
      industry: 'Advanced Technology',
      gdp: 43000,
      position: 75,
      exports: 'Components, robotics',
      challenge: 'Tsunami, nuclear crisis'
    },
    korea: {
      industry: 'Global Brands',
      gdp: 23087,
      position: 55,
      exports: 'Samsung, LG, Hyundai global',
      majorPolicy: 'Green growth strategy'
    },
    taiwan: {
      industry: 'Tech Manufacturing Hub',
      gdp: 20000,
      position: 60,
      exports: '60% of semiconductors',
      majorPolicy: 'ECFA with mainland China'
    },
    china: {
      industry: 'Moving Up Value Chain',
      gdp: 4550,
      position: 35,
      exports: 'Electronics, machinery',
      majorPolicy: 'Indigenous innovation push'
    },
    india: {
      industry: 'Services-Led Growth',
      gdp: 1350,
      position: 20,
      exports: 'IT services $60B',
      challenge: 'Manufacturing lags'
    },
    bangladesh: {
      industry: 'Garments Powerhouse',
      gdp: 700,
      position: 16,
      exports: 'RMG $18B (#2 globally)',
      challenge: 'Rana Plaza tragedy (2013)'
    },
    vietnam: {
      industry: 'Electronics Assembly',
      gdp: 1200,
      position: 20,
      exports: 'Samsung phones, Intel chips',
      majorPolicy: 'FDI attraction success'
    }
  },
  
  2020: {
    japan: {
      industry: 'Society 5.0',
      gdp: 40000,
      position: 75,
      exports: 'AI, robotics, materials',
      majorPolicy: 'Automation for aging society'
    },
    korea: {
      industry: 'Digital Innovation Leader',
      gdp: 31762,
      position: 65,
      exports: 'Memory, displays, EVs, K-culture',
      majorPolicy: 'Digital New Deal'
    },
    taiwan: {
      industry: 'Semiconductor Monopoly',
      gdp: 28000,
      position: 65,
      exports: '92% of advanced chips',
      challenge: 'Geopolitical tensions'
    },
    china: {
      industry: 'Tech Power + Manufacturing',
      gdp: 10500,
      position: 45,
      exports: 'High-tech, EVs, solar',
      majorPolicy: 'Dual circulation, tech self-reliance'
    },
    india: {
      industry: 'Digital Services Giant',
      gdp: 2000,
      position: 25,
      exports: 'IT $150B, pharma',
      majorPolicy: 'Make in India struggling'
    },
    bangladesh: {
      industry: 'Seeking Diversification',
      gdp: 2000,
      position: 22,
      exports: 'RMG $35B (still 85%)',
      challenge: 'Need to move beyond garments'
    },
    vietnam: {
      industry: 'New Asian Tiger',
      gdp: 3500,
      position: 28,
      exports: 'Electronics $100B+',
      majorPolicy: 'China+1 beneficiary'
    }
  }
};

export const insights: Record<number, InsightData> = {
  1960: {
    summary: "Post-war Asia begins with agriculture and primary exports. Only Japan has started industrialization.",
    keyPattern: "All countries except Japan are pre-industrial with GDP under $300/capita",
    lesson: "Every development journey starts from factor endowments - for most of Asia, this meant abundant labor and scarce capital."
  },
  1970: {
    summary: "First movers (Japan, Taiwan, Korea) enter light manufacturing as Japan moves to heavy industry.",
    keyPattern: "Flying geese pattern emerges - Japan upgrades, NIEs take over textiles",
    lesson: "Industrial upgrading creates opportunities for followers - this is the beginning of the East Asian Miracle."
  },
  1980: {
    summary: "China opens up and joins the flying geese. NIEs move to heavy industry and electronics.",
    keyPattern: "Each country moves up one rung as leader vacates lower rungs",
    lesson: "Reform and opening (China) plus export orientation (NIEs) drive rapid catch-up growth."
  },
  1990: {
    summary: "Globalization accelerates industrial transfer. China becomes workshop, India finds services niche.",
    keyPattern: "Production chains fragment - design in NIEs, manufacturing in China",
    lesson: "Countries can find multiple paths - India's IT services show manufacturing isn't the only way."
  },
  2000: {
    summary: "China dominates global manufacturing. Vietnam and Bangladesh emerge as new garment exporters.",
    keyPattern: "Second wave of flying geese as China's wages rise",
    lesson: "The pattern repeats - as China upgrades, labor-intensive industries move to Vietnam and Bangladesh."
  },
  2010: {
    summary: "Technology defines new leaders. Korea and Taiwan lead in semiconductors, China pushes into tech.",
    keyPattern: "Value chains regionalize - ASEAN benefits from 'China Plus One'",
    lesson: "Middle-income countries must innovate or stagnate - Korea and Taiwan succeed, others struggle."
  },
  2020: {
    summary: "Geopolitics reshapes trade. Technology leadership contested. Late developers seek their chance.",
    keyPattern: "Supply chain diversification accelerates - Vietnam biggest winner",
    lesson: "The flying geese continue but politics now matters as much as economics. Opportunities remain for latecomers."
  }
};

// Helper functions for the component
export function getCountryDevelopmentStage(gdp: number): string {
  if (gdp < 500) return 'Pre-industrial';
  if (gdp < 2000) return 'Early industrial';
  if (gdp < 10000) return 'Industrial';
  if (gdp < 25000) return 'Advanced industrial';
  return 'Post-industrial';
}

export function getPositionFromGDP(gdp: number): number {
  // Logarithmic scale for visual positioning
  return Math.min(80, Math.max(5, Math.log10(gdp / 100) * 25));
}

export function getIndustryComplexity(industry: string): number {
  const complexityMap: Record<string, number> = {
    'Agriculture': 1,
    'Textiles': 2,
    'Light Manufacturing': 3,
    'Heavy Industry': 4,
    'Electronics Assembly': 4,
    'Electronics Design': 6,
    'Semiconductors': 8,
    'High-Tech': 9,
    'Innovation': 10
  };
  
  for (const [key, value] of Object.entries(complexityMap)) {
    if (industry.includes(key)) return value;
  }
  return 5;
}