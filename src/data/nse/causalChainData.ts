export interface CountryStartingCondition {
  id: string;
  name: string;
  flag: string;
  year: number;
  gdpPerCapita: number;
  laborForce: {
    total: number;
    agricultural: number;
    literacy: number;
  };
  capital: {
    savingsRate: number;
    interestRate: number;
    fdiStock: number;
  };
  infrastructure: {
    electricity: number; // % with access
    roads: number; // km per 1000 people
    ports: string;
  };
  exports: {
    total: number; // billions USD
    primary: string[];
  };
}

export interface IndustryChoice {
  id: string;
  name: string;
  icon: string;
  requirements: {
    capitalPerWorker: number;
    skillLevel: 'low' | 'medium' | 'high';
    infrastructure: 'basic' | 'moderate' | 'advanced';
    marketAccess: boolean;
  };
  viable: boolean;
  outcome: string;
  explanation: string;
  details: string;
  lesson: string;
  formula: string;
  realWorldExample?: string;
}

export const countries: Record<string, CountryStartingCondition> = {
  bangladesh1980: {
    id: 'bangladesh1980',
    name: 'Bangladesh (1980)',
    flag: '🇧🇩',
    year: 1980,
    gdpPerCapita: 250,
    laborForce: {
      total: 30000000,
      agricultural: 80,
      literacy: 20
    },
    capital: {
      savingsRate: 8,
      interestRate: 20,
      fdiStock: 0.1
    },
    infrastructure: {
      electricity: 10,
      roads: 0.5,
      ports: 'Chittagong (basic)'
    },
    exports: {
      total: 0.8,
      primary: ['Jute', 'Tea']
    }
  },
  
  vietnam1990: {
    id: 'vietnam1990',
    name: 'Vietnam (1990)',
    flag: '🇻🇳',
    year: 1990,
    gdpPerCapita: 230,
    laborForce: {
      total: 35000000,
      agricultural: 70,
      literacy: 88
    },
    capital: {
      savingsRate: 12,
      interestRate: 18,
      fdiStock: 0.2
    },
    infrastructure: {
      electricity: 35,
      roads: 0.8,
      ports: 'Hai Phong, Saigon'
    },
    exports: {
      total: 2.4,
      primary: ['Rice', 'Coffee', 'Oil']
    }
  },
  
  ethiopia2010: {
    id: 'ethiopia2010',
    name: 'Ethiopia (2010)',
    flag: '🇪🇹',
    year: 2010,
    gdpPerCapita: 350,
    laborForce: {
      total: 45000000,
      agricultural: 75,
      literacy: 49
    },
    capital: {
      savingsRate: 15,
      interestRate: 16,
      fdiStock: 0.8
    },
    infrastructure: {
      electricity: 23,
      roads: 0.3,
      ports: 'Landlocked (uses Djibouti)'
    },
    exports: {
      total: 2.7,
      primary: ['Coffee', 'Gold', 'Flowers']
    }
  },
  
  korea1965: {
    id: 'korea1965',
    name: 'South Korea (1965)',
    flag: '🇰🇷',
    year: 1965,
    gdpPerCapita: 300,
    laborForce: {
      total: 12000000,
      agricultural: 55,
      literacy: 71
    },
    capital: {
      savingsRate: 15,
      interestRate: 25,
      fdiStock: 0.05
    },
    infrastructure: {
      electricity: 28,
      roads: 0.4,
      ports: 'Busan, Incheon'
    },
    exports: {
      total: 0.2,
      primary: ['Wigs', 'Plywood', 'Tungsten']
    }
  },
  
  brazil1970: {
    id: 'brazil1970',
    name: 'Brazil (1970)',
    flag: '🇧🇷',
    year: 1970,
    gdpPerCapita: 800,
    laborForce: {
      total: 35000000,
      agricultural: 44,
      literacy: 66
    },
    capital: {
      savingsRate: 20,
      interestRate: 15,
      fdiStock: 2.5
    },
    infrastructure: {
      electricity: 48,
      roads: 1.2,
      ports: 'Santos, Rio'
    },
    exports: {
      total: 2.7,
      primary: ['Coffee', 'Iron ore', 'Sugar']
    }
  }
};

