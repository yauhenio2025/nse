export interface DialoguePattern {
  keywords: string[];
  response: string;
  followUp?: string;
  concept: string;
  examples?: string[];
}

export const dialoguePatterns: DialoguePattern[] = [
  // Factor Endowments
  {
    keywords: ['labor', 'workers', 'cheap', 'wages', 'abundant'],
    response: `Excellent observation about labor! You're identifying a KEY factor endowment.

With abundant labor and low wages ($0.50-2/day), countries have comparative advantage in labor-intensive industries. But here's the crucial insight:

Labor abundance ALONE isn't enough. You need:
1. Basic infrastructure (ports, power)
2. Political stability
3. Access to global markets

Consider: Why did Bangladesh succeed in garments while Nigeria, with similar wages, didn't?`,
    followUp: 'What role might infrastructure and policy have played?',
    concept: 'Factor Endowments',
    examples: ['Bangladesh garments', 'Vietnam footwear', 'Ethiopia textiles']
  },
  
  {
    keywords: ['capital', 'money', 'investment', 'expensive', 'interest'],
    response: `You're recognizing capital scarcity - a defining constraint for poor countries!

Key numbers to understand:
- Interest rates: 20-30% in poor countries vs 2-5% in rich ones
- This means $1 million in equipment costs $200,000/year in interest alone!
- A car factory needs $250,000 capital per worker
- A garment factory needs only $5,000 per worker

Question: If you're paying 20% interest, which industry can possibly be competitive globally?`,
    concept: 'Capital Scarcity',
    examples: ['Indian Ambassador car failure', 'African steel mills', 'Latin American heavy industry']
  },
  
  // Industry Analysis
  {
    keywords: ['textile', 'garment', 'clothes', 'rmg', 'clothing'],
    response: `Yes! Textiles are the classic entry point for industrialization. Here's why:

✅ Low capital requirements ($5,000/worker)
✅ Simple technology (trainable in weeks)
✅ Labor-intensive (uses your advantage)
✅ Large global market ($600B+)
✅ Easy to start, learn, and scale

Historical pattern: UK (1800s) → Japan (1900s) → Korea (1960s) → China (1980s) → Bangladesh/Vietnam (2000s)

But here's the dynamic question: What happens after 20-30 years of textile success?`,
    followUp: 'How do wages and capital accumulation change the game?',
    concept: 'Sequential Industrial Development',
    examples: ['Bangladesh $50B exports', 'Vietnam moving up', 'Cambodia entering']
  },
  
  {
    keywords: ['car', 'auto', 'vehicle', 'automobile', 'heavy'],
    response: `Cars are the PERFECT example of defying comparative advantage! Let me show you why:

🚗 Car Manufacturing Requirements:
- Capital: $250,000 per worker (50x textiles!)
- Suppliers: 200+ precision parts makers
- Skills: Engineers, technicians, quality control
- Scale: Need millions in sales to be efficient

With 20% interest rates and low skills, your cars would cost 3x the world price!

India tried this with the Ambassador - required 30+ years of protection, produced outdated, expensive cars. Consumers paid the price.

Key insight: Even large countries fail when defying comparative advantage.`,
    concept: 'Comparative Advantage Defying (CAD)',
    examples: ['India Ambassador', 'Latin American auto industry', 'African heavy industry']
  },
  
  // Development Strategy
  {
    keywords: ['protect', 'import', 'substitution', 'tariff', 'isI'],
    response: `Import substitution - the strategy that trapped so many countries! Here's what happens:

The Vicious Cycle:
1. Protect industry that lacks comparative advantage
2. High costs due to wrong factor endowments
3. Need permanent subsidies/protection
4. Drain government resources
5. Slow overall growth
6. Fall further behind

Real example: Latin America 1950-1980
- Protected heavy industry
- GDP growth: 2-3% (vs 7-10% in East Asia)
- Result: "Lost decades" of the 1980s

The lesson? Protection can't overcome wrong factor endowments.`,
    concept: 'Import Substitution Industrialization Failure',
    examples: ['Latin American debt crisis', 'Indian License Raj', 'African white elephants']
  },
  
  {
    keywords: ['infrastructure', 'roads', 'ports', 'electricity', 'sez'],
    response: `Infrastructure is the KEY enabler! It transforms latent comparative advantage into actual competitiveness.

Think of it this way:
- You have cheap labor (potential advantage)
- But if electricity is unreliable, ports are congested, roads are poor...
- Your actual costs become HIGH despite low wages!

Smart infrastructure strategy:
1. Basic infrastructure first (power, ports, roads)
2. Industrial zones to concentrate investment
3. Match infrastructure to your industries' needs

Example: Shenzhen 1980 - fishing village with good location. Add SEZ + basic infrastructure = $400B economy by 2020!`,
    concept: 'Infrastructure as Enabler',
    examples: ['Chinese SEZs', 'Vietnam industrial parks', 'Ethiopian industrial zones']
  },
  
  // Dynamic Development
  {
    keywords: ['upgrade', 'move up', 'advance', 'progress', 'transition'],
    response: `Now you're thinking dynamically! Development isn't static - it's a process of continuous upgrading.

The Upgrading Ladder:
1. Start: Agriculture → Light manufacturing (textiles)
2. 10 years: Capital accumulation → Electronics assembly
3. 20 years: Skills development → Heavy industry
4. 30 years: Technology capability → High-tech

Key mechanism: Success in simple industries provides:
- Capital (through profits/savings)
- Skills (through learning-by-doing)
- Knowledge (through global connections)

This enables natural progression to more complex industries.

Question: What determines the SPEED of this upgrading?`,
    concept: 'Dynamic Comparative Advantage',
    examples: ['Korea: textiles→ships→semiconductors', 'China: toys→electronics→AI']
  },
  
  {
    keywords: ['flying', 'geese', 'pattern', 'transfer', 'relocation'],
    response: `The Flying Geese Pattern - the secret of East Asian success!

How it works:
1. Leader country wages rise, loses competitiveness in simple industries
2. These industries "fly" to follower countries with lower wages
3. Leader upgrades to more complex industries
4. Followers get proven industries with ready markets

Historical waves:
- 1960s: Japan → Korea/Taiwan (textiles)
- 1980s: Korea/Taiwan → China (electronics assembly)
- 2000s: China → Vietnam/Bangladesh (garments)

Current opportunity: China has 100M manufacturing jobs becoming too expensive. Where will they fly?

This is YOUR chance if you have the right conditions!`,
    concept: 'Flying Geese Pattern',
    examples: ['Samsung to Vietnam', 'Japanese textiles to Korea', 'Taiwan electronics to China']
  },
  
  // Government Role
  {
    keywords: ['government', 'state', 'policy', 'facilitate', 'coordinate'],
    response: `The government's role is crucial but often misunderstood! It's not about picking winners, but FACILITATING success.

✅ What governments SHOULD do:
1. Identify industries matching comparative advantage
2. Provide infrastructure for those industries
3. Solve coordination problems (industrial parks)
4. Attract pioneer investors
5. Support skills development

❌ What governments SHOULDN'T do:
1. Develop industries against comparative advantage
2. Protect non-viable firms indefinitely
3. Try to leapfrog development stages
4. Ignore market signals

The East Asian secret: Governments that helped markets work better, not replaced them.`,
    concept: 'Facilitating State',
    examples: ['Singapore EDB', 'Korean EPZs', 'Chinese SEZs', 'Ethiopian industrial parks']
  },
  
  // Common Misconceptions
  {
    keywords: ['leap', 'skip', 'jump', 'shortcut', 'bypass'],
    response: `The leapfrogging fallacy! This is perhaps the most dangerous development myth.

Why leapfrogging fails:
1. Advanced industries need entire ecosystems
2. Skills can't be created overnight
3. Supporting industries must exist
4. Technology must be absorbed, not just imported

Example: You can't jump from agriculture to semiconductors because:
- Need thousands of engineers (takes 20+ years to train)
- Need hundreds of suppliers (must develop organically)
- Need massive capital (must accumulate first)

The reality: Every successful country climbed the ladder step by step. No exceptions.

Even China, with 1.4 billion people, followed the sequence!`,
    concept: 'No Leapfrogging in Development',
    examples: ["India's software exception", "Africa's mobile banking", "But manufacturing has no shortcuts"]
  },
  
  // Success Factors
  {
    keywords: ['success', 'miracle', 'growth', 'development', 'prosper'],
    response: `The recipe for development success is actually simple (but hard to execute):

The NSE Formula:
1. Start with what you have (factor endowments)
2. Develop industries that use those endowments
3. Ensure basic infrastructure and stability
4. Let markets determine prices
5. Government facilitates, doesn't distort
6. Reinvest profits to accumulate capital
7. Gradually upgrade as endowments change

Countries that followed this: Korea, Taiwan, China, Vietnam
- Growth rates: 7-10% for decades
- Poverty reduction: Hundreds of millions lifted up

Countries that didn't: Much of Africa, Latin America
- Growth rates: 2-3%
- Persistent poverty

The difference? Following vs defying comparative advantage.`,
    concept: 'New Structural Economics Framework',
    examples: ['East Asian Miracle', 'China\'s reform success', 'Vietnam\'s rise']
  },

  // Default pattern for questions
  {
    keywords: ['don\'t know', 'not sure', 'confused', 'help'],
    response: `That's perfectly fine! Economics can be complex. Let me give you a concrete example to think about:

Imagine you're advising a country with:
- Millions of unemployed workers
- Wages of $2/day
- Limited capital
- Basic education

Should they try to:
A) Build a high-tech semiconductor plant (needs $5 billion investment)
B) Start garment factories (needs $5 million investment)

Which would create more jobs? Which could actually compete globally? Why?`,
    concept: 'Practical Application',
    examples: ['Real choices countries face every day']
  }
];

