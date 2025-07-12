// Enhanced Flying Geese Data with NSE principles and real-world challenges

export interface Country {
  id: string;
  name: string;
  flag: string;
  gdp: number;
  wageLevel: number; // Monthly wage for unskilled workers
  industries: Industry[];
  stage: DevelopmentStage;
  infrastructure: Infrastructure;
  politicalStability: number; // 0-100
  environmentalHealth: number; // 0-100
  fdiPolicy: 'restrictive' | 'moderate' | 'open';
  education: EducationLevel;
  industrialUpgradeIndex: number; // 0-1, relative to frontier
  canUpgrade: boolean;
  canTransferTo?: string[];
  historicalNote?: string;
  challenges: Challenge[];
}

export interface Industry {
  name: string;
  type: 'labor-intensive' | 'capital-intensive' | 'technology-intensive' | 'knowledge-intensive';
  employmentShare: number;
  productivityLevel: number;
  exportValue: number;
  technologyLevel: number; // 0-100
  pollutionLevel: number; // 0-100
  transferable: boolean;
  upgradeRequirements?: UpgradeRequirement[];
}

export interface Infrastructure {
  transportation: number; // 0-100
  electricity: number; // 0-100
  telecommunications: number; // 0-100
  industrialZones: number; // Number of special economic zones
  portCapacity: number; // 0-100
  overall: number; // Calculated average
}

export interface EducationLevel {
  literacy: number; // 0-100
  primaryCompletion: number; // 0-100
  secondaryCompletion: number; // 0-100
  tertiaryEnrollment: number; // 0-100
  technicalSkills: number; // 0-100
}

export interface Challenge {
  type: 'infrastructure' | 'political' | 'environmental' | 'economic' | 'social';
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  impact: string;
  solution?: string;
}

export interface UpgradeRequirement {
  type: 'infrastructure' | 'education' | 'capital' | 'technology' | 'policy';
  minimum: number;
  description: string;
}

export interface TransferResult {
  success: boolean;
  fromCountry: Country;
  toCountry: Country;
  narrative: string;
  sideEffects?: SideEffect[];
  followUpActions?: string[];
}

export interface SideEffect {
  type: 'environmental' | 'social' | 'economic' | 'political';
  description: string;
  severity: 'low' | 'medium' | 'high';
}

export type DevelopmentStage = 
  | 'pre-industrial' 
  | 'early-industrial' 
  | 'industrial' 
  | 'advanced' 
  | 'innovation'
  | 'middle-income-trap';

export interface GameEvent {
  type: 'crisis' | 'opportunity' | 'policy' | 'global';
  title: string;
  description: string;
  effects: CountryEffect[];
  choices?: EventChoice[];
}

export interface CountryEffect {
  countryId: string;
  gdpChange?: number;
  stabilityChange?: number;
  industriesAffected?: string[];
  infrastructureChange?: number;
}

export interface EventChoice {
  label: string;
  consequences: CountryEffect[];
  cost?: number;
}

