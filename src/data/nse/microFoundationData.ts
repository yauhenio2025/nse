export interface Element {
  id: string;
  name: string;
  icon: string;
  description: string;
  category: 'endowment' | 'infrastructure' | 'government' | 'market' | 'time';
}

export interface CombinationResult {
  result: string;
  explanation: string;
  formula?: string;
  examples?: string;
  principle?: string;
  nextQuestion?: string;
  viability?: 'viable' | 'non-viable' | 'conditional';
}

export const elements: Element[] = [
  // Factor Endowments
  {
    id: 'labor-abundant',
    name: 'Abundant Labor',
    icon: '👥',
    description: 'Low wages, large workforce',
    category: 'endowment'
  },
  {
    id: 'capital-scarce',
    name: 'Scarce Capital',
    icon: '💰',
    description: 'High interest rates (15-25%)',
    category: 'endowment'
  },
  {
    id: 'capital-abundant',
    name: 'Abundant Capital',
    icon: '💎',
    description: 'Low interest rates (2-5%)',
    category: 'endowment'
  },
  {
    id: 'natural-resources',
    name: 'Natural Resources',
    icon: '⛏️',
    description: 'Oil, minerals, arable land',
    category: 'endowment'
  },
  {
    id: 'skilled-labor',
    name: 'Skilled Labor',
    icon: '🎓',
    description: 'Engineers, technicians',
    category: 'endowment'
  },
  
  // Infrastructure
  {
    id: 'basic-infrastructure',
    name: 'Basic Infrastructure',
    icon: '🏗️',
    description: 'Ports, roads, power',
    category: 'infrastructure'
  },
  {
    id: 'advanced-infrastructure',
    name: 'Advanced Infrastructure',
    icon: '🌐',
    description: 'High-speed internet, logistics',
    category: 'infrastructure'
  },
  {
    id: 'sez',
    name: 'Special Economic Zones',
    icon: '🏭',
    description: 'Export processing zones',
    category: 'infrastructure'
  },
  
  // Government Facilitation
  {
    id: 'government-coordination',
    name: 'Government Coordination',
    icon: '🏛️',
    description: 'Industrial parks, coordination',
    category: 'government'
  },
  {
    id: 'import-substitution',
    name: 'Import Substitution',
    icon: '🚫',
    description: 'Protectionist policies',
    category: 'government'
  },
  {
    id: 'export-promotion',
    name: 'Export Promotion',
    icon: '📦',
    description: 'Trade facilitation',
    category: 'government'
  },
  
  // Market Access
  {
    id: 'market-access',
    name: 'Global Market Access',
    icon: '🌍',
    description: 'WTO membership, FTAs',
    category: 'market'
  },
  {
    id: 'fdi',
    name: 'Foreign Investment',
    icon: '💼',
    description: 'Technology transfer',
    category: 'market'
  },
  
  // Time & Development
  {
    id: 'time-10years',
    name: 'Time (+10 years)',
    icon: '⏰',
    description: 'Capital accumulation',
    category: 'time'
  },
  {
    id: 'education-investment',
    name: 'Education Investment',
    icon: '📚',
    description: 'Human capital development',
    category: 'time'
  }
];

