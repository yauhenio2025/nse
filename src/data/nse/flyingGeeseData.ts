// Clean version of flyingGeeseData.ts - no special characters or complex syntax

export interface Country {
  id: string;
  name: string;
  flag: string;
  gdp: number;
  industries: string[];
  stage: 'pre-industrial' | 'early-industrial' | 'industrial' | 'advanced' | 'innovation';
  canUpgrade: boolean;
  canTransferTo?: string[];
  historicalNote?: string;
}

export interface Transfer {
  from: string;
  to: string;
  industry: string;
  year: number;
  impact: string;
}

export interface GamePhase {
  year: number;
  description: string;
  activeTransfers: string[];
}

export const flyingGeeseData = {
  countries: {
    1960: {
      japan: {
        id: 'japan',
        name: 'Japan',
        flag: 'JP',
        gdp: 3000,
        industries: ['Textiles', 'Toys', 'Light Assembly', 'Ships'],
        stage: 'industrial' as const,
        canUpgrade: true,
        canTransferTo: ['korea', 'taiwan'],
        historicalNote: 'Post-war reconstruction complete, wages rising'
      },
      korea: {
        id: 'korea',
        name: 'South Korea',
        flag: 'KR',
        gdp: 250,
        industries: ['Agriculture', 'Wigs'],
        stage: 'pre-industrial' as const,
        canUpgrade: false,
        historicalNote: 'Park Chung-hee export drive beginning'
      },
      taiwan: {
        id: 'taiwan',
        name: 'Taiwan',
        flag: 'TW',
        gdp: 300,
        industries: ['Agriculture', 'Sugar'],
        stage: 'pre-industrial' as const,
        canUpgrade: false,
        historicalNote: 'Export processing zones established'
      },
      singapore: {
        id: 'singapore',
        name: 'Singapore',
        flag: 'SG',
        gdp: 500,
        industries: ['Port Services', 'Trade'],
        stage: 'early-industrial' as const,
        canUpgrade: false,
        historicalNote: 'Independence in 1965, seeking industry'
      }
    },
    
    1980: {
      japan: {
        id: 'japan',
        name: 'Japan',
        flag: 'JP',
        gdp: 10000,
        industries: ['Electronics', 'Cars', 'Machinery', 'Semiconductors'],
        stage: 'advanced' as const,
        canUpgrade: true,
        canTransferTo: ['korea', 'taiwan', 'singapore'],
        historicalNote: 'Becoming technology leader'
      },
      korea: {
        id: 'korea',
        name: 'South Korea',
        flag: 'KR',
        gdp: 1800,
        industries: ['Textiles', 'Steel', 'Ships', 'Construction'],
        stage: 'industrial' as const,
        canUpgrade: true,
        canTransferTo: ['china', 'malaysia'],
        historicalNote: 'Heavy and Chemical Industry drive'
      },
      china: {
        id: 'china',
        name: 'China',
        flag: 'CN',
        gdp: 300,
        industries: ['Agriculture', 'Basic Manufacturing'],
        stage: 'early-industrial' as const,
        canUpgrade: false,
        historicalNote: 'Reform and Opening beginning'
      },
      malaysia: {
        id: 'malaysia',
        name: 'Malaysia',
        flag: 'MY',
        gdp: 1200,
        industries: ['Palm Oil', 'Rubber', 'Basic Assembly'],
        stage: 'early-industrial' as const,
        canUpgrade: false,
        historicalNote: 'Attracting electronics FDI'
      }
    },
    
    2000: {
      japan: {
        id: 'japan',
        name: 'Japan',
        flag: 'JP',
        gdp: 35000,
        industries: ['High-Tech', 'Robotics', 'Advanced Materials', 'Innovation'],
        stage: 'innovation' as const,
        canUpgrade: false,
        historicalNote: 'At technology frontier'
      },
      korea: {
        id: 'korea',
        name: 'South Korea',
        flag: 'KR',
        gdp: 12000,
        industries: ['Semiconductors', 'Cars', 'Smartphones', 'Ships'],
        stage: 'advanced' as const,
        canUpgrade: true,
        canTransferTo: ['china', 'vietnam'],
        historicalNote: 'Samsung, LG global leaders'
      },
      china: {
        id: 'china',
        name: 'China',
        flag: 'CN',
        gdp: 1000,
        industries: ['Textiles', 'Toys', 'Electronics Assembly', 'Basic Manufacturing'],
        stage: 'industrial' as const,
        canUpgrade: true,
        canTransferTo: ['vietnam', 'bangladesh'],
        historicalNote: 'World factory emerging'
      },
      vietnam: {
        id: 'vietnam',
        name: 'Vietnam',
        flag: 'VN',
        gdp: 400,
        industries: ['Agriculture', 'Textiles', 'Footwear'],
        stage: 'early-industrial' as const,
        canUpgrade: false,
        historicalNote: 'Doi Moi reforms showing results'
      },
      bangladesh: {
        id: 'bangladesh',
        name: 'Bangladesh',
        flag: 'BD',
        gdp: 380,
        industries: ['Garments', 'Jute Products'],
        stage: 'early-industrial' as const,
        canUpgrade: false,
        historicalNote: 'Becoming garment powerhouse'
      }
    }
  },
  
  transferRules: {
    'Textiles': {
      minGDPGap: 5,
      recipientMaxGDP: 1000,
      impact: {
        sender: { gdpMultiplier: 1.1, removeIndustry: true },
        recipient: { gdpMultiplier: 1.3, addIndustry: true }
      },
      feedback: 'Labor-intensive textiles move to lower-wage countries'
    },
    'Electronics Assembly': {
      minGDPGap: 3,
      recipientMaxGDP: 2000,
      requirements: ['Basic Infrastructure', 'FDI Policy'],
      impact: {
        sender: { gdpMultiplier: 1.15, removeIndustry: true },
        recipient: { gdpMultiplier: 1.4, addIndustry: true }
      },
      feedback: 'Assembly operations seek cheap, disciplined labor'
    },
    'Heavy Industry': {
      minGDPGap: 2,
      recipientMaxGDP: 5000,
      requirements: ['Industrial Base', 'Skilled Workers'],
      impact: {
        sender: { gdpMultiplier: 1.2, removeIndustry: true },
        recipient: { gdpMultiplier: 1.5, addIndustry: true }
      },
      feedback: 'Capital-intensive industries move as wages rise'
    }
  },
  
  historicalTransfers: [
    {
      from: 'Japan',
      to: 'Korea',
      industry: 'Textiles',
      year: 1965,
      impact: 'Korea first major export industry'
    },
    {
      from: 'Japan',
      to: 'Taiwan',
      industry: 'Electronics Assembly',
      year: 1970,
      impact: 'Taiwan becomes electronics hub'
    },
    {
      from: 'Korea',
      to: 'China',
      industry: 'Textiles',
      year: 1992,
      impact: 'China begins export manufacturing boom'
    },
    {
      from: 'Taiwan',
      to: 'China',
      industry: 'Electronics Assembly',
      year: 1995,
      impact: 'Foxconn and others move to mainland'
    },
    {
      from: 'China',
      to: 'Vietnam',
      industry: 'Textiles',
      year: 2008,
      impact: 'Vietnam becomes new textile exporter'
    },
    {
      from: 'China',
      to: 'Bangladesh',
      industry: 'Basic Garments',
      year: 2010,
      impact: 'Bangladesh becomes number 2 garment exporter'
    }
  ],
  
  stageLessons: {
    'pre-industrial': {
      challenges: ['Low savings', 'Poor infrastructure', 'Unskilled labor'],
      opportunities: ['Abundant cheap labor', 'Can attract labor-intensive FDI'],
      strategy: 'Build basic infrastructure, attract textiles and assembly FDI'
    },
    'early-industrial': {
      challenges: ['Limited capital', 'Basic skills only', 'Weak suppliers'],
      opportunities: ['Some industrial experience', 'Rising savings'],
      strategy: 'Diversify light manufacturing, develop industrial zones'
    },
    'industrial': {
      challenges: ['Rising wages', 'Environmental issues', 'Need upgrading'],
      opportunities: ['Capital accumulation', 'Skilled workers emerging'],
      strategy: 'Move to heavy industry, develop own brands'
    },
    'advanced': {
      challenges: ['High wages', 'Developed country competition', 'Innovation pressure'],
      opportunities: ['Strong industrial base', 'Educated workforce'],
      strategy: 'Invest in R&D, move to high-tech sectors'
    },
    'innovation': {
      challenges: ['At technology frontier', 'Must create not follow'],
      opportunities: ['Define new industries', 'Set global standards'],
      strategy: 'Massive R&D investment, create new technologies'
    }
  }
};