export const industriesDatabase: Record<string, Industry> = {
  // Labor-intensive industries
  'Textiles': {
    name: 'Textiles',
    type: 'labor-intensive',
    employmentShare: 0,
    productivityLevel: 20,
    exportValue: 0,
    technologyLevel: 15,
    pollutionLevel: 45,
    transferable: true,
    upgradeRequirements: [
      { type: 'infrastructure', minimum: 30, description: 'Basic transport and power' },
      { type: 'education', minimum: 40, description: 'Basic literacy' }
    ]
  },
  'Garments': {
    name: 'Garments',
    type: 'labor-intensive',
    employmentShare: 0,
    productivityLevel: 25,
    exportValue: 0,
    technologyLevel: 20,
    pollutionLevel: 30,
    transferable: true,
    upgradeRequirements: [
      { type: 'infrastructure', minimum: 35, description: 'Industrial zones' },
      { type: 'education', minimum: 45, description: 'Basic skills' }
    ]
  },
  'Footwear': {
    name: 'Footwear',
    type: 'labor-intensive',
    employmentShare: 0,
    productivityLevel: 22,
    exportValue: 0,
    technologyLevel: 18,
    pollutionLevel: 35,
    transferable: true,
    upgradeRequirements: [
      { type: 'infrastructure', minimum: 35, description: 'Supply chain access' }
    ]
  },
  'Toys': {
    name: 'Toys',
    type: 'labor-intensive',
    employmentShare: 0,
    productivityLevel: 20,
    exportValue: 0,
    technologyLevel: 15,
    pollutionLevel: 25,
    transferable: true
  },
  'Assembly': {
    name: 'Assembly',
    type: 'labor-intensive',
    employmentShare: 0,
    productivityLevel: 30,
    exportValue: 0,
    technologyLevel: 25,
    pollutionLevel: 20,
    transferable: true,
    upgradeRequirements: [
      { type: 'infrastructure', minimum: 45, description: 'Reliable power' },
      { type: 'education', minimum: 50, description: 'Technical training' }
    ]
  },
  
  // Capital-intensive industries
  'Steel': {
    name: 'Steel',
    type: 'capital-intensive',
    employmentShare: 0,
    productivityLevel: 50,
    exportValue: 0,
    technologyLevel: 45,
    pollutionLevel: 80,
    transferable: true,
    upgradeRequirements: [
      { type: 'capital', minimum: 60, description: 'Heavy investment' },
      { type: 'infrastructure', minimum: 70, description: 'Industrial infrastructure' }
    ]
  },
  'Chemicals': {
    name: 'Chemicals',
    type: 'capital-intensive',
    employmentShare: 0,
    productivityLevel: 55,
    exportValue: 0,
    technologyLevel: 50,
    pollutionLevel: 75,
    transferable: true,
    upgradeRequirements: [
      { type: 'education', minimum: 60, description: 'Skilled technicians' },
      { type: 'infrastructure', minimum: 65, description: 'Chemical parks' }
    ]
  },
  'Machinery': {
    name: 'Machinery',
    type: 'capital-intensive',
    employmentShare: 0,
    productivityLevel: 60,
    exportValue: 0,
    technologyLevel: 55,
    pollutionLevel: 40,
    transferable: true,
    upgradeRequirements: [
      { type: 'education', minimum: 65, description: 'Engineering skills' }
    ]
  },
  'Ships': {
    name: 'Ships',
    type: 'capital-intensive',
    employmentShare: 0,
    productivityLevel: 65,
    exportValue: 0,
    technologyLevel: 60,
    pollutionLevel: 50,
    transferable: true,
    upgradeRequirements: [
      { type: 'infrastructure', minimum: 80, description: 'Deep water ports' }
    ]
  },
  'Automobiles': {
    name: 'Automobiles',
    type: 'capital-intensive',
    employmentShare: 0,
    productivityLevel: 70,
    exportValue: 0,
    technologyLevel: 65,
    pollutionLevel: 55,
    transferable: true,
    upgradeRequirements: [
      { type: 'education', minimum: 70, description: 'Skilled workforce' },
      { type: 'infrastructure', minimum: 75, description: 'Supply chain' }
    ]
  },
  
  // Technology-intensive industries
  'Electronics': {
    name: 'Electronics',
    type: 'technology-intensive',
    employmentShare: 0,
    productivityLevel: 75,
    exportValue: 0,
    technologyLevel: 70,
    pollutionLevel: 35,
    transferable: true,
    upgradeRequirements: [
      { type: 'education', minimum: 75, description: 'Technical education' },
      { type: 'infrastructure', minimum: 80, description: 'Clean rooms' }
    ]
  },
  'Semiconductors': {
    name: 'Semiconductors',
    type: 'technology-intensive',
    employmentShare: 0,
    productivityLevel: 85,
    exportValue: 0,
    technologyLevel: 85,
    pollutionLevel: 40,
    transferable: false,
    upgradeRequirements: [
      { type: 'capital', minimum: 90, description: 'Massive capital' },
      { type: 'technology', minimum: 80, description: 'Tech transfer' }
    ]
  },
  'Pharmaceuticals': {
    name: 'Pharmaceuticals',
    type: 'technology-intensive',
    employmentShare: 0,
    productivityLevel: 80,
    exportValue: 0,
    technologyLevel: 75,
    pollutionLevel: 45,
    transferable: true,
    upgradeRequirements: [
      { type: 'education', minimum: 80, description: 'Research capabilities' },
      { type: 'policy', minimum: 70, description: 'IP protection' }
    ]
  },
  'Telecommunications': {
    name: 'Telecommunications',
    type: 'technology-intensive',
    employmentShare: 0,
    productivityLevel: 82,
    exportValue: 0,
    technologyLevel: 80,
    pollutionLevel: 15,
    transferable: false
  },
  
  // Knowledge-intensive industries
  'Software': {
    name: 'Software',
    type: 'knowledge-intensive',
    employmentShare: 0,
    productivityLevel: 90,
    exportValue: 0,
    technologyLevel: 90,
    pollutionLevel: 5,
    transferable: false,
    upgradeRequirements: [
      { type: 'education', minimum: 85, description: 'University education' }
    ]
  },
  'Biotechnology': {
    name: 'Biotechnology',
    type: 'knowledge-intensive',
    employmentShare: 0,
    productivityLevel: 95,
    exportValue: 0,
    technologyLevel: 95,
    pollutionLevel: 20,
    transferable: false,
    upgradeRequirements: [
      { type: 'education', minimum: 90, description: 'PhD researchers' },
      { type: 'capital', minimum: 85, description: 'R&D investment' }
    ]
  },
  'AI & Robotics': {
    name: 'AI & Robotics',
    type: 'knowledge-intensive',
    employmentShare: 0,
    productivityLevel: 98,
    exportValue: 0,
    technologyLevel: 98,
    pollutionLevel: 10,
    transferable: false,
    upgradeRequirements: [
      { type: 'education', minimum: 95, description: 'Top talent' },
      { type: 'technology', minimum: 90, description: 'Tech ecosystem' }
    ]
  },
  'Green Technology': {
    name: 'Green Technology',
    type: 'knowledge-intensive',
    employmentShare: 0,
    productivityLevel: 85,
    exportValue: 0,
    technologyLevel: 88,
    pollutionLevel: -20, // Negative pollution (helps environment)
    transferable: false
  },
  
  // Primary/Resource industries
  'Agriculture': {
    name: 'Agriculture',
    type: 'labor-intensive',
    employmentShare: 0,
    productivityLevel: 15,
    exportValue: 0,
    technologyLevel: 10,
    pollutionLevel: 30,
    transferable: false
  },
  'Mining': {
    name: 'Mining',
    type: 'capital-intensive',
    employmentShare: 0,
    productivityLevel: 40,
    exportValue: 0,
    technologyLevel: 30,
    pollutionLevel: 90,
    transferable: false
  },
  'Tourism': {
    name: 'Tourism',
    type: 'labor-intensive',
    employmentShare: 0,
    productivityLevel: 35,
    exportValue: 0,
    technologyLevel: 25,
    pollutionLevel: 25,
    transferable: false
  }
};

