// src/data/nse/schemaData.ts
import { 
  elements, 
  combinations,
  type Element,
  type CombinationResult,
  type CountryCase
} from '../microFoundationData';
import { 
  countries, 
  industryChoices,
  type CountryStartingCondition,
  type IndustryChoice
} from '../causalChainData';
import { 
  flyingGeeseData,
  industriesDatabase,
  type Country,
  type Industry,
  type Challenge
} from '../flyingGeeseData';
import { 
  timeLapseData,
  insights,
  type CountrySnapshot,
  type YearData
} from '../timeLapseData';
import { 
  dialoguePatterns,
  conversationStarters,
  type DialoguePattern
} from '../socraticData';

export interface NSESchema {
  coreConcepts: {
    factorEndowments: {
      labor: { abundant: Element; scarce: Element };
      capital: { abundant: Element; scarce: Element };
      natural: Element[];
      human: Element[];
    };
    comparativeAdvantage: {
      principle: string;
      formula: string;
      examples: CountryCase[];
    };
    dynamicNature: {
      stages: string[];
      transitions: { from: string; to: string; mechanism: string }[];
      timeline: string;
    };
    industrialStructure: {
      endogenous: string;
      optimal: { [key: string]: string[] };
      upgrading: string[];
    };
  };
  
  learningProgressions: {
    microFoundations: {
      elements: Element[];
      combinations: { [key: string]: CombinationResult };
      exercises: {
        title: string;
        description: string;
        expectedOutcome: string;
      }[];
    };
    
    causalChains: {
      countries: CountryStartingCondition[];
      industries: { [key: string]: IndustryChoice[] };
      decisionTrees: {
        node: string;
        options: { choice: string; outcome: string }[];
      }[];
    };
    
    flyingGeese: {
      pattern: {
        description: string;
        mechanism: string[];
        historicalWaves: { year: string; transfers: string[] }[];
      };
      countries: { [year: string]: Country[] };
      transferRules: { [industry: string]: any };
      simulation: {
        parameters: string[];
        outcomes: string[];
      };
    };
    
    timeLapse: {
      periods: { [year: number]: YearData };
      insights: { [year: number]: any };
      patterns: {
        name: string;
        description: string;
        evidence: string[];
      }[];
    };
  };
  
  interactiveElements: {
    simulations: {
      microFoundations: {
        type: 'combination-explorer';
        elements: string[];
        validCombinations: number;
        feedback: string;
      };
      causalChains: {
        type: 'decision-tree';
        startingConditions: number;
        industrialChoices: number;
        pathways: string[];
      };
      flyingGeese: {
        type: 'pattern-simulation';
        countries: number;
        timeSpan: string;
        transfers: string[];
      };
      timeLapse: {
        type: 'evolution-visualizer';
        years: number[];
        metrics: string[];
        animations: string[];
      };
    };
    
    assessments: {
      conceptChecks: {
        topic: string;
        questions: number;
        difficulty: string;
      }[];
      scenarioAnalysis: {
        realWorld: boolean;
        complexity: string;
        skills: string[];
      };
    };
    
    dialogue: {
      socraticMethod: {
        patterns: number;
        adaptiveResponses: boolean;
        conceptsCovered: string[];
      };
      starters: {
        id: string;
        topic: string;
        hook: string;
      }[];
    };
  };
  
  dataStructure: {
    entities: {
      countries: {
        total: number;
        attributes: string[];
        relationships: string[];
      };
      industries: {
        total: number;
        categories: string[];
        complexity: { min: number; max: number };
      };
      policies: {
        types: string[];
        effects: string[];
      };
    };
    
    relationships: {
      countryToIndustry: string;
      industryTransfers: string;
      developmentPathways: string;
      comparativeAdvantage: string;
    };
    
    temporalData: {
      span: string;
      granularity: string;
      keyTransitions: number;
    };
  };
  
  pedagogicalFramework: {
    learningObjectives: string[];
    bloomsTaxonomy: {
      remember: string[];
      understand: string[];
      apply: string[];
      analyze: string[];
      evaluate: string[];
      create: string[];
    };
    assessmentStrategy: {
      formative: string[];
      summative: string[];
      authentic: string[];
    };
  };
}

