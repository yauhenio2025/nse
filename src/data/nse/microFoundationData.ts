export interface Element {
  id: string;
  name: string;
  icon: string;
  description: string;
  category: 'endowment' | 'infrastructure' | 'government' | 'market' | 'time';
  detailedExplanation?: string;
}

export interface CountryCase {
  country: string;
  period: string;
  gdpGrowth?: string;
  exports?: string;
  employment?: string;
  keyData?: string[];
  outcome: 'success' | 'failure' | 'mixed';
}

export interface CombinationResult {
  result: string;
  explanation: string;
  formula?: string;
  examples?: string;
  principle?: string;
  nextQuestion?: string;
  viability?: 'viable' | 'non-viable' | 'conditional';
  // New educational fields
  countryCases?: CountryCase[];
  historicalContext?: string;
  quantitativeEvidence?: string;
  lessonsLearned?: string[];
  comparativeAnalysis?: string;
  policyImplications?: string;
  commonMistakes?: string[];
  successFactors?: string[];
  timeline?: string;
  relatedCombinations?: string[];
}

export const elements: Element[] = [
  // Factor Endowments
  {
    id: 'labor-abundant',
    name: 'Abundant Labor',
    icon: '👥',
    description: 'Low wages, large workforce',
    category: 'endowment',
    detailedExplanation: 'Characterized by wages typically 5-10% of developed countries, with large rural populations (40-70%) ready for industrial employment. Creates comparative advantage in assembly, textiles, and other labor-intensive manufacturing.'
  },
  {
    id: 'capital-scarce',
    name: 'Scarce Capital',
    icon: '💰',
    description: 'High interest rates (15-25%)',
    category: 'endowment',
    detailedExplanation: 'Real interest rates often exceed 15% annually due to low savings rates and underdeveloped financial markets. Makes capital-intensive industries non-viable without subsidies.'
  },
  {
    id: 'capital-abundant',
    name: 'Abundant Capital',
    icon: '💎',
    description: 'Low interest rates (2-5%)',
    category: 'endowment',
    detailedExplanation: 'Savings rates exceed 30% of GDP, deep financial markets, real interest rates below 5%. Enables competitive capital-intensive and technology-intensive industries.'
  },
  {
    id: 'natural-resources',
    name: 'Natural Resources',
    icon: '⛏️',
    description: 'Oil, minerals, arable land',
    category: 'endowment',
    detailedExplanation: 'Can be a blessing or curse depending on management. Resource exports often exceed 50% of total exports in resource-rich countries.'
  },
  {
    id: 'skilled-labor',
    name: 'Skilled Labor',
    icon: '🎓',
    description: 'Engineers, technicians',
    category: 'endowment',
    detailedExplanation: 'Tertiary education enrollment rates above 40%, strong STEM graduates. Critical for moving up the value chain into electronics, machinery, and R&D.'
  },
  {
    id: 'unskilled-labor',
    name: 'Unskilled Labor',
    icon: '👷',
    description: 'Basic education workforce',
    category: 'endowment',
    detailedExplanation: 'Primary education completion but limited technical skills. Suitable for simple assembly, textiles, and basic manufacturing requiring minimal training.'
  },
  
  // Infrastructure
  {
    id: 'basic-infrastructure',
    name: 'Basic Infrastructure',
    icon: '🏗️',
    description: 'Ports, roads, power',
    category: 'infrastructure',
    detailedExplanation: 'Reliable electricity (less than 5% outages), basic port facilities (7-14 day turnaround), and road connectivity to industrial zones. Minimum requirement for manufacturing competitiveness.'
  },
  {
    id: 'advanced-infrastructure',
    name: 'Advanced Infrastructure',
    icon: '🌐',
    description: 'High-speed internet, logistics',
    category: 'infrastructure',
    detailedExplanation: 'Fiber optic networks, automated ports (2-3 day turnaround), high-speed rail, and integrated logistics systems. Required for high-tech manufacturing and services.'
  },
  {
    id: 'sez',
    name: 'Special Economic Zones',
    icon: '🏭',
    description: 'Export processing zones',
    category: 'infrastructure',
    detailedExplanation: 'One-stop services, duty-free imports, streamlined regulations. Typically reduce setup time from 6-12 months to 1-2 months and operating costs by 20-30%.'
  },
  {
    id: 'industrial-parks',
    name: 'Industrial Parks',
    icon: '🏢',
    description: 'Clustered manufacturing',
    category: 'infrastructure',
    detailedExplanation: 'Pre-built factories, shared utilities, and services. Reduce initial capital requirements by 30-50% and enable smaller firms to enter manufacturing.'
  },
  
  // Government Facilitation
  {
    id: 'government-coordination',
    name: 'Government Coordination',
    icon: '🏛️',
    description: 'Industrial parks, coordination',
    category: 'government',
    detailedExplanation: 'Proactive identification of industries with latent comparative advantage, coordination of infrastructure investments, and first-mover incentives. Not picking winners, but facilitating winners.'
  },
  {
    id: 'import-substitution',
    name: 'Import Substitution',
    icon: '🚫',
    description: 'Protectionist policies',
    category: 'government',
    detailedExplanation: 'High tariffs (often 50-200%), import licenses, and subsidies to develop industries without comparative advantage. Average inefficiency cost: 2-3x world prices.'
  },
  {
    id: 'export-promotion',
    name: 'Export Promotion',
    icon: '📦',
    description: 'Trade facilitation',
    category: 'government',
    detailedExplanation: 'Duty drawbacks, export credits, trade missions. Successful countries achieve 15-30% annual export growth during takeoff phase.'
  },
  {
    id: 'industrial-policy',
    name: 'Strategic Industrial Policy',
    icon: '🎯',
    description: 'Targeted sector support',
    category: 'government',
    detailedExplanation: 'Time-limited support (5-7 years) for industries with latent comparative advantage. Includes tax holidays, infrastructure provision, and R&D subsidies.'
  },
  
  // Market Access
  {
    id: 'market-access',
    name: 'Global Market Access',
    icon: '🌍',
    description: 'WTO membership, FTAs',
    category: 'market',
    detailedExplanation: 'Access to markets representing 70%+ of global GDP. Reduces average tariffs from 30-40% to 5-10%, enabling export-led growth.'
  },
  {
    id: 'fdi',
    name: 'Foreign Investment',
    icon: '💼',
    description: 'Technology transfer',
    category: 'market',
    detailedExplanation: 'Brings capital, technology, management know-how, and market access. Successful countries attract FDI equivalent to 3-5% of GDP annually during takeoff.'
  },
  {
    id: 'domestic-market',
    name: 'Large Domestic Market',
    icon: '🏪',
    description: 'Internal demand base',
    category: 'market',
    detailedExplanation: 'Population above 50 million or high per capita income. Enables economies of scale even with limited exports, but can reduce competitive pressure.'
  },
  
  // Time & Development
  {
    id: 'time-10years',
    name: 'Time (+10 years)',
    icon: '⏰',
    description: 'Capital accumulation phase',
    category: 'time',
    detailedExplanation: 'Following comparative advantage for 10 years typically doubles capital stock, raises wages 2-3x, and enables move to more sophisticated industries.'
  },
  {
    id: 'time-20years',
    name: 'Time (+20 years)',
    icon: '⏳',
    description: 'Structural transformation',
    category: 'time',
    detailedExplanation: 'Two decades of CAF development transforms economy: manufacturing rises from 10% to 30%+ of GDP, urbanization exceeds 60%, middle class emerges.'
  },
  {
    id: 'education-investment',
    name: 'Education Investment',
    icon: '📚',
    description: 'Human capital development',
    category: 'time',
    detailedExplanation: 'Sustained investment of 4-6% of GDP in education. Primary enrollment reaches 100%, secondary 80%+, tertiary 40%+ over 20 years.'
  },
  {
    id: 'r-and-d',
    name: 'R&D Investment',
    icon: '🔬',
    description: 'Innovation capacity',
    category: 'time',
    detailedExplanation: 'R&D spending rises from <0.5% to 2-4% of GDP. Transition from technology adoption to innovation at the frontier.'
  }
];