export const flyingGeeseData = {
  countries: {
    1960: {
      japan: createCountry({
        id: 'japan',
        name: 'Japan',
        flag: 'JP',
        gdp: 3000,
        wageLevel: 150,
        industriesList: ['Textiles', 'Toys', 'Assembly', 'Ships'],
        stage: 'industrial',
        infrastructure: { transportation: 70, electricity: 75, telecommunications: 60, industrialZones: 5, portCapacity: 80 },
        politicalStability: 85,
        environmentalHealth: 70,
        fdiPolicy: 'moderate',
        education: { literacy: 95, primaryCompletion: 98, secondaryCompletion: 85, tertiaryEnrollment: 15, technicalSkills: 60 },
        industrialUpgradeIndex: 0.65,
        canUpgrade: true,
        canTransferTo: ['korea', 'taiwan'],
        historicalNote: 'Post-war reconstruction complete, wages rising rapidly',
        challenges: [
          { type: 'economic', severity: 'medium', description: 'Rising labor costs', impact: 'Need to transfer labor-intensive industries' },
          { type: 'environmental', severity: 'low', description: 'Industrial pollution emerging', impact: 'Public health concerns' }
        ]
      }),
      korea: createCountry({
        id: 'korea',
        name: 'South Korea',
        flag: 'KR',
        gdp: 250,
        wageLevel: 20,
        industriesList: ['Agriculture'],
        stage: 'pre-industrial',
        infrastructure: { transportation: 25, electricity: 30, telecommunications: 15, industrialZones: 0, portCapacity: 40 },
        politicalStability: 60,
        environmentalHealth: 85,
        fdiPolicy: 'restrictive',
        education: { literacy: 70, primaryCompletion: 75, secondaryCompletion: 40, tertiaryEnrollment: 5, technicalSkills: 20 },
        industrialUpgradeIndex: 0.15,
        canUpgrade: false,
        historicalNote: 'Park Chung-hee beginning export drive',
        challenges: [
          { type: 'infrastructure', severity: 'high', description: 'Poor roads and power', impact: 'Limits industrial development' },
          { type: 'political', severity: 'medium', description: 'Authoritarian government', impact: 'Labor unrest potential' }
        ]
      }),
      taiwan: createCountry({
        id: 'taiwan',
        name: 'Taiwan',
        flag: 'TW',
        gdp: 300,
        wageLevel: 25,
        industriesList: ['Agriculture'],
        stage: 'pre-industrial',
        infrastructure: { transportation: 30, electricity: 35, telecommunications: 20, industrialZones: 1, portCapacity: 45 },
        politicalStability: 70,
        environmentalHealth: 80,
        fdiPolicy: 'moderate',
        education: { literacy: 75, primaryCompletion: 80, secondaryCompletion: 45, tertiaryEnrollment: 8, technicalSkills: 25 },
        industrialUpgradeIndex: 0.18,
        canUpgrade: false,
        historicalNote: 'Export processing zones established',
        challenges: [
          { type: 'infrastructure', severity: 'high', description: 'Limited industrial capacity', impact: 'Need foreign investment' }
        ]
      }),
      singapore: createCountry({
        id: 'singapore',
        name: 'Singapore',
        flag: 'SG',
        gdp: 500,
        wageLevel: 40,
        industriesList: ['Tourism'],
        stage: 'early-industrial',
        infrastructure: { transportation: 60, electricity: 65, telecommunications: 50, industrialZones: 2, portCapacity: 90 },
        politicalStability: 75,
        environmentalHealth: 75,
        fdiPolicy: 'open',
        education: { literacy: 80, primaryCompletion: 85, secondaryCompletion: 60, tertiaryEnrollment: 12, technicalSkills: 40 },
        industrialUpgradeIndex: 0.25,
        canUpgrade: false,
        historicalNote: 'Seeking manufacturing after independence',
        challenges: [
          { type: 'economic', severity: 'high', description: 'No natural resources', impact: 'Must import everything' },
          { type: 'social', severity: 'medium', description: 'Small population', impact: 'Limited labor force' }
        ]
      })
    },
    
    1980: {
      japan: createCountry({
        id: 'japan',
        name: 'Japan',
        flag: 'JP',
        gdp: 10000,
        wageLevel: 600,
        industriesList: ['Electronics', 'Automobiles', 'Machinery', 'Semiconductors'],
        stage: 'advanced',
        infrastructure: { transportation: 90, electricity: 95, telecommunications: 85, industrialZones: 15, portCapacity: 95 },
        politicalStability: 90,
        environmentalHealth: 60,
        fdiPolicy: 'moderate',
        education: { literacy: 99, primaryCompletion: 100, secondaryCompletion: 95, tertiaryEnrollment: 40, technicalSkills: 85 },
        industrialUpgradeIndex: 0.85,
        canUpgrade: true,
        canTransferTo: ['korea', 'taiwan', 'singapore', 'malaysia'],
        historicalNote: 'Technology leader, facing trade friction',
        challenges: [
          { type: 'economic', severity: 'high', description: 'Trade tensions with US', impact: 'Need to globalize production' },
          { type: 'environmental', severity: 'high', description: 'Severe pollution', impact: 'Environmental regulations needed' }
        ]
      }),
      korea: createCountry({
        id: 'korea',
        name: 'South Korea',
        flag: 'KR',
        gdp: 1800,
        wageLevel: 120,
        industriesList: ['Textiles', 'Steel', 'Ships', 'Chemicals'],
        stage: 'industrial',
        infrastructure: { transportation: 65, electricity: 70, telecommunications: 55, industrialZones: 8, portCapacity: 70 },
        politicalStability: 55,
        environmentalHealth: 65,
        fdiPolicy: 'moderate',
        education: { literacy: 90, primaryCompletion: 95, secondaryCompletion: 75, tertiaryEnrollment: 25, technicalSkills: 60 },
        industrialUpgradeIndex: 0.55,
        canUpgrade: true,
        canTransferTo: ['china', 'malaysia', 'thailand'],
        historicalNote: 'Heavy and Chemical Industry drive',
        challenges: [
          { type: 'political', severity: 'high', description: 'Democracy movement', impact: 'Political instability' },
          { type: 'economic', severity: 'medium', description: 'Rising wages', impact: 'Competitiveness concerns' }
        ]
      }),
      taiwan: createCountry({
        id: 'taiwan',
        name: 'Taiwan',
        flag: 'TW',
        gdp: 2200,
        wageLevel: 150,
        industriesList: ['Textiles', 'Electronics', 'Assembly', 'Toys'],
        stage: 'industrial',
        infrastructure: { transportation: 70, electricity: 75, telecommunications: 60, industrialZones: 10, portCapacity: 75 },
        politicalStability: 70,
        environmentalHealth: 60,
        fdiPolicy: 'open',
        education: { literacy: 92, primaryCompletion: 98, secondaryCompletion: 80, tertiaryEnrollment: 30, technicalSkills: 70 },
        industrialUpgradeIndex: 0.60,
        canUpgrade: true,
        canTransferTo: ['china', 'vietnam'],
        historicalNote: 'Electronics hub emerging',
        challenges: [
          { type: 'political', severity: 'medium', description: 'International recognition', impact: 'Trade complications' }
        ]
      }),
      china: createCountry({
        id: 'china',
        name: 'China',
        flag: 'CN',
        gdp: 300,
        wageLevel: 30,
        industriesList: ['Agriculture'],
        stage: 'early-industrial',
        infrastructure: { transportation: 30, electricity: 35, telecommunications: 20, industrialZones: 4, portCapacity: 50 },
        politicalStability: 70,
        environmentalHealth: 75,
        fdiPolicy: 'moderate',
        education: { literacy: 65, primaryCompletion: 70, secondaryCompletion: 35, tertiaryEnrollment: 3, technicalSkills: 25 },
        industrialUpgradeIndex: 0.20,
        canUpgrade: false,
        historicalNote: 'Reform and Opening beginning',
        challenges: [
          { type: 'infrastructure', severity: 'critical', description: 'Massive infrastructure needs', impact: 'Limits growth potential' },
          { type: 'political', severity: 'medium', description: 'Central planning legacy', impact: 'Market inefficiencies' }
        ]
      }),
      malaysia: createCountry({
        id: 'malaysia',
        name: 'Malaysia',
        flag: 'MY',
        gdp: 1200,
        wageLevel: 80,
        industriesList: ['Agriculture', 'Mining', 'Assembly'],
        stage: 'early-industrial',
        infrastructure: { transportation: 55, electricity: 60, telecommunications: 45, industrialZones: 5, portCapacity: 65 },
        politicalStability: 75,
        environmentalHealth: 70,
        fdiPolicy: 'open',
        education: { literacy: 80, primaryCompletion: 85, secondaryCompletion: 60, tertiaryEnrollment: 15, technicalSkills: 45 },
        industrialUpgradeIndex: 0.35,
        canUpgrade: false,
        historicalNote: 'Attracting electronics FDI',
        challenges: [
          { type: 'social', severity: 'medium', description: 'Ethnic tensions', impact: 'Policy complications' }
        ]
      })
    },
    
    2000: {
      japan: createCountry({
        id: 'japan',
        name: 'Japan',
        flag: 'JP',
        gdp: 35000,
        wageLevel: 3000,
        industriesList: ['Semiconductors', 'AI & Robotics', 'Green Technology', 'Biotechnology'],
        stage: 'innovation',
        infrastructure: { transportation: 98, electricity: 99, telecommunications: 95, industrialZones: 20, portCapacity: 98 },
        politicalStability: 92,
        environmentalHealth: 75,
        fdiPolicy: 'moderate',
        education: { literacy: 100, primaryCompletion: 100, secondaryCompletion: 98, tertiaryEnrollment: 60, technicalSkills: 95 },
        industrialUpgradeIndex: 0.95,
        canUpgrade: false,
        historicalNote: 'At technology frontier, aging society',
        challenges: [
          { type: 'economic', severity: 'high', description: 'Lost decade effects', impact: 'Slow growth' },
          { type: 'social', severity: 'critical', description: 'Aging population', impact: 'Labor shortage' }
        ]
      }),
      korea: createCountry({
        id: 'korea',
        name: 'South Korea',
        flag: 'KR',
        gdp: 12000,
        wageLevel: 1200,
        industriesList: ['Semiconductors', 'Automobiles', 'Electronics', 'Ships'],
        stage: 'advanced',
        infrastructure: { transportation: 88, electricity: 92, telecommunications: 90, industrialZones: 18, portCapacity: 85 },
        politicalStability: 85,
        environmentalHealth: 60,
        fdiPolicy: 'moderate',
        education: { literacy: 99, primaryCompletion: 100, secondaryCompletion: 95, tertiaryEnrollment: 70, technicalSkills: 90 },
        industrialUpgradeIndex: 0.80,
        canUpgrade: true,
        canTransferTo: ['china', 'vietnam', 'indonesia'],
        historicalNote: 'Samsung, LG global leaders',
        challenges: [
          { type: 'economic', severity: 'medium', description: 'Chinese competition', impact: 'Market share pressure' }
        ]
      }),
      china: createCountry({
        id: 'china',
        name: 'China',
        flag: 'CN',
        gdp: 1000,
        wageLevel: 100,
        industriesList: ['Textiles', 'Toys', 'Assembly', 'Footwear', 'Electronics'],
        stage: 'industrial',
        infrastructure: { transportation: 60, electricity: 70, telecommunications: 50, industrialZones: 50, portCapacity: 75 },
        politicalStability: 75,
        environmentalHealth: 50,
        fdiPolicy: 'open',
        education: { literacy: 85, primaryCompletion: 90, secondaryCompletion: 65, tertiaryEnrollment: 15, technicalSkills: 55 },
        industrialUpgradeIndex: 0.45,
        canUpgrade: true,
        canTransferTo: ['vietnam', 'bangladesh', 'cambodia'],
        historicalNote: 'World factory emerging',
        challenges: [
          { type: 'environmental', severity: 'critical', description: 'Severe pollution', impact: 'Health crisis emerging' },
          { type: 'economic', severity: 'medium', description: 'WTO entry adjustments', impact: 'Competitive pressures' }
        ]
      }),
      vietnam: createCountry({
        id: 'vietnam',
        name: 'Vietnam',
        flag: 'VN',
        gdp: 400,
        wageLevel: 50,
        industriesList: ['Agriculture', 'Textiles', 'Footwear'],
        stage: 'early-industrial',
        infrastructure: { transportation: 40, electricity: 50, telecommunications: 35, industrialZones: 8, portCapacity: 55 },
        politicalStability: 80,
        environmentalHealth: 65,
        fdiPolicy: 'open',
        education: { literacy: 90, primaryCompletion: 95, secondaryCompletion: 70, tertiaryEnrollment: 10, technicalSkills: 40 },
        industrialUpgradeIndex: 0.30,
        canUpgrade: false,
        historicalNote: 'Doi Moi reforms showing results',
        challenges: [
          { type: 'infrastructure', severity: 'high', description: 'Power shortages', impact: 'Limits manufacturing' }
        ]
      }),
      bangladesh: createCountry({
        id: 'bangladesh',
        name: 'Bangladesh',
        flag: 'BD',
        gdp: 380,
        wageLevel: 40,
        industriesList: ['Garments', 'Textiles'],
        stage: 'early-industrial',
        infrastructure: { transportation: 35, electricity: 40, telecommunications: 25, industrialZones: 5, portCapacity: 45 },
        politicalStability: 60,
        environmentalHealth: 55,
        fdiPolicy: 'moderate',
        education: { literacy: 70, primaryCompletion: 80, secondaryCompletion: 50, tertiaryEnrollment: 8, technicalSkills: 35 },
        industrialUpgradeIndex: 0.25,
        canUpgrade: false,
        historicalNote: 'Becoming garment powerhouse',
        challenges: [
          { type: 'social', severity: 'high', description: 'Worker safety issues', impact: 'International pressure' },
          { type: 'infrastructure', severity: 'critical', description: 'Frequent power cuts', impact: 'Production disruptions' }
        ]
      }),
      india: createCountry({
        id: 'india',
        name: 'India',
        flag: 'IN',
        gdp: 500,
        wageLevel: 60,
        industriesList: ['Textiles', 'Software', 'Pharmaceuticals'],
        stage: 'early-industrial',
        infrastructure: { transportation: 45, electricity: 55, telecommunications: 40, industrialZones: 15, portCapacity: 60 },
        politicalStability: 70,
        environmentalHealth: 45,
        fdiPolicy: 'moderate',
        education: { literacy: 75, primaryCompletion: 85, secondaryCompletion: 55, tertiaryEnrollment: 12, technicalSkills: 50 },
        industrialUpgradeIndex: 0.35,
        canUpgrade: true,
        historicalNote: 'IT services boom beginning',
        challenges: [
          { type: 'infrastructure', severity: 'critical', description: 'Poor roads and power', impact: 'Manufacturing constraints' },
          { type: 'social', severity: 'high', description: 'Skill gaps', impact: 'Limited manufacturing capability' }
        ]
      })
    },
    
    2020: {
      china: createCountry({
        id: 'china',
        name: 'China',
        flag: 'CN',
        gdp: 10000,
        wageLevel: 800,
        industriesList: ['Electronics', 'Automobiles', 'Machinery', 'Semiconductors', 'Green Technology'],
        stage: 'advanced',
        infrastructure: { transportation: 85, electricity: 90, telecommunications: 88, industrialZones: 200, portCapacity: 90 },
        politicalStability: 80,
        environmentalHealth: 55,
        fdiPolicy: 'moderate',
        education: { literacy: 96, primaryCompletion: 99, secondaryCompletion: 88, tertiaryEnrollment: 50, technicalSkills: 80 },
        industrialUpgradeIndex: 0.75,
        canUpgrade: true,
        canTransferTo: ['vietnam', 'bangladesh', 'ethiopia', 'kenya'],
        historicalNote: 'Leading dragon, not flying goose',
        challenges: [
          { type: 'economic', severity: 'high', description: 'Trade war impacts', impact: 'Tech decoupling pressure' },
          { type: 'environmental', severity: 'high', description: 'Carbon commitments', impact: 'Industry transformation needed' }
        ]
      }),
      vietnam: createCountry({
        id: 'vietnam',
        name: 'Vietnam',
        flag: 'VN',
        gdp: 2800,
        wageLevel: 250,
        industriesList: ['Textiles', 'Footwear', 'Electronics', 'Assembly'],
        stage: 'industrial',
        infrastructure: { transportation: 65, electricity: 75, telecommunications: 70, industrialZones: 30, portCapacity: 75 },
        politicalStability: 85,
        environmentalHealth: 60,
        fdiPolicy: 'open',
        education: { literacy: 95, primaryCompletion: 98, secondaryCompletion: 85, tertiaryEnrollment: 30, technicalSkills: 65 },
        industrialUpgradeIndex: 0.50,
        canUpgrade: true,
        canTransferTo: ['cambodia', 'myanmar'],
        historicalNote: 'Samsung phones, Nike shoes',
        challenges: [
          { type: 'economic', severity: 'medium', description: 'Rising wages', impact: 'Cost competitiveness declining' }
        ]
      }),
      india: createCountry({
        id: 'india',
        name: 'India',
        flag: 'IN',
        gdp: 2100,
        wageLevel: 200,
        industriesList: ['Textiles', 'Software', 'Pharmaceuticals', 'Automobiles'],
        stage: 'industrial',
        infrastructure: { transportation: 60, electricity: 70, telecommunications: 75, industrialZones: 40, portCapacity: 70 },
        politicalStability: 70,
        environmentalHealth: 40,
        fdiPolicy: 'moderate',
        education: { literacy: 85, primaryCompletion: 92, secondaryCompletion: 70, tertiaryEnrollment: 28, technicalSkills: 65 },
        industrialUpgradeIndex: 0.48,
        canUpgrade: true,
        historicalNote: 'Make in India push',
        challenges: [
          { type: 'infrastructure', severity: 'high', description: 'Logistics bottlenecks', impact: 'Export constraints' },
          { type: 'political', severity: 'medium', description: 'State-level variations', impact: 'Policy inconsistency' }
        ]
      }),
      bangladesh: createCountry({
        id: 'bangladesh',
        name: 'Bangladesh',
        flag: 'BD',
        gdp: 1800,
        wageLevel: 150,
        industriesList: ['Garments', 'Textiles', 'Footwear'],
        stage: 'early-industrial',
        infrastructure: { transportation: 50, electricity: 60, telecommunications: 55, industrialZones: 15, portCapacity: 60 },
        politicalStability: 65,
        environmentalHealth: 45,
        fdiPolicy: 'moderate',
        education: { literacy: 80, primaryCompletion: 90, secondaryCompletion: 65, tertiaryEnrollment: 20, technicalSkills: 50 },
        industrialUpgradeIndex: 0.35,
        canUpgrade: true,
        historicalNote: 'Second largest garment exporter',
        challenges: [
          { type: 'environmental', severity: 'critical', description: 'Climate vulnerability', impact: 'Factory flooding risks' }
        ]
      }),
      ethiopia: createCountry({
        id: 'ethiopia',
        name: 'Ethiopia',
        flag: 'ET',
        gdp: 850,
        wageLevel: 60,
        industriesList: ['Agriculture', 'Textiles'],
        stage: 'pre-industrial',
        infrastructure: { transportation: 30, electricity: 35, telecommunications: 25, industrialZones: 5, portCapacity: 20 },
        politicalStability: 50,
        environmentalHealth: 70,
        fdiPolicy: 'open',
        education: { literacy: 60, primaryCompletion: 70, secondaryCompletion: 35, tertiaryEnrollment: 8, technicalSkills: 25 },
        industrialUpgradeIndex: 0.15,
        canUpgrade: false,
        historicalNote: 'Chinese factories arriving',
        challenges: [
          { type: 'political', severity: 'critical', description: 'Internal conflicts', impact: 'Investment risks' },
          { type: 'infrastructure', severity: 'critical', description: 'No sea access', impact: 'High transport costs' }
        ]
      }),
      mexico: createCountry({
        id: 'mexico',
        name: 'Mexico',
        flag: 'MX',
        gdp: 9000,
        wageLevel: 600,
        industriesList: ['Automobiles', 'Electronics', 'Assembly', 'Machinery'],
        stage: 'industrial',
        infrastructure: { transportation: 70, electricity: 80, telecommunications: 75, industrialZones: 50, portCapacity: 75 },
        politicalStability: 65,
        environmentalHealth: 50,
        fdiPolicy: 'open',
        education: { literacy: 95, primaryCompletion: 98, secondaryCompletion: 85, tertiaryEnrollment: 40, technicalSkills: 70 },
        industrialUpgradeIndex: 0.65,
        canUpgrade: true,
        historicalNote: 'USMCA beneficiary',
        challenges: [
          { type: 'social', severity: 'high', description: 'Security issues', impact: 'Business risks' },
          { type: 'economic', severity: 'medium', description: 'Stuck at assembly', impact: 'Limited value addition', solution: 'Need R&D investment' }
        ]
      })
    }
  },
  
  transferRules: {
    'Textiles': {
      minWageGap: 3,
      maxRecipientWage: 200,
      minInfrastructure: 30,
      requirements: ['Basic power', 'Transport links'],
      environmentalImpact: 'medium',
      feedback: 'Classic first industry for developing countries'
    },
    'Garments': {
      minWageGap: 3,
      maxRecipientWage: 250,
      minInfrastructure: 35,
      requirements: ['Industrial zones', 'Basic skills'],
      environmentalImpact: 'low',
      feedback: 'Higher value than textiles, needs some skills'
    },
    'Footwear': {
      minWageGap: 3,
      maxRecipientWage: 300,
      minInfrastructure: 35,
      requirements: ['Supply chain access'],
      environmentalImpact: 'medium',
      feedback: 'Pollution from glues and materials'
    },
    'Electronics': {
      minWageGap: 2.5,
      maxRecipientWage: 500,
      minInfrastructure: 60,
      requirements: ['Reliable power', 'Skilled workers', 'IP protection'],
      environmentalImpact: 'medium',
      feedback: 'Needs stable power and trained workforce'
    },
    'Assembly': {
      minWageGap: 2.5,
      maxRecipientWage: 400,
      minInfrastructure: 50,
      requirements: ['FDI policy', 'Industrial zones'],
      environmentalImpact: 'low',
      feedback: 'Gateway to electronics manufacturing'
    },
    'Automobiles': {
      minWageGap: 2,
      maxRecipientWage: 800,
      minInfrastructure: 70,
      requirements: ['Deep supply chain', 'Engineering skills'],
      environmentalImpact: 'high',
      feedback: 'Complex industry needing many suppliers'
    },
    'Steel': {
      minWageGap: 2,
      maxRecipientWage: 600,
      minInfrastructure: 65,
      requirements: ['Heavy infrastructure', 'Raw materials'],
      environmentalImpact: 'critical',
      feedback: 'Major polluter but essential for development'
    },
    'Semiconductors': {
      minWageGap: 1.5,
      maxRecipientWage: 2000,
      minInfrastructure: 85,
      requirements: ['Advanced education', 'Clean rooms', 'Massive capital'],
      environmentalImpact: 'medium',
      feedback: 'Highest tech manufacturing, needs ecosystem'
    }
  },
  
  randomEvents: [
    {
      type: 'crisis',
      title: 'Global Financial Crisis',
      description: 'Credit crunch hits global trade',
      effects: [
        { countryId: 'all', gdpChange: -10, industriesAffected: ['Electronics', 'Automobiles'] }
      ],
      choices: [
        {
          label: 'Stimulus package',
          consequences: [{ countryId: 'self', gdpChange: 5, infrastructureChange: 10 }],
          cost: 1000
        },
        {
          label: 'Austerity measures',
          consequences: [{ countryId: 'self', stabilityChange: -10 }]
        }
      ]
    },
    {
      type: 'opportunity',
      title: 'Tech Boom',
      description: 'Global demand for electronics surges',
      effects: [
        { countryId: 'all', industriesAffected: ['Electronics', 'Semiconductors'] }
      ]
    },
    {
      type: 'policy',
      title: 'Environmental Regulations',
      description: 'Stricter pollution controls implemented',
      effects: [
        { countryId: 'developed', industriesAffected: ['Steel', 'Chemicals'] }
      ]
    },
    {
      type: 'global',
      title: 'Trade War',
      description: 'Major economies impose tariffs',
      effects: [
        { countryId: 'all', gdpChange: -5, stabilityChange: -5 }
      ]
    }
  ],
  
  developmentMilestones: {
    'pre-industrial': {
      gdpTarget: 1000,
      industriesRequired: 2,
      infrastructureMin: 40,
      description: 'Ready for industrial takeoff'
    },
    'early-industrial': {
      gdpTarget: 3000,
      industriesRequired: 4,
      infrastructureMin: 60,
      description: 'Building industrial base'
    },
    'industrial': {
      gdpTarget: 8000,
      industriesRequired: 6,
      infrastructureMin: 75,
      description: 'Diversified manufacturing'
    },
    'advanced': {
      gdpTarget: 20000,
      industriesRequired: 8,
      infrastructureMin: 85,
      description: 'High-tech capabilities'
    },
    'innovation': {
      gdpTarget: 30000,
      industriesRequired: 10,
      infrastructureMin: 95,
      description: 'Creating new industries'
    }
  },
  
  middleIncomeTrap: {
    triggerGDP: 8000,
    symptoms: [
      'Wage growth outpacing productivity',
      'Unable to compete with low-wage or high-tech countries',
      'Social inequality rising',
      'Environmental degradation'
    ],
    escapeConditions: {
      educationMin: 80,
      infrastructureMin: 80,
      technologyMin: 70,
      institutionsMin: 75
    }
  }
};

