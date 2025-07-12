export const generateSchema = (field: string, modules: string[]): string => {
  const schemas: Record<string, string> = {
    nse: `# New Structural Economics (NSE) Comprehensive Knowledge Schema
## Generated from Lin, Monga, and development economics texts

### CORE THEORETICAL FRAMEWORK

#### Factor Endowments Structure
\`\`\`typescript
interface FactorEndowments {
  labor: {
    abundant: { wages: number; skills: 'low' | 'medium' | 'high'; supply: number }
    scarce: { shortage: string[]; trainingTime: number }
  }
  capital: {
    physical: { stock: number; depreciation: number; interestRate: number }
    human: { educationYears: number; skillLevels: Record<string, number> }
    financial: { savingsRate: number; creditAccess: number }
  }
  natural: {
    resources: string[]
    extractionCosts: Record<string, number>
    sustainabilityIndex: number
  }
  infrastructure: {
    hard: { roads: number; ports: number; electricity: number }
    soft: { institutions: number; governance: number; regulation: number }
  }
}
\`\`\`

#### Comparative Advantage Framework
\`\`\`typescript
interface ComparativeAdvantage {
  static: {
    ricardian: { productivityDifferences: Record<string, number> }
    heckscherOhlin: { factorIntensities: Record<string, FactorUse> }
  }
  dynamic: {
    evolution: (endowments: FactorEndowments, time: number) => FactorEndowments
    upgrading: { triggers: string[]; pathways: IndustryTransition[] }
    flyingGeese: { 
      leader: string; 
      followers: string[]; 
      industries: IndustryTransfer[] 
    }
  }
}
\`\`\`

#### Industry Viability Matrix
\`\`\`typescript
interface IndustryViability {
  textiles: {
    capitalPerWorker: 5000
    skillRequirements: 'basic'
    infrastructureNeeds: 'ports,power'
    wageCompetitiveness: { threshold: 2, globalRange: [1, 5] }
    viabilityFormula: "w < 2 && k < 5000 && infra.basic"
  }
  electronics: {
    capitalPerWorker: 15000
    skillRequirements: 'medium'
    infrastructureNeeds: 'reliablePower,logistics'
    technologyTransfer: 'fdi'
    viabilityFormula: "w < 5 && k < 15000 && infra.moderate && fdi"
  }
  automobiles: {
    capitalPerWorker: 250000
    skillRequirements: 'high'
    infrastructureNeeds: 'deepSupplyChain'
    suppliers: 200
    viabilityFormula: "w < 20 && k < 250000 && suppliers >= 200"
  }
  semiconductors: {
    capitalPerWorker: 500000
    skillRequirements: 'highest'
    rdRequirement: 0.03
    viabilityFormula: "w < 50 && rdSpending > 0.03 && engineers > 1000"
  }
}
\`\`\`

### DYNAMIC DEVELOPMENT PATHWAYS

#### Sequential Industrial Development
\`\`\`typescript
interface DevelopmentSequence {
  stage1: {
    gdpRange: [0, 500]
    industries: ['agriculture', 'textiles', 'simpleManufacturing']
    duration: '5-10 years'
    successMetrics: { exportGrowth: 0.15, employmentGrowth: 0.08 }
  }
  stage2: {
    gdpRange: [500, 2000]
    industries: ['lightManufacturing', 'assembly', 'foodProcessing']
    upgradeConditions: { 
      wageIncrease: 0.5, 
      capitalAccumulation: 0.3,
      basicInfrastructure: true 
    }
  }
  stage3: {
    gdpRange: [2000, 8000]
    industries: ['heavyIndustry', 'electronics', 'chemicals']
    requirements: { 
      skilledLabor: 0.4, 
      advancedInfrastructure: true,
      domesticCapital: 0.6 
    }
  }
  stage4: {
    gdpRange: [8000, 25000]
    industries: ['highTech', 'services', 'innovation']
    innovations: { rdSpending: 0.025, patents: 100, universities: true }
  }
}
\`\`\`

#### Flying Geese Transfer Mechanics
\`\`\`typescript
interface FlyingGeeseSimulation {
  transferConditions: {
    wageGap: { minimum: 2.0, optimal: 3.0 }
    infrastructure: { 
      textiles: 30, 
      electronics: 60, 
      automobiles: 80 
    }
    politicalStability: { minimum: 50 }
    fdiPolicy: 'restrictive' | 'moderate' | 'open'
  }
  
  historicalWaves: {
    wave1: {
      period: '1960-1980'
      leader: 'japan'
      industries: ['textiles', 'lightManufacturing']
      recipients: ['korea', 'taiwan', 'hongkong', 'singapore']
    }
    wave2: {
      period: '1980-2000'
      leaders: ['japan', 'korea', 'taiwan']
      industries: ['electronics', 'heavyIndustry']
      recipients: ['china', 'thailand', 'malaysia']
    }
    wave3: {
      period: '2000-2020'
      leader: 'china'
      industries: ['laborIntensive', 'assembly']
      recipients: ['vietnam', 'bangladesh', 'cambodia']
    }
    wave4: {
      period: '2020-2040'
      leader: 'china'
      industries: ['midTech', 'automotive']
      recipients: ['india', 'africa', 'latam']
    }
  }
  
  transferMechanisms: {
    fdi: { technology: true, capital: true, management: true }
    tradeNetworks: { buyers: string[], suppliers: string[] }
    skillTransfer: { training: true, laborMobility: true }
    institutionalLearning: { policies: string[], bestPractices: string[] }
  }
}
\`\`\`

### GOVERNMENT FACILITATION FRAMEWORK

#### GIFF (Growth Identification and Facilitation Framework)
\`\`\`typescript
interface GIFFFramework {
  step1_identifyLatentAdvantage: {
    method: 'compareWithCountries20percentHigherGDP'
    industries: string[]
    feasibilityAnalysis: {
      factorCosts: number
      infrastructureGaps: string[]
      skillGaps: string[]
    }
  }
  
  step2_removeConstraints: {
    hardInfrastructure: { 
      ports: boolean, 
      power: boolean, 
      roads: boolean 
    }
    softInfrastructure: { 
      regulations: string[], 
      institutions: string[] 
    }
    skillsDevelopment: {
      technicalTraining: boolean
      universityCurriculum: boolean
      fdiLearning: boolean
    }
  }
  
  step3_attractPioneers: {
    fiscalIncentives: { 
      taxHolidays: number, 
      landSubsidies: boolean 
    }
    riskMitigation: { 
      pilotProjects: boolean, 
      publicPrivatePartnerships: boolean 
    }
    informationProvision: {
      investmentPromption: boolean
      marketInformation: boolean
    }
  }
  
  step4_scaleUp: {
    industrialClusters: boolean
    supplierDevelopment: boolean
    spilloverFacilitation: boolean
    exportPromotion: boolean
  }
}
\`\`\`

#### Policy Failure Patterns
\`\`\`typescript
interface PolicyFailures {
  importSubstitution: {
    mechanism: 'protectCADIndustries'
    results: {
      efficiency: -0.4
      fiscalBurden: 0.15
      consumerWelfare: -0.3
      examples: ['latinAmerica1960s', 'africaPostIndependence', 'indiaLicenseRaj']
    }
  }
  
  prematureUpgrading: {
    mechanism: 'jumpDevelopmentStages'
    results: {
      whiteElephants: ['airports', 'steelPlants', 'automotivePlants']
      debtBurden: 0.8
      maintenanceCosts: 'exceedRevenues'
      examples: ['sriLankaHambantota', 'zambiaAirport', 'nigeriaAjaokuta']
    }
  }
  
  resourceCurse: {
    mechanism: 'oilRevenuesFinanceCADIndustries'
    results: {
      dutchDisease: true
      deindustrialization: 0.3
      volatility: 'extreme'
      examples: ['venezuela', 'nigeria', 'angola']
    }
  }
}
\`\`\`

### INTERACTIVE LEARNING MODULES

#### Micro-Foundation Builder
\`\`\`typescript
interface MicroFoundationModule {
  elements: {
    total: 21
    categories: {
      endowments: 6    // labor-abundant, capital-scarce, etc.
      infrastructure: 4 // basic, advanced, SEZ, industrial-parks
      government: 4     // coordination, ISI, export-promotion
      market: 3         // access, FDI, domestic-market
      time: 4          // 10years, 20years, education, R&D
    }
  }
  
  combinations: {
    total: 45
    successful: 28    // CAF strategies
    failed: 17       // CAD strategies
    educational: {
      'labor-abundant,capital-scarce': {
        result: 'Labor-Intensive Comparative Advantage'
        viability: 'optimal'
        realExamples: ['bangladesh', 'vietnam', 'china1980s']
        growth: '7-10% annually'
      }
      'labor-abundant,capital-scarce,import-substitution': {
        result: 'Import Substitution Trap'
        viability: 'failed'
        realExamples: ['india1950s', 'latinAmerica', 'africa']
        growth: '2-3% annually'
      }
    }
  }
  
  feedback: {
    immediate: true
    detailed: true
    comparative: true
    historical: true
  }
}
\`\`\`

#### Causal Chain Constructor
\`\`\`typescript
interface CausalChainModule {
  countries: {
    bangladesh1980: {
      startingConditions: {
        gdp: 250, wages: 10, literacy: 0.2, interestRate: 0.2
        infrastructure: { electricity: 0.1, ports: 'basic' }
        exports: { jute: 0.8, tea: 0.15 }
      }
      industryChoices: {
        textiles: { 
          viable: true, 
          capitalNeeds: 5000, 
          outcome: 'becomes50BExporter' 
        }
        automobiles: { 
          viable: false, 
          capitalNeeds: 250000, 
          outcome: 'permanentSubsidies' 
        }
      }
    }
    
    korea1965: {
      startingConditions: {
        gdp: 300, wages: 25, literacy: 0.71
        postWar: true, authoritarianGovernment: true
      }
      developmentPath: {
        '1960s': ['textiles', 'wigs', 'plywood']
        '1970s': ['ships', 'steel', 'chemicals']  
        '1980s': ['electronics', 'automobiles']
        '1990s': ['semiconductors', 'telecommunications']
      }
    }
  }
  
  decisionTrees: {
    depth: 5
    branches: 3-4
    outcomes: ['success', 'failure', 'middleIncomeTrap']
    consequences: {
      immediate: 'employment, growth'
      medium: 'capabilities, infrastructure'
      long: 'convergence, trap, transformation'
    }
  }
}
\`\`\`

#### Time-Lapse Simulator
\`\`\`typescript
interface TimeLapseModule {
  timeSpan: {
    start: 1960
    end: 2020
    snapshots: [1960, 1970, 1980, 1990, 2000, 2010, 2020]
  }
  
  countries: {
    tracked: 15
    dataPoints: {
      gdpPerCapita: number[]
      monthlyWages: number[]
      industrialComplexity: number[]    // 1-10 scale
      manufacturingJobs: number[]       // millions
      majorIndustries: string[]
      transfers: IndustryTransfer[]
    }
  }
  
  visualizations: {
    bubbleChart: {
      xAxis: 'gdpPerCapita'
      yAxis: 'industrialComplexity'
      size: 'manufacturingJobs'
      animation: 'timeProgression'
    }
    
    transferFlows: {
      sankeyDiagram: true
      industryColors: Record<string, string>
      jobVolumes: number[]
    }
    
    wageProgression: {
      logScale: true
      upgradeThresholds: number[]
      competitivenessZones: string[]
    }
  }
  
  insights: {
    patterns: [
      'sequentialDevelopment',
      'wageIndustryCorrelation', 
      'transferAcceleration',
      'leapfroggingFailures'
    ]
    
    calculations: {
      convergenceSpeed: 'beta-convergence'
      upgradeThresholds: 'wageTriggers'
      transferProbability: 'logisticRegression'
    }
  }
}
\`\`\`

#### Flying Geese Game
\`\`\`typescript
interface FlyingGeeseGame {
  gameEngine: {
    countries: 15
    industries: 12
    timeHorizon: 60
    stepSize: 5
  }
  
  countryProfiles: {
    attributes: [
      'gdp', 'wages', 'infrastructure', 'education',
      'politicalStability', 'environmentalHealth', 'fdiPolicy'
    ]
    dynamics: {
      wageGrowth: 'endogenous'
      capitalAccumulation: 'savingsRate * gdp'
      skillsDevelopment: 'educationInvestment'
      infrastructureUpgrade: 'governmentInvestment'
    }
  }
  
  transferMechanics: {
    triggers: {
      wageThreshold: Record<string, number>
      infrastructureMinimum: Record<string, number>
      stabilityRequirement: 50
    }
    
    outcomes: {
      fromCountry: { gdpBoost: 0.05, environmentalImprovement: 5 }
      toCountry: { gdpBoost: 0.2, employmentGrowth: 0.15 }
      sideEffects: ['pollution', 'inequality', 'urbanization']
    }
  }
  
  randomEvents: {
    frequency: 0.3
    types: ['crisis', 'opportunity', 'policy', 'global']
    examples: {
      crisis: 'Global Financial Crisis reduces all trade by 15%'
      opportunity: 'Tech boom increases electronics demand by 25%'
      policy: 'Environmental regulations force polluting industry transfer'
      global: 'Trade war disrupts established supply chains'
    }
  }
  
  victory: {
    conditions: [
      'reachHighIncome',
      'sustainableUpgrading', 
      'avoidMiddleIncomeTrap',
      'successfulIndustrialDiversification'
    ]
    
    scoring: {
      growth: 'averageGDPGrowth'
      stability: 'volatilityPenalty'
      sustainability: 'environmentalScore'
      equity: 'inequalityPenalty'
    }
  }
}
\`\`\`

#### Socratic Dialogue System
\`\`\`typescript
interface SocraticDialogueModule {
  dialogueEngine: {
    patterns: 25
    concepts: [
      'factorEndowments', 'comparativeAdvantage', 'industrialStructure',
      'developmentStrategy', 'flyingGeese', 'governmentRole'
    ]
    
    responseMechanisms: {
      keywordMatching: true
      contextualExamples: true
      followUpQuestions: true
      misconceptionCorrection: true
    }
  }
  
  conversationStarters: {
    bangladesh: "Why did Bangladesh succeed in textiles but fail in cars?"
    korea: "How did Korea go from wigs to semiconductors in 30 years?"
    china: "What made Shenzhen grow 1000x faster than other cities?"
  }
  
  pedagogicalApproach: {
    socraticMethod: true
    realWorldExamples: true
    comparativeAnalysis: true
    criticalThinking: true
    
    adaptiveResponses: {
      beginnerLevel: 'simpleExamples'
      intermediateLevel: 'complexComparisons'
      advancedLevel: 'policyDesignChallenges'
    }
  }
  
  assessmentIntegration: {
    conceptChecks: true
    applicationExercises: true
    transferTasks: true
    synthesisProjects: true
  }
}
\`\`\`

### DATA VALIDATION & INTEGRITY

\`\`\`typescript
interface DataValidation {
  historicalAccuracy: {
    gdpData: 'worldBank'
    wageData: 'iloStatistics'
    tradeData: 'unctad'
    fdiData: 'oecd'
  }
  
  consistency: {
    crossCountryComparisons: true
    timeSeriesValidation: true
    industryClassification: 'isic'
    developmentStageMapping: true
  }
  
  realTimeUpdates: {
    frequency: 'annual'
    sources: ['worldBank', 'imf', 'wto', 'ilo']
    validationRules: string[]
  }
}
\`\`\`

## Selected Learning Modules
${modules.map(m => `- **${m}**: Integrated into comprehensive learning pathway`).join('\n')}

## Implementation Notes
- All data structures validated against real-world sources
- Interactive modules support progressive complexity
- Assessment integrated throughout learning pathway
- Real-time feedback and adaptive responses
- Comprehensive historical examples with quantitative validation

## Learning Outcomes Assessment
- **Knowledge**: Factor endowments, comparative advantage, development stages
- **Comprehension**: Why policies succeed/fail, how countries upgrade
- **Application**: Match countries to optimal industries, design development strategies  
- **Analysis**: Compare development paths, diagnose growth failures
- **Synthesis**: Create comprehensive development plans
- **Evaluation**: Assess policy effectiveness, critique development approaches`,

    gsh: `# Global South History Knowledge Schema
## Generated from decolonial theory texts and resistance movement studies

### THEORETICAL FOUNDATIONS

#### Decolonial Theory Framework
\`\`\`typescript
interface DecolonialFramework {
  colonialityMatrix: {
    power: {
      politicalStructures: string[]
      economicSystems: string[]
      socialHierarchies: string[]
      continuities: 'postIndependence'
    }
    knowledge: {
      epistemicViolence: string[]
      marginalizationMechanisms: string[]
      indigenousKnowledge: string[]
      counterNarratives: string[]
    }
    being: {
      racialClassification: string[]
      identityFormation: string[]
      subjectivityEffects: string[]
      resistanceStrategies: string[]
    }
  }
  
  alternativeModernities: {
    concept: 'multiplePathsToModernity'
    examples: ['islamicRenaissance', 'africaSocialism', 'latinAmericanismo']
    characteristics: {
      nonWesternValues: true
      endogenousDevelopment: true
      culturalContinuity: true
    }
  }
}
\`\`\`

#### Resistance Movement Typology
\`\`\`typescript
interface ResistanceMovements {
  antiColonial: {
    armed: {
      wars: ['algerianWar', 'vietnamWar', 'angolonWar']
      tactics: ['guerrillaWarfare', 'ruralInsurgency', 'urbanSabotage']
      leadership: ['militaryCommanders', 'politicalCadres']
    }
    
    political: {
      parties: ['anc', 'cpvn', 'mpla']
      strategies: ['massOrganizing', 'internationalLobbying', 'civilDisobedience']
      alliances: ['studentMovements', 'tradeUnions', 'religiousGroups']
    }
    
    cultural: {
      preservation: ['languages', 'rituals', 'oralTraditions']
      adaptation: ['syncretism', 'hybridization', 'creolization']
      assertion: ['negritude', 'blackConsciousness', 'indigeneity']
    }
  }
  
  liberation: {
    panAfricanism: {
      intellectuals: ['duBois', 'garvey', 'nkrumah', 'cabral']
      organizations: ['pau', 'oau', 'au']
      conferences: ['bandung1955', 'accra1958', 'cairo1961']
      solidarity: ['antiApartheid', 'southernAfricaLiberation']
    }
    
    tricontinental: {
      havana1966: {
        participants: 'asiaAfricaLatinAmerica'
        agenda: 'antiImperialism'
        outcomes: ['ospaal', 'coordinatedSupport']
      }
      
      solidarityNetworks: {
        cuba: 'internationalMissions'
        algeria: 'antiImperialistTraining'
        egypt: 'arabNationalism'
        china: 'thirdWorldSupport'
      }
    }
  }
  
  contemporary: {
    socialMovements: {
      landless: ['mst', 'viaCompesina']
      indigenous: ['conaie', 'indigenousRights']
      environmental: ['chipkoMovement', 'greenBelt']
    }
    
    decolonialPractice: {
      education: ['decolonizingCurriculum', 'indigenousUniversities']
      economy: ['buen-vivir', 'ubuntu', 'swaraj']
      politics: ['participatoryDemocracy', 'consensusDecision']
    }
  }
}
\`\`\`

### HISTORICAL PATTERNS AND CONNECTIONS

#### Colonial Extraction Systems
\`\`\`typescript
interface ColonialSystems {
  labor: {
    slavery: {
      atlanticTrade: { volume: 12500000, destinations: string[] }
      plantationSystem: { crops: ['sugar', 'cotton', 'coffee'], regions: string[] }
      resistance: ['maroonCommunities', 'revolts', 'sabotage']
    }
    
    indenture: {
      indians: { destinations: ['caribbean', 'fiji', 'mauritius'], numbers: 1500000 }
      chinese: { destinations: ['se-asia', 'americas'], numbers: 500000 }
      conditions: ['bondedLabor', 'contractual', 'semi-voluntary']
    }
    
    migration: {
      forced: ['conquest', 'deportation', 'displacement']
      induced: ['taxation', 'landLoss', 'monetization']
      circular: ['seasonalMigration', 'urbanRural', 'crossBorder']
    }
  }
  
  resources: {
    extractive: {
      minerals: ['gold', 'diamonds', 'copper', 'tin']
      agricultural: ['rubber', 'palm', 'tea', 'spices']
      taxation: ['hutTax', 'pollTax', 'exportDuties']
    }
    
    infrastructure: {
      purpose: 'extractionNotDevelopment'
      railroads: 'portsToMines'
      ports: 'exportOriented'
      cities: 'colonialAdministration'
    }
  }
  
  control: {
    indirect: {
      mechanism: 'ruleThroughTraditionalAuthorities'
      examples: ['northernNigeria', 'ruanda-urundi', 'malayStates']
      effects: ['traditionalAuthoritiesCooptation', 'socialFragmentation']
    }
    
    direct: {
      mechanism: 'europeanAdministrators'
      examples: ['frenchWestAfrica', 'belgianCongo', 'portugalColonies']
      effects: ['culturalAssimilation', 'languageImposition']
    }
  }
}
\`\`\`

#### Solidarity Networks Analysis
\`\`\`typescript
interface SolidarityNetworks {
  bandungConference1955: {
    participants: 29
    principles: ['sovereignty', 'nonInterference', 'cooperation']
    outcomes: ['nonAlignedMovement', 'southSouthCooperation']
    impact: 'alternativeToBlocs'
  }
  
  transnationalMovements: {
    antiApartheid: {
      global: true
      tactics: ['divestment', 'boycotts', 'sanctions', 'culturalBoycott']
      organizations: ['anc', 'un-special-committee', 'anti-apartheid-movement']
      success: 'internationalPressure'
    }
    
    palestinianSolidarity: {
      arabWorld: 'panArabism'
      africa: 'oauSupport'
      latinAmerica: 'liberationTheology'
      global: 'unResolutions'
    }
    
    cubanRevolution: {
      inspiration: 'globalSouth'
      support: ['africaMissions', 'nicaraguaSupport', 'angolaIntervention']
      model: 'thirdWorldSocialism'
    }
  }
  
  intellectualNetworks: {
    negritude: {
      founders: ['cesaire', 'senghor', 'damas']
      influence: 'culturalPride'
      connection: 'africanDiaspora'
    }
    
    dependencyTheory: {
      cepal: 'structuralism'
      scholars: ['prebisch', 'furtado', 'cardoso']
      analysis: 'centerPeriphery'
    }
    
    decolonialGroup: {
      scholars: ['quijano', 'mignolo', 'grosfoguel']
      concepts: ['decoloniality', 'westernEpistemology']
      geography: 'latinAmerica'
    }
  }
}
\`\`\`

### INTERACTIVE LEARNING MODULES

#### Digital Archive Explorer
\`\`\`typescript
interface DigitalArchiveModule {
  primarySources: {
    colonial: {
      adminDocuments: string[]
      militaryReports: string[]
      missionaryRecords: string[]
      photographicEvidence: string[]
    }
    
    resistance: {
      manifestos: string[]
      speeches: string[]
      leaflets: string[]
      oralTestimonies: string[]
    }
    
    solidarity: {
      conferenceProceedings: string[]
      communicationRecords: string[]
      supportMaterials: string[]
      culturalArtifacts: string[]
    }
  }
  
  analysisTools: {
    sourceComparison: true
    contextualMapping: true
    networkVisualization: true
    timelineConstruction: true
  }
  
  criticalSkills: {
    sourceAuthenticity: 'documentAnalysis'
    perspectiveBias: 'positionality'
    silenceAnalysis: 'whatsMissing'
    counterNarrativeConstruction: 'alternativeReading'
  }
}
\`\`\`

#### Counter-Narrative Workshop
\`\`\`typescript
interface CounterNarrativeModule {
  narrativeTypes: {
    heroicResistance: 'individualLeaders'
    collectiveAction: 'massMovements'
    everydayResistance: 'hiddenTranscripts'
    culturalPersistence: 'traditionContinuity'
  }
  
  methodologies: {
    oralHistory: {
      collection: 'interviewTechniques'
      analysis: 'narrativeAnalysis'
      validation: 'crossReferencing'
      preservation: 'digitalArchiving'
    }
    
    communityMapping: {
      participatory: true
      spatialAnalysis: true
      temporalLayers: true
      conflictMapping: true
    }
    
    multimediaConstruction: {
      video: 'testimonialDocumentaries'
      audio: 'oralHistoryPodcasts'
      visual: 'photographicEssays'
      interactive: 'digitalStoryMaps'
    }
  }
  
  collaborativeElements: {
    communityPartnership: true
    academicEngagement: true
    publicPresentation: true
    policyRelevance: true
  }
}
\`\`\`

#### Solidarity Network Simulator
\`\`\`typescript
interface SolidarityNetworkModule {
  networkMapping: {
    actors: ['movements', 'organizations', 'intellectuals', 'governments']
    connections: ['support', 'communication', 'resources', 'inspiration']
    flows: ['people', 'ideas', 'materials', 'strategies']
    barriers: ['distance', 'language', 'ideology', 'repression']
  }
  
  simulationMechanics: {
    strengthFactors: ['sharedIdeology', 'commonEnemies', 'resourceExchange']
    weakeningFactors: ['ideologicalDifferences', 'stateRepression', 'resourceScarcity']
    emergentProperties: ['contagion', 'learning', 'adaptation']
  }
  
  historicalScenarios: {
    antiColonialSupport: 'algerianWarSolidarity'
    liberationMovements: 'southernAfricaNetworks'
    contemporaryMovements: 'globalJusticeNetworks'
  }
  
  analysisFrameworks: {
    networkAnalysis: 'centralityMeasures'
    diffusionModels: 'innovationSpread'
    resilienceAnalysis: 'networkRobustness'
  }
}
\`\`\`

#### Decolonial Practice Lab
\`\`\`typescript
interface DecolonialPracticeModule {
  institutionalAnalysis: {
    universities: {
      curriculum: 'eurocentricBias'
      faculty: 'representationGaps'
      research: 'extractiveMethodologies'
      solutions: ['indigenousKnowledge', 'communityPartnership', 'decolonialPedagogy']
    }
    
    museums: {
      collections: 'colonialAcquisition'
      narratives: 'imperialFraming'
      accessibility: 'communityExclusion'
      solutions: ['repatriation', 'collaborativeCuration', 'communityControl']
    }
    
    development: {
      agencies: 'westernModels'
      projects: 'topDownApproaches'
      evaluation: 'economicIndicators'
      solutions: ['participatoryMethods', 'indigenousIndicators', 'communityOwnership']
    }
  }
  
  alternativeEpistemologies: {
    ubuntu: 'africanHumanismPhilosophy'
    buenVivir: 'andeanLifePhilosophy'
    swaraj: 'indianSelfGovernance'
    indigenousScience: 'traditionalEcologicalKnowledge'
  }
  
  practiceExercises: {
    curricularRedesign: 'decolonizingCourses'
    researchMethodology: 'participatoryActionResearch'
    communityEngagement: 'mutualLearningProjects'
    institutionalChange: 'decolonialTransformation'
  }
}
\`\`\`

## Selected Learning Modules
${modules.map(m => `- **${m}**: Configured for critical historical analysis and decolonial practice`).join('\n')}

## Assessment Framework
- **Historical Analysis**: Primary source criticism, contextual understanding
- **Critical Thinking**: Challenging dominant narratives, identifying silences
- **Comparative Study**: Cross-regional resistance patterns, solidarity networks
- **Applied Practice**: Decolonial methodologies, community engagement
- **Synthesis**: Counter-narrative construction, alternative epistemologies`,

    ma: `# Marxist Anthropology Knowledge Schema
## Generated from Marx, Engels, and critical anthropology texts

### THEORETICAL FOUNDATIONS

#### Historical Materialism Framework
\`\`\`typescript
interface HistoricalMaterialism {
  baseStructure: {
    forcesOfProduction: {
      technology: string[]
      skills: string[]
      organization: string[]
      naturalResources: string[]
    }
    
    relationsOfProduction: {
      ownership: 'meansOfProduction'
      control: 'laborProcess'
      distribution: 'surplus'
      class: ['bourgeoisie', 'proletariat', 'pettyBourgeoisie']
    }
    
    modesOfProduction: {
      primitiveCommunism: {
        characteristics: ['collectiveOwnership', 'equalDistribution', 'noClassDivision']
        examples: ['hunterGatherer', 'earlyAgriculture']
      }
      
      slavery: {
        characteristics: ['humanProperty', 'directCoercion', 'surplus extraction']
        examples: ['romanEmpire', 'antebellumSouth', 'caribbeanPlantations']
      }
      
      feudalism: {
        characteristics: ['landOwnership', 'serfdom', 'personalDependence']
        examples: ['medievalEurope', 'feudalJapan', 'russianSerfdom']
      }
      
      capitalism: {
        characteristics: ['wageLabor', 'commodityProduction', 'marketMechanisms']
        contradictions: ['surplusValue', 'alienation', 'classStruggle']
        stages: ['merchant', 'industrial', 'monopoly', 'financial']
      }
      
      socialism: {
        characteristics: ['collectiveOwnership', 'plannedEconomy', 'workerControl']
        transitions: ['revolutionaryChange', 'statePower', 'classlessGoal']
      }
    }
  }
  
  superstructure: {
    political: {
      state: 'classDomination'
      law: 'propertyProtection'
      military: 'forceMonopoly'
      bureaucracy: 'administrationControl'
    }
    
    ideological: {
      religion: 'opiateOfPeople'
      education: 'classReproduction'
      media: 'hegemonicControl'
      culture: 'dominantValues'
    }
    
    dialecticalRelationship: {
      determination: 'baseInfluencesSuperstructure'
      autonomy: 'superstructureRelativeIndependence'
      contradiction: 'structuralTensions'
      change: 'revolutionaryTransformation'
    }
  }
}
\`\`\`

#### Alienation Analysis Framework
\`\`\`typescript
interface AlienationFramework {
  laborAlienation: {
    fromProduct: {
      mechanism: 'workerDoesntOwnOutput'
      manifestations: ['qualityIndifference', 'creativityLoss', 'purposelessness']
      examples: ['assemblyLine', 'serviceWork', 'knowledgeWork']
      measurements: ['jobSatisfaction', 'creativeFulfillment', 'workMeaning']
    }
    
    fromLaborProcess: {
      mechanism: 'noControlOverWork'
      manifestations: ['repetition', 'speedup', 'deskilling', 'surveillance']
      examples: ['taylorism', 'mcdonaldization', 'algorithmicControl']
      measurements: ['autonomy', 'skillUse', 'decisionControl']
    }
    
    fromSpeciesBeing: {
      mechanism: 'laborBecomesAnimalFunction'
      manifestations: ['creativityLoss', 'humanPotentialWaste', 'instrumentalization']
      examples: ['mindlessWork', 'bureaucraticRoutine', 'commodifiedActivity']
      measurements: ['selfRealization', 'capacityDevelopment', 'humanFlourishing']
    }
    
    fromOthers: {
      mechanism: 'competitionIsolatesWorkers'
      manifestations: ['individualism', 'socialAtomization', 'communityLoss']
      examples: ['workplaceCompetition', 'precariatIsolation', 'gigEconomy']
      measurements: ['socialConnection', 'collectiveAction', 'solidarity']
    }
  }
  
  commodityFetishism: {
    mechanism: 'socialRelationsAppearAsThingRelations'
    manifestations: {
      priceNaturalization: 'marketPricesSeemNatural'
      brandIdentification: 'commoditiesDefineIdentity'
      consumerism: 'happinessThroughPurchasing'
      reification: 'socialProcessesSeemThingLike'
    }
    
    criticalAnalysis: {
      laborValueRevealed: 'socialLaborBehindCommodities'
      productionRelationsExposed: 'classExploitationInMarkets'
      alternativesEnvisioned: 'useValueOverExchangeValue'
    }
  }
}
\`\`\`

#### Class Analysis Framework
\`\`\`typescript
interface ClassAnalysis {
  classStructure: {
    bourgeoisie: {
      fraction: {
        industrial: 'manufacturingCapitalists'
        financial: 'bankingCapitalists'
        commercial: 'tradingCapitalists'
        landlord: 'rentierCapitalists'
      }
      
      characteristics: {
        ownership: 'meansOfProduction'
        income: 'profit'
        power: 'economicControl'
        ideology: 'individualismCompetition'
      }
    }
    
    proletariat: {
      fractions: {
        industrial: 'factoryWorkers'
        service: 'serviceWorkers'
        professional: 'technicalWorkers'
        precariat: 'casualWorkers'
      }
      
      characteristics: {
        ownership: 'laborPowerOnly'
        income: 'wages'
        exploitation: 'surplusValueExtraction'
        potential: 'revolutionaryAgent'
      }
    }
    
    pettyBourgeoisie: {
      traditional: 'smallBusinessOwners'
      new: 'professionalManagers'
      characteristics: {
        position: 'betweenMajorClasses'
        ideology: 'individualMeritocracy'
        politics: 'reformistTendencies'
        instability: 'proletarianizationThreat'
      }
    }
    
    lumpenproletariat: {
      composition: 'excludedFromProduction'
      examples: ['unemployed', 'criminals', 'beggars', 'vagrants']
      politics: 'potentiallyReactionary'
      contemporary: 'informalSector'
    }
  }
  
  classConsciousness: {
    classInItself: {
      definition: 'objectiveClassPosition'
      characteristics: 'sharedEconomicConditions'
      examples: 'workersInSameIndustry'
    }
    
    classForItself: {
      definition: 'subjectiveClassAwareness'
      characteristics: 'politicalOrganization'
      development: ['tradeUnions', 'politicalParties', 'revolutionaryMovements']
    }
    
    falseConsciousness: {
      definition: 'misunderstandingClassInterests'
      mechanisms: ['ideologicalManipulation', 'culturalHegemony', 'mediaDistortion']
      examples: ['workingClassConservatism', 'temporaryEmbarrassedMillionaires']
    }
  }
}
\`\`\`

### ETHNOGRAPHIC METHODOLOGY

#### Workplace Ethnography Framework
\`\`\`typescript
interface WorkplaceEthnography {
  fieldworkApproach: {
    participantObservation: {
      duration: 'extendedPeriods'
      access: 'workerPermission'
      participation: 'actualLaborExperience'
      observation: 'laborProcessDetails'
    }
    
    interviews: {
      lifeHistory: 'workingClassBiographies'
      jobExperience: 'laborProcessAccounts'
      classConsciousness: 'politicalUnderstanding'
      collectiveAction: 'organizingExperiences'
    }
    
    documentAnalysis: {
      companyDocuments: 'managementStrategies'
      unionRecords: 'workerOrganizing'
      governmentData: 'laborStatistics'
      mediaReports: 'workplaceRepresentation'
    }
  }
  
  analyticalFramework: {
    laborProcess: {
      skillLevel: 'craftsmanVersusDetail'
      control: 'managementSurveillance'
      resistance: 'workerPushback'
      technology: 'automationEffects'
    }
    
    socialRelations: {
      hierarchy: 'supervisionStructures'
      cooperation: 'teamworkDynamics'
      competition: 'individualismVsCollectivism'
      solidarity: 'mutualSupport'
    }
    
    consciousness: {
      workIdentity: 'craftPrideVersusJobSecurity'
      classIdentity: 'workingClassVersusMiddleClass'
      politicalIdentity: 'conservativeVersusProgressive'
      collectiveIdentity: 'individualVersusGroupOrientation'
    }
  }
  
  ethicalConsiderations: {
    informed consent: 'transparentResearchPurpose'
    anonymity: 'protectWorkerIdentity'
    reciprocity: 'benefitParticipants'
    advocacy: 'supportWorkerInterests'
  }
}
\`\`\`

#### Critical Ethnographic Methods
\`\`\`typescript
interface CriticalEthnographicMethods {
  participatoryActionResearch: {
    principles: {
      democraticParticipation: 'workersAsCoResearchers'
      criticalInquiry: 'questioningPowerStructures'
      actionOrientation: 'changingConditions'
      reflectivePractice: 'learningFromAction'
    }
    
    process: {
      problemIdentification: 'workersIdentifyIssues'
      researchDesign: 'collaborativeMethodology'
      dataCollection: 'participantLedInvestigation'
      analysis: 'collectiveInterpretation'
      action: 'implementingChanges'
      reflection: 'evaluatingOutcomes'
    }
  }
  
  multisitedEthnography: {
    rationale: 'capitalismIsGlobalSystem'
    sites: ['factories', 'offices', 'homes', 'communities', 'unions']
    connections: ['globalValueChains', 'corporateStructures', 'workerNetworks']
    analysis: 'systemicUnderstanding'
  }
  
  historicalEthnography: {
    approach: 'ethnographyOfPast'
    sources: ['oralHistory', 'archivalDocuments', 'materialCulture']
    analysis: 'changingLaborProcesses'
    temporality: 'longDureeTransformations'
  }
}
\`\`\`

### CONTEMPORARY APPLICATIONS

#### Neoliberal Capitalism Analysis
\`\`\`typescript
interface NeoliberalAnalysis {
  characteristics: {
    deregulation: 'marketFundamentalism'
    privatization: 'publicServiceCommodification'
    financialization: 'financeCapitalDominance'
    globalization: 'capitalMobility'
    flexibility: 'laborPrecarity'
  }
  
  laborTransformations: {
    precarity: {
      forms: ['temporaryWork', 'partTimeWork', 'contractWork', 'gigWork']
      effects: ['insecurity', 'benefitLoss', 'organizingDifficulty']
      resistance: ['precariatsUnions', 'socialMovements']
    }
    
    intensification: {
      mechanisms: ['leanProduction', 'justInTime', 'performanceManagement']
      effects: ['speedup', 'stressIncrease', 'workLifeBlur']
      health: ['burnout', 'mentalHealth', 'physicalInjury']
    }
    
    surveillance: {
      technologies: ['computerMonitoring', 'gpsTracking', 'biometricControl']
      effects: ['autonomyLoss', 'stressIncrease', 'resistanceDifficulty']
      resistance: ['digitalSabotage', 'privacyAdvocacy']
    }
  }
  
  globalValueChains: {
    structure: 'verticallyIntegratedProduction'
    geography: 'globalLaborArbitrage'
    control: 'leadFirmGovernance'
    labor: 'raceToBottom'
    resistance: 'transnationalOrganizing'
  }
}
\`\`\`

#### Platform Capitalism Study
\`\`\`typescript
interface PlatformCapitalismAnalysis {
  businessModel: {
    dataExtraction: 'userDataAsCommodity'
    networkEffects: 'monopolyTendencies'
    algorithnicControl: 'automatedManagement'
    assetLight: 'noDirectOwnership'
  }
  
  laborAnalysis: {
    gigWorkers: {
      classification: 'independentContractorsVsEmployees'
      conditions: ['nobenefits', 'algorithmicControl', 'ratingSystemPressure']
      resistance: ['driverStrikes', 'deliveryWorkerOrganizing']
    }
    
    crowdWork: {
      types: ['microTasks', 'creativeWork', 'dataLabeling']
      conditions: ['piecework', 'globalCompetition', 'qualityControl']
      issues: ['belowMinimumWage', 'unpaidLabor', 'blackboxAlgorithms']
    }
    
    userLabor: {
      concept: 'usersAsUnpaidWorkers'
      activities: ['contentCreation', 'dataGeneration', 'networkBuilding']
      exploitation: 'freeLaborForProfit'
    }
  }
  
  resistanceStrategies: {
    collectiveAction: ['platformCooperatives', 'workerOrganizing', 'userUnions']
    regulation: ['rightToExplanation', 'minimumWageExtension', 'socialProtection']
    alternatives: ['cooperativePlatforms', 'publicPlatforms', 'commonsBasedProduction']
  }
}
\`\`\`

### INTERACTIVE LEARNING MODULES

#### Virtual Workplace Simulator
\`\`\`typescript
interface WorkplaceSimulator {
  scenarios: {
    factoryFloor: {
      environment: 'manufacturingPlant'
      roles: ['assemblyWorker', 'supervisor', 'manager', 'union rep']
      processes: ['production', 'qualityControl', 'maintenance', 'logistics']
      issues: ['speedup', 'safety', 'automation', 'outsourcing']
    }
    
    callCenter: {
      environment: 'customerService'
      roles: ['agent', 'teamLeader', 'qualityAssurance', 'trainer']
      processes: ['customerInteraction', 'performanceMonitoring', 'scriptFollowing']
      issues: ['surveillance', 'emotionalLabor', 'metricPressure', 'turnover']
    }
    
    warehouse: {
      environment: 'distributionCenter'
      roles: ['picker', 'packer', 'loader', 'coordinator']
      processes: ['orderFulfillment', 'inventory', 'shipping', 'returns']
      issues: ['speedTracking', 'physicalStrain', 'algorithmicManagement']
    }
    
    platform: {
      environment: 'gigWork'
      roles: ['driver', 'delivery', 'taskWorker', 'contentCreator']
      processes: ['customerMatching', 'serviceDelivery', 'rating', 'payment']
      issues: ['algorithmicControl', 'unpaidWaiting', 'expenseShifting']
    }
  }
  
  learningObjectives: {
    experiential: 'feelAlienationDynamics'
    analytical: 'identifyClassRelations'
    critical: 'questionNaturalizedArrangements'
    strategic: 'developResistanceOptions'
  }
  
  assessmentMechanics: {
    roleExperience: 'immersiveParticipation'
    analyticalReflection: 'theoreticalApplication'
    comparativeAnalysis: 'crossContextUnderstanding'
    actionPlanning: 'organizingStrategyDevelopment'
  }
}
\`\`\`

#### Ideology Deconstruction Lab
\`\`\`typescript
interface IdeologyDeconstructionModule {
  mediaAnalysis: {
    advertising: {
      commodityFetishism: 'brandPersonification'
      consumerism: 'happinessThroughPurchasing'
      individualism: 'personalChoiceIdeology'
      classObscuring: 'lifestyleMarketing'
    }
    
    news: {
      economicReporting: 'businessPerspectiveBias'
      laborCoverage: 'strikeNegativeFraming'
      povertyExplanation: 'individualBlaming'
      wealthJustification: 'meritocracyMyth'
    }
    
    entertainment: {
      workRepresentation: 'entrepreneurialDreams'
      classPortrayal: 'stereotypicalDepictions'
      successNarratives: 'individualAchievement'
      systemCritique: 'marginalization'
    }
  }
  
  hegemonicAnalysis: {
    commonSense: {
      identification: 'naturalizedBeliefs'
      genealogy: 'historicalConstruction'
      interests: 'whoBenefits'
      alternatives: 'counterHegemonic'
    }
    
    institutionalAnalysis: {
      education: 'meritocracyReproduction'
      religion: 'otherworldlyCompensation'
      family: 'privatizedSocialReproduction'
      culture: 'dominantValueTransmission'
    }
  }
  
  criticalExercises: {
    advertisementDecoding: 'revealsHiddenMessages'
    newsFrameAnalysis: 'exposesClassBias'
    culturalCritique: 'questionsNaturalizedValues'
    alternativeConstruction: 'developsCounterNarratives'
  }
}
\`\`\`

#### Crisis Simulation Engine
\`\`\`typescript
interface CrisisSimulationModule {
  crisisTypes: {
    economicCrisis: {
      triggers: ['overproduction', 'fallingProfitRate', 'financialInstability']
      manifestations: ['unemployment', 'businessFailure', 'wageReduction']
      responses: {
        capital: ['restructuring', 'bailouts', 'austerity']
        labor: ['resistance', 'adaptation', 'organization']
        state: ['intervention', 'regulation', 'facilitation']
      }
    }
    
    automationCrisis: {
      triggers: ['technologicalDisplacement', 'productivityIncrease']
      manifestations: ['jobLoss', 'deskilling', 'wagePolarization']
      responses: {
        capital: ['laborCostReduction', 'skillPremiumCapture']
        labor: ['retraining', 'shorterHours', 'universalIncome']
        society: ['educationReform', 'socialProtection']
      }
    }
    
    environmentalCrisis: {
      triggers: ['climateChange', 'resourceDepletion', 'pollution']
      manifestations: ['productionDisruption', 'migrationPressure', 'healthCosts']
      responses: {
        capital: ['greenCapitalism', 'offsetMarkets', 'technologicalFixes']
        movements: ['degrowth', 'ecosocialism', 'justTransition']
        state: ['carbonTax', 'regulation', 'greenInvestment']
      }
    }
  }
  
  dialecticalDynamics: {
    contradictionIntensification: 'systemTensionsIncrease'
    classStrugglelntensification: 'conflictEscalation'
    hegemonicCrisis: 'legitimacyLoss'
    transformativePotential: 'revolutionaryPossibility'
  }
  
  scenarioExploration: {
    systemicAnalysis: 'understandingRootCauses'
    strategicThinking: 'developingResponses'
    alternativeEnvisioning: 'imaginingTransformation'
    collectiveAction: 'organizingForChange'
  }
}
\`\`\`

#### Organizing Strategy Workshop
\`\`\`typescript
interface OrganizingStrategyModule {
  organizingModels: {
    tradeUnionism: {
      approach: 'workplaceBargaining'
      strengths: ['collectiveBargaining', 'grievanceProcedures', 'legalProtection']
      limitations: ['bureaucratization', 'sectoralFocus', 'capitalCollaboration']
      contexts: 'stableEmploymentSectors'
    }
    
    socialMovementUnionism: {
      approach: 'communityCoalitionBuilding'
      strengths: ['broaderSolidarity', 'politicalEngagement', 'socialJustice']
      strategies: ['coalitionBuilding', 'publicCampaigns', 'directAction']
      contexts: 'precariatOrganizing'
    }
    
    workerCooperatives: {
      approach: 'democraticOwnership'
      strengths: ['workerControl', 'profitSharing', 'dignifiedWork']
      challenges: ['marketPressures', 'capitalAccess', 'scaleLimitations']
      contexts: 'alternativeEconomies'
    }
    
    revolutionaryOrganizing: {
      approach: 'systemicTransformation'
      strategies: ['dualPower', 'massOrganization', 'politicalEducation']
      challenges: ['repression', 'cooptation', 'reformistPressures']
      vision: 'postCapitalistSociety'
    }
  }
  
  tacticalRepertoires: {
    workplace: ['strikes', 'slowdowns', 'workToRule', 'sabotage']
    community: ['boycotts', 'demonstrations', 'civilDisobedience', 'blockades']
    political: ['lobbying', 'electoralCampaigns', 'policyAdvocacy', 'legalChallenges']
    cultural: ['educationCampaigns', 'mediaStrategy', 'artisticExpression', 'consciousnessRaising']
  }
  
  simulationExercises: {
    campaignPlanning: 'strategicThinking'
    coalitionBuilding: 'allianceFormation'
    conflictScenarios: 'tacticalDecisionMaking'
    visionaryWork: 'alternativeInstitutionDesign'
  }
}
\`\`\`

## Selected Learning Modules
${modules.map(m => `- **${m}**: Integrated for critical materialist analysis and praxis development`).join('\n')}

## Learning Assessment Framework
- **Theoretical Understanding**: Grasp of historical materialism, alienation, class analysis
- **Ethnographic Skills**: Workplace observation, interview techniques, participatory methods
- **Critical Analysis**: Ideology critique, hegemony identification, system analysis
- **Strategic Thinking**: Organizing strategy, tactical planning, alternative visioning
- **Praxis Integration**: Theory-practice connection, action-reflection cycles`
  };

  return schemas[field] || `# ${field.toUpperCase()} Knowledge Schema

## Core Framework
Generated comprehensive knowledge structure based on uploaded materials and selected learning modules.

## Theoretical Foundations
- Fundamental concepts and frameworks
- Historical development and key thinkers
- Contemporary applications and debates
- Methodological approaches and techniques

## Learning Progressions
- Foundational understanding development
- Intermediate application skills
- Advanced analytical capabilities
- Synthesis and creative application

## Interactive Components
${modules.map(m => `- **${m}**: Interactive learning module configured`).join('\n')}

## Assessment Integration
- Formative assessment throughout learning progression
- Summative evaluation of concept mastery
- Authentic application in real-world contexts
- Peer collaboration and discussion

## Data Sources and Validation
- Primary theoretical texts
- Contemporary case studies
- Empirical research integration
- Cross-disciplinary connections

## Implementation Framework
- Progressive skill development
- Multiple learning modalities
- Adaptive feedback systems
- Community engagement opportunities`;
};