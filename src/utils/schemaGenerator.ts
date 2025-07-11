export const generateSchema = (field: string, modules: string[]): string => {
  const schemas: Record<string, string> = {
    nse: `# NSE Knowledge Schema for Interactive Learning System

## Core Concepts
- Factor Endowments
  - Labor (unskilled/semi-skilled/skilled)
  - Capital (physical/human/financial)
  - Natural Resources
  - Infrastructure (hard/soft)

- Comparative Advantage
  - Dynamic nature (evolves with endowments)
  - Revealed through relative prices
  - Determines viable industries

- Industrial Structure
  - Endogenously determined
  - Optimal when aligned with CA
  - Upgrading pathways

## Dynamic Mechanisms
- Structural Transformation Cycle
  E(t) → CA(t) → I(t) → Surplus → K accumulation → E(t+1)
  
- Flying Geese Pattern
  - Sequential industrial transfer
  - Lead → Follower progression

## Selected Modules
${modules.map(m => `- ${m}`).join('\n')}

## Learning Paths
- Novice: Identify endowments → Match industries
- Intermediate: Trace transformation → Apply GIFF
- Advanced: Design policies → Handle transitions`,

    gsh: `# Global South History Knowledge Schema

## Core Concepts
- Decolonial Theory
  - Coloniality of power/knowledge/being
  - Epistemic violence
  - Alternative modernities

- Resistance Movements
  - Anti-colonial struggles
  - Liberation movements
  - Solidarity networks

- Historical Patterns
  - Colonial extraction systems
  - Parallel histories
  - Counter-narratives

## Selected Modules
${modules.map(m => `- ${m}`).join('\n')}

## Learning Progressions
- Foundation: Colonial systems → Resistance
- Intermediate: Parallel movements → Networks
- Advanced: Counter-narratives → Futures`,

    ma: `# Marxist Anthropology Knowledge Schema

## Core Concepts
- Historical Materialism
  - Modes of production
  - Base and superstructure
  - Class relations

- Alienation
  - From product
  - From labor process
  - From species-being
  - From others

- Social Reproduction
  - Daily reproduction of labor
  - Ideological reproduction
  - Systemic cycles

## Selected Modules
${modules.map(m => `- ${m}`).join('\n')}

## Learning Paths
- Basic: Material conditions → Social relations
- Intermediate: Alienation → Consciousness
- Advanced: Reproduction → Transformation`
  };

  return schemas[field] || `# Generated Schema for ${field}\n\n## Selected Modules\n${modules.join('\n')}`;
};