// Helper function to create a country with proper Industry objects
function createCountry(config: any): Country {
  const industries = config.industriesList.map((name: string) => {
    const baseIndustry = industriesDatabase[name];
    if (!baseIndustry) {
      console.warn(`Industry ${name} not found in database`);
      return null;
    }
    return {
      ...baseIndustry,
      employmentShare: Math.random() * 0.2 + 0.1,
      exportValue: Math.random() * 100 + 50
    };
  }).filter(Boolean); // Remove any null entries
  
  const infrastructure = {
    ...config.infrastructure,
    overall: Object.values(config.infrastructure).reduce((a: any, b: any) => 
      typeof b === 'number' ? a + b : a, 0) / 5
  };
  
  return {
    ...config,
    industries,
    infrastructure
  };
}

// Game mechanics functions
export function canTransferIndustry(
  fromCountry: Country, 
  toCountry: Country, 
  industryName: string
): { canTransfer: boolean; reason?: string } {
  const industry = fromCountry.industries.find(i => i.name === industryName);
  if (!industry) {
    return { canTransfer: false, reason: 'Industry not found' };
  }
  
  // Check the specific transfer rules for this industry
  const rules = flyingGeeseData.transferRules[industryName];
  if (!rules) {
    return { canTransfer: false, reason: 'No transfer rules defined for ' + industryName };
  }
  
  if (!industry.transferable) {
    return { canTransfer: false, reason: `${industryName} is not transferable` };
  }
  
  // Check wage gap
  if (fromCountry.wageLevel / toCountry.wageLevel < rules.minWageGap) {
    return { 
      canTransfer: false, 
      reason: `Need ${rules.minWageGap}x wage gap (current: ${(fromCountry.wageLevel / toCountry.wageLevel).toFixed(1)}x)` 
    };
  }
  
  // Check recipient wage ceiling
  if (toCountry.wageLevel > rules.maxRecipientWage) {
    return { 
      canTransfer: false, 
      reason: `${toCountry.name}'s wages too high ($${toCountry.wageLevel} > $${rules.maxRecipientWage})` 
    };
  }
  
  // Check infrastructure
  if (toCountry.infrastructure.overall < rules.minInfrastructure) {
    return { 
      canTransfer: false, 
      reason: `${toCountry.name} needs better infrastructure (${toCountry.infrastructure.overall.toFixed(0)} < ${rules.minInfrastructure})` 
    };
  }
  
  // Check if already has industry
  if (toCountry.industries.some(i => i.name === industryName)) {
    return { 
      canTransfer: false, 
      reason: `${toCountry.name} already has ${industryName}` 
    };
  }
  
  // Check political stability
  if (toCountry.politicalStability < 50) {
    return { 
      canTransfer: false, 
      reason: `${toCountry.name} too unstable (stability: ${toCountry.politicalStability})` 
    };
  }
  
  // Check environmental capacity
  if (toCountry.environmentalHealth < 30 && industry.pollutionLevel > 60) {
    return { 
      canTransfer: false, 
      reason: `${toCountry.name} cannot handle more pollution` 
    };
  }
  
  return { canTransfer: true };
}

