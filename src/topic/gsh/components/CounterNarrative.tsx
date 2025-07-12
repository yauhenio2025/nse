// src/topic/gsh/CounterNarrative.tsx

import React, { useState } from 'react';
import styles from './CounterNarrative.module.css';
import { 
  narrativeSources, 
  narrativeComparison 
} from '../../data/gsh/counterNarratives';
import { NarrativeSource } from '../../types/globalSouthHistory';

interface Props {
  showPopup: (content: string) => void;
}

const CounterNarrative: React.FC<Props> = ({ showPopup }) => {
  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const [showBiasAnalysis, setShowBiasAnalysis] = useState(false);

  const toggleSource = (sourceId: string) => {
    setSelectedSources(prev => 
      prev.includes(sourceId) 
        ? prev.filter(id => id !== sourceId)
        : [...prev, sourceId]
    );
  };

  const getSelectedNarratives = (): NarrativeSource[] => {
    return narrativeSources.filter(source => selectedSources.includes(source.id));
  };

  const calculateAverageBias = (): number => {
    const selected = getSelectedNarratives();
    if (selected.length === 0) return 50;
    
    const totalBias = selected.reduce((sum, source) => sum + source.bias, 0);
    return totalBias / selected.length;
  };

  const analyzeNarrative = () => {
    if (selectedSources.length === 0) {
      showPopup('<h2>No Sources Selected</h2><p>Please select at least one source to analyze narrative bias.</p>');
      return;
    }
    setShowBiasAnalysis(true);
  };

  const compareNarratives = () => {
    let content = '<h2>Comparing All Narrative Perspectives on 1857</h2>';
    
    content += '<h3>Points of Agreement</h3><ul>';
    narrativeComparison.agreements.forEach(point => {
      content += `<li>${point}</li>`;
    });
    content += '</ul>';

    content += '<h3>Major Disagreements</h3>';
    content += '<table style="width: 100%; margin-top: 20px; border-collapse: collapse;">';
    content += '<tr style="border-bottom: 1px solid rgba(255,255,255,0.2);">';
    content += '<th style="text-align: left; padding: 10px;">Aspect</th>';
    content += '<th style="text-align: left; padding: 10px;">Colonial View</th>';
    content += '<th style="text-align: left; padding: 10px;">Indigenous View</th>';
    content += '<th style="text-align: left; padding: 10px;">Critical View</th>';
    content += '</tr>';
    
    narrativeComparison.disagreements.forEach(disagreement => {
      content += '<tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">';
      content += `<td style="padding: 10px;">${disagreement.aspect}</td>`;
      content += `<td style="padding: 10px;">${disagreement.colonial}</td>`;
      content += `<td style="padding: 10px;">${disagreement.indigenous}</td>`;
      content += `<td style="padding: 10px;">${disagreement.critical}</td>`;
      content += '</tr>';
    });
    
    content += '</table>';
    
    content += `
      <h3>What This Teaches Us</h3>
      <ul>
        <li>History is never neutral - it's always told from a position</li>
        <li>Power shapes which narratives become "official history"</li>
        <li>Recovering marginalized voices reveals hidden truths</li>
        <li>Multiple sources create more complete understanding</li>
        <li>Question who benefits from each version of history</li>
      </ul>
    `;
    
    showPopup(content);
  };

  const generateTimeline = () => {
    const content = `
      <h2>1857 Rebellion: Timeline from Multiple Perspectives</h2>
      
      <h3>Colonial Timeline</h3>
      <ul>
        <li><strong>May 10:</strong> Mutiny begins at Meerut</li>
        <li><strong>May 11:</strong> Mutineers reach Delhi</li>
        <li><strong>June-July:</strong> Rebellion spreads, British regroup</li>
        <li><strong>September:</strong> Delhi recaptured</li>
        <li><strong>March 1858:</strong> Lucknow relieved</li>
        <li><strong>April 1858:</strong> Order restored</li>
      </ul>
      
      <h3>Resistance Timeline</h3>
      <ul>
        <li><strong>1856:</strong> Growing anger over annexations and taxes</li>
        <li><strong>March 1857:</strong> Mangal Pandey's act of defiance</li>
        <li><strong>May-June:</strong> Popular uprising spreads across North India</li>
        <li><strong>June-December:</strong> United resistance in Delhi, Lucknow, Kanpur</li>
        <li><strong>1858:</strong> Guerrilla resistance continues</li>
        <li><strong>1859:</strong> Last fighters captured or escape</li>
      </ul>
      
      <h3>Silenced Events</h3>
      <ul>
        <li>Mass executions rarely mentioned in colonial accounts</li>
        <li>Women's participation erased from most narratives</li>
        <li>Lower caste involvement minimized</li>
        <li>Economic grievances obscured by focus on cartridges</li>
      </ul>
    `;
    showPopup(content);
  };

  const getDetectedBiases = (): string[] => {
    const biases: string[] = [];
    const selected = getSelectedNarratives();
    
    if (selected.some(s => s.category === 'colonial')) {
      biases.push('Colonial perspective: Emphasizes "civilization" and "order"');
      biases.push('Erasure of economic exploitation');
      biases.push('Racial superiority assumptions');
    }
    if (selected.some(s => s.category === 'indigenous')) {
      biases.push('Resistance perspective: Emphasizes oppression and unity');
      biases.push('Romanticization of pre-colonial past possible');
      biases.push('Focus on emotional/cultural aspects');
    }
    if (selected.some(s => s.category === 'scholarly')) {
      biases.push('Academic perspective: Structural analysis');
      biases.push('May use contemporary theoretical frameworks');
      biases.push('Focus on power relations and marginalized voices');
    }
    
    return biases;
  };

  const getCategoryIcon = (category: string): string => {
    switch (category) {
      case 'colonial': return '🏛️';
      case 'indigenous': return '🌍';
      case 'scholarly': return '📚';
      case 'material': return '🔍';
      default: return '📄';
    }
  };

  return (
    <div className={styles.counterNarrative}>
      <h2 className={styles.sectionTitle}>📖 Build History from Multiple Perspectives</h2>
      
      <div className={styles.narrativeBuilder}>
        <div className={styles.sourceSelector}>
          <h3>Select Your Sources:</h3>
          
          {['colonial', 'indigenous', 'scholarly', 'material'].map(category => (
            <div key={category} className={styles.sourceCategory}>
              <h4>
                {getCategoryIcon(category)} {category.charAt(0).toUpperCase() + category.slice(1)} 
                {category === 'colonial' && ' Archives'}
                {category === 'indigenous' && ' Voices'}
                {category === 'scholarly' && ' Scholars'}
                {category === 'material' && ' Evidence'}
              </h4>
              {narrativeSources
                .filter(source => source.category === category)
                .map(source => (
                  <div
                    key={source.id}
                    className={`${styles.sourceItem} ${selectedSources.includes(source.id) ? styles.selected : ''}`}
                    onClick={() => toggleSource(source.id)}
                  >
                    {source.icon} {source.title}
                  </div>
                ))}
            </div>
          ))}
        </div>
        
        <div className={styles.narrativeDisplay}>
          <div className={styles.perspectiveIndicator}>
            {selectedSources.length === 0 ? (
              <span className={styles.perspectiveTag}>Select sources to build narrative</span>
            ) : (
              getSelectedNarratives().map(source => (
                <span key={source.id} className={styles.perspectiveTag}>
                  {source.perspective}
                </span>
              ))
            )}
          </div>
          
          <div className={styles.narrativeText}>
            <h3>The Great Rebellion of 1857</h3>
            {selectedSources.length === 0 ? (
              <p>Select different sources to see how the narrative of this pivotal event changes based on who's telling the story...</p>
            ) : (
              <>
                <h3>The Great Rebellion of 1857: Multiple Perspectives</h3>
                {getSelectedNarratives().map(source => (
                  <div key={source.id} className={styles.narrativeSection}>
                    <div className={styles.narrativeSource}>{source.perspective}</div>
                    <p>{source.text}</p>
                  </div>
                ))}
              </>
            )}
          </div>
          
          {showBiasAnalysis && selectedSources.length > 0 && (
            <div className={styles.biasAnalysis}>
              <h4>Narrative Bias Analysis</h4>
              
              <div className={styles.biasMeter}>
                <span>Colonial</span>
                <div className={styles.biasIndicator}>
                  <div 
                    className={styles.biasFill} 
                    style={{ width: `${calculateAverageBias()}%` }}
                  />
                </div>
                <span>Decolonial</span>
              </div>
              
              <div className={styles.biasDetails}>
                <p><strong>Detected Biases:</strong></p>
                <ul>
                  {getDetectedBiases().map((bias, index) => (
                    <li key={index}>{bias}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          
          <div className={styles.controls}>
            <button className={styles.controlBtn} onClick={analyzeNarrative}>
              🔍 Analyze Bias
            </button>
            <button className={styles.controlBtn} onClick={compareNarratives}>
              ⚖️ Compare All
            </button>
            <button className={styles.controlBtn} onClick={generateTimeline}>
              📅 Timeline View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterNarrative;