export interface DailyActivity {
  id: string;
  icon: string;
  label: string;
  time: string;
  analysis: {
    title: string;
    content: string;
    hiddenLabor: string;
    value: string;
  };
}

export interface ReproductionMetric {
  title: string;
  value: string;
}

export interface ValueCalculation {
  activity: string;
  hours: number;
  valuePerHour: number;
  totalValue: number;
}

export const dailyActivities: DailyActivity[] = [
  {
    id: 'wake',
    icon: '⏰',
    label: 'Wake',
    time: '6:00 AM',
    analysis: {
      title: 'The Commodified Awakening',
      content: 'Alarm clock disciplines body to capital\'s schedule. "Time is money" internalized. Coffee (commodity) needed to achieve productivity (for employer).',
      hiddenLabor: 'Sleep is unpaid recovery time to restore labor power.',
      value: 'Rest: 8 hours × $20/hr opportunity cost = $160 of labor power restoration'
    }
  },
  {
    id: 'commute',
    icon: '🚇',
    label: 'Commute',
    time: '7:00 AM',
    analysis: {
      title: 'The Hidden Work of Getting to Work',
      content: 'Worker pays (time + money) to deliver themselves to capital. 2 hours daily unpaid. Public transport underfunded to subsidize private cars.',
      hiddenLabor: 'Commute is unpaid but necessary for capital.',
      value: 'Transport: 2 hours × $20/hr = $40 daily donation to capital'
    }
  },
  {
    id: 'work',
    icon: '🏢',
    label: 'Work',
    time: '9:00 AM',
    analysis: {
      title: 'Surplus Value Extraction',
      content: 'Worker produces $50/hour value but receives $20/hour. The $30 difference is surplus value appropriated by capital.',
      hiddenLabor: 'Emotional labor, workplace culture performance.',
      value: 'Exploitation: 8 hours × $30 surplus = $240 daily to capitalist'
    }
  },
  {
    id: 'shop',
    icon: '🛒',
    label: 'Shop',
    time: '6:00 PM',
    analysis: {
      title: 'Realization of Surplus Value',
      content: 'Worker buys back products of their labor at inflated prices. Wage returns to capital as profit. "Consumer choice" masks necessity.',
      hiddenLabor: 'Comparison shopping, traveling between stores.',
      value: 'Consumption: $100 daily spending, 30% is profit margin = $30 back to capital'
    }
  },
  {
    id: 'care',
    icon: '👶',
    label: 'Care',
    time: '7:00 PM',
    analysis: {
      title: 'The Second Shift',
      content: 'Unpaid care work (mostly by women) reproduces next generation of workers. Childcare, eldercare, emotional labor - all essential, all unpaid.',
      hiddenLabor: 'Entire care economy hidden from GDP.',
      value: 'Care work: 4 hours × $25 (market rate) = $100 daily unpaid labor'
    }
  },
  {
    id: 'prepare',
    icon: '🍳',
    label: 'Prepare',
    time: '8:00 PM',
    analysis: {
      title: 'Domestic Labor',
      content: 'Cooking, cleaning, maintenance - unpaid work that enables paid work. Historically women\'s "natural" role, actually crucial economic function.',
      hiddenLabor: 'Meal planning, shopping lists, kitchen labor.',
      value: 'Domestic: 2 hours × $20 = $40 daily unpaid essential work'
    }
  },
  {
    id: 'media',
    icon: '📺',
    label: 'Media',
    time: '9:00 PM',
    analysis: {
      title: 'Manufacturing Consent',
      content: 'Free time colonized by advertising. News manufactures worldview supporting capitalism. Entertainment provides escape valve for alienation.',
      hiddenLabor: 'Audience labor - watching ads is unpaid work.',
      value: 'Attention: 3 hours × $10 CPM advertising value = $30 to media capital'
    }
  },
  {
    id: 'sleep',
    icon: '🛏️',
    label: 'Sleep',
    time: '11:00 PM',
    analysis: {
      title: 'Reproduction of Labor Power',
      content: 'Not rest but restoration for tomorrow\'s exploitation. Dreams colonized by work anxiety. Insufficient sleep = lower productivity = discipline.',
      hiddenLabor: 'Body/mind maintenance for employer\'s benefit.',
      value: 'See "Wake" - circular process of reproduction'
    }
  }
];

export const reproductionMetrics = {
  metrics: [
    {
      title: 'Labor Power Reproduction',
      value: '8 hrs rest + 2 hrs preparation'
    },
    {
      title: 'Ideological Reproduction',
      value: '3 hrs media consumption'
    },
    {
      title: 'Surplus Extraction',
      value: '$200 created, $50 received'
    }
  ],
  valueCalculations: [
    { activity: 'Sleep/Recovery', hours: 8, valuePerHour: 20, totalValue: 160 },
    { activity: 'Commute', hours: 2, valuePerHour: 20, totalValue: 40 },
    { activity: 'Work (surplus)', hours: 8, valuePerHour: 30, totalValue: 240 },
    { activity: 'Care Work', hours: 4, valuePerHour: 25, totalValue: 100 },
    { activity: 'Domestic Labor', hours: 2, valuePerHour: 20, totalValue: 40 },
    { activity: 'Media/Attention', hours: 3, valuePerHour: 10, totalValue: 30 }
  ]
};