export const combinations: Record<string, CombinationResult> = {
  // Core NSE Principle: Match endowments with industry
  'labor-abundant,capital-scarce': {
    result: 'Labor-Intensive Comparative Advantage',
    explanation: 'With abundant labor and scarce capital, the economy has comparative advantage in labor-intensive industries like textiles, toys, and assembly.',
    formula: 'Endowments (L up, K down) -> Factor Prices (w down, r up) -> Comparative Advantage (Labor-intensive)',
    examples: 'Bangladesh garments ($50B exports), Vietnam footwear ($22B), Early China toys & electronics',
    principle: 'NSE Core: Optimal industrial structure is endogenous to factor endowments. Industries must match what you have, not what you want.',
    viability: 'viable'
  },
  
  'capital-abundant,skilled-labor': {
    result: 'Capital & Technology-Intensive Advantage',
    explanation: 'Abundant capital and skilled labor create comparative advantage in semiconductors, machinery, and high-tech industries.',
    formula: 'Endowments (K up, H up) -> Factor Prices (r down, skilled wages up) -> Comparative Advantage (Capital-intensive)',
    examples: 'Korea semiconductors, Japan robotics, Germany machinery, Taiwan semiconductors',
    principle: 'Advanced economies must continuously innovate at the technology frontier to maintain competitiveness.',
    viability: 'viable'
  },
  
  // Infrastructure Enabling Comparative Advantage
  'labor-abundant,capital-scarce,basic-infrastructure': {
    result: 'Infrastructure-Enabled Industrialization',
    explanation: 'Basic infrastructure reduces transaction costs, allowing labor-intensive industries to realize their comparative advantage and access global markets.',
    formula: 'Comparative Advantage + Infrastructure -> Lower Transaction Costs -> Global Competitiveness',
    examples: 'China coastal SEZs (Shenzhen), Vietnam industrial parks, Bangladesh EPZs, Ethiopia industrial parks',
    principle: 'Hard infrastructure transforms latent comparative advantage into actual competitive advantage.',
    viability: 'viable'
  },
  
  'labor-abundant,capital-scarce,sez,export-promotion': {
    result: 'Export-Led Manufacturing Success',
    explanation: 'SEZs + export promotion policies enable labor-intensive manufacturers to overcome coordination failures and access global value chains.',
    formula: 'Factor Endowments + SEZ + Export Policy -> Manufacturing Exports -> Rapid Growth',
    examples: 'Shenzhen (from fishing village to $400B GDP), Vietnam electronics exports, Mauritius textiles',
    principle: 'Government facilitation through SEZs solves coordination problems and attracts first movers.',
    viability: 'viable'
  },
  
  // Time and Structural Transformation
  'labor-abundant,capital-scarce,basic-infrastructure,time-10years': {
    result: 'Structural Transformation Success',
    explanation: 'Following comparative advantage for 10 years leads to capital accumulation, rising wages, and natural industrial upgrading.',
    formula: 'CAF Strategy -> Capital Accumulation -> Endowment Change -> Industrial Upgrading',
    examples: 'China: textiles (1980s) -> electronics assembly (1990s) -> smartphones (2000s)',
    principle: 'Dynamic comparative advantage: Success in labor-intensive industries creates capital for upgrading.',
    nextQuestion: 'What industries should the country target next as wages rise?',
    viability: 'viable'
  },
  
  // Defying Comparative Advantage
  'labor-abundant,capital-scarce,import-substitution': {
    result: '⚠️ Import Substitution Trap',
    explanation: 'Protecting capital-intensive industries in labor-abundant countries creates non-viable firms requiring permanent subsidies.',
    formula: 'Wrong Endowments + Protection -> High Costs -> Permanent Subsidies -> Slow Growth',
    examples: 'India Ambassador car (30+ years protection), Argentina electronics, Nigeria steel mills',
    principle: 'Defying comparative advantage creates zombie firms that drain government resources.',
    viability: 'non-viable'
  },
  
  'capital-scarce,advanced-infrastructure': {
    result: '❌ Infrastructure-Industry Mismatch',
    explanation: 'Advanced infrastructure without matching industries becomes a white elephant - costly to maintain with low utilization.',
    formula: 'Advanced Infrastructure + Wrong Industries -> Low Usage -> High Maintenance Costs -> Waste',
    examples: 'Ghost cities in China, Underused airports in Sri Lanka, Empty tech parks in various countries',
    principle: 'Infrastructure must match the needs of industries with comparative advantage.',
    viability: 'non-viable'
  },
  
  // Natural Resources Cases
  'natural-resources,government-coordination': {
    result: 'Resource-Based Development Path',
    explanation: 'Natural resources can fund development if government coordinates downstream processing and avoids Dutch Disease.',
    formula: 'Resources + Processing -> Value Addition -> Diversification',
    examples: 'Chile (copper -> wine/salmon), Botswana (diamonds -> services), Malaysia (palm oil -> electronics)',
    principle: 'Resource wealth enables development only with proper management and diversification.',
    viability: 'conditional'
  },
  
  'natural-resources,import-substitution': {
    result: '❌ Resource Curse',
    explanation: 'Using resource revenues to subsidize non-competitive industries leads to Dutch Disease and economic stagnation.',
    formula: 'Resource Revenues + Wrong Industries -> Dutch Disease -> Deindustrialization',
    examples: 'Venezuela oil curse, Nigeria failed industrialization, Argentina decline',
    principle: 'Resource wealth + CAD strategy = Economic disaster',
    viability: 'non-viable'
  },
  
  // FDI and Technology Transfer
  'labor-abundant,fdi,sez': {
    result: 'FDI-Led Industrial Development',
    explanation: 'Foreign investment brings technology, management, and market access to utilize abundant labor.',
    formula: 'Cheap Labor + FDI + SEZ -> Technology Transfer -> Industrial Learning',
    examples: 'China Foxconn (1M jobs), Vietnam Samsung ($60B exports), Ethiopia textile FDI',
    principle: 'FDI accelerates industrial development by providing missing capital and know-how.',
    viability: 'viable'
  },
  
  'capital-abundant,skilled-labor,education-investment': {
    result: 'Innovation-Driven Economy',
    explanation: 'Sustained education investment with capital abundance enables transition to innovation frontier.',
    formula: 'Human Capital + R&D Investment -> Innovation -> New Industries',
    examples: 'Korea: 2% to 4.5% R&D per GDP, Israel startup nation, Singapore biotech',
    principle: 'Reaching high-income requires transition from advantage-following to advantage-creating.',
    viability: 'viable'
  },
  
  // Complex Combinations
  'labor-abundant,capital-scarce,basic-infrastructure,government-coordination,market-access': {
    result: '🌟 Optimal Development Configuration',
    explanation: 'This combination represents the ideal setup for rapid catch-up growth: matching endowments with industries, infrastructure support, and global integration.',
    formula: 'Right Endowments + Right Industries + Government Facilitation + Global Markets = Miracle Growth',
    examples: 'China 1980-2010 (10% growth), Vietnam 1990-2020 (7% growth), Bangladesh RMG sector',
    principle: 'The East Asian Miracle formula: Follow comparative advantage with government facilitation.',
    viability: 'viable'
  },
  
  'capital-scarce,import-substitution,advanced-infrastructure': {
    result: '❌ Latin American Development Trap',
    explanation: 'Combining import substitution with premature advanced infrastructure creates a double burden of non-viable industries and white elephant projects.',
    formula: 'CAD Strategy + Premature Infrastructure -> Debt Crisis -> Lost Decades',
    examples: 'Brazil 1980s debt crisis, Argentina repeated crises, Mexico pre-NAFTA stagnation',
    principle: 'Attempting to leapfrog development stages leads to crisis and stagnation.',
    viability: 'non-viable'
  }
};

// Helper function to check combinations
export function checkCombination(elementIds: string[]): CombinationResult | null {
  const sortedIds = elementIds.sort().join(',');
  
  // Check exact matches first
  if (combinations[sortedIds]) {
    return combinations[sortedIds];
  }
  
  // Check partial matches for educational value
  for (const [key, value] of Object.entries(combinations)) {
    const keyElements = key.split(',');
    if (keyElements.every(e => elementIds.includes(e))) {
      return {
        ...value,
        explanation: `Partial match: ${value.explanation} (Try adding more elements to see full effects)`,
        nextQuestion: 'What other elements might enhance or change this outcome?'
      };
    }
  }
  
  // Educational response for unmatched combinations
  if (elementIds.length >= 2) {
    return {
      result: '🔍 Exploring Economic Relationships',
      explanation: `You're combining ${elementIds.length} elements. Each combination teaches different NSE principles. Keep experimenting!`,
      nextQuestion: 'Try adding infrastructure or time elements to see dynamic effects.',
      principle: 'Economic development is complex - success requires aligning multiple factors correctly.'
    };
  }
  
  return null;
}