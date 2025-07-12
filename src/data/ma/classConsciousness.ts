export interface ClassPosition {
  id: string;
  title: string;
  icon: string;
  description: string;
  baseConsciousness: number;
}

export interface MaterialCondition {
  id: string;
  title: string;
  icon: string;
  description: string;
  effects: {
    [classId: string]: number; // consciousness change
  };
  analysis: {
    [classId: string]: string;
  };
}

export interface ConsciousnessEffect {
  condition: string;
  change: number;
  analysis: string;
}

export const classPositions: ClassPosition[] = [
  {
    id: 'worker',
    title: 'Industrial Worker',
    icon: '👷',
    description: 'Sells labor power<br />No means of production<br />Creates surplus value',
    baseConsciousness: 20
  },
  {
    id: 'petty-bourgeois',
    title: 'Petty Bourgeois',
    icon: '🏪',
    description: 'Small business owner<br />Works + owns<br />Contradictory position',
    baseConsciousness: 10
  },
  {
    id: 'capitalist',
    title: 'Capitalist',
    icon: '💼',
    description: 'Owns means of production<br />Purchases labor power<br />Appropriates surplus',
    baseConsciousness: 5
  }
];

export const materialConditions: MaterialCondition[] = [
  {
    id: 'crisis',
    title: 'Economic Crisis',
    icon: '💰',
    description: 'Unemployment rises, wages fall',
    effects: {
      'worker': 20,
      'petty-bourgeois': -15,
      'capitalist': -30
    },
    analysis: {
      'worker': 'Economic crisis reveals capitalism\'s contradictions, pushing workers toward class consciousness.',
      'petty-bourgeois': 'Petty bourgeoisie fears proletarianization, may turn to fascism as "third way."',
      'capitalist': 'Capitalists rally to system defense, seeing crisis as need for more "discipline."'
    }
  },
  {
    id: 'victory',
    title: 'Strike Victory',
    icon: '✊',
    description: 'Collective action succeeds',
    effects: {
      'worker': 30,
      'petty-bourgeois': 10,
      'capitalist': -20
    },
    analysis: {
      'worker': 'Collective action demonstrates worker power, builds confidence and solidarity.',
      'petty-bourgeois': 'Small owners see potential in collective action but fear labor militancy.',
      'capitalist': 'Victory threatens profit rates and control, increases class antagonism.'
    }
  },
  {
    id: 'education',
    title: 'Political Education',
    icon: '📚',
    description: 'Study groups, theory reading',
    effects: {
      'worker': 25,
      'petty-bourgeois': 15,
      'capitalist': 0
    },
    analysis: {
      'worker': 'Political education provides theoretical framework to understand exploitation systematically.',
      'petty-bourgeois': 'Theory helps understand contradictory class position, may radicalize.',
      'capitalist': 'Dismisses theory as "ideology" while promoting own worldview as "common sense."'
    }
  },
  {
    id: 'repression',
    title: 'State Repression',
    icon: '🔒',
    description: 'Police violence, union busting',
    effects: {
      'worker': -10,
      'petty-bourgeois': -20,
      'capitalist': 10
    },
    analysis: {
      'worker': 'State violence can temporarily suppress organization but often radicalizes in long term.',
      'petty-bourgeois': 'Repression frightens small owners who depend on "law and order."',
      'capitalist': 'Capitalists see repression as restoring "order" and protecting "civilization."'
    }
  }
];