export function attemptIndustryUpgrade(
  country: Country,
  fromIndustry: string,
  toIndustry: string
): { success: boolean; updatedCountry?: Country; reason?: string } {
  const currentInd = country.industries.find(i => i.name === fromIndustry);
  const targetInd = industriesDatabase[toIndustry];
  
  if (!currentInd) {
    return { success: false, reason: `${country.name} doesn't have ${fromIndustry}` };
  }
  
  if (!targetInd) {
    return { success: false, reason: `Unknown industry: ${toIndustry}` };
  }
  
  // Check if already has target industry
  if (country.industries.some(i => i.name === toIndustry)) {
    return { success: false, reason: `Already has ${toIndustry}` };
  }
  
  // Check upgrade requirements
  if (targetInd.upgradeRequirements) {
    for (const req of targetInd.upgradeRequirements) {
      let value = 0;
      switch (req.type) {
        case 'infrastructure':
          value = country.infrastructure.overall;
          break;
        case 'education':
          value = country.education.technicalSkills;
          break;
        case 'capital':
          value = country.gdp / 100; // Rough proxy
          break;
        case 'technology':
          value = country.industries.reduce((sum, ind) => sum + ind.technologyLevel, 0) / country.industries.length;
          break;
        case 'policy':
          value = country.fdiPolicy === 'open' ? 80 : country.fdiPolicy === 'moderate' ? 50 : 20;
          break;
      }
      
      if (value < req.minimum) {
        return { success: false, reason: `${req.description} (${value.toFixed(0)} < ${req.minimum})` };
      }
    }
  }
  
  // Perform upgrade
  const updatedIndustries = country.industries.filter(i => i.name !== fromIndustry);
  updatedIndustries.push({
    ...targetInd,
    employmentShare: currentInd.employmentShare * 0.8, // Some job loss in transition
    exportValue: currentInd.exportValue * 1.5 // Higher value products
  });
  
  const updatedCountry = {
    ...country,
    industries: updatedIndustries,
    gdp: Math.round(country.gdp * 1.1),
    industrialUpgradeIndex: Math.min(1, country.industrialUpgradeIndex + 0.05),
    environmentalHealth: Math.max(0, country.environmentalHealth - (targetInd.pollutionLevel - currentInd.pollutionLevel) / 10)
  };
  
  return { success: true, updatedCountry };
}

