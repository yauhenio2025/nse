export const getReviewContent = (field: string, modules: string[]) => {
  const content: Record<string, any> = {
    nse: {
      coreConcepts: `
        <p>Extracted core NSE concepts from your documents:</p>
        <ul>
          <li>Factor endowments (labor, capital, resources, infrastructure)</li>
          <li>Comparative advantage (dynamic, evolving with endowments)</li>
          <li>Industrial structure (endogenously determined)</li>
          <li>Firm viability (CAF vs CAD strategies)</li>
          <li>Structural transformation mechanisms</li>
        </ul>
      `,
      learningProgressions: `
        <p>AI-generated learning pathways based on NSE:</p>
        <ul>
          <li>Basic endowment identification → Industry matching</li>
          <li>Static analysis → Dynamic transformation understanding</li>
          <li>Theory comprehension → Policy application (GIFF)</li>
          <li>Single country → Comparative analysis</li>
        </ul>
      `,
      interactiveElements: `
        <p>Selected NSE interactive modules configured:</p>
        <ul>
          ${modules.map(m => `<li>${m}</li>`).join('')}
        </ul>
      `
    },
    gsh: {
      coreConcepts: `
        <p>Core concepts from Global South History:</p>
        <ul>
          <li>Colonial extraction mechanisms</li>
          <li>Resistance movements and strategies</li>
          <li>Decolonial epistemologies</li>
          <li>Solidarity networks</li>
          <li>Counter-narratives</li>
        </ul>
      `,
      learningProgressions: `
        <p>Learning pathways for decolonial understanding:</p>
        <ul>
          <li>Colonial systems → Forms of resistance</li>
          <li>Local struggles → Global connections</li>
          <li>Historical analysis → Contemporary relevance</li>
          <li>Multiple perspectives → Critical synthesis</li>
        </ul>
      `,
      interactiveElements: `
        <p>Selected Global South History modules:</p>
        <ul>
          ${modules.map(m => `<li>${m}</li>`).join('')}
        </ul>
      `
    },
    ma: {
      coreConcepts: `
        <p>Core Marxist Anthropology concepts:</p>
        <ul>
          <li>Modes of production analysis</li>
          <li>Forms of alienation</li>
          <li>Base-superstructure dialectic</li>
          <li>Class consciousness development</li>
          <li>Social reproduction mechanisms</li>
        </ul>
      `,
      learningProgressions: `
        <p>Critical theory learning pathways:</p>
        <ul>
          <li>Material conditions → Social consciousness</li>
          <li>Individual alienation → Collective action</li>
          <li>Historical analysis → Contemporary critique</li>
          <li>Theory → Praxis</li>
        </ul>
      `,
      interactiveElements: `
        <p>Selected Marxist Anthropology modules:</p>
        <ul>
          ${modules.map(m => `<li>${m}</li>`).join('')}
        </ul>
      `
    }
  };

  return content[field] || {
    coreConcepts: '<p>Core concepts extracted from documents</p>',
    learningProgressions: '<p>Generated learning pathways</p>',
    interactiveElements: `<p>Selected modules: ${modules.join(', ')}</p>`
  };
};