// src/components/SchemaDrivenModule.tsx
import React, { useEffect, useState } from 'react';
import { NSE_SCHEMA } from '@/data/nse/schemaData';

interface ModuleProps {
  moduleType: 'microFoundations' | 'causalChains' | 'flyingGeese' | 'timeLapse' | 'socraticMethod';
}

export const SchemaDrivenModule: React.FC<ModuleProps> = ({ moduleType }) => {
  const [moduleData, setModuleData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading module data based on schema
    setTimeout(() => {
      switch (moduleType) {
        case 'microFoundations':
          setModuleData({
            elements: NSE_SCHEMA.learningProgressions.microFoundations.elements,
            combinations: Object.keys(NSE_SCHEMA.learningProgressions.microFoundations.combinations).length,
            exercises: NSE_SCHEMA.learningProgressions.microFoundations.exercises
          });
          break;
        case 'causalChains':
          setModuleData({
            countries: NSE_SCHEMA.learningProgressions.causalChains.countries.length,
            industries: NSE_SCHEMA.learningProgressions.causalChains.industries,
            trees: NSE_SCHEMA.learningProgressions.causalChains.decisionTrees
          });
          break;
        case 'flyingGeese':
          setModuleData({
            pattern: NSE_SCHEMA.learningProgressions.flyingGeese.pattern,
            waves: NSE_SCHEMA.learningProgressions.flyingGeese.pattern.historicalWaves,
            rules: Object.keys(NSE_SCHEMA.learningProgressions.flyingGeese.transferRules).length
          });
          break;
        case 'timeLapse':
          setModuleData({
            periods: Object.keys(NSE_SCHEMA.learningProgressions.timeLapse.periods).length,
            patterns: NSE_SCHEMA.learningProgressions.timeLapse.patterns
          });
          break;
        case 'socraticMethod':
          setModuleData({
            patterns: NSE_SCHEMA.interactiveElements.dialogue.socraticMethod.patterns,
            concepts: NSE_SCHEMA.interactiveElements.dialogue.socraticMethod.conceptsCovered,
            starters: NSE_SCHEMA.interactiveElements.dialogue.starters
          });
          break;
      }
      setLoading(false);
    }, 1000);
  }, [moduleType]);

  if (loading) {
    return (
      <div className="module-loading">
        <div className="spinner"></div>
        <p>Loading {moduleType} module from schema...</p>
      </div>
    );
  }

  return (
    <div className="schema-driven-module">
      <h3>{moduleType.charAt(0).toUpperCase() + moduleType.slice(1)} Module</h3>
      
      {moduleType === 'microFoundations' && moduleData && (
        <div className="module-content">
          <p>Elements available: {moduleData.elements.length}</p>
          <p>Valid combinations: {moduleData.combinations}</p>
          <h4>Exercises:</h4>
          <ul>
            {moduleData.exercises.map((ex: any, idx: number) => (
              <li key={idx}>
                <strong>{ex.title}</strong>
                <p>{ex.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {moduleType === 'causalChains' && moduleData && (
        <div className="module-content">
          <p>Starting conditions: {moduleData.countries} countries</p>
          <p>Industry categories: {Object.keys(moduleData.industries).length}</p>
          <h4>Decision Points:</h4>
          {moduleData.trees.map((tree: any, idx: number) => (
            <div key={idx} className="decision-tree">
              <h5>{tree.node}</h5>
              <ul>
                {tree.options.map((opt: any, optIdx: number) => (
                  <li key={optIdx}>{opt.choice} → {opt.outcome}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      
      {moduleType === 'flyingGeese' && moduleData && (
        <div className="module-content">
          <h4>Pattern Mechanism:</h4>
          <ol>
            {moduleData.pattern.mechanism.map((step: string, idx: number) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
          <h4>Historical Waves:</h4>
          <ul>
            {moduleData.waves.map((wave: any, idx: number) => (
              <li key={idx}>{wave.year}: {wave.transfers.join(', ')}</li>
            ))}
          </ul>
          <p>Transfer rules defined: {moduleData.rules}</p>
        </div>
      )}
      
      {moduleType === 'timeLapse' && moduleData && (
        <div className="module-content">
          <p>Time periods: {moduleData.periods}</p>
          <h4>Development Patterns:</h4>
          {moduleData.patterns.map((pattern: any, idx: number) => (
            <div key={idx} className="pattern">
              <h5>{pattern.name}</h5>
              <p>{pattern.description}</p>
              <p><em>Evidence: {pattern.evidence[0]}</em></p>
            </div>
          ))}
        </div>
      )}
      
      {moduleType === 'socraticMethod' && moduleData && (
        <div className="module-content">
          <p>Response patterns: {moduleData.patterns}</p>
          <p>Concepts covered: {moduleData.concepts.length}</p>
          <h4>Conversation Starters:</h4>
          <ul>
            {moduleData.starters.slice(0, 3).map((starter: any, idx: number) => (
              <li key={idx}>
                <strong>{starter.topic}:</strong> {starter.hook}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Example usage in the main app
export const SchemaDemo: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<string>('microFoundations');
  
  return (
    <div className="schema-demo">
      <h2>NSE Schema-Driven Learning System</h2>
      <p>This demonstrates how the comprehensive schema drives each learning module:</p>
      
      <div className="module-selector">
        <button onClick={() => setSelectedModule('microFoundations')}>Micro-Foundations</button>
        <button onClick={() => setSelectedModule('causalChains')}>Causal Chains</button>
        <button onClick={() => setSelectedModule('flyingGeese')}>Flying Geese</button>
        <button onClick={() => setSelectedModule('timeLapse')}>Time-Lapse</button>
        <button onClick={() => setSelectedModule('socraticMethod')}>Socratic Method</button>
      </div>
      
      <SchemaDrivenModule moduleType={selectedModule as any} />
      
      <div className="schema-info">
        <h3>Schema Statistics</h3>
        <ul>
          <li>Total countries tracked: {NSE_SCHEMA.dataStructure.entities.countries.total}</li>
          <li>Industries modeled: {NSE_SCHEMA.dataStructure.entities.industries.total}</li>
          <li>Policy types: {NSE_SCHEMA.dataStructure.entities.policies.types.length}</li>
          <li>Time span: {NSE_SCHEMA.dataStructure.temporalData.span}</li>
          <li>Learning objectives: {NSE_SCHEMA.pedagogicalFramework.learningObjectives.length}</li>
        </ul>
      </div>
    </div>
  );
};