export function calculateTransferImpact(
  fromCountry: Country,
  toCountry: Country,
  industryName: string
): TransferResult {
  const industry = fromCountry.industries.find(i => i.name === industryName);
  const rules = flyingGeeseData.transferRules[industryName];
  
  if (!industry || !rules) {
    return {
      success: false,
      fromCountry,
      toCountry,
      narrative: 'Transfer failed: Invalid industry'
    };
  }
  
  // Calculate impacts
  const fromGDPMultiplier = 1 + (0.05 + Math.random() * 0.05); // 5-10% boost from upgrading
  const toGDPMultiplier = 1 + (0.15 + Math.random() * 0.15); // 15-30% boost from new industry
  
  // Update sender
  const updatedFrom = {
    ...fromCountry,
    gdp: Math.round(fromCountry.gdp * fromGDPMultiplier),
    wageLevel: Math.round(fromCountry.wageLevel * 1.05),
    industries: fromCountry.industries.filter(i => i.name !== industryName),
    environmentalHealth: Math.min(100, fromCountry.environmentalHealth + 5)
  };
  
  // Update recipient  
  const newIndustry = {
    ...industry,
    employmentShare: 0.15,
    exportValue: industry.exportValue * 0.7 // Start lower
  };
  
  const updatedTo = {
    ...toCountry,
    gdp: Math.round(toCountry.gdp * toGDPMultiplier),
    wageLevel: Math.round(toCountry.wageLevel * 1.1),
    industries: [...toCountry.industries, newIndustry],
    industrialUpgradeIndex: Math.min(1, toCountry.industrialUpgradeIndex + 0.08),
    environmentalHealth: Math.max(0, toCountry.environmentalHealth - industry.pollutionLevel / 10)
  };
  
  // Side effects
  const sideEffects: SideEffect[] = [];
  
  if (industry.pollutionLevel > 60) {
    sideEffects.push({
      type: 'environmental',
      description: `${toCountry.name} experiences increased pollution`,
      severity: 'medium'
    });
  }
  
  if (toCountry.infrastructure.overall < 50) {
    sideEffects.push({
      type: 'economic',
      description: 'Infrastructure strain limits growth potential',
      severity: 'medium'
    });
  }
  
  const narrative = `${industryName} successfully transferred from ${fromCountry.name} to ${toCountry.name}. 
    ${fromCountry.name} frees up resources for higher-value activities (+${Math.round((fromGDPMultiplier - 1) * 100)}% GDP).
    ${toCountry.name} gains proven export industry (+${Math.round((toGDPMultiplier - 1) * 100)}% GDP).
    ${rules.feedback}`;
  
  return {
    success: true,
    fromCountry: updatedFrom,
    toCountry: updatedTo,
    narrative,
    sideEffects,
    followUpActions: [
      `${fromCountry.name} should invest in worker retraining`,
      `${toCountry.name} needs to improve ${rules.requirements.join(', ')}`
    ]
  };
}