export const industryChoices: Record<string, IndustryChoice[]> = {
  // Industries for very poor countries (GDP < $500)
  lowIncome: [
    {
      id: 'textiles',
      name: 'Textiles & Garments',
      icon: '👔',
      requirements: {
        capitalPerWorker: 5000,
        skillLevel: 'low',
        infrastructure: 'basic',
        marketAccess: true
      },
      viable: true,
      outcome: '✅ Success: Export Competitiveness',
      explanation: 'Textiles perfectly match low-income countries\' abundant labor and scarce capital.',
      details: `Initial investment: $5,000/worker
Wage requirement: $0.50-2/day competitive globally
Infrastructure: Basic ports and roads sufficient
Learning curve: 6-12 months training
Export potential: $50-100B global market accessible`,
      lesson: 'Following comparative advantage creates self-sustaining, competitive industries.',
      formula: 'Abundant labor + Low capital requirements + Basic infrastructure = Export success',
      realWorldExample: 'Bangladesh became #2 global exporter with 4M jobs and $50B exports by 2020'
    },
    {
      id: 'shoes',
      name: 'Footwear & Leather',
      icon: '👟',
      requirements: {
        capitalPerWorker: 8000,
        skillLevel: 'low',
        infrastructure: 'basic',
        marketAccess: true
      },
      viable: true,
      outcome: '✅ Success: Niche Export Market',
      explanation: 'Footwear offers slightly higher value-added than textiles while still using abundant labor.',
      details: `Capital needs: $8,000/worker
Skills: Basic craftsmanship trainable
Market: $200B global footwear market
Upgrading path: Athletic shoes → leather goods`,
      lesson: 'Countries can gradually move up the value chain within labor-intensive sectors.',
      formula: 'Labor abundance + Craftsmanship + Global buyers = Sustainable growth',
      realWorldExample: 'Vietnam exports $22B in footwear, employing 1.5M workers'
    },
    {
      id: 'heavy_machinery',
      name: 'Heavy Machinery',
      icon: '🏗️',
      requirements: {
        capitalPerWorker: 250000,
        skillLevel: 'high',
        infrastructure: 'advanced',
        marketAccess: true
      },
      viable: false,
      outcome: '❌ Failure: Permanent Subsidies Required',
      explanation: 'Capital requirements are 50x higher than textiles - impossible with 20% interest rates.',
      details: `Capital requirement: $250,000/worker vs $5,000 for textiles
Interest burden: $50,000/worker/year at 20% rates
Skills gap: Need engineers (20% literacy rate)
Result: Products cost 3x world prices`,
      lesson: 'Defying comparative advantage creates non-viable firms that drain resources.',
      formula: 'Scarce capital + High interest rates + Skills gap = Non-competitive',
      realWorldExample: 'Nigeria\'s Ajaokuta Steel Plant: $8B spent, never commercially operational'
    },
    {
      id: 'electronics_assembly',
      name: 'Electronics Assembly',
      icon: '📱',
      requirements: {
        capitalPerWorker: 15000,
        skillLevel: 'low',
        infrastructure: 'moderate',
        marketAccess: true
      },
      viable: true,
      outcome: '✅ Conditional Success: With FDI',
      explanation: 'Assembly operations can work if foreign companies provide capital and technology.',
      details: `FDI model: Foreign firm provides equipment and training
Local contribution: Labor at $2-5/day
Infrastructure needs: Reliable power, ports
Spillovers: Workers learn industrial discipline`,
      lesson: 'FDI can temporarily overcome capital constraints for appropriate industries.',
      formula: 'Cheap labor + FDI capital + Basic infrastructure = Assembly competitiveness',
      realWorldExample: 'Vietnam: Samsung invested $17B, exports $60B electronics annually'
    }
  ],
  
  // Industries for lower-middle income countries (GDP $500-2000)
  lowerMiddleIncome: [
    {
      id: 'light_manufacturing',
      name: 'Light Manufacturing',
      icon: '🏭',
      requirements: {
        capitalPerWorker: 20000,
        skillLevel: 'medium',
        infrastructure: 'moderate',
        marketAccess: true
      },
      viable: true,
      outcome: '✅ Success: Industrial Diversification',
      explanation: 'Natural progression from textiles as wages rise and capital accumulates.',
      details: `Examples: Toys, furniture, plastic products
Capital: $20,000/worker manageable
Skills: Basic technical training
Markets: Both domestic and export`,
      lesson: 'Success in simple industries provides capital for gradual upgrading.',
      formula: 'Rising wages + Capital accumulation + Skills development = Industrial upgrading',
      realWorldExample: 'China 1990s: Toy capital of the world before upgrading to electronics'
    },
    {
      id: 'automobiles',
      name: 'Automobile Industry',
      icon: '🚗',
      requirements: {
        capitalPerWorker: 150000,
        skillLevel: 'high',
        infrastructure: 'advanced',
        marketAccess: true
      },
      viable: false,
      outcome: '❌ Failure: Uncompetitive Despite Protection',
      explanation: 'Auto industry requires ecosystem of 200+ suppliers and advanced skills.',
      details: `Capital needs: $150,000/worker
Supplier network: 200+ precision parts makers
Quality gap: Cannot compete with established producers
Protection cost: Consumers pay 2-3x world prices`,
      lesson: 'Complex industries require entire ecosystems, not just factories.',
      formula: 'Missing suppliers + Quality gap + High protection = Consumer burden',
      realWorldExample: 'India\'s Ambassador car: Required 30+ years protection, poor quality'
    },
    {
      id: 'processed_foods',
      name: 'Food Processing',
      icon: '🥫',
      requirements: {
        capitalPerWorker: 30000,
        skillLevel: 'low',
        infrastructure: 'moderate',
        marketAccess: true
      },
      viable: true,
      outcome: '✅ Success: Value Addition to Agriculture',
      explanation: 'Builds on agricultural base while adding industrial jobs and export value.',
      details: `Links to farmers: Stable purchasing
Value addition: 3-5x raw material price
Export potential: Processed foods, beverages
Brands: Can develop national champions`,
      lesson: 'Processing natural resources is logical first step in industrialization.',
      formula: 'Agricultural base + Processing + Quality control = Export growth',
      realWorldExample: 'Thailand: From rice exporter to global food processing hub'
    }
  ],
  
  // Industries for upper-middle income countries (GDP $2000-10000)
  upperMiddleIncome: [
    {
      id: 'steel_ships',
      name: 'Steel & Shipbuilding',
      icon: '🚢',
      requirements: {
        capitalPerWorker: 100000,
        skillLevel: 'medium',
        infrastructure: 'advanced',
        marketAccess: true
      },
      viable: true,
      outcome: '✅ Success: Heavy Industry Transition',
      explanation: 'With accumulated capital and experience, countries can enter heavy industries.',
      details: `Prerequisites: 20+ years of industrial experience
Capital: Now affordable with higher savings
Skills: Developed through lighter industries
Timing: Enter as rich countries exit`,
      lesson: 'Patient capital accumulation enables transition to capital-intensive sectors.',
      formula: 'Industrial experience + Capital accumulation + Right timing = Heavy industry success',
      realWorldExample: 'Korea: From textiles (1960s) to world\'s #1 shipbuilder (1980s)'
    },
    {
      id: 'semiconductors',
      name: 'Semiconductors',
      icon: '💾',
      requirements: {
        capitalPerWorker: 500000,
        skillLevel: 'high',
        infrastructure: 'advanced',
        marketAccess: true
      },
      viable: false,
      outcome: '⚠️ Very Difficult Without Preparation',
      explanation: 'Semiconductors require massive capital, top engineers, and perfect infrastructure.',
      details: `Investment scale: $10-20B per fab
Engineers needed: Thousands of PhDs
Infrastructure: 24/7 power, ultra-pure water
Risk: Technology changes every 2 years`,
      lesson: 'Some industries require decades of capability building.',
      formula: 'Extreme capital + Top talent + Perfect infrastructure + Government support = Maybe',
      realWorldExample: 'Only Taiwan, Korea succeeded through 30+ years of focused development'
    }
  ]
};

