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
      content: 'Worker produces $50/hour value but receives $20/hour. Boss takes $30/hour as profit. "Productive" time - the only hours capitalists count.',
      hiddenLabor: 'Creating wealth for owners while impoverishing self.',
      value: 'Created: $400 (8×$50), Received: $160 (8×$20), Stolen: $240'
    }
  },
  {
    id: 'lunch',
    icon: '🍔',
    label: 'Lunch',
    time: '12:00 PM',
    analysis: {
      title: 'Fuel for Labor Power',
      content: 'Quick meal to maintain energy for afternoon exploitation. McDonald\'s workers serve food they can\'t afford. Body as machine needing fuel.',
      hiddenLabor: 'Maintaining body for employer\'s use.',
      value: 'Meal cost: $15, Restoration value: $30 for next 4 hours'
    }
  },
  {
    id: 'home',
    icon: '🏠',
    label: 'Home',
    time: '6:00 PM',
    analysis: {
      title: 'Domestic Labor Factory',
      content: 'Cooking, cleaning, childcare - invisible work maintaining household. Usually falls on women. No wage despite creating massive value.',
      hiddenLabor: '4 hours unpaid work = $100 value if purchased.',
      value: 'Housework: 4 hours × $25/hr market rate = $100 unpaid'
    }
  },
  {
    id: 'media',
    icon: '📺',
    label: 'Media',
    time: '9:00 PM',
    analysis: {
      title: 'Ideological State Apparatus',
      content: 'TV/social media reinforces capitalist values. Consumption as identity. "Reality" TV normalizes competition and individualism.',
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

// Export as an array, not an object with nested arrays
export const reproductionMetrics: ReproductionMetric[] = [
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
  },
  {
    title: 'Hidden Domestic Labor',
    value: '4 hrs unpaid work ($100 value)'
  },
  {
    title: 'Daily Value Created',
    value: '$490 total value produced'
  },
  {
    title: 'Daily Wage Received',
    value: '$160 (33% of value created)'
  }
];

export const valueCalculations: ValueCalculation[] = [
  { activity: 'Sleep/Recovery', hours: 8, valuePerHour: 20, totalValue: 160 },
  { activity: 'Commute', hours: 2, valuePerHour: 20, totalValue: 40 },
  { activity: 'Work (surplus)', hours: 8, valuePerHour: 30, totalValue: 240 },
  { activity: 'Care Work', hours: 4, valuePerHour: 25, totalValue: 100 },
  { activity: 'Domestic Labor', hours: 2, valuePerHour: 20, totalValue: 40 },
  { activity: 'Media/Attention', hours: 3, valuePerHour: 10, totalValue: 30 }
];