// Initial conversation starters
export const conversationStarters = [
  {
    id: 'bangladesh',
    text: `Welcome to the NSE Learning Laboratory! I'm here to help you discover economic development principles through real examples.

Let's start with a puzzle: In 1980, Bangladesh tried to develop both textiles and a car industry. The textile industry became a global success ($50B exports today), but the car industry failed completely.

💭 Why do you think one succeeded while the other failed? Consider what resources Bangladesh had in 1980...`,
    hint: 'Think about wages, capital, and skills'
  },
  
  {
    id: 'korea',
    text: `Here's a fascinating case: In 1965, South Korea was poorer than many African countries (GDP: $300/capita).

By 2020, it became a high-tech powerhouse (GDP: $31,000/capita) making semiconductors and smartphones.

💭 How did Korea transform from making wigs and plywood to producing the world's most advanced memory chips?`,
    hint: 'Consider the step-by-step progression'
  },
  
  {
    id: 'china',
    text: `Consider this transformation: Shenzhen was a fishing village of 30,000 people in 1980.

Today it's a tech metropolis of 13 million with a $400B economy - larger than many countries!

💭 What made Shenzhen grow 1000x faster than other Chinese cities? What does this teach about development?`,
    hint: 'Think about location, policy, and timing'
  }
];

// Function to get appropriate response
export function getResponse(userInput: string): string {
  const input = userInput.toLowerCase();
  
  // Find best matching pattern
  let bestMatch: DialoguePattern | null = null;
  let maxMatches = 0;
  
  for (const pattern of dialoguePatterns) {
    const matches = pattern.keywords.filter(keyword => 
      input.includes(keyword.toLowerCase())
    ).length;
    
    if (matches > maxMatches) {
      maxMatches = matches;
      bestMatch = pattern;
    }
  }
  
  if (bestMatch) {
    return bestMatch.response;
  }
  
  // Default response if no pattern matches
  return `Interesting point! Let me guide your thinking with some facts:

🤔 Consider these crucial factors about development:
- Factor endowments: What does the country have in abundance?
- Factor prices: How do these endowments affect costs?
- Industrial structure: What industries match these endowments?
- Dynamic change: How do endowments evolve over time?

Try thinking about specific industries or countries. For example:
- Why do garment factories start in poor countries?
- Why can't poor countries compete in car manufacturing?
- How did Korea move from textiles to semiconductors?

What aspect interests you most?`;
}