export function generateNSESchema(): NSESchema {
  // Extract unique elements
  const laborElements = elements.filter(e => e.name.includes('Labor'));
  const capitalElements = elements.filter(e => e.name.includes('Capital'));
  const naturalElements = elements.filter(e => e.category === 'endowment' && e.name.includes('Natural'));
  const humanElements = elements.filter(e => e.name.includes('Skill') || e.name.includes('Education'));
  
  // Extract case studies from combinations
  const successCases: CountryCase[] = [];
  Object.values(combinations).forEach(combo => {
    if (combo.countryCases) {
      successCases.push(...combo.countryCases.filter(c => c.outcome === 'success'));
    }
  });
  
  // Count entities
  const countryCount = Object.keys(countries).length + 
    Object.keys(flyingGeeseData.countries).reduce((acc, year) => 
      acc + Object.keys(flyingGeeseData.countries[year]).length, 0);
  
  const industriesCount = Object.keys(industriesDatabase).length;
  
  return {
    coreConcepts: {
      factorEndowments: {
        labor: {
          abundant: laborElements.find(e => e.id === 'labor-abundant')!,
          scarce: laborElements.find(e => e.id === 'unskilled-labor')!
        },
        capital: {
          abundant: capitalElements.find(e => e.id === 'capital-abundant')!,
          scarce: capitalElements.find(e => e.id === 'capital-scarce')!
        },
        natural: naturalElements,
        human: humanElements
      },
      comparativeAdvantage: {
        principle: 'Countries should produce goods that use their abundant factors intensively',
        formula: 'Endowments → Factor Prices → Comparative Advantage → Industrial Structure',
        examples: successCases.slice(0, 3)
      },
      dynamicNature: {
        stages: ['Pre-industrial', 'Early-industrial', 'Industrial', 'Advanced', 'Innovation'],
        transitions: [
          { from: 'Agriculture', to: 'Light Manufacturing', mechanism: 'Capital accumulation' },
          { from: 'Light Manufacturing', to: 'Heavy Industry', mechanism: 'Skills development' },
          { from: 'Heavy Industry', to: 'High-Tech', mechanism: 'Innovation capacity' }
        ],
        timeline: '20-30 years per major transition with consistent CAF policies'
      },
      industrialStructure: {
        endogenous: 'Industrial structure is determined by factor endowments, not government choice',
        optimal: {
          'Low income': ['Textiles', 'Garments', 'Footwear', 'Toys'],
          'Lower-middle income': ['Electronics Assembly', 'Light Manufacturing'],
          'Upper-middle income': ['Automobiles', 'Steel', 'Chemicals'],
          'High income': ['Semiconductors', 'Biotechnology', 'AI']
        },
        upgrading: [
          'Success breeds capital accumulation',
          'Rising wages push upgrade necessity',
          'Skills and infrastructure must keep pace',
          'Government facilitates transitions'
        ]
      }
    },
    
    learningProgressions: {
      microFoundations: {
        elements: elements,
        combinations: combinations,
        exercises: [
          {
            title: 'Factor Endowment Matching',
            description: 'Match countries with their optimal industries based on endowments',
            expectedOutcome: 'Understanding why Bangladesh succeeds in garments but not cars'
          },
          {
            title: 'Dynamic Path Creation',
            description: 'Build 20-year development paths using time and investment elements',
            expectedOutcome: 'See how comparative advantage evolves endogenously'
          },
          {
            title: 'Policy Failure Analysis',
            description: 'Combine wrong policies with endowments to see why they fail',
            expectedOutcome: 'Understand import substitution trap and CAD strategy failures'
          }
        ]
      },
      
      causalChains: {
        countries: Object.values(countries),
        industries: industryChoices,
        decisionTrees: [
          {
            node: 'Starting with $300 GDP/capita',
            options: [
              { choice: 'Textiles', outcome: 'Success - matches endowments' },
              { choice: 'Steel Mill', outcome: 'Failure - capital costs prohibitive' },
              { choice: 'Software', outcome: 'Failure - lacks human capital' }
            ]
          },
          {
            node: 'After 10 years of textile success',
            options: [
              { choice: 'Electronics Assembly', outcome: 'Success - natural progression' },
              { choice: 'Continue Textiles Only', outcome: 'Wage pressure reduces competitiveness' },
              { choice: 'Jump to Semiconductors', outcome: 'Failure - missing capabilities' }
            ]
          }
        ]
      },
      
      flyingGeese: {
        pattern: {
          description: 'Industries relocate from high-wage to low-wage countries in waves',
          mechanism: [
            'Leader country wages rise with success',
            'Comparative advantage shifts to followers', 
            'Technology and knowledge transfer occurs',
            'Followers upgrade as they become leaders'
          ],
          historicalWaves: [
            { year: '1960-1970', transfers: ['Japan → Korea/Taiwan (textiles)'] },
            { year: '1980-1990', transfers: ['Korea/Taiwan → China (assembly)'] },
            { year: '2000-2010', transfers: ['China → Vietnam/Bangladesh (garments)'] },
            { year: '2010-2020', transfers: ['China → Africa (light manufacturing)'] }
          ]
        },
        countries: flyingGeeseData.countries,
        transferRules: flyingGeeseData.transferRules,
        simulation: {
          parameters: ['Wage levels', 'Infrastructure quality', 'Political stability', 'FDI policy'],
          outcomes: ['GDP growth', 'Employment change', 'Industrial complexity', 'Environmental impact']
        }
      },
      
      timeLapse: {
        periods: timeLapseData,
        insights: insights,
        patterns: [
          {
            name: 'Sequential Development',
            description: 'Countries move through industries in predictable sequence',
            evidence: ['Korea: textiles→ships→cars→chips', 'China: toys→assembly→electronics→EVs']
          },
          {
            name: 'Wage-Industry Correlation',
            description: 'Rising wages force and enable industrial upgrading',
            evidence: ['Japan $50→$2500/month', 'China $10→$1000/month', 'Vietnam $10→$200/month']
          },
          {
            name: 'Transfer Acceleration',
            description: 'Industrial transfers happening faster over time',
            evidence: ['Japan→Korea: 20 years', 'Korea→China: 15 years', 'China→Vietnam: 10 years']
          }
        ]
      }
    },
    
    interactiveElements: {
      simulations: {
        microFoundations: {
          type: 'combination-explorer',
          elements: elements.map(e => e.name),
          validCombinations: Object.keys(combinations).length,
          feedback: 'Real-time analysis shows why combinations succeed or fail'
        },
        causalChains: {
          type: 'decision-tree',
          startingConditions: Object.keys(countries).length,
          industrialChoices: Object.keys(industryChoices).reduce((acc, key) => 
            acc + industryChoices[key].length, 0),
          pathways: ['Success path', 'Failure path', 'Middle-income trap', 'Leapfrog attempt']
        },
        flyingGeese: {
          type: 'pattern-simulation',
          countries: 15,
          timeSpan: '1960-2020',
          transfers: ['Textiles', 'Electronics', 'Automobiles', 'High-tech']
        },
        timeLapse: {
          type: 'evolution-visualizer',
          years: Object.keys(timeLapseData).map(Number),
          metrics: ['GDP/capita', 'Wages', 'Industrial complexity', 'Employment'],
          animations: ['Country bubbles', 'Industry flows', 'Development trajectories']
        }
      },
      
      assessments: {
        conceptChecks: [
          { topic: 'Factor Endowments', questions: 10, difficulty: 'Basic' },
          { topic: 'Comparative Advantage', questions: 15, difficulty: 'Intermediate' },
          { topic: 'Dynamic Development', questions: 12, difficulty: 'Advanced' },
          { topic: 'Policy Analysis', questions: 20, difficulty: 'Expert' }
        ],
        scenarioAnalysis: {
          realWorld: true,
          complexity: 'High - multiple interacting factors',
          skills: ['Critical thinking', 'Pattern recognition', 'Causal analysis', 'Policy evaluation']
        }
      },
      
      dialogue: {
        socraticMethod: {
          patterns: dialoguePatterns.length,
          adaptiveResponses: true,
          conceptsCovered: [...new Set(dialoguePatterns.map(p => p.concept))]
        },
        starters: conversationStarters.map(cs => ({
          id: cs.id,
          topic: cs.id,
          hook: cs.text.split('\n')[0]
        }))
      }
    },
    
    dataStructure: {
      entities: {
        countries: {
          total: countryCount,
          attributes: ['GDP', 'Wages', 'Infrastructure', 'Education', 'Stability'],
          relationships: ['Transfers industries', 'Receives industries', 'Competes with']
        },
        industries: {
          total: industriesCount,
          categories: ['Labor-intensive', 'Capital-intensive', 'Technology-intensive', 'Knowledge-intensive'],
          complexity: { min: 1, max: 10 }
        },
        policies: {
          types: ['Export promotion', 'Import substitution', 'SEZ', 'FDI', 'Industrial policy'],
          effects: ['Growth acceleration', 'Market distortion', 'Resource allocation', 'Technology transfer']
        }
      },
      
      relationships: {
        countryToIndustry: 'Many-to-many with viability constraints',
        industryTransfers: 'Directed graph with wage/infrastructure requirements',
        developmentPathways: 'Sequential transitions based on endowment evolution',
        comparativeAdvantage: 'Dynamic matching of endowments to optimal industries'
      },
      
      temporalData: {
        span: '1960-2020 (60 years)',
        granularity: '10-year snapshots with key transitions',
        keyTransitions: 7
      }
    },
    
    pedagogicalFramework: {
      learningObjectives: [
        'Understand how factor endowments determine comparative advantage',
        'Analyze why industrial policies succeed or fail',
        'Predict industrial development trajectories',
        'Design appropriate development strategies',
        'Evaluate real-world economic policies'
      ],
      bloomsTaxonomy: {
        remember: ['Factor endowments', 'Flying geese pattern', 'Development stages'],
        understand: ['Why CAD strategies fail', 'How comparative advantage evolves', 'Role of infrastructure'],
        apply: ['Match countries to industries', 'Design development paths', 'Identify policy mistakes'],
        analyze: ['Compare development strategies', 'Diagnose growth failures', 'Trace industrial transfers'],
        evaluate: ['Assess policy effectiveness', 'Judge industrial viability', 'Critique development plans'],
        create: ['Design country strategies', 'Propose policy reforms', 'Build development scenarios']
      },
      assessmentStrategy: {
        formative: ['Interactive simulations', 'Socratic dialogue', 'Real-time feedback'],
        summative: ['Scenario analysis', 'Policy design projects', 'Case study evaluation'],
        authentic: ['Real country analysis', 'Current event application', 'Policy recommendation papers']
      }
    }
  };
}

// Export pre-generated schema for performance
export const NSE_SCHEMA = generateNSESchema();