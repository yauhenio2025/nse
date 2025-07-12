import { Field, FieldData } from '@/types';

export const FIELDS: Field[] = [
  {
    id: 'nse',
    name: 'New Structural Economics',
    icon: '📊',
    description: 'Development theory, comparative advantage, structural transformation',
    shortCode: 'NSE'
  },
  {
    id: 'gsh',
    name: 'Global South History',
    icon: '🌍',
    description: 'Decolonial perspectives, resistance movements, solidarity networks',
    shortCode: 'GSH'
  },
  {
    id: 'ma',
    name: 'Marxist Anthropology',
    icon: '⚒️',
    description: 'Historical materialism, modes of production, class consciousness',
    shortCode: 'MA'
  }
];

export const FIELD_DATA: Record<string, FieldData> = {
  nse: {
    files: [
      { name: "Lin_2012_New_Structural_Economics_A_Framework.pdf", size: "4.2 MB", type: "PDF", author: "Justin Yifu Lin" },
      { name: "Lin_2011_Demystifying_the_Chinese_Economy.pdf", size: "5.8 MB", type: "PDF", author: "Justin Yifu Lin" },
      { name: "Lin_Wang_2017_Going_Beyond_Aid_Development_Cooperation.pdf", size: "3.5 MB", type: "PDF", author: "Lin & Wang" },
      { name: "Monga_Lin_2019_Oxford_Handbook_Structural_Transformation.pdf", size: "12.3 MB", type: "PDF", author: "Monga & Lin (Eds.)" },
      { name: "Lin_2017_Industrial_Policy_Economic_Development_Africa.pdf", size: "2.8 MB", type: "PDF", author: "Justin Yifu Lin" },
      { name: "Stiglitz_Lin_2013_Industrial_Policy_Revolution.pdf", size: "6.4 MB", type: "PDF", author: "Stiglitz & Lin (Eds.)" },
      { name: "Lin_2009_Economic_Development_Transition.pdf", size: "3.2 MB", type: "PDF", author: "Justin Yifu Lin" }
    ],
    modules: [
      {
        id: 'micro-foundation',
        title: "Micro-Foundation Builder",
        description: "Combine economic elements to discover NSE principles through interactive experimentation",
        tags: ["interactive", "discovery-based", "foundational"]
      },
      {
        id: 'causal-chain',
        title: "Causal Chain Constructor",
        description: "Build and test economic development paths, see why some strategies succeed while others fail",
        tags: ["causality", "strategy", "validation"]
      },
      {
        id: 'time-lapse',
        title: "Time-Lapse Simulator",
        description: "Watch development trajectories unfold over 60 years with real country data",
        tags: ["visualization", "comparative", "dynamic"]
      },
      {
        id: 'socratic-dialogue',
        title: "Socratic Dialogue System",
        description: "Learn through guided conversation with AI tutor using case studies",
        tags: ["conversational", "adaptive", "theory"]
      },
      {
        id: 'flying-geese',
        title: "Flying Geese Pattern Game",
        description: "Master industrial transfer dynamics through interactive gameplay",
        tags: ["patterns", "global", "industrial-transfer"]
      },
      {
        id: 'growth-diagnostics',
        title: "Growth Diagnostics Laboratory",
        description: "Identify binding constraints using HRV framework with real economic data",
        tags: ["diagnostics", "constraints", "data-driven"]
      },
      {
        id: 'industrial-mapping',
        title: "Industrial Structure Mapper",
        description: "Visualize product space and complexity for different development stages",
        tags: ["visualization", "complexity", "product-space"]
      },
      {
        id: 'policy-sandbox',
        title: "Development Policy Sandbox",
        description: "Test industrial policies in simulated economies with feedback loops",
        tags: ["simulation", "policy-testing", "experimental"]
      },
      {
        id: 'comparative-advantage',
        title: "Dynamic Comparative Advantage Calculator",
        description: "Track how factor endowments evolve and create new opportunities",
        tags: ["calculation", "dynamic", "endowments"]
      },
      {
        id: 'infrastructure-optimizer',
        title: "Infrastructure Sequencing Optimizer",
        description: "Plan infrastructure investments aligned with industrial development",
        tags: ["optimization", "infrastructure", "sequencing"]
      }
    ],
    uploadHeader: "Upload Your NSE Academic Materials",
    uploadSubheader: "Start by uploading the core NSE texts by Justin Yifu Lin and colleagues.",
    modulesHeader: "Select NSE Learning Modules (Choose at least 5)",
    modulesSubheader: "Our AI has analyzed your NSE content and generated these custom didactic modules.",
    schemaHeader: "NSE Knowledge Schema Generation",
    deployHeader: "Your NSE Interactive Learning System",
    deploySubheader: "The NSE Living Economy Laboratory is ready!",
    launchText: "Launch NSE Living Economy Lab",
    componentPath: "/topic/nse"
  },
  gsh: {
    files: [
      { name: "Rodney_1972_How_Europe_Underdeveloped_Africa.pdf", size: "5.1 MB", type: "PDF", author: "Walter Rodney" },
      { name: "Fanon_1961_Wretched_of_the_Earth.pdf", size: "3.8 MB", type: "PDF", author: "Frantz Fanon" },
      { name: "Césaire_1955_Discourse_on_Colonialism.pdf", size: "1.2 MB", type: "PDF", author: "Aimé Césaire" },
      { name: "Nkrumah_1965_Neo_Colonialism_Last_Stage.pdf", size: "2.9 MB", type: "PDF", author: "Kwame Nkrumah" },
      { name: "Said_1978_Orientalism.pdf", size: "4.5 MB", type: "PDF", author: "Edward Said" },
      { name: "Spivak_1988_Can_Subaltern_Speak.pdf", size: "856 KB", type: "PDF", author: "Gayatri Spivak" },
      { name: "Mignolo_2011_Darker_Side_Western_Modernity.pdf", size: "6.2 MB", type: "PDF", author: "Walter Mignolo" },
      { name: "Quijano_2000_Coloniality_of_Power.pdf", size: "1.8 MB", type: "PDF", author: "Aníbal Quijano" },
      { name: "Mbembe_2001_On_the_Postcolony.pdf", size: "3.4 MB", type: "PDF", author: "Achille Mbembe" }
    ],
    modules: [
      {
        id: 'colonial-extraction',
        title: "Colonial Extraction Visualizer",
        description: "Trace the flows of colonial extraction across centuries",
        tags: ["visualization", "economic-history", "imperialism"]
      },
      {
        id: 'parallel-histories',
        title: "Parallel Histories Explorer",
        description: "Discover simultaneous struggles across the Global South",
        tags: ["comparative", "synchronic", "resistance"]
      },
      {
        id: 'counter-narrative',
        title: "Counter-Narrative Constructor",
        description: "Build history from multiple perspectives",
        tags: ["perspective", "critical", "storytelling"]
      },
      {
        id: 'decolonization-dynamics',
        title: "Decolonization Dynamics Simulator",
        description: "Experiment with different paths to independence",
        tags: ["simulation", "strategy", "liberation"]
      },
      {
        id: 'solidarity-networks',
        title: "Solidarity Networks Mapper",
        description: "Trace connections of resistance and solidarity",
        tags: ["networks", "relationships", "movements"]
      },
      {
        id: 'oral-history',
        title: "Oral History Archive Builder",
        description: "Collect and analyze subaltern voices erased from official records",
        tags: ["archives", "memory", "subaltern"]
      },
      {
        id: 'resistance-timeline',
        title: "Resistance Movements Timeline",
        description: "Interactive chronology of anti-colonial struggles worldwide",
        tags: ["chronology", "global", "uprising"]
      },
      {
        id: 'cultural-revival',
        title: "Cultural Revival Laboratory",
        description: "Explore how colonized peoples reclaimed cultural practices",
        tags: ["culture", "identity", "reclamation"]
      },
      {
        id: 'economic-impact',
        title: "Colonial Economic Impact Calculator",
        description: "Quantify the true cost of colonialism with data visualization",
        tags: ["economics", "data", "reparations"]
      },
      {
        id: 'bandung-spirit',
        title: "Bandung Spirit Conference Hall",
        description: "Recreate Third World solidarity meetings and negotiations",
        tags: ["diplomacy", "unity", "non-alignment"]
      }
    ],
    uploadHeader: "Upload Your Global South History Materials",
    uploadSubheader: "Start by uploading texts on decolonial history and resistance movements.",
    modulesHeader: "Select Global South History Modules (Choose at least 5)",
    modulesSubheader: "Our AI has analyzed your content and generated these decolonial learning modules.",
    schemaHeader: "Global South History Knowledge Schema",
    deployHeader: "Your Global South History Laboratory",
    deploySubheader: "The interactive decolonial learning system is ready!",
    launchText: "Launch Global South History Lab",
    componentPath: "/topic/gsh"
  },
  ma: {
    files: [
      { name: "Marx_1867_Capital_Volume_1.pdf", size: "8.7 MB", type: "PDF", author: "Karl Marx" },
      { name: "Engels_1884_Origin_Family_Private_Property_State.pdf", size: "2.3 MB", type: "PDF", author: "Friedrich Engels" },
      { name: "Wolf_1982_Europe_and_People_Without_History.pdf", size: "6.2 MB", type: "PDF", author: "Eric Wolf" },
      { name: "Godelier_1977_Perspectives_Marxist_Anthropology.pdf", size: "3.8 MB", type: "PDF", author: "Maurice Godelier" },
      { name: "Sahlins_1972_Stone_Age_Economics.pdf", size: "4.1 MB", type: "PDF", author: "Marshall Sahlins" },
      { name: "Meillassoux_1981_Maidens_Meal_Money.pdf", size: "3.5 MB", type: "PDF", author: "Claude Meillassoux" },
      { name: "Graeber_2011_Debt_First_5000_Years.pdf", size: "5.9 MB", type: "PDF", author: "David Graeber" },
      { name: "Federici_2004_Caliban_and_the_Witch.pdf", size: "4.3 MB", type: "PDF", author: "Silvia Federici" }
    ],
    modules: [
      {
        id: 'production-archaeologist',
        title: "Mode of Production Archaeologist",
        description: "Excavate the layers of human history through material conditions",
        tags: ["historical", "material", "archaeological"]
      },
      {
        id: 'alienation-chamber',
        title: "Alienation Experience Chamber",
        description: "Experience the four forms of alienation under capitalism",
        tags: ["experiential", "critical", "consciousness"]
      },
      {
        id: 'dialectic-engine',
        title: "Base-Superstructure Dialectic Engine",
        description: "See how economic base shapes cultural superstructure",
        tags: ["dialectical", "structural", "dynamic"]
      },
      {
        id: 'consciousness-lab',
        title: "Class Consciousness Laboratory",
        description: "Trace the development of class consciousness",
        tags: ["consciousness", "class", "development"]
      },
      {
        id: 'reproduction-observatory',
        title: "Social Reproduction Observatory",
        description: "Observe how capitalism reproduces itself daily",
        tags: ["reproduction", "daily-life", "systemic"]
      },
      {
        id: 'primitive-accumulation',
        title: "Primitive Accumulation Simulator",
        description: "Witness the violent birth of capitalism through enclosures",
        tags: ["historical", "violence", "transformation"]
      },
      {
        id: 'value-form-analyzer',
        title: "Value Form Analyzer",
        description: "Decode commodity fetishism and exchange relations",
        tags: ["economics", "commodities", "fetishism"]
      },
      {
        id: 'kinship-transformer',
        title: "Kinship to Class Transformer",
        description: "Track how kinship societies become class societies",
        tags: ["kinship", "evolution", "social-structure"]
      },
      {
        id: 'ritual-economy',
        title: "Ritual Economy Decoder",
        description: "Uncover economic relations hidden in religious practices",
        tags: ["ritual", "religion", "economy"]
      },
      {
        id: 'revolutionary-moments',
        title: "Revolutionary Moments Archive",
        description: "Analyze when quantity transforms into quality",
        tags: ["revolution", "transformation", "dialectics"]
      }
    ],
    uploadHeader: "Upload Your Marxist Anthropology Materials",
    uploadSubheader: "Start by uploading texts on historical materialism and anthropological theory.",
    modulesHeader: "Select Marxist Anthropology Modules (Choose at least 5)",
    modulesSubheader: "Our AI has analyzed your content and generated these critical learning modules.",
    schemaHeader: "Marxist Anthropology Knowledge Schema",
    deployHeader: "Your Marxist Anthropology Laboratory",
    deploySubheader: "The interactive historical materialism learning system is ready!",
    launchText: "Launch Marxist Anthropology Lab",
    componentPath: "/topic/ma"
  }
};