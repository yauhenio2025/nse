export const getReviewContent = (field: string, modules: string[]) => {
  const content: Record<string, any> = {
    nse: {
      coreConcepts: `
        <div class="concepts-section">
          <h4>🎯 Factor Endowments Framework</h4>
          <ul>
            <li><strong>Labor Endowments:</strong> Abundant labor (wages $0.50-5/day), skilled labor (engineers, technicians), unskilled labor (primary education only)</li>
            <li><strong>Capital Endowments:</strong> Scarce capital (interest rates 15-25%), abundant capital (rates 2-5%), physical vs human vs financial capital</li>
            <li><strong>Natural Resources:</strong> Oil, minerals, arable land - blessing or curse depending on management</li>
            <li><strong>Infrastructure:</strong> Basic (ports, power, roads) vs Advanced (fiber optic, automated logistics)</li>
          </ul>
          
          <h4>📈 Dynamic Comparative Advantage</h4>
          <ul>
            <li><strong>Endogenous Evolution:</strong> E(t) → CA(t) → I(t) → Surplus → K accumulation → E(t+1)</li>
            <li><strong>Sequential Development:</strong> Agriculture → Textiles → Electronics → Heavy Industry → High-Tech</li>
            <li><strong>Flying Geese Pattern:</strong> Industries transfer from high-wage to low-wage countries in predictable waves</li>
            <li><strong>Structural Transformation:</strong> Manufacturing rises from 10% to 35% of GDP over 20 years</li>
          </ul>
          
          <h4>⚖️ Viability Framework</h4>
          <ul>
            <li><strong>CAF Industries:</strong> Match factor endowments, competitive without subsidies, create employment</li>
            <li><strong>CAD Industries:</strong> Defy endowments, require permanent protection, drain resources</li>
            <li><strong>Government Role:</strong> Facilitate CAF industries, not pick winners against market signals</li>
            <li><strong>Policy Implications:</strong> Export promotion vs import substitution outcomes</li>
          </ul>
        </div>
      `,
      learningProgressions: `
        <div class="progressions-section">
          <h4>🎮 Micro-Foundation Builder Progression</h4>
          <div class="progression-level">
            <strong>Novice (Elements 1-3):</strong>
            <ul>
              <li>Identify basic endowments: labor-abundant, capital-scarce, natural-resources</li>
              <li>Match simple industries: textiles with abundant labor</li>
              <li>Understand why Bangladesh succeeds in garments (wages $2/day, basic infrastructure)</li>
            </ul>
          </div>
          
          <div class="progression-level">
            <strong>Intermediate (Elements 4-8):</strong>
            <ul>
              <li>Add infrastructure elements: SEZ + basic infrastructure + export promotion</li>
              <li>See compound effects: "East Asian Miracle Formula" combinations</li>
              <li>Analyze failures: import substitution + capital scarcity = permanent subsidies</li>
              <li>Learn dynamic upgrading: add time elements to see 10-year transformations</li>
            </ul>
          </div>
          
          <div class="progression-level">
            <strong>Advanced (Elements 9-15):</strong>
            <ul>
              <li>Complex policy analysis: government coordination vs market distortions</li>
              <li>Resource management: natural resources + coordination = blessing, + ISI = curse</li>
              <li>Innovation transitions: capital abundant + skilled labor + R&D = frontier economy</li>
              <li>Design complete development strategies with 20+ year horizons</li>
            </ul>
          </div>
          
          <h4>🔄 Causal Chain Constructor Progression</h4>
          <div class="progression-level">
            <strong>Country Analysis Skills:</strong>
            <ul>
              <li>Starting conditions: Bangladesh 1980 (GDP $250, literacy 20%, high interest rates)</li>
              <li>Industry viability: textiles ($5K/worker) vs automobiles ($250K/worker) with 20% interest</li>
              <li>Infrastructure constraints: power outages limit manufacturing competitiveness</li>
              <li>Decision consequences: following CA = 7-10% growth, defying CA = 2-3% growth</li>
            </ul>
          </div>
          
          <h4>🕰️ Time-Lapse Understanding</h4>
          <div class="progression-level">
            <strong>Historical Pattern Recognition:</strong>
            <ul>
              <li>1960-1980: Japan upgrades from textiles to steel, transfers to Korea/Taiwan</li>
              <li>1980-2000: NIEs move to electronics, China enters with $30/month wages</li>
              <li>2000-2020: China dominates manufacturing (125M jobs), Vietnam/Bangladesh emerge</li>
              <li>Current: China wages hit $1000/month, transferring 85M jobs to followers</li>
            </ul>
          </div>
          
          <h4>🦆 Flying Geese Simulation Mastery</h4>
          <div class="progression-level">
            <strong>Transfer Mechanics:</strong>
            <ul>
              <li>Wage gaps: Need 3x minimum for textile transfer, 2x for electronics</li>
              <li>Infrastructure thresholds: 30% for textiles, 60% for electronics, 85% for semiconductors</li>
              <li>Political stability: Below 50% blocks all transfers</li>
              <li>Environmental costs: Steel transfers bring 80% pollution, semiconductors only 40%</li>
            </ul>
          </div>
          
          <h4>💬 Socratic Dialogue Development</h4>
          <div class="progression-level">
            <strong>Critical Thinking Skills:</strong>
            <ul>
              <li>Question assumptions: "Why can't poor countries make cars competitively?"</li>
              <li>Compare strategies: East Asian export promotion vs Latin American ISI outcomes</li>
              <li>Analyze trade-offs: Protection vs efficiency, equity vs growth</li>
              <li>Apply principles: Design policy for specific country contexts</li>
            </ul>
          </div>
        </div>
      `,
      interactiveElements: `
        <div class="elements-section">
          <h4>🧪 Micro-Foundation Builder</h4>
          <div class="element-detail">
            <strong>Core Elements Available:</strong>
            <ul>
              <li><strong>Factor Endowments (6):</strong> Labor-abundant, Capital-scarce, Skilled-labor, Natural-resources, Capital-abundant, Unskilled-labor</li>
              <li><strong>Infrastructure (4):</strong> Basic-infrastructure, Advanced-infrastructure, SEZ, Industrial-parks</li>
              <li><strong>Government (4):</strong> Government-coordination, Import-substitution, Export-promotion, Industrial-policy</li>
              <li><strong>Market Access (3):</strong> Market-access, FDI, Domestic-market</li>
              <li><strong>Time & Development (4):</strong> Time-10years, Time-20years, Education-investment, R-and-d</li>
            </ul>
            
            <strong>Valid Combinations (${Object.keys(require('@/data/nse/microFoundationData').combinations).length}):</strong>
            <ul>
              <li>"labor-abundant,capital-scarce" → ✅ Labor-Intensive CA (Foundation Formula)</li>
              <li>"labor-abundant,capital-scarce,basic-infrastructure" → ✅ Infrastructure-Enabled Industrialization</li>
              <li>"labor-abundant,capital-scarce,import-substitution" → ❌ Import Substitution Trap</li>
              <li>"capital-abundant,skilled-labor,r-and-d" → 🚀 Innovation Economy</li>
            </ul>
          </div>
          
          <h4>⚡ Causal Chain Constructor</h4>
          <div class="element-detail">
            <strong>Starting Scenarios (5 Countries):</strong>
            <ul>
              <li><strong>Bangladesh 1980:</strong> GDP $250, Labor 80% agricultural, Electricity 10%, Interest 20%</li>
              <li><strong>Vietnam 1990:</strong> GDP $230, Literacy 88%, Post-war recovery, Reform beginning</li>
              <li><strong>Ethiopia 2010:</strong> GDP $350, Landlocked, Coffee exports, Chinese investment starting</li>
              <li><strong>Korea 1965:</strong> GDP $300, Post-war, Basic education, Export drive planned</li>
              <li><strong>Brazil 1970:</strong> GDP $800, Higher income, ISI legacy, Military government</li>
            </ul>
            
            <strong>Industry Choices by Income Level:</strong>
            <ul>
              <li><strong>Low Income (&lt;$500):</strong> Textiles ($5K/worker), Footwear ($8K/worker), Electronics Assembly ($15K/worker), Heavy Machinery ($250K/worker - non-viable)</li>
              <li><strong>Lower-Middle ($500-2K):</strong> Light Manufacturing, Food Processing, Automobiles (premature)</li>
              <li><strong>Upper-Middle ($2K-10K):</strong> Steel & Ships, Semiconductors (very difficult)</li>
            </ul>
          </div>
          
          <h4>📊 Time-Lapse Simulator</h4>
          <div class="element-detail">
            <strong>Data Coverage:</strong>
            <ul>
              <li><strong>Time Span:</strong> 1960-2020 (60 years, 7 snapshots)</li>
              <li><strong>Countries Tracked:</strong> Japan, Korea, Taiwan, China, India, Bangladesh, Vietnam</li>
              <li><strong>Metrics per Country:</strong> GDP/capita, Monthly wages, Industrial complexity (1-10), Manufacturing jobs, Major policies, Challenges</li>
              <li><strong>Industrial Transfers:</strong> 15+ documented transfers with job counts and timing</li>
            </ul>
            
            <strong>Key Visualizations:</strong>
            <ul>
              <li>Country bubbles showing GDP vs Complexity over time</li>
              <li>Industry flow arrows showing transfers between countries</li>
              <li>Wage progression lines with upgrade triggers</li>
              <li>Manufacturing employment changes (Japan: 14M→8M, China: 10M→130M)</li>
            </ul>
          </div>
          
          <h4>🦆 Flying Geese Game</h4>
          <div class="element-detail">
            <strong>Game Mechanics:</strong>
            <ul>
              <li><strong>15 Countries:</strong> Each with detailed profiles (wages, infrastructure, stability, education)</li>
              <li><strong>12 Industries:</strong> From agriculture (complexity 1) to AI/robotics (complexity 10)</li>
              <li><strong>Transfer Rules:</strong> Minimum wage gaps, infrastructure requirements, environmental impacts</li>
              <li><strong>Random Events:</strong> Financial crisis, trade wars, tech booms, environmental regulations</li>
            </ul>
            
            <strong>Simulation Features:</strong>
            <ul>
              <li>Real-time calculation of industry viability based on factor costs</li>
              <li>Environmental health tracking (pollution accumulation/reduction)</li>
              <li>Middle-income trap detection and escape conditions</li>
              <li>Political stability effects on FDI and transfers</li>
            </ul>
          </div>
          
          <h4>🤔 Socratic Dialogue System</h4>
          <div class="element-detail">
            <strong>Dialogue Patterns (${require('@/data/nse/socraticData').dialoguePatterns.length}):</strong>
            <ul>
              <li><strong>Factor Analysis:</strong> Responds to labor, capital, wage discussions with examples</li>
              <li><strong>Industry Analysis:</strong> Textile success stories vs automobile failures</li>
              <li><strong>Policy Critique:</strong> Import substitution failures, infrastructure white elephants</li>
              <li><strong>Development Dynamics:</strong> Flying geese pattern, upgrading sequences</li>
            </ul>
            
            <strong>Adaptive Responses:</strong>
            <ul>
              <li>Keyword matching with contextual examples (Bangladesh garments, Korean shipbuilding)</li>
              <li>Follow-up questions to deepen understanding</li>
              <li>Real-world case studies for each concept</li>
              <li>Common misconception corrections (leapfrogging fallacy)</li>
            </ul>
          </div>
          
          <h4>📋 Selected Module Integration</h4>
          <div class="selected-modules">
            ${modules.map(m => `<div class="module-pill">${m}</div>`).join('')}
          </div>
          
          <h4>🎯 Learning Outcomes</h4>
          <div class="outcomes-section">
            <ul>
              <li><strong>Analytical Skills:</strong> Diagnose why countries succeed/fail in industrialization</li>
              <li><strong>Predictive Ability:</strong> Forecast which industries will transfer next and where</li>
              <li><strong>Policy Design:</strong> Create development strategies based on factor endowments</li>
              <li><strong>Historical Understanding:</strong> Explain East Asian miracle vs Latin American stagnation</li>
              <li><strong>Current Events Application:</strong> Analyze China's manufacturing exodus, Africa's opportunities</li>
            </ul>
          </div>
        </div>
      `
    },
    gsh: {
      coreConcepts: `
        <div class="concepts-section">
          <h4>🌍 Decolonial Epistemologies</h4>
          <ul>
            <li><strong>Coloniality of Power:</strong> Colonial power structures persist beyond formal independence</li>
            <li><strong>Coloniality of Knowledge:</strong> Western knowledge systems marginalize indigenous ways of knowing</li>
            <li><strong>Coloniality of Being:</strong> Colonial racism affects identity and subjectivity</li>
            <li><strong>Epistemic Violence:</strong> Systematic destruction of non-Western knowledge systems</li>
          </ul>
          
          <h4>✊ Resistance Movements & Strategies</h4>
          <ul>
            <li><strong>Anti-Colonial Struggles:</strong> Armed resistance, cultural preservation, political organization</li>
            <li><strong>Liberation Movements:</strong> Pan-Africanism, Non-Aligned Movement, Third World solidarity</li>
            <li><strong>Everyday Resistance:</strong> Cultural practices, language maintenance, economic alternatives</li>
            <li><strong>Intellectual Resistance:</strong> Indigenous philosophies, counter-narratives, alternative modernities</li>
          </ul>
          
          <h4>🔗 Solidarity Networks</h4>
          <ul>
            <li><strong>South-South Cooperation:</strong> Bandung Conference, Tricontinental, Global South alliances</li>
            <li><strong>Transnational Movements:</strong> Anti-apartheid, liberation theology, feminist networks</li>
            <li><strong>Cultural Connections:</strong> Shared languages, religious practices, migration patterns</li>
            <li><strong>Economic Alternatives:</strong> Fair trade, cooperative movements, alternative development</li>
          </ul>
          
          <h4>📚 Counter-Narratives</h4>
          <ul>
            <li><strong>Subaltern Studies:</strong> Voices from below, peasant resistance, working-class histories</li>
            <li><strong>Oral Traditions:</strong> Indigenous knowledge systems, storytelling, cultural memory</li>
            <li><strong>Alternative Archives:</strong> Community histories, personal testimonies, cultural artifacts</li>
            <li><strong>Postcolonial Theory:</strong> Hybrid identities, diaspora experiences, cultural negotiations</li>
          </ul>
        </div>
      `,
      learningProgressions: `
        <div class="progressions-section">
          <h4>🏛️ Colonial Systems Analysis</h4>
          <div class="progression-level">
            <strong>Foundation Level:</strong>
            <ul>
              <li>Map colonial administrative structures and their local impacts</li>
              <li>Analyze extraction mechanisms: labor recruitment, taxation systems, resource flows</li>
              <li>Understand indirect rule and collaboration vs resistance dynamics</li>
              <li>Examine missionary activities and cultural transformation</li>
            </ul>
          </div>
          
          <h4>🌊 Resistance Movement Studies</h4>
          <div class="progression-level">
            <strong>Intermediate Level:</strong>
            <ul>
              <li>Compare resistance strategies across different colonial contexts</li>
              <li>Analyze leadership patterns and organizational structures</li>
              <li>Study the role of gender, class, and ethnicity in resistance movements</li>
              <li>Examine connections between local and transnational resistance</li>
            </ul>
          </div>
          
          <h4>🔍 Decolonial Analysis</h4>
          <div class="progression-level">
            <strong>Advanced Level:</strong>
            <ul>
              <li>Apply decolonial theory to contemporary global issues</li>
              <li>Critique development discourse and practice</li>
              <li>Analyze neocolonial structures in post-independence states</li>
              <li>Explore alternative epistemologies and ways of knowing</li>
            </ul>
          </div>
          
          <h4>🤝 Solidarity and Connection</h4>
          <div class="progression-level">
            <strong>Synthesis Level:</strong>
            <ul>
              <li>Trace networks of solidarity across Global South movements</li>
              <li>Analyze contemporary South-South cooperation initiatives</li>
              <li>Examine diaspora politics and transnational activism</li>
              <li>Design strategies for decolonial practice in contemporary contexts</li>
            </ul>
          </div>
          
          <h4>🎯 Critical Methodology</h4>
          <div class="progression-level">
            <strong>Research Skills:</strong>
            <ul>
              <li>Source criticism: colonial archives, oral histories, material culture</li>
              <li>Comparative analysis across different colonial experiences</li>
              <li>Intersectional analysis of identity and resistance</li>
              <li>Participatory research methods with communities</li>
            </ul>
          </div>
        </div>
      `,
      interactiveElements: `
        <div class="elements-section">
          <h4>🗺️ Interactive Colonial Mapping</h4>
          <div class="element-detail">
            <strong>Digital Archive Exploration:</strong>
            <ul>
              <li>Primary source document analysis tools</li>
              <li>Interactive timelines of resistance movements</li>
              <li>Comparative colonial administration systems</li>
              <li>Network visualization of solidarity movements</li>
            </ul>
          </div>
          
          <h4>📖 Counter-Narrative Construction</h4>
          <div class="element-detail">
            <strong>Storytelling Platforms:</strong>
            <ul>
              <li>Oral history collection and analysis tools</li>
              <li>Community memory mapping exercises</li>
              <li>Multimedia narrative construction</li>
              <li>Collaborative historical reconstruction projects</li>
            </ul>
          </div>
          
          <h4>🌐 Solidarity Network Analysis</h4>
          <div class="element-detail">
            <strong>Connection Tracking:</strong>
            <ul>
              <li>Transnational movement mapping</li>
              <li>Communication network analysis</li>
              <li>Resource flow visualization</li>
              <li>Contemporary solidarity project database</li>
            </ul>
          </div>
          
          <h4>🎭 Role-Playing Simulations</h4>
          <div class="element-detail">
            <strong>Historical Scenarios:</strong>
            <ul>
              <li>Decolonization negotiations</li>
              <li>Resistance movement strategy sessions</li>
              <li>International solidarity conferences</li>
              <li>Contemporary decolonial organizing</li>
            </ul>
          </div>
          
          <h4>📋 Selected Module Integration</h4>
          <div class="selected-modules">
            ${modules.map(m => `<div class="module-pill">${m}</div>`).join('')}
          </div>
        </div>
      `
    },
    ma: {
      coreConcepts: `
        <div class="concepts-section">
          <h4>🏭 Modes of Production Analysis</h4>
          <ul>
            <li><strong>Historical Materialism:</strong> Material conditions shape social relations and consciousness</li>
            <li><strong>Production Modes:</strong> Primitive communism, slavery, feudalism, capitalism, socialism</li>
            <li><strong>Class Relations:</strong> Bourgeoisie, proletariat, petty bourgeoisie, lumpenproletariat</li>
            <li><strong>Labor Theory of Value:</strong> Socially necessary labor time determines exchange value</li>
          </ul>
          
          <h4>💔 Forms of Alienation</h4>
          <ul>
            <li><strong>From Product:</strong> Workers don't control what they produce</li>
            <li><strong>From Labor Process:</strong> Workers don't control how they work</li>
            <li><strong>From Species-Being:</strong> Humans become estranged from their creative essence</li>
            <li><strong>From Others:</strong> Competition isolates workers from each other</li>
          </ul>
          
          <h4>⚖️ Base-Superstructure Dialectic</h4>
          <ul>
            <li><strong>Economic Base:</strong> Forces and relations of production</li>
            <li><strong>Superstructure:</strong> Politics, law, ideology, culture, religion</li>
            <li><strong>Dialectical Relationship:</strong> Base determines superstructure, but superstructure can influence base</li>
            <li><strong>Ideological State Apparatuses:</strong> Schools, media, religion maintain ruling class hegemony</li>
          </ul>
          
          <h4>🧠 Class Consciousness Development</h4>
          <ul>
            <li><strong>Class-in-Itself:</strong> Objective position in production relations</li>
            <li><strong>Class-for-Itself:</strong> Subjective awareness of class interests</li>
            <li><strong>False Consciousness:</strong> Misunderstanding of class position and interests</li>
            <li><strong>Revolutionary Consciousness:</strong> Understanding need for systemic change</li>
          </ul>
          
          <h4>🔄 Social Reproduction Mechanisms</h4>
          <ul>
            <li><strong>Daily Reproduction:</strong> Maintaining and renewing labor power</li>
            <li><strong>Generational Reproduction:</strong> Raising and educating next generation of workers</li>
            <li><strong>Ideological Reproduction:</strong> Maintaining acceptance of capitalist relations</li>
            <li><strong>Systemic Reproduction:</strong> Perpetuating overall capitalist system</li>
          </ul>
        </div>
      `,
      learningProgressions: `
        <div class="progressions-section">
          <h4>📊 Material Conditions Analysis</h4>
          <div class="progression-level">
            <strong>Foundation Level:</strong>
            <ul>
              <li>Identify class positions in contemporary workplaces</li>
              <li>Analyze relationship between technology and social relations</li>
              <li>Map connections between economic crisis and social conflict</li>
              <li>Examine role of private property in structuring social life</li>
            </ul>
          </div>
          
          <h4>💭 Consciousness and Ideology</h4>
          <div class="progression-level">
            <strong>Intermediate Level:</strong>
            <ul>
              <li>Analyze media representation of class conflict</li>
              <li>Examine education system's role in reproducing class relations</li>
              <li>Study religious and cultural justifications for inequality</li>
              <li>Investigate consumer culture and commodity fetishism</li>
            </ul>
          </div>
          
          <h4>⚡ Contradiction and Crisis</h4>
          <div class="progression-level">
            <strong>Advanced Level:</strong>
            <ul>
              <li>Analyze capitalism's internal contradictions and crisis tendencies</li>
              <li>Study labor organizing and class struggle dynamics</li>
              <li>Examine intersections of class with race, gender, and nationality</li>
              <li>Investigate alternative economic arrangements and transitions</li>
            </ul>
          </div>
          
          <h4>🌍 Global Capitalism Analysis</h4>
          <div class="progression-level">
            <strong>Synthesis Level:</strong>
            <ul>
              <li>Apply Marxist analysis to global value chains</li>
              <li>Examine imperialism and unequal exchange</li>
              <li>Study primitive accumulation in contemporary contexts</li>
              <li>Analyze neoliberalism and financialization</li>
            </ul>
          </div>
          
          <h4>🛠️ Praxis and Action</h4>
          <div class="progression-level">
            <strong>Application Level:</strong>
            <ul>
              <li>Connect theory to contemporary political movements</li>
              <li>Develop strategies for worker organizing</li>
              <li>Design alternative economic institutions</li>
              <li>Practice participatory action research methods</li>
            </ul>
          </div>
        </div>
      `,
      interactiveElements: `
        <div class="elements-section">
          <h4>🏢 Workplace Ethnography Simulator</h4>
          <div class="element-detail">
            <strong>Fieldwork Tools:</strong>
            <ul>
              <li>Participant observation techniques</li>
              <li>Worker interview protocols</li>
              <li>Labor process analysis frameworks</li>
              <li>Class relation mapping exercises</li>
            </ul>
          </div>
          
          <h4>📺 Ideology Analysis Lab</h4>
          <div class="element-detail">
            <strong>Media Criticism Tools:</strong>
            <ul>
              <li>Advertisement deconstruction exercises</li>
              <li>News media class bias analysis</li>
              <li>Cultural product commodity analysis</li>
              <li>Hegemony identification techniques</li>
            </ul>
          </div>
          
          <h4>⚖️ Crisis Simulation</h4>
          <div class="element-detail">
            <strong>Economic Crisis Modeling:</strong>
            <ul>
              <li>Falling rate of profit calculations</li>
              <li>Overproduction crisis scenarios</li>
              <li>Class struggle impact modeling</li>
              <li>Revolutionary situation analysis</li>
            </ul>
          </div>
          
          <h4>🤝 Organizing Strategy Workshop</h4>
          <div class="element-detail">
            <strong>Praxis Development:</strong>
            <ul>
              <li>Union organizing simulation</li>
              <li>Community organizing exercises</li>
              <li>Coalition building strategies</li>
              <li>Direct action planning tools</li>
            </ul>
          </div>
          
          <h4>📋 Selected Module Integration</h4>
          <div class="selected-modules">
            ${modules.map(m => `<div class="module-pill">${m}</div>`).join('')}
          </div>
        </div>
      `
    }
  };

  return content[field] || {
    coreConcepts: `
      <div class="concepts-section">
        <h4>📚 Core Knowledge Framework</h4>
        <p>Fundamental concepts extracted from uploaded documents and configured for interactive learning.</p>
        
        <h4>🎯 Learning Objectives</h4>
        <ul>
          <li>Master foundational theoretical frameworks</li>
          <li>Apply concepts to real-world scenarios</li>
          <li>Develop critical analysis skills</li>
          <li>Connect theory to contemporary issues</li>
        </ul>
      </div>
    `,
    learningProgressions: `
      <div class="progressions-section">
        <h4>📈 Skill Development Pathway</h4>
        <p>Structured progression from basic understanding to advanced application.</p>
        
        <div class="progression-level">
          <strong>Foundation → Intermediate → Advanced → Synthesis</strong>
          <ul>
            <li>Concept recognition and basic understanding</li>
            <li>Application to familiar contexts</li>
            <li>Analysis of complex scenarios</li>
            <li>Creation of new insights and connections</li>
          </ul>
        </div>
      </div>
    `,
    interactiveElements: `
      <div class="elements-section">
        <h4>🎮 Interactive Learning Components</h4>
        <p>Generated modules configured for hands-on exploration:</p>
        
        <div class="selected-modules">
          ${modules.map(m => `<div class="module-pill">${m}</div>`).join('')}
        </div>
        
        <h4>🛠️ Learning Tools</h4>
        <ul>
          <li>Concept mapping exercises</li>
          <li>Case study analysis</li>
          <li>Simulation and modeling</li>
          <li>Collaborative discussion forums</li>
        </ul>
      </div>
    `
  };
};