export const combinations: Record<string, CombinationResult> = {
  // Core NSE Principle: Match endowments with industry
  'labor-abundant,capital-scarce': {
    result: '🎯 Labor-Intensive Comparative Advantage - The Foundation',
    explanation: 'This is THE fundamental starting point for successful industrialization. With abundant labor (wages $2-5/day) and scarce capital (interest rates 15-25%), the economy MUST start with labor-intensive industries.',
    formula: 'Endowments (L↑, K↓) → Factor Prices (w↓, r↑) → Comparative Advantage (Labor-intensive) → Competitive Industries',
    principle: 'NSE Core Principle: Optimal industrial structure is endogenous to factor endowments. Start with what you have, not what you want.',
    quantitativeEvidence: 'Countries following this principle achieved 7-10% annual GDP growth for 20-30 years. Those defying it averaged only 2-3% growth.',
    countryCases: [
      {
        country: 'China',
        period: '1978-1990',
        gdpGrowth: '9.5% annually',
        exports: 'Textiles grew from $1B to $16B',
        employment: '100 million jobs created',
        keyData: ['Wages: $0.50/hour', 'Interest rates: 18%', 'Rural labor: 800 million'],
        outcome: 'success'
      },
      {
        country: 'Bangladesh',
        period: '1980-2020',
        gdpGrowth: '5.5% annually',
        exports: 'Garments: $0 to $40B (85% of exports)',
        employment: '4.5 million in garments',
        keyData: ['2nd largest garment exporter globally', 'Wages: $0.30/hour in 1990'],
        outcome: 'success'
      },
      {
        country: 'Vietnam',
        period: '1990-2020',
        gdpGrowth: '7.0% annually',
        exports: 'Manufacturing: 10% to 85% of exports',
        employment: '10 million in manufacturing',
        keyData: ['FDI: $15B annually', 'Wages: $1/hour in 2000'],
        outcome: 'success'
      },
      {
        country: 'India (pre-1991)',
        period: '1950-1990',
        gdpGrowth: '3.5% annually (Hindu rate)',
        exports: 'Heavy industry focus',
        keyData: ['Capital-intensive strategy despite labor abundance', 'License Raj system'],
        outcome: 'failure'
      }
    ],
    historicalContext: 'Post-WWII, only countries that started with labor-intensive industries successfully industrialized. Every single country that tried to jump directly to heavy industry failed.',
    lessonsLearned: [
      'You cannot defy comparative advantage - markets will punish you',
      'Start with simple products: garments, shoes, toys, simple assembly',
      'Use profits to accumulate capital and gradually upgrade',
      'Government should facilitate, not pick industries against comparative advantage'
    ],
    commonMistakes: [
      'Trying to develop steel/auto/chemical industries first (Latin America)',
      'Protecting non-competitive industries indefinitely',
      'Ignoring global markets and focusing only on import substitution',
      'Subsidizing capital when labor is abundant'
    ],
    timeline: 'Year 1-5: Textiles & Garments → Year 5-10: Electronics Assembly → Year 10-15: Components → Year 15-20: Own Brands',
    relatedCombinations: ['Add infrastructure for success', 'Add time to see upgrading path'],
    viability: 'viable'
  },

  'capital-abundant,skilled-labor': {
    result: '🚀 Innovation Economy Configuration',
    explanation: 'The combination that enables technological leadership. Low capital costs + skilled workforce = competitive advantage in R&D-intensive industries.',
    formula: 'Endowments (K↑, H↑) → Factor Prices (r↓, skilled wages↑) → Innovation Advantage → Technology Frontier',
    principle: 'At high income levels, comparative advantage shifts from following to creating technology.',
    quantitativeEvidence: 'R&D spending 2.5-4.5% of GDP, patents per capita 100x higher than developing countries.',
    countryCases: [
      {
        country: 'South Korea',
        period: '1990-2020',
        gdpGrowth: '4.5% annually',
        exports: 'High-tech: 30% of exports',
        keyData: ['R&D: 0.5% → 4.5% of GDP', 'Samsung: local assembler → global leader', 'Patents: 100 → 20,000/year'],
        outcome: 'success'
      },
      {
        country: 'Taiwan',
        period: '1980-2020',
        exports: 'Semiconductors: 70% global market share in foundry',
        keyData: ['TSMC founded 1987', 'R&D: 3.5% of GDP', 'Engineers: 250,000+'],
        outcome: 'success'
      },
      {
        country: 'Japan',
        period: '1960-1990',
        gdpGrowth: '6.5% annually',
        keyData: ['Automobiles: 0 → 30% global share', 'Electronics: Sony, Panasonic', 'Just-in-time manufacturing'],
        outcome: 'success'
      }
    ],
    lessonsLearned: [
      'Cannot skip to innovation stage - must accumulate capital and skills first',
      'Requires 20-30 years of sustained education investment',
      'Success requires both private R&D and government support for basic research',
      'Must maintain competitiveness while wages rise'
    ],
    viability: 'viable'
  },

  // Infrastructure Enabling Comparative Advantage - The Great Multiplier
  'labor-abundant,capital-scarce,basic-infrastructure': {
    result: '✅ Infrastructure-Enabled Industrialization',
    explanation: 'This is the "miracle formula" - comparative advantage + infrastructure = rapid industrialization. Infrastructure reduces transaction costs by 30-50%, making labor-cost advantages decisive.',
    formula: 'Comparative Advantage + Infrastructure → Transaction Costs↓ 40% → Global Competitiveness → 8-10% Growth',
    principle: 'Hard infrastructure transforms latent comparative advantage into actual competitive advantage.',
    quantitativeEvidence: 'Countries with this combination grew 3-4 percentage points faster than those without infrastructure.',
    countryCases: [
      {
        country: 'China - Shenzhen SEZ',
        period: '1980-2020',
        gdpGrowth: '20% annually for 40 years',
        keyData: [
          'Population: 30,000 → 13 million',
          'GDP: $20M → $400B',
          'Exports: $0 → $250B',
          'First modern port, power grid, industrial zones'
        ],
        outcome: 'success'
      },
      {
        country: 'Ethiopia - Industrial Parks',
        period: '2010-2020',
        gdpGrowth: '9.5% annually',
        employment: '100,000 in new parks',
        keyData: ['22 industrial parks built', 'Power supply improved', 'Chinese investment: $4B'],
        outcome: 'success'
      },
      {
        country: 'Vietnam - Infrastructure Drive',
        period: '2000-2020',
        exports: 'Manufacturing exports: $10B → $250B',
        keyData: ['300 industrial zones', 'Ports modernized', 'Power capacity: 5GW → 50GW'],
        outcome: 'success'
      },
      {
        country: 'Nigeria - Infrastructure Gaps',
        period: '2000-2020',
        gdpGrowth: '2.5% per capita',
        keyData: ['Power outages: 30% of time', 'Port delays: 20+ days', 'Manufacturing: 10% of GDP (no growth)'],
        outcome: 'failure'
      }
    ],
    historicalContext: 'The East Asian Miracle was as much about infrastructure as policy. China built more infrastructure 1990-2020 than the US did 1850-1950.',
    lessonsLearned: [
      'Infrastructure must match industries - basic ports/power for manufacturing',
      'Government must lead infrastructure investment - private sector won\'t',
      'Location matters - coastal areas have 50% lower transport costs',
      'Reliability more important than sophistication initially'
    ],
    commonMistakes: [
      'Building advanced infrastructure before basic (Sri Lanka\'s empty airport)',
      'Neglecting rural roads while building highways',
      'Allowing unreliable power supply to persist',
      'Not maintaining infrastructure after building'
    ],
    policyImplications: 'Allocate 5-7% of GDP to infrastructure during takeoff phase. Focus on bottlenecks first.',
    viability: 'viable'
  },

  'labor-abundant,capital-scarce,sez,export-promotion': {
    result: '🏆 The East Asian Miracle Formula',
    explanation: 'This exact combination created the fastest sustained growth in human history. SEZs solve coordination failures while export promotion ensures global competitiveness.',
    formula: 'Factor Endowments + SEZ (costs↓ 30%) + Export Focus → Manufacturing Exports↑ 25%/year → Miracle Growth',
    principle: 'Government facilitation through SEZs + market discipline through exports = optimal development path.',
    quantitativeEvidence: 'Countries using this formula achieved 8-10% growth for 20+ years, unprecedented in history.',
    countryCases: [
      {
        country: 'China - Coastal SEZs',
        period: '1980-2010',
        gdpGrowth: '10% annually for 30 years',
        exports: '$18B → $1,500B',
        employment: '250 million lifted from poverty',
        keyData: [
          '5 SEZs → 200+ zones',
          'FDI: $0 → $100B/year',
          'Manufacturing employment: 50M → 150M',
          'Wages rose 10x but remained competitive'
        ],
        outcome: 'success'
      },
      {
        country: 'Mauritius - EPZ Success',
        period: '1970-2000',
        gdpGrowth: '6% annually',
        exports: 'Textiles: 0 → 60% of exports',
        keyData: ['One EPZ transformed economy', 'Full employment achieved', 'Per capita income: $300 → $5,000'],
        outcome: 'success'
      },
      {
        country: 'Dominican Republic',
        period: '1990-2010',
        exports: 'Free zones: 80% of exports',
        employment: '200,000 in zones',
        keyData: ['50+ free zones', 'Textiles → medical devices', 'Wages 3x national average'],
        outcome: 'success'
      }
    ],
    historicalContext: 'SEZs originated in Ireland (Shannon, 1959) but were perfected in East Asia. China\'s first SEZ (Shenzhen) became the model for 2,500+ zones worldwide.',
    lessonsLearned: [
      'SEZs must offer genuine advantages: one-stop service, reliable infrastructure, duty-free imports',
      'Export requirements ensure efficiency - domestic market protection leads to inefficiency',
      'Success attracts success - first movers matter enormously',
      'Must link to global value chains through FDI or partnerships'
    ],
    successFactors: [
      'Political commitment at highest level',
      'Location near ports/airports critical',
      'Flexible labor laws within zones',
      'Gradual expansion from zones to whole economy'
    ],
    timeline: 'Year 1: Establish zone → Year 3: First exports → Year 5: FDI flood → Year 10: Spillovers to domestic economy',
    viability: 'viable'
  },

  // Dynamic Structural Transformation
  'labor-abundant,capital-scarce,basic-infrastructure,time-10years': {
    result: '📈 Dynamic Structural Transformation',
    explanation: 'This shows NSE in action over time - following comparative advantage leads to capital accumulation, enabling industrial upgrading. The market guides the transformation.',
    formula: 'CAF Strategy → Profits → Capital Accumulation (K↑ 100%) → Wages↑ 200% → Natural Upgrading',
    principle: 'Success in labor-intensive industries creates the capital needed for upgrading - endogenous structural change.',
    quantitativeEvidence: 'After 10 years: manufacturing wages triple, capital stock doubles, exports shift to higher value products.',
    countryCases: [
      {
        country: 'China - Gradual Upgrading',
        period: '1980-1990 → 1990-2000',
        keyData: [
          '1980s: Textiles, toys (80% of exports)',
          '1990s: Electronics assembly joins',
          '2000s: Components, own brands emerge',
          'Wages: $0.50 → $1.50 → $5/hour'
        ],
        outcome: 'success'
      },
      {
        country: 'South Korea - Sequential Upgrading',
        period: '1960-1990',
        keyData: [
          '1960s: Wigs, textiles',
          '1970s: Ships, steel',
          '1980s: Cars, electronics',
          '1990s: Semiconductors',
          'Each phase built on previous success'
        ],
        outcome: 'success'
      },
      {
        country: 'Bangladesh - Current Transition',
        period: '2010-2020',
        keyData: [
          'Garments still 85% of exports',
          'But moving from basic to fashion',
          'Electronics assembly starting',
          'Wages rising 7% annually'
        ],
        outcome: 'success'
      }
    ],
    historicalContext: 'This natural progression has repeated in every successful industrializer: UK → US → Japan → Korea → China → Vietnam.',
    lessonsLearned: [
      'Cannot skip stages - each builds capital for the next',
      'Upgrading happens naturally as wages rise IF infrastructure keeps improving',
      'Government should facilitate new industries as old ones lose competitiveness',
      'Must maintain openness to allow market signals to guide transformation'
    ],
    comparativeAnalysis: 'Countries that tried to jump stages (Latin America) stagnated. Those that followed the sequence succeeded.',
    nextQuestion: 'As wages rise, which industries should government target for support?',
    viability: 'viable'
  },

  'labor-abundant,capital-scarce,basic-infrastructure,time-20years': {
    result: '🏆 Complete Structural Transformation',
    explanation: 'Two decades of following comparative advantage transforms a poor agricultural economy into a middle-income industrial powerhouse. This is how miracles happen.',
    formula: 'Consistent CAF Policy × 20 years → Per Capita Income × 8 → Middle Income Status',
    quantitativeEvidence: 'Manufacturing: 10% → 35% of GDP, Urban population: 20% → 60%, Poverty rate: 60% → 10%',
    countryCases: [
      {
        country: 'China',
        period: '1980-2000',
        gdpGrowth: '9.7% annually',
        keyData: [
          'Per capita GDP: $200 → $1,000',
          'Manufacturing employment: 50M → 160M',
          'Exports: $18B → $250B',
          '400 million lifted from poverty'
        ],
        outcome: 'success'
      },
      {
        country: 'Vietnam',
        period: '1990-2010',
        gdpGrowth: '7.5% annually',
        keyData: [
          'Per capita GDP: $100 → $1,200',
          'Manufacturing: 10% → 25% of GDP',
          'Poverty rate: 60% → 15%',
          'FDI stock: $0 → $50B'
        ],
        outcome: 'success'
      }
    ],
    lessonsLearned: [
      '20 years is minimum for full transformation - no shortcuts',
      'Consistency matters more than perfection',
      'Success creates political support for continued reforms',
      'Middle income brings new challenges requiring new strategies'
    ],
    viability: 'viable'
  },

  // Failures - Defying Comparative Advantage
  'labor-abundant,capital-scarce,import-substitution': {
    result: '❌ The Import Substitution Trap',
    explanation: 'This combination destroyed growth across Latin America, Africa, and South Asia. Protecting capital-intensive industries when capital is scarce creates permanent inefficiency.',
    formula: 'Wrong Endowments + Protection → High Costs (2-3× world) → Permanent Subsidies → Fiscal Crisis',
    principle: 'Defying comparative advantage creates non-viable firms that become permanent drains on the economy.',
    quantitativeEvidence: 'Average growth 2-3% vs 7-10% for CAF countries. Government subsidies often exceeded 10% of GDP.',
    countryCases: [
      {
        country: 'India - License Raj',
        period: '1950-1990',
        gdpGrowth: '3.5% (Hindu rate of growth)',
        keyData: [
          'Heavy industry priority despite labor abundance',
          'Ambassador car unchanged for 40 years',
          'Steel plants at 3x world cost',
          '800 million remained in poverty'
        ],
        outcome: 'failure'
      },
      {
        country: 'Argentina - Perpetual Crisis',
        period: '1950-2000',
        gdpGrowth: '1.5% per capita',
        keyData: [
          'From world\'s 6th richest to middle income',
          'Industry subsidies: 15% of budget',
          'Repeated debt crises',
          'Manufacturing declined not grew'
        ],
        outcome: 'failure'
      },
      {
        country: 'Nigeria - Oil Curse',
        period: '1970-2020',
        gdpGrowth: '0.5% per capita',
        keyData: [
          'Steel plants, auto assembly with oil money',
          'All failed when oil prices fell',
          'Manufacturing: 15% → 10% of GDP',
          'Poverty increased despite oil wealth'
        ],
        outcome: 'failure'
      },
      {
        country: 'Brazil - Lost Decades',
        period: '1980-2000',
        gdpGrowth: '0.5% per capita',
        keyData: [
          'Computer industry protection → no innovation',
          'Auto industry 2x world prices',
          'Debt crisis 1982',
          'Hyperinflation 1000%+'
        ],
        outcome: 'failure'
      }
    ],
    historicalContext: 'Import substitution seemed logical after WWII - develop industry behind protective walls. But it ignored economic fundamentals.',
    lessonsLearned: [
      'Protection removes competitive pressure - quality stagnates',
      'Subsidies become politically impossible to remove',
      'Fiscal burden eventually causes macroeconomic crisis',
      'Consumers pay 2-3x world prices for inferior goods'
    ],
    commonMistakes: [
      'Believing you can create comparative advantage through protection',
      'Starting with heavy industry instead of light',
      'Protecting final goods while taxing inputs',
      'Using oil/aid money to subsidize non-viable industries'
    ],
    policyImplications: 'Even if politically difficult, must phase out protection and allow market to determine industrial structure.',
    viability: 'non-viable'
  },

  'capital-scarce,advanced-infrastructure': {
    result: '🏚️ White Elephant Syndrome',
    explanation: 'Building infrastructure that doesn\'t match your industries creates costly, underutilized white elephants. Advanced infrastructure without advanced industries is waste.',
    formula: 'Premature Infrastructure + Wrong Industries → Low Utilization (20-30%) → High Maintenance → Debt Crisis',
    principle: 'Infrastructure must match the needs of industries with comparative advantage, not aspirations.',
    quantitativeEvidence: 'Utilization rates often below 30%, maintenance costs exceed revenues, debt service becomes unsustainable.',
    countryCases: [
      {
        country: 'Sri Lanka - Hambantota',
        period: '2010-2020',
        keyData: [
          'Airport: $230M, 12 passengers/day',
          'Port: $1.5B, had to lease to China',
          'Cricket stadium: $70M, rarely used',
          'Debt crisis resulted'
        ],
        outcome: 'failure'
      },
      {
        country: 'China - Ghost Cities',
        period: '2000-2015',
        keyData: [
          'Ordos: Built for 1M, 100K residents',
          'Apartments for 64M people empty',
          'Some now filling after 10+ years',
          'Total waste: $100B+'
        ],
        outcome: 'failure'
      },
      {
        country: 'African Tech Parks',
        period: '2000-2020',
        keyData: [
          'Kenya Konza: $15B planned, minimal activity',
          'Egypt Smart Village: Partially occupied',
          'Most operate at <30% capacity',
          'Maintenance exceeds revenues'
        ],
        outcome: 'failure'
      }
    ],
    lessonsLearned: [
      'Build infrastructure slightly ahead of demand, not decades',
      'Basic infrastructure (power, roads) before advanced (fiber optic)',
      'Match infrastructure to current industries +1 level',
      'Maintenance costs can bankrupt if no revenue'
    ],
    comparativeAnalysis: 'Successful countries built infrastructure just-in-time. Failed ones built for imagined futures.',
    viability: 'non-viable'
  },

  // Natural Resources - Blessing or Curse?
  'natural-resources,government-coordination': {
    result: '💎 Resource Blessing Path',
    explanation: 'Natural resources become a blessing when government uses revenues to develop competitive downstream industries and diversify the economy.',
    formula: 'Resources + Good Management → Downstream Processing → Diversification → Sustained Growth',
    principle: 'Resources provide capital for development IF managed well and used to build competitive industries.',
    viability: 'conditional',
    quantitativeEvidence: 'Successful resource countries achieved 5-7% growth and diversified economies. Failed ones saw declining per capita income.',
    countryCases: [
      {
        country: 'Chile - Copper Success',
        period: '1990-2020',
        gdpGrowth: '5% annually',
        keyData: [
          'Copper fund saved $30B',
          'Developed wine ($2B exports)',
          'Developed salmon ($5B exports)',
          'Per capita income: $5,000 → $25,000'
        ],
        outcome: 'success'
      },
      {
        country: 'Botswana - Diamond Miracle',
        period: '1970-2020',
        gdpGrowth: '7% annually',
        keyData: [
          'Poorest country → upper middle income',
          'Diamond revenues → infrastructure',
          'Developed services sector',
          'Avoided Dutch Disease'
        ],
        outcome: 'success'
      },
      {
        country: 'Malaysia - Palm to Tech',
        period: '1970-2020',
        exports: 'Diversified from commodities',
        keyData: [
          'Palm oil → processing → oleochemicals',
          'Oil revenues → education investment',
          'Developed electronics industry',
          'Penang became tech hub'
        ],
        outcome: 'success'
      },
      {
        country: 'Norway - Oil Fund',
        period: '1970-2020',
        keyData: [
          'Sovereign wealth fund: $1.4 trillion',
          'Maintained manufacturing',
          'Highest HDI globally',
          'Oil revenues saved not spent'
        ],
        outcome: 'success'
      }
    ],
    lessonsLearned: [
      'Save resource revenues in sovereign funds',
      'Invest in education and infrastructure',
      'Develop downstream processing first',
      'Maintain competitiveness in non-resource sectors'
    ],
    successFactors: [
      'Strong institutions before resource discovery',
      'Transparent revenue management',
      'Counter-cyclical fiscal policy',
      'Investment in human capital'
    ]
  },

  'natural-resources,import-substitution': {
    result: '☠️ The Resource Curse',
    explanation: 'Using resource revenues to subsidize non-competitive industries leads to Dutch Disease, deindustrialization, and eventual collapse when resources decline.',
    formula: 'Resource Revenue + Wrong Industries → Dutch Disease → Deindustrialization → Poverty',
    principle: 'Resource wealth + CAD strategy = Economic disaster. Easy money removes pressure for efficiency.',
    viability: 'non-viable',
    quantitativeEvidence: 'Manufacturing typically declines from 15-20% to 5-10% of GDP. Poverty often higher than before resource discovery.',
    countryCases: [
      {
        country: 'Venezuela - Oil Catastrophe',
        period: '1970-2020',
        gdpGrowth: '-2% per capita (2010-2020)',
        keyData: [
          'Oil: 95% of exports',
          'Manufacturing collapsed',
          'GDP fell 75% after 2013',
          '90% in poverty by 2020',
          'Currency lost 99.99% value'
        ],
        outcome: 'failure'
      },
      {
        country: 'Nigeria - Squandered Wealth',
        period: '1970-2020',
        gdpGrowth: '0.5% per capita',
        keyData: [
          'Oil revenues: $1 trillion total',
          'Manufacturing: 15% → 10% of GDP',
          'Poverty rate increased',
          'Ajaokuta steel: $8B spent, never operational'
        ],
        outcome: 'failure'
      },
      {
        country: 'Angola - Lost Opportunity',
        period: '1975-2020',
        keyData: [
          'Oil: 90% of exports',
          'No economic diversification',
          'Inequality among world\'s highest',
          '40% in poverty despite oil wealth'
        ],
        outcome: 'failure'
      }
    ],
    historicalContext: 'The "resource curse" was identified in the 1990s but countries keep repeating the same mistakes.',
    lessonsLearned: [
      'Oil money makes bad policy sustainable longer',
      'Dutch Disease kills manufacturing competitiveness',
      'Political economy makes reform nearly impossible',
      'When resources decline, economy collapses'
    ],
    commonMistakes: [
      'Using oil money for consumption not investment',
      'Subsidizing fuel and non-viable industries',
      'Allowing currency to appreciate excessively',
      'Neglecting non-oil sectors entirely'
    ]
  },

  // FDI and Technology Transfer
  'labor-abundant,fdi,sez': {
    result: '🏭 FDI-Led Industrial Development',
    explanation: 'Foreign investment provides the missing capital, technology, and market access. SEZs create the enabling environment. This combination accelerates industrialization by 10-15 years.',
    formula: 'Cheap Labor + FDI Capital/Technology + SEZ Facilitation → Rapid Industrialization',
    principle: 'FDI allows countries to leverage global capital and knowledge while utilizing local comparative advantage.',
    viability: 'viable',
    quantitativeEvidence: 'FDI-driven countries industrialized in 20 years vs 40+ years historically. Technology transfer immediate vs decades.',
    countryCases: [
      {
        country: 'China - Foxconn Effect',
        period: '2000-2020',
        employment: '1.2 million jobs (Foxconn alone)',
        exports: 'Electronics: $50B → $800B',
        keyData: [
          'Apple assembly brought entire supply chain',
          'Technology spillovers to local firms',
          'Shenzhen became global tech hub',
          'Local brands emerged (Xiaomi, Oppo)'
        ],
        outcome: 'success'
      },
      {
        country: 'Vietnam - Samsung Success',
        period: '2010-2020',
        exports: 'Samsung: $60B (25% of exports)',
        employment: '200,000 direct + 1M indirect',
        keyData: [
          'Phone assembly → components',
          'R&D center established',
          'Local suppliers developed',
          'Wages rose 3x in decade'
        ],
        outcome: 'success'
      },
      {
        country: 'Ethiopia - Chinese Factories',
        period: '2015-2020',
        employment: '100,000 in Chinese factories',
        keyData: [
          'Huajian shoes: 5,000 jobs',
          'Industrial parks filled quickly',
          'Exports started within months',
          'Technology transfer ongoing'
        ],
        outcome: 'success'
      }
    ],
    lessonsLearned: [
      'FDI brings entire ecosystems not just factories',
      'Local suppliers can learn and upgrade',
      'Skills transfer as important as capital',
      'Success attracts more FDI - virtuous cycle'
    ],
    successFactors: [
      'Reliable infrastructure in zones',
      'Flexible labor regulations',
      'One-stop investment services',
      'Political stability and policy consistency'
    ]
  },

  'capital-abundant,skilled-labor,education-investment,r-and-d': {
    result: '🚀 Innovation Frontier Economy',
    explanation: 'The ultimate development stage - creating rather than following technology. Requires decades of education investment and R&D spending above 2.5% of GDP.',
    formula: 'Human Capital + R&D Investment + Capital Abundance → Innovation → New Industries → Frontier Growth',
    principle: 'High-income status requires transition from advantage-following to advantage-creating through innovation.',
    viability: 'viable',
    quantitativeEvidence: 'R&D: 2.5-4.5% of GDP, Patents: 1000+ per million population, New product revenue: 30%+ of industrial output',
    countryCases: [
      {
        country: 'South Korea - Innovation Power',
        period: '1990-2020',
        keyData: [
          'R&D: 0.5% → 4.5% of GDP (#1 globally)',
          'Patents: 100 → 20,000/year',
          'Global brands: Samsung, LG, Hyundai',
          'Per capita income: $6,000 → $35,000'
        ],
        outcome: 'success'
      },
      {
        country: 'Israel - Startup Nation',
        period: '1990-2020',
        keyData: [
          'R&D: 4.5% of GDP',
          'VC investment: $10B/year',
          'NASDAQ listings: 80+ companies',
          'Tech exports: 50% of total'
        ],
        outcome: 'success'
      },
      {
        country: 'Singapore - Biotech Hub',
        period: '2000-2020',
        keyData: [
          'Biopolis: $500M investment',
          'R&D: 2.2% of GDP',
          'Scientists recruited globally',
          'Pharma manufacturing: $30B'
        ],
        outcome: 'success'
      }
    ],
    lessonsLearned: [
      'Takes 30+ years of education investment',
      'Requires tolerance for failure (90% of R&D fails)',
      'Need venture capital ecosystem',
      'Must retain talent with quality of life'
    ]
  },

  // Complex Success Configurations
  'labor-abundant,capital-scarce,basic-infrastructure,government-coordination,market-access': {
    result: '🌟 The Complete Development Formula',
    explanation: 'This is the optimal configuration that produced the East Asian Miracle. Every element reinforces the others, creating unstoppable momentum.',
    formula: 'Right Endowments + Right Industries + Infrastructure + Facilitation + Global Markets = 10% Growth',
    principle: 'When all elements align with comparative advantage, countries achieve unprecedented catch-up growth.',
    viability: 'viable',
    quantitativeEvidence: 'Countries with all elements grew 8-10% for 20-30 years. Missing any element reduced growth by 2-3 percentage points.',
    countryCases: [
      {
        country: 'China',
        period: '1980-2010',
        gdpGrowth: '10% for 30 years',
        keyData: [
          'Largest poverty reduction in history: 800M',
          'Manufacturing employment: 50M → 150M',
          'Exports: $18B → $1,500B',
          'Per capita income: $200 → $5,000'
        ],
        outcome: 'success'
      },
      {
        country: 'Vietnam',
        period: '1990-2020',
        gdpGrowth: '7% for 30 years',
        keyData: [
          'Poverty: 60% → 5%',
          'Manufacturing: 10% → 25% of GDP',
          'FDI: $20B annually',
          'Middle income achieved 2010'
        ],
        outcome: 'success'
      }
    ],
    historicalContext: 'This formula was discovered through trial and error. Countries that got all elements right succeeded spectacularly.',
    lessonsLearned: [
      'All elements must be present - missing one breaks the formula',
      'Sequencing matters - infrastructure before industry',
      'Political commitment must be sustained across decades',
      'Success breeds success - momentum builds'
    ],
    timeline: 'Year 1-5: Setup → Year 5-10: Takeoff → Year 10-20: Rapid growth → Year 20+: Graduation to middle income'
  },

  'capital-scarce,import-substitution,advanced-infrastructure': {
    result: '💥 The Perfect Storm of Failure',
    explanation: 'The toxic combination that destroyed Latin American development. Every element reinforces failure, creating debt crises and lost decades.',
    formula: 'CAD Strategy + Premature Infrastructure + Scarce Capital → Debt Crisis → Lost Decades',
    principle: 'When multiple policies defy economic fundamentals, failure is not just likely but inevitable.',
    viability: 'non-viable',
    quantitativeEvidence: 'Average growth: 0-2% for decades. Debt/GDP often exceeded 100%. Multiple crisis and IMF interventions.',
    countryCases: [
      {
        country: 'Brazil',
        period: '1970-1990',
        gdpGrowth: '2.5% (1980s: -0.5%)',
        keyData: [
          'Brasilia: $40B white elephant capital',
          'Computer reservation: No innovation',
          'Debt crisis 1982',
          'Lost decade of 1980s',
          'Hyperinflation: 1000%+'
        ],
        outcome: 'failure'
      },
      {
        country: 'Argentina',
        period: '1950-2000',
        keyData: [
          'Multiple debt defaults',
          'Import substitution for 50 years',
          'Infrastructure for industries that failed',
          'From rich to middle income'
        ],
        outcome: 'failure'
      }
    ],
    lessonsLearned: [
      'Bad policies reinforce each other',
      'Debt accumulates faster than growth',
      'Political economy makes exit difficult',
      'Recovery requires complete policy reversal'
    ]
  },

  // Time and Education Combinations
  'labor-abundant,capital-scarce,education-investment,time-20years': {
    result: '📚 Human Capital Transformation',
    explanation: 'Sustained education investment while following comparative advantage creates the skilled workforce needed for industrial upgrading.',
    formula: 'Labor Industries + Education Investment × 20 years → Skilled Workforce → Technology Industries',
    principle: 'Education investment must accompany industrial development to enable smooth upgrading.',
    viability: 'viable',
    quantitativeEvidence: 'Primary enrollment: 60% → 100%, Secondary: 20% → 80%, Tertiary: 5% → 40%. Engineers per capita increases 10x.',
    countryCases: [
      {
        country: 'South Korea',
        period: '1960-1990',
        keyData: [
          'Education: 2% → 6% of GDP',
          'Literacy: 30% → 98%',
          'University enrollment: 5% → 40%',
          'Engineers enabled electronics industry'
        ],
        outcome: 'success'
      },
      {
        country: 'China',
        period: '1980-2010',
        keyData: [
          '9-year compulsory education',
          'University enrollment: 1M → 30M',
          'STEM graduates: 5M/year',
          'Enabled move up value chain'
        ],
        outcome: 'success'
      }
    ],
    lessonsLearned: [
      'Basic education first, higher education follows',
      'Technical education as important as university',
      'Must align education with industrial needs',
      'Takes full generation to see results'
    ]
  },

  // Mixed Strategies
  'labor-abundant,capital-scarce,import-substitution,export-promotion': {
    result: '🔄 Confused Industrial Strategy',
    explanation: 'Trying to protect domestic market while promoting exports creates contradictions. Firms can\'t be competitive globally while being protected domestically.',
    formula: 'Protection + Export Goals → Confused Incentives → Mediocre Performance',
    principle: 'Industrial policy must be coherent. Protection and export promotion are fundamentally incompatible.',
    viability: 'conditional',
    quantitativeEvidence: 'Growth typically 3-5% - better than pure ISI but worse than pure export orientation.',
    countryCases: [
      {
        country: 'India',
        period: '1991-2010',
        gdpGrowth: '6.5% (better than before)',
        keyData: [
          'Partial liberalization only',
          'Some sectors protected, others open',
          'IT services succeeded (no legacy)',
          'Manufacturing lagged'
        ],
        outcome: 'mixed'
      },
      {
        country: 'Mexico',
        period: '1990-2020',
        keyData: [
          'NAFTA but kept some protection',
          'Maquiladoras succeeded',
          'Domestic industry struggled',
          'Dual economy emerged'
        ],
        outcome: 'mixed'
      }
    ],
    lessonsLearned: [
      'Half-measures produce half-results',
      'Political economy prevents full reform',
      'Successful sectors are those fully liberalized',
      'Protected sectors remain inefficient'
    ]
  },

  // Special Combinations for Learning
  'labor-abundant,capital-scarce,basic-infrastructure,fdi,time-10years': {
    result: '🎓 The Learning Laboratory',
    explanation: 'This combination shows how countries learn from FDI over time. Knowledge spillovers enable domestic firms to eventually compete.',
    formula: 'FDI Technology + Local Learning × Time → Domestic Capabilities → Indigenous Innovation',
    principle: 'Technology transfer through FDI accelerates development but requires absorptive capacity.',
    viability: 'viable',
    countryCases: [
      {
        country: 'China - Mobile Phones',
        period: '2000-2020',
        keyData: [
          '2000: 100% foreign brands',
          '2010: Local assembly emerges',
          '2015: Chinese brands 50% share',
          '2020: Xiaomi, Oppo global players'
        ],
        outcome: 'success'
      }
    ],
    lessonsLearned: [
      'Learning takes 10-15 years minimum',
      'Local suppliers learn faster than final producers',
      'Need local R&D investment to fully absorb',
      'IP protection must balance learning and innovation'
    ]
  },

  // Regional Integration
  'labor-abundant,capital-scarce,market-access,time-10years': {
    result: '🌏 Regional Value Chain Integration',
    explanation: 'Access to regional markets enables countries to specialize in specific stages of production, accelerating industrialization.',
    formula: 'Regional Integration + Specialization → Value Chain Position → Accelerated Development',
    principle: 'Regional integration allows countries to industrialize faster by focusing on specific comparative advantages.',
    viability: 'viable',
    countryCases: [
      {
        country: 'Vietnam in ASEAN',
        period: '1995-2020',
        keyData: [
          'ASEAN integration 1995',
          'Specialized in assembly',
          'Part of Asian value chains',
          'Exports grew 15% annually'
        ],
        outcome: 'success'
      },
      {
        country: 'Eastern Europe in EU',
        period: '2004-2020',
        keyData: [
          'EU accession brought FDI',
          'Integrated into German value chains',
          'Specialized in components',
          'Convergence with West'
        ],
        outcome: 'success'
      }
    ],
    lessonsLearned: [
      'Regional integration multiplies market access benefits',
      'Enables specialization in narrow segments',
      'Reduces transport costs and time',
      'Creates competitive pressure for efficiency'
    ]
  }
};