export function checkMiddleIncomeTrap(country: Country): {
  inTrap: boolean;
  symptoms: string[];
  solutions: string[];
} {
  const trap = flyingGeeseData.middleIncomeTrap;
  
  if (country.gdp < trap.triggerGDP * 0.8 || country.gdp > trap.triggerGDP * 1.5) {
    return { inTrap: false, symptoms: [], solutions: [] };
  }
  
  const symptoms: string[] = [];
  const solutions: string[] = [];
  
  // Check trap conditions
  if (country.industrialUpgradeIndex < 0.7 && country.industrialUpgradeIndex > 0.5) {
    symptoms.push('Industrial upgrading stalled');
    solutions.push('Invest in R&D and technology transfer');
  }
  
  if (country.wageLevel > country.gdp / 20) {
    symptoms.push('Wages rising faster than productivity');
    solutions.push('Focus on automation and skills training');
  }
  
  if (country.education.tertiaryEnrollment < 40) {
    symptoms.push('Insufficient high-skill workers');
    solutions.push('Expand university education');
  }
  
  if (country.infrastructure.overall < trap.escapeConditions.infrastructureMin) {
    symptoms.push('Infrastructure bottlenecks');
    solutions.push('Massive infrastructure investment needed');
  }
  
  const avgTechLevel = country.industries.reduce((sum, ind) => sum + ind.technologyLevel, 0) / country.industries.length;
  if (avgTechLevel < trap.escapeConditions.technologyMin) {
    symptoms.push('Technology gap with advanced economies');
    solutions.push('Attract high-tech FDI and build innovation capacity');
  }
  
  return {
    inTrap: symptoms.length >= 3,
    symptoms,
    solutions
  };
}

export function generateRandomEvent(countries: Country[]): GameEvent | null {
  if (!countries || countries.length === 0) return null;
  if (Math.random() > 0.3) return null; // 30% chance of event
  
  const events = flyingGeeseData.randomEvents;
  const event = events[Math.floor(Math.random() * events.length)];
  
  // Customize event based on current situation
  const customizedEvent = { ...event };
  
  // Add specific country effects based on their characteristics
  if (event.type === 'crisis') {
    customizedEvent.effects = countries.map(country => ({
      countryId: country.id,
      gdpChange: country.stage === 'advanced' ? -15 : -10,
      stabilityChange: country.politicalStability < 70 ? -10 : -5
    }));
  }
  
  return customizedEvent;
}

// Export industriesDatabase separately for direct access
export { industriesDatabase };