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

export interface DialecticalMotion {
  thesis: string;
  antithesis: string;
  synthesis: string;
  example: string;
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
        icon: '🛍️',
        title: 'Individualist Ideology',
        description: 'Success/failure as personal responsibility'
      },
      {
        icon: '👪',
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
        description: 'Culture as investment and status symbol'
      }
    ]
  },
  {
    id: 'feudal-production',
    title: 'Feudal Production',
    icon: '🏰',
    description: 'Land ownership, serf labor, personal bonds',
    superstructure: [
      {
        icon: '👑',
        title: 'Divine Right Monarchy',
        description: 'King rules by God\'s will, absolute authority'
      },
      {
        icon: '⛪',
        title: 'Catholic Church',
        description: 'Spiritual legitimation of social hierarchy'
      },
      {
        icon: '🗡️',
        title: 'Chivalric Code',
        description: 'Honor, loyalty, personal service ideals'
      },
      {
        icon: '🎭',
        title: 'Great Chain of Being',
        description: 'Natural hierarchy from God to peasants'
      },
      {
        icon: '📜',
        title: 'Customary Law',
        description: 'Tradition and precedent over written law'
      },
      {
        icon: '🏘️',
        title: 'Manor System',
        description: 'Self-sufficient communities under lord\'s control'
      }
    ]
  },
  {
    id: 'socialist-production',
    title: 'Socialist Production',
    icon: '🏗️',
    description: 'Social ownership, planned economy, worker control',
    superstructure: [
      {
        icon: '🏛️',
        title: 'Democratic Centralism',
        description: 'Worker participation in governance structures'
      },
      {
        icon: '🎓',
        title: 'Universal Education',
        description: 'Free education for all social development'
      },
      {
        icon: '🌍',
        title: 'Internationalism',
        description: 'Global solidarity over nationalism'
      },
      {
        icon: '👥',
        title: 'Collective Identity',
        description: 'Social cooperation over individual competition'
      },
      {
        icon: '🎪',
        title: 'Socialist Realism',
        description: 'Art serves social progress and worker consciousness'
      },
      {
        icon: '🏥',
        title: 'Universal Services',
        description: 'Healthcare, housing, transport as rights'
      }
    ]
  },
  {
    id: 'primitive-communism',
    title: 'Primitive Communism',
    icon: '🌿',
    description: 'Collective ownership, subsistence economy, egalitarian',
    superstructure: [
      {
        icon: '🗣️',
        title: 'Consensus Decision Making',
        description: 'Collective discussion without formal hierarchy'
      },
      {
        icon: '🌟',
        title: 'Animistic Spirituality',
        description: 'Sacred relationship with natural world'
      },
      {
        icon: '🤝',
        title: 'Gift Economy',
        description: 'Reciprocity and sharing without money'
      },
      {
        icon: '⚖️',
        title: 'Gender Equality',
        description: 'Complementary roles without dominance'
      },
      {
        icon: '🎵',
        title: 'Oral Traditions',
        description: 'Knowledge passed through stories and songs'
      },
      {
        icon: '🌱',
        title: 'Ecological Wisdom',
        description: 'Sustainable relationship with environment'
      }
    ]
  }
];

// Add the missing dialecticalMotion export
export const dialecticalMotion: DialecticalMotion = {
  thesis: 'The economic base (forces and relations of production) determines the superstructure (politics, law, culture).',
  antithesis: 'The superstructure reinforces and legitimates the base, but can also become a fetter when base develops.',
  synthesis: 'Revolutionary transformation occurs when developing forces of production clash with existing relations, creating new base AND superstructure.',
  example: 'Rising bourgeoisie (new economic force) → Enlightenment ideas (new superstructure) → French Revolution (transformation)'
};