// Helper function remains the same but now returns richer results
export function checkCombination(elementIds: string[]): CombinationResult | null {
  const sortedIds = elementIds.sort().join(',');
  
  // Check exact matches first - normalize both sides for comparison
  for (const [key, value] of Object.entries(combinations)) {
    const sortedKey = key.split(',').sort().join(',');
    if (sortedKey === sortedIds) {
      return value;
    }
  }
  
  // Check partial matches for educational value
  // Only show partial matches if no exact match exists and the partial has fewer elements
  let bestPartialMatch = null;
  let bestPartialMatchLength = 0;
  
  for (const [key, value] of Object.entries(combinations)) {
    const keyElements = key.split(',');
    if (keyElements.length < elementIds.length && 
        keyElements.every(e => elementIds.includes(e)) &&
        keyElements.length > bestPartialMatchLength) {
      bestPartialMatch = {
        ...value,
        explanation: `Partial match: ${value.explanation} (Try adding more elements to see full effects)`,
        nextQuestion: 'What other elements might enhance or change this outcome?'
      };
      bestPartialMatchLength = keyElements.length;
    }
  }
  
  if (bestPartialMatch) {
    return bestPartialMatch;
  }
  
  // Educational response for unmatched combinations
  if (elementIds.length >= 2) {
    return {
      result: '🔍 Exploring Economic Relationships',
      explanation: `You're combining ${elementIds.length} elements. Each combination teaches different NSE principles. Keep experimenting!`,
      nextQuestion: 'Try adding infrastructure or time elements to see dynamic effects.',
      principle: 'Economic development is complex - success requires aligning multiple factors correctly.',
      lessonsLearned: [
        'Not all combinations have been tried historically',
        'Some combinations might work in specific contexts',
        'The key is understanding why certain combinations succeed'
      ],
      historicalContext: 'Most countries that failed tried unusual combinations not grounded in economic fundamentals.'
    };
  }
  
  return null;
}