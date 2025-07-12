// src/topic/gsh/SolidarityNetworks.tsx

import React, { useState, useEffect, useRef } from 'react';
import styles from './SolidarityNetworks.module.css';
import { 
  networkNodes, 
  networkConnections, 
  nodeDetails,
  connectionFilters 
} from '../../data/gsh/solidarityNetworks';
import { NetworkConnection } from '../../types/globalSouthHistory';

interface Props {
  showPopup: (content: string) => void;
}

const SolidarityNetworks: React.FC<Props> = ({ showPopup }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredConnection, setHoveredConnection] = useState<NetworkConnection | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    drawConnections();
  }, [activeFilter]);

  const drawConnections = () => {
    if (!svgRef.current || !canvasRef.current) return;

    const svg = svgRef.current;
    svg.innerHTML = ''; // Clear existing connections

    const filteredConnections = activeFilter === 'all' 
      ? networkConnections 
      : networkConnections.filter(conn => conn.type === activeFilter);

    filteredConnections.forEach((connection, index) => {
      const fromNode = document.getElementById(`node-${connection.from}`);
      const toNode = document.getElementById(`node-${connection.to}`);

      if (!fromNode || !toNode) return;

      const canvasRect = canvasRef.current!.getBoundingClientRect();
      const fromRect = fromNode.getBoundingClientRect();
      const toRect = toNode.getBoundingClientRect();

      const x1 = fromRect.left + fromRect.width / 2 - canvasRect.left;
      const y1 = fromRect.top + fromRect.height / 2 - canvasRect.top;
      const x2 = toRect.left + toRect.width / 2 - canvasRect.left;
      const y2 = toRect.top + toRect.height / 2 - canvasRect.top;

      // Create curved path
      const dx = x2 - x1;
      const dy = y2 - y1;
      const dr = Math.sqrt(dx * dx + dy * dy);
      const sweep = dx * dy > 0 ? 0 : 1;

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', `M ${x1} ${y1} A ${dr/2} ${dr/2} 0 0 ${sweep} ${x2} ${y2}`);
      path.setAttribute('class', `${styles.networkConnection} ${styles[connection.type]}`);
      path.setAttribute('id', `connection-${index}`);
      path.setAttribute('data-index', index.toString());
      
      if (activeFilter !== 'all' && connection.type !== activeFilter) {
        path.style.opacity = '0.1';
      }

      path.addEventListener('mouseenter', () => {
        setHoveredConnection(connection);
      });

      path.addEventListener('mouseleave', () => {
        setHoveredConnection(null);
      });

      svg.appendChild(path);
    });
  };

  const showNodeInfo = (nodeId: string) => {
    const details = nodeDetails[nodeId];
    if (!details) return;

    let content = `<h2>${details.title}</h2>`;
    content += `<h3>${details.content}</h3>`;

    if (details.philosophy) {
      content += '<h4>Philosophy:</h4><ul>';
      details.philosophy.forEach(item => {
        content += `<li>${item}</li>`;
      });
      content += '</ul>';
    }

    if (details.achievements) {
      content += '<h4>Achievements:</h4><ul>';
      details.achievements.forEach(item => {
        content += `<li>${item}</li>`;
      });
      content += '</ul>';
    }

    if (details.connections) {
      content += '<h4>Connections:</h4><ul>';
      details.connections.forEach(item => {
        content += `<li>${item}</li>`;
      });
      content += '</ul>';
    }

    if (details.legacy) {
      content += `<h4>Legacy:</h4><p>${details.legacy}</p>`;
    }

    showPopup(content);
  };

  const getNodeTypeStyle = (type: string) => {
    switch (type) {
      case 'leader':
        return styles.leaderNode;
      case 'movement':
        return styles.movementNode;
      case 'conference':
        return styles.conferenceNode;
      default:
        return '';
    }
  };

  return (
    <div className={styles.solidarityNetworks}>
      <h2 className={styles.sectionTitle}>🤝 Trace Connections of Resistance and Solidarity</h2>
      
      <div className={styles.networkCanvas} ref={canvasRef}>
        <svg ref={svgRef} className={styles.networkSvg} />
        
        {networkNodes.map(node => (
          <div
            key={node.id}
            id={`node-${node.id}`}
            className={`${styles.networkNode} ${getNodeTypeStyle(node.type)}`}
            style={{ top: node.position.top, left: node.position.left }}
            onClick={() => showNodeInfo(node.id)}
          >
            <span>{node.name}</span>
          </div>
        ))}
        
        {hoveredConnection && (
          <div 
            className={styles.connectionTooltip}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <strong>{hoveredConnection.from} → {hoveredConnection.to}</strong><br />
            <span className={styles.connectionType}>{hoveredConnection.type}</span><br />
            {hoveredConnection.description}
          </div>
        )}
      </div>
      
      <div className={styles.networkControls}>
        {connectionFilters.map(filter => (
          <button
            key={filter.id}
            className={`${styles.filterBtn} ${activeFilter === filter.id ? styles.active : ''}`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SolidarityNetworks;