// src/topic/gsh/ParallelHistories.tsx

import React, { useState } from 'react';
import styles from './ParallelHistories.module.css';
import { 
  historicalEvents, 
  eventDetails, 
  regions, 
  yearMarkers,
  crossRegionalConnections 
} from '../../data/gsh/parallelHistories';
import { HistoricalEvent } from '../../types/globalSouthHistory';

interface Props {
  showPopup: (content: string) => void;
}

const ParallelHistories: React.FC<Props> = ({ showPopup }) => {
  const [filterType, setFilterType] = useState<string | null>(null);

  const showEventDetails = (eventId: string) => {
    const details = eventDetails[eventId];
    if (!details) return;

    let content = `<h2>${details.title}</h2>`;
    content += `<p>${details.content}</p>`;

    if (details.causes) {
      content += '<h4>Immediate Causes:</h4><ul>';
      details.causes.forEach(cause => {
        content += `<li>${cause}</li>`;
      });
      content += '</ul>';
    }

    if (details.keyFigures) {
      content += '<h4>Key Figures:</h4><ul>';
      details.keyFigures.forEach(figure => {
        content += `<li><strong>${figure.name}:</strong> ${figure.role}</li>`;
      });
      content += '</ul>';
    }

    if (details.impact) {
      content += '<h4>Impact:</h4><ul>';
      details.impact.forEach(impact => {
        content += `<li>${impact}</li>`;
      });
      content += '</ul>';
    }

    if (details.globalConnections) {
      content += `<h4>Global Connections:</h4><p>${details.globalConnections}</p>`;
    }

    showPopup(content);
  };

  const highlightConnections = () => {
    let content = '<h2>Cross-Regional Revolutionary Connections</h2>';
    
    Object.entries(crossRegionalConnections).forEach(([year, connections]) => {
      content += `<h3>${year} Global Revolutionary Wave</h3><ul>`;
      connections.forEach(conn => {
        content += `<li><strong>${conn.region}:</strong> ${conn.event}</li>`;
      });
      content += '</ul>';
    });

    content += `
      <h3>Patterns of Influence</h3>
      <ul>
        <li>Haitian Revolution (1804) → Latin American independence movements</li>
        <li>Indian independence (1947) → African decolonization</li>
        <li>Cuban Revolution (1959) → Global South socialist movements</li>
        <li>Algerian War (1954-62) → Armed liberation movements</li>
      </ul>
    `;

    showPopup(content);
  };

  const compareStrategies = () => {
    const content = `
      <h2>Comparative Liberation Strategies</h2>
      
      <h3>Non-Violent Resistance</h3>
      <strong>Examples:</strong> India, Ghana, Zambia
      <ul>
        <li><strong>Tactics:</strong> Civil disobedience, boycotts, mass protests</li>
        <li><strong>Advantages:</strong> Moral high ground, broad participation</li>
        <li><strong>Challenges:</strong> Requires discipline, takes time</li>
      </ul>
      
      <h3>Armed Liberation</h3>
      <strong>Examples:</strong> Algeria, Vietnam, Angola, Mozambique
      <ul>
        <li><strong>Tactics:</strong> Guerrilla warfare, sabotage</li>
        <li><strong>Advantages:</strong> Direct confrontation, faster results possible</li>
        <li><strong>Challenges:</strong> High casualties, destruction</li>
      </ul>
      
      <h3>Negotiated Transition</h3>
      <strong>Examples:</strong> Nigeria, Malaysia, Caribbean nations
      <ul>
        <li><strong>Tactics:</strong> Constitutional conferences, elite negotiations</li>
        <li><strong>Advantages:</strong> Orderly transition</li>
        <li><strong>Challenges:</strong> May preserve colonial structures</li>
      </ul>
    `;
    showPopup(content);
  };

  const showInfluenceMap = () => {
    const content = `
      <h2>Global Influence Networks in Anti-Colonial Struggles</h2>
      
      <h3>Ideological Flows</h3>
      
      <h4>Gandhi's Satyagraha →</h4>
      <ul>
        <li>Martin Luther King Jr. (USA Civil Rights)</li>
        <li>Kwame Nkrumah (Ghana independence)</li>
        <li>Kenneth Kaunda (Zambia independence)</li>
        <li>Nelson Mandela (early ANC strategy)</li>
      </ul>
      
      <h4>Marxist-Leninist Anti-Imperialism →</h4>
      <ul>
        <li>Ho Chi Minh (Vietnam)</li>
        <li>Amílcar Cabral (Guinea-Bissau)</li>
        <li>Fidel Castro (Cuba)</li>
        <li>Thomas Sankara (Burkina Faso)</li>
      </ul>
      
      <h3>Conference Networks</h3>
      <ul>
        <li><strong>1955 Bandung:</strong> Birth of Third World solidarity</li>
        <li><strong>1961 Belgrade:</strong> Non-Aligned Movement founded</li>
        <li><strong>1966 Havana:</strong> Tricontinental Conference</li>
      </ul>
    `;
    showPopup(content);
  };

  const getEventsByRegion = (regionId: string): HistoricalEvent[] => {
    return historicalEvents.filter(event => 
      event.region === regionId && 
      (!filterType || event.type === filterType)
    );
  };

  return (
    <div className={styles.parallelHistories}>
      <h2 className={styles.sectionTitle}>⚡ Discover Simultaneous Struggles Across the Global South</h2>
      
      <div className={styles.timelineContainer}>
        <div className={styles.timelineGrid}>
          <div className={styles.yearMarkers}>
            {yearMarkers.map(year => (
              <div key={year} className={styles.yearMarker}>{year}</div>
            ))}
          </div>
          
          <div className={styles.regionTimelines}>
            {regions.map(region => (
              <div key={region.id} className={styles.regionColumn}>
                <div className={styles.regionHeader}>
                  {region.icon} {region.name}
                </div>
                
                {getEventsByRegion(region.id).map(event => (
                  <div
                    key={event.id}
                    className={styles.eventCard}
                    onClick={() => showEventDetails(event.id)}
                  >
                    <div className={`${styles.eventType} ${styles[`${event.type}Event`]}`}>
                      {event.icon}
                    </div>
                    <h4>{event.year}: {event.title}</h4>
                    <p>{event.description}</p>
                    {event.connections && (
                      <small className={styles.connectionNote}>
                        Connected to: {event.connections.join(', ')}
                      </small>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className={styles.controls}>
        <button className={styles.controlBtn} onClick={highlightConnections}>
          🔗 Show Cross-Regional Connections
        </button>
        <button 
          className={styles.controlBtn} 
          onClick={() => setFilterType(filterType === 'resistance' ? null : 'resistance')}
        >
          ⚔️ Filter: Resistance
        </button>
        <button className={styles.controlBtn} onClick={compareStrategies}>
          📊 Compare Strategies
        </button>
        <button className={styles.controlBtn} onClick={showInfluenceMap}>
          🌐 Influence Networks
        </button>
      </div>
    </div>
  );
};

export default ParallelHistories;