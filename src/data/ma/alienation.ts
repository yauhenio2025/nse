export interface AlienationScenario {
  type: 'product' | 'labor' | 'species' | 'others';
  title: string;
  icon: string;
  description: string;
  scenario: {
    setting: string;
    narrative: string;
    details: {
      label: string;
      value: string;
    }[];
    alienationEffect: string;
  };
  marxQuote: string;
  historicalParallel: string;
  solutions: string[];
}

export const alienationScenarios: AlienationScenario[] = [
  {
    type: 'product',
    title: 'Alienation from Product',
    icon: '📦',
    description: 'The worker doesn\'t own what they produce',
    scenario: {
      setting: 'Amazon Warehouse Worker - Seattle, 2023',
      narrative: 'You scan, pack, and ship 300 items per hour. Luxury goods, electronics, books - a constant stream of commodities you\'ll never afford.',
      details: [
        { label: 'Your Labor', value: '10 hours × 300 items = 3,000 products handled' },
        { label: 'Your Wage', value: '$15/hour = $150/day' },
        { label: 'Value of Goods Processed', value: '~$150,000/day' }
      ],
      alienationEffect: 'You create a river of wealth that flows away from you. The products of your labor confront you as alien objects, belonging to another.'
    },
    marxQuote: 'The worker becomes all the poorer the more wealth he produces... The worker becomes a commodity.',
    historicalParallel: '19th century factory workers who made luxury goods they could never own, living in slums while producing mansions\' worth of textiles.',
    solutions: ['Worker ownership', 'Production for use not exchange', 'Democratic planning']
  },
  {
    type: 'labor',
    title: 'Alienation from Labor Process',
    icon: '⚙️',
    description: 'Work becomes external, forced activity',
    scenario: {
      setting: 'Call Center Employee - Mumbai, 2023',
      narrative: 'Your every word is scripted. Bathroom breaks are timed. Software monitors your keystrokes. You adopt an American accent, a fake name.',
      details: [
        { label: 'Call time', value: 'Must average under 6 minutes' },
        { label: 'Bathroom time', value: 'Maximum 10 minutes/day' },
        { label: 'Script adherence', value: '95% required' },
        { label: 'Customer satisfaction', value: 'Affects pay' }
      ],
      alienationEffect: 'Your activity belongs to another. You don\'t control how you work, when you work, or the pace of work. Labor becomes suffering, not fulfillment.'
    },
    marxQuote: 'Labor is external to the worker... He does not affirm himself but denies himself.',
    historicalParallel: 'Factory workers tied to machines, their movements dictated by mechanical rhythm rather than human needs.',
    solutions: ['Worker control of labor process', 'Job rotation', 'Creative autonomy']
  },
  {
    type: 'species',
    title: 'Alienation from Species-Being',
    icon: '🧬',
    description: 'Separated from human creative essence',
    scenario: {
      setting: 'Graphic Designer - Advertising Agency, 2023',
      narrative: 'Your creativity - the essence of human species-being - is channeled into making people buy things they don\'t need. Your talents serve consumption, not human flourishing.',
      details: [
        { label: 'Your Potential', value: 'Creating beauty, meaning, connection' },
        { label: 'Your Reality', value: 'Manipulating desires for profit' },
        { label: 'Recent Project', value: 'Designed ads making fast food look healthy, targeting children in food deserts' }
      ],
      alienationEffect: 'Your distinctly human capacities - creativity, conscious planning, aesthetic sense - are perverted into their opposite. Instead of creating for human needs, you create false needs.'
    },
    marxQuote: 'Conscious life activity distinguishes man from animal life activity... Alienated labor reverses this.',
    historicalParallel: 'Medieval artisans who created unique works vs. industrial workers producing identical commodities.',
    solutions: ['Socially useful production', 'Arts for all', 'Reduced work hours']
  },
  {
    type: 'others',
    title: 'Alienation from Other Workers',
    icon: '👥',
    description: 'Competition replaces cooperation',
    scenario: {
      setting: 'Uber Driver - Los Angeles, 2023',
      narrative: 'Other drivers are your competition. The algorithm pits you against each other for rides. There\'s no breakroom, no colleagues, no solidarity - just atomized individuals competing.',
      details: [
        { label: 'Surge pricing', value: 'Creates driver competition' },
        { label: 'Rating system', value: 'Makes drivers fear passengers' },
        { label: 'Collective bargaining', value: 'Not possible' },
        { label: 'Status', value: '"Independent contractor" = isolated worker' }
      ],
      alienationEffect: 'What should be cooperation becomes competition. Fellow workers appear as threats to your livelihood, not comrades in shared struggle.'
    },
    marxQuote: 'Competition separates individuals from one another... despite the fact that it brings them together.',
    historicalParallel: 'Craft guilds\' mutual aid vs. industrial competition between workers for scarce jobs.',
    solutions: ['Collective organization', 'Unions', 'Cooperative enterprises']
  }
];