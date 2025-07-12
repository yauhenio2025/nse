export interface SuperstructureElement {
  icon: string;
  title: string;
  description: string;
}

export interface BaseMode {
  id: string;
  title: string;
  icon: string;
  description: string;
  superstructure: SuperstructureElement[];
}

export const baseModes: BaseMode[] = [
  {
    id: 'capitalist-production',
    title: 'Capitalist Production',
    icon: '🏭',
    description: 'Private ownership, wage labor, profit motive',
    superstructure: [
      {
        icon: '⚖️',
        title: 'Liberal Democracy',
        description: 'Formal equality, property rights supreme'
      },
      {
        icon: '🎓',
        title: 'Competitive Education',
        description: 'Sorting mechanism for class positions'
      },
      {
        icon: '🏛️',
        title: 'Individualist Ideology',
        description: 'Success/failure as personal responsibility'
      },
      {
        icon: '💒',
        title: 'Nuclear Family',
        description: 'Privatized reproduction of labor power'
      },
      {
        icon: '📺',
        title: 'Consumer Culture',
        description: 'Identity through commodity consumption'
      },
      {
        icon: '🎨',
        title: 'Commodified Art',
        description: 'Culture as profitable entertainment'
      }
    ]
  },
  {
    id: 'feudal-agriculture',
    title: 'Feudal Agriculture',
    icon: '🌾',
    description: 'Land ownership, serf labor, subsistence + surplus',
    superstructure: [
      {
        icon: '👑',
        title: 'Divine Right Monarchy',
        description: 'God-ordained hierarchy'
      },
      {
        icon: '⛪',
        title: 'Catholic Church',
        description: 'Spiritual justification for material inequality'
      },
      {
        icon: '⚔️',
        title: 'Chivalric Code',
        description: 'Warrior ethics for ruling class'
      },
      {
        icon: '🏰',
        title: 'Manor Law',
        description: 'Personal domination, not abstract law'
      },
      {
        icon: '🎭',
        title: 'Morality Plays',
        description: 'Know your place messaging'
      },
      {
        icon: '👨‍👩‍👧‍👦',
        title: 'Extended Family',
        description: 'Production and reproduction unit'
      }
    ]
  },
  {
    id: 'socialist-planning',
    title: 'Socialist Planning',
    icon: '📊',
    description: 'Collective ownership, planned production',
    superstructure: [
      {
        icon: '🚩',
        title: 'Workers\' Councils',
        description: 'Direct democratic planning'
      },
      {
        icon: '📚',
        title: 'Polytechnic Education',
        description: 'Combining mental and manual labor'
      },
      {
        icon: '🤝',
        title: 'Collectivist Ethics',
        description: 'From each/to each according to...'
      },
      {
        icon: '🏘️',
        title: 'Communal Living',
        description: 'Socialized domestic labor'
      },
      {
        icon: '🎨',
        title: 'Socialist Realism',
        description: 'Art serving social transformation'
      },
      {
        icon: '⚕️',
        title: 'Preventive Healthcare',
        description: 'Health as social responsibility'
      }
    ]
  },
  {
    id: 'hunter-gatherer',
    title: 'Hunter-Gatherer',
    icon: '🏹',
    description: 'Immediate-return, egalitarian sharing',
    superstructure: [
      {
        icon: '🗣️',
        title: 'Consensus Democracy',
        description: 'No chiefs, collective decisions'
      },
      {
        icon: '🌍',
        title: 'Animist Spirituality',
        description: 'Nature as kin, not resource'
      },
      {
        icon: '🎁',
        title: 'Gift Economy',
        description: 'Status through giving, not having'
      },
      {
        icon: '👥',
        title: 'Age-Set Organization',
        description: 'Horizontal, not hierarchical'
      },
      {
        icon: '🎵',
        title: 'Oral Traditions',
        description: 'Collective memory and values'
      },
      {
        icon: '🏕️',
        title: 'Nomadic Flexibility',
        description: 'Move rather than deplete'
      }
    ]
  }
];

export const dialecticalMotion = {
  thesis: 'The economic base (forces + relations of production) determines the superstructure (politics, law, culture, ideology).',
  antithesis: 'The superstructure reinforces and legitimates the base, but can also become a fetter when base develops.',
  synthesis: 'Revolutionary transformation occurs when developing forces of production clash with existing relations, creating new base AND superstructure.',
  example: 'Rising bourgeoisie (new economic force) → Enlightenment ideas (new superstructure) → French Revolution (transformation)'
};