// Game mechanics functions
export function canTransferIndustry(
  fromCountry: Country, 
  toCountry: Country, 
  industry: string
): { canTransfer: boolean; reason?: string } {
  const rules = flyingGeeseData.transferRules[industry];
  if (!rules) {
    return { canTransfer: false, reason: 'Unknown industry' };
  }
  
  // Check GDP gap
  if (fromCountry.gdp / toCountry.gdp < rules.minGDPGap) {
    return { 
      canTransfer: false, 
      reason: `${fromCountry.name} needs ${rules.minGDPGap}x GDP advantage` 
    };
  }
  
  // Check recipient GDP ceiling
  if (toCountry.gdp > rules.recipientMaxGDP) {
    return { 
      canTransfer: false, 
      reason: `${toCountry.name} is too developed for ${industry}` 
    };
  }
  
  // Check if sender has the industry
  if (!fromCountry.industries.includes(industry)) {
    return { 
      canTransfer: false, 
      reason: `${fromCountry.name} doesn't have ${industry}` 
    };
  }
  
  return { canTransfer: true };
}

export function calculateTransferImpact(
  fromCountry: Country,
  toCountry: Country,
  industry: string
): {
  fromCountry: Country;
  toCountry: Country;
  narrative: string;
} {
  const rules = flyingGeeseData.transferRules[industry];
  
  const updatedFrom = {
    ...fromCountry,
    gdp: Math.round(fromCountry.gdp * rules.impact.sender.gdpMultiplier),
    industries: fromCountry.industries.filter(i => i !== industry)
  };
  
  const updatedTo = {
    ...toCountry,
    gdp: Math.round(toCountry.gdp * rules.impact.recipient.gdpMultiplier),
    industries: [...toCountry.industries, industry]
  };
  
  const narrative = `${industry} successfully transferred from ${fromCountry.name} to ${toCountry.name}. 
    ${fromCountry.name} upgrades to higher value activities (+${Math.round((rules.impact.sender.gdpMultiplier - 1) * 100)}% GDP).
    ${toCountry.name} gains new export industry (+${Math.round((rules.impact.recipient.gdpMultiplier - 1) * 100)}% GDP).
    ${rules.feedback}`;
  
  return { fromCountry: updatedFrom, toCountry: updatedTo, narrative };
}