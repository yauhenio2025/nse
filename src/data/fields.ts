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
      { name: "Demystifying_the_Chinese_Economy.pdf", size: "4.2 MB", type: "PDF", author: "Justin Yifu Lin" },
      { name: "Demystifying_World_Economic_Development.pdf", size: "5.8 MB", type: "PDF", author: "Justin Yifu Lin & Caihui Fu" },
      { name: "New_Structural_Economics_Framework.pdf", size: "3.5 MB", type: "PDF", author: "Justin Yifu Lin" }
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
        description: "Watch development trajectories unfold over 60 years",
        tags: ["visualization", "comparative", "dynamic"]
      },
      {
        id: 'socratic-dialogue',
        title: "Socratic Dialogue System",
        description: "Learn through guided conversation with AI tutor",
        tags: ["conversational", "adaptive", "theory"]
      },
      {
        id: 'flying-geese',
        title: "Flying Geese Pattern Game",
        description: "Master industrial transfer dynamics through interactive gameplay",
        tags: ["patterns", "global", "industrial-transfer"]
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
      { name: "Decolonizing_History.pdf", size: "5.1 MB", type: "PDF", author: "Various Authors" },
      { name: "Global_South_Movements.pdf", size: "3.8 MB", type: "PDF", author: "Solidarity Network" },
      { name: "Resistance_and_Revolution.pdf", size: "4.5 MB", type: "PDF", author: "Historical Collective" }
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
      { name: "Historical_Materialism.pdf", size: "4.7 MB", type: "PDF", author: "Marx & Engels" },
      { name: "Anthropological_Theory.pdf", size: "3.2 MB", type: "PDF", author: "Various Scholars" },
      { name: "Modes_of_Production.pdf", size: "5.5 MB", type: "PDF", author: "Critical Theorists" }
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