export function getIndustriesForCountry(countryId: string): IndustryChoice[] {
  const country = countries[countryId];
  if (!country) return [];
  
  if (country.gdpPerCapita < 500) {
    return industryChoices.lowIncome;
  } else if (country.gdpPerCapita < 2000) {
    return industryChoices.lowerMiddleIncome;
  } else {
    return industryChoices.upperMiddleIncome;
  }
}

export function evaluateIndustryChoice(
  countryId: string, 
  industryId: string
): {
  viable: boolean;
  score: number;
  feedback: string[];
} {
  const country = countries[countryId];
  const industries = getIndustriesForCountry(countryId);
  const industry = industries.find(i => i.id === industryId);
  
  if (!country || !industry) {
    return { viable: false, score: 0, feedback: ['Invalid selection'] };
  }
  
  const feedback: string[] = [];
  let score = 0;
  
  // Evaluate capital constraints
  const capitalConstraint = industry.requirements.capitalPerWorker / country.gdpPerCapita;
  if (capitalConstraint < 20) {
    score += 25;
    feedback.push('✅ Capital requirements match country\'s development level');
  } else if (capitalConstraint < 50) {
    score += 10;
    feedback.push('⚠️ High capital requirements will strain the economy');
  } else {
    feedback.push('❌ Capital requirements far exceed country\'s capacity');
  }
  
  // Evaluate skills match
  if (industry.requirements.skillLevel === 'low' && country.laborForce.literacy < 50) {
    score += 25;
    feedback.push('✅ Low skill requirements match workforce');
  } else if (industry.requirements.skillLevel === 'medium' && country.laborForce.literacy > 50) {
    score += 25;
    feedback.push('✅ Workforce skills adequate for industry');
  } else if (industry.requirements.skillLevel === 'high' && country.laborForce.literacy < 80) {
    feedback.push('❌ Workforce lacks required skills');
  }
  
  // Infrastructure evaluation
  if (industry.requirements.infrastructure === 'basic' && country.infrastructure.electricity > 10) {
    score += 25;
    feedback.push('✅ Basic infrastructure sufficient');
  } else if (industry.requirements.infrastructure === 'moderate' && country.infrastructure.electricity > 30) {
    score += 20;
    feedback.push('✅ Infrastructure meets industry needs');
  } else if (industry.requirements.infrastructure === 'advanced' && country.infrastructure.electricity < 80) {
    feedback.push('❌ Infrastructure inadequate for industry requirements');
  }
  
  // Interest rate burden
  const interestBurden = (industry.requirements.capitalPerWorker * country.capital.interestRate) / 100;
  const competitiveWage = country.gdpPerCapita / 250; // Daily wage estimate
  if (interestBurden < competitiveWage * 365) {
    score += 25;
    feedback.push('✅ Interest costs allow competitive pricing');
  } else {
    feedback.push(`❌ Interest burden ($${Math.round(interestBurden)}/worker/year) exceeds competitive range`);
  }
  
  return {
    viable: score >= 75,
    score,
    feedback
  };
}
