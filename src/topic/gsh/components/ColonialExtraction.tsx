// src/topic/gsh/ColonialExtraction.tsx

import React, { useState, useEffect, useRef } from 'react';
import styles from './ColonialExtraction.module.css';
import { 
  extractionPeriods, 
  colonyNodes, 
  metropoleNodes,
  globalImpactData 
} from '../../data/gsh/colonialExtraction';
import { ExtractionPeriod, ColonyNode, MetropoleNode } from '../../types/globalSouthHistory';

interface Props {
  showPopup: (content: string) => void;
}

const ColonialExtraction: React.FC<Props> = ({ showPopup }) => {
  const [selectedPeriod, setSelectedPeriod] = useState<ExtractionPeriod>(extractionPeriods[3]); // 1800-1900 default
  const [selectedNode, setSelectedNode] = useState<ColonyNode | null>(null);
  const [animationActive, setAnimationActive] = useState(true);
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    drawFlowPaths();
  }, [selectedPeriod]);

  const drawFlowPaths = () => {
    if (!svgRef.current || !containerRef.current) return;

    const svg = svgRef.current;
    svg.innerHTML = ''; // Clear existing paths

    selectedPeriod.flows.forEach((flow, index) => {
      const fromNode = document.getElementById(`node-${flow.from}`);
      const toNode = document.getElementById(`node-${flow.to}`);
      
      if (!fromNode || !toNode) return;

      const containerRect = containerRef.current!.getBoundingClientRect();
      const fromRect = fromNode.getBoundingClientRect();
      const toRect = toNode.getBoundingClientRect();

      const x1 = fromRect.left + fromRect.width / 2 - containerRect.left;
      const y1 = fromRect.top + fromRect.height / 2 - containerRect.top;
      const x2 = toRect.left + toRect.width / 2 - containerRect.left;
      const y2 = toRect.top + toRect.height / 2 - containerRect.top;

      // Create path
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const d = `M ${x1} ${y1} Q ${(x1 + x2) / 2} ${Math.min(y1, y2) - 50} ${x2} ${y2}`;
      path.setAttribute('d', d);
      path.setAttribute('class', styles.flowPath);
      path.setAttribute('stroke', `hsl(${index * 60}, 70%, 50%)`);
      path.setAttribute('id', `flow-path-${index}`);
      svg.appendChild(path);

      if (animationActive) {
        // Create animated particles
        for (let i = 0; i < 3; i++) {
          const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          circle.setAttribute('r', '4');
          circle.setAttribute('class', styles.flowParticle);
          circle.setAttribute('fill', `hsl(${index * 60}, 70%, 60%)`);

          const animateMotion = document.createElementNS('http://www.w3.org/2000/svg', 'animateMotion');
          animateMotion.setAttribute('dur', '4s');
          animateMotion.setAttribute('repeatCount', 'indefinite');
          animateMotion.setAttribute('begin', `${i * 1.3}s`);

          const mpath = document.createElementNS('http://www.w3.org/2000/svg', 'mpath');
          mpath.setAttributeNS('http://www.w3.org/1999/xlink', 'href', `#flow-path-${index}`);

          animateMotion.appendChild(mpath);
          circle.appendChild(animateMotion);
          svg.appendChild(circle);
        }
      }
    });
  };

  const handleNodeClick = (node: ColonyNode) => {
    setSelectedNode(node);
  };

  const showExtractionComparison = () => {
    const content = `
      <h2>Colonial Extraction Models Comparison</h2>
      
      <h3>British Model (India)</h3>
      <ul>
        <li><strong>Method:</strong> Deindustrialization + Raw material extraction</li>
        <li><strong>Scale:</strong> $45 trillion over 200 years</li>
        <li><strong>Mechanism:</strong> Destroyed local textile industry, forced cultivation</li>
        <li><strong>Legacy:</strong> From 25% of world GDP to 3%</li>
      </ul>
      
      <h3>Belgian Model (Congo)</h3>
      <ul>
        <li><strong>Method:</strong> Direct violence + Forced labor</li>
        <li><strong>Scale:</strong> 10 million deaths, billions in rubber/minerals</li>
        <li><strong>Mechanism:</strong> Terror, hand-cutting, hostage villages</li>
        <li><strong>Legacy:</strong> Ongoing conflict over resources</li>
      </ul>
      
      <h3>Spanish/Portuguese Model (Americas)</h3>
      <ul>
        <li><strong>Method:</strong> Encomienda + Mining</li>
        <li><strong>Scale:</strong> 181 tons gold, 16,000 tons silver from Potosí</li>
        <li><strong>Mechanism:</strong> Indigenous slavery, later African slavery</li>
        <li><strong>Legacy:</strong> Racial caste systems, inequality</li>
      </ul>
    `;
    showPopup(content);
  };

  return (
    <div className={styles.extractionVisualizer}>
      <h2 className={styles.sectionTitle}>🌍 Trace the Flows of Colonial Extraction</h2>
      
      <div className={styles.mapContainer} ref={containerRef}>
        <div className={styles.worldMap}>
          {/* Colony Nodes */}
          {colonyNodes.map(node => (
            <div
              key={node.id}
              id={`node-${node.id}`}
              className={`${styles.resourceNode} ${styles.colonyNode}`}
              style={{ top: node.position.top, left: node.position.left }}
              onClick={() => handleNodeClick(node)}
              title={node.name}
            >
              <span>{node.icon}</span>
            </div>
          ))}
          
          {/* Metropole Nodes */}
          {metropoleNodes.map(node => (
            <div
              key={node.id}
              id={`node-${node.id}`}
              className={`${styles.resourceNode} ${styles.metropoleNode}`}
              style={{ top: node.position.top, left: node.position.left }}
              title={node.name}
            >
              <span>{node.icon}</span>
            </div>
          ))}
          
          {/* Flow Container */}
          <svg ref={svgRef} className={styles.flowContainer} />
        </div>
        
        {/* Data Panel */}
        <div className={styles.extractionDataPanel}>
          <h3>Extraction Data</h3>
          
          <div className={styles.dataSection}>
            <h4>Current Selection</h4>
            {selectedNode ? (
              <div>
                <h5 className={styles.nodeName}>{selectedNode.name}</h5>
                <div className={styles.dataItem}>
                  <span>Resources:</span>
                  <span className={styles.dataValue}>{selectedNode.resources.join(', ')}</span>
                </div>
                <div className={styles.dataItem}>
                  <span>Colonizers:</span>
                  <span className={styles.dataValue}>{selectedNode.colonizers.join(', ')}</span>
                </div>
                <div className={styles.dataItem}>
                  <span>Impact:</span>
                </div>
                <p className={styles.impactText}>{selectedNode.impact}</p>
                <div className={styles.dataItem}>
                  <span>Resistance:</span>
                </div>
                <p className={styles.resistanceText}>{selectedNode.resistance}</p>
              </div>
            ) : (
              <p className={styles.placeholder}>Click on a node to see details</p>
            )}
          </div>
          
          <div className={styles.dataSection}>
            <h4>Time Period: <span id="currentPeriod">{selectedPeriod.timeRange}</span></h4>
            <div className={styles.dataItem}>
              <span>Total Extracted:</span>
              <span className={styles.dataValue}>{selectedPeriod.totalExtracted}</span>
            </div>
            <div className={styles.dataItem}>
              <span>Lives Lost:</span>
              <span className={styles.dataValue}>{selectedPeriod.livesLost}</span>
            </div>
            <div className={styles.dataItem}>
              <span>Resources Taken:</span>
              <span className={styles.dataValue}>{selectedPeriod.resources}</span>
            </div>
          </div>
          
          <div className={styles.dataSection}>
            <h4>Global Impact</h4>
            <div className={styles.dataItem}>
              <span>GDP Transfer:</span>
              <span className={styles.dataValue}>{globalImpactData.gdpTransfer}</span>
            </div>
            <div className={styles.dataItem}>
              <span>Industrial Growth (EU):</span>
              <span className={styles.dataValue}>{globalImpactData.industrialGrowthEU}</span>
            </div>
            <div className={styles.dataItem}>
              <span>Colonial Decline:</span>
              <span className={styles.dataValue}>{globalImpactData.colonialDecline}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.extractionControls}>
        <div className={styles.timePeriodSelector}>
          <label>Time Period:</label>
          <select 
            value={selectedPeriod.id} 
            onChange={(e) => {
              const period = extractionPeriods.find(p => p.id === e.target.value);
              if (period) setSelectedPeriod(period);
            }}
          >
            {extractionPeriods.map(period => (
              <option key={period.id} value={period.id}>
                {period.timeRange}: {period.label}
              </option>
            ))}
          </select>
        </div>
        
        <button 
          className={styles.controlBtn}
          onClick={() => setAnimationActive(!animationActive)}
        >
          ⏯️ Toggle Flow Animation
        </button>
        
        <button 
          className={styles.controlBtn}
          onClick={showExtractionComparison}
        >
          📊 Compare Extraction Models
        </button>
      </div>
    </div>
  );
};

export default ColonialExtraction;