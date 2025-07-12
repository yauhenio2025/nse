import React, { useState } from 'react';
import { dailyActivities, reproductionMetrics } from '@/data/ma/socialReproduction';
import './SocialReproductionObservatory.css';

interface Props {
  onShowPopup: (content: React.ReactNode) => void;
}

export const SocialReproductionObservatory: React.FC<Props> = ({ onShowPopup }) => {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [cycleRunning, setCycleRunning] = useState(false);

  const analyzeActivity = (activityId: string) => {
    const activity = dailyActivities.find(a => a.id === activityId);
    if (activity) {
      setSelectedActivity(activityId);
      const content = (
        <div className="activity-analysis">
          <h2>{activity.analysis.title}</h2>
          <p>{activity.analysis.content}</p>
          <p className="hidden-labor">
            <strong>Hidden Labor:</strong> {activity.analysis.hiddenLabor}
          </p>
          <p className="value-analysis">
            <strong>Value Analysis:</strong> {activity.analysis.value}
          </p>
        </div>
      );
      onShowPopup(content);
    }
  };

  const runFullCycle = () => {
    setCycleRunning(true);
    let index = 0;
    const interval = setInterval(() => {
      if (index < dailyActivities.length) {
        setSelectedActivity(dailyActivities[index].id);
        index++;
      } else {
        clearInterval(interval);
        setCycleRunning(false);
        showCycleSummary();
      }
    }, 1000);
  };

  const showCycleSummary = () => {
    const content = (
      <div>
        <h2>24-Hour Cycle Complete</h2>
        <p>The daily reproduction of labor power involves:</p>
        <ul>
          <li>8 hours of paid labor creating surplus value</li>
          <li>16 hours of unpaid labor reproducing the worker</li>
          <li>Constant ideological reinforcement</li>
          <li>Systematic concealment of exploitation</li>
        </ul>
        <p className="key-insight">
          <strong>Key Insight:</strong> Capitalism reproduces not just commodities but the entire social relation.
        </p>
      </div>
    );
    onShowPopup(content);
  };

  const showHiddenLabor = () => {
    const content = (
      <div className="hidden-labor-analysis">
        <h2>The Iceberg of Social Reproduction</h2>
        <h3>Visible (Paid) Labor: 8 hours = $160</h3>
        <h3>Hidden (Unpaid) Labor: 16 hours = $440 value</h3>
        <ul>
          <li>Commuting: 2 hours</li>
          <li>Care work: 4 hours</li>
          <li>Domestic labor: 2 hours</li>
          <li>Recovery/maintenance: 8 hours</li>
        </ul>
        <p className="total-value"><strong>Total Daily Value Created:</strong> $600</p>
        <p><strong>Total Daily Wage Received:</strong> $160</p>
        <p><strong>Appropriation Rate:</strong> 73%</p>
        <p className="key-insight">
          <strong>Key Insight:</strong> Capitalism depends on massive amounts of unpaid labor, especially from women, to reproduce the workforce.
        </p>
      </div>
    );
    onShowPopup(content);
  };

  const calculateDailyValue = () => {
    const content = (
      <div className="value-calculation">
        <h2>Daily Value Creation Analysis</h2>
        <table>
          <thead>
            <tr>
              <th>Activity</th>
              <th>Hours</th>
              <th>Value/Hour</th>
              <th>Total Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Paid Work</td>
              <td>8</td>
              <td>$20</td>
              <td>$160 (wage)</td>
            </tr>
            <tr>
              <td>Commute</td>
              <td>2</td>
              <td>$20</td>
              <td>$40 (unpaid)</td>
            </tr>
            <tr>
              <td>Care Work</td>
              <td>4</td>
              <td>$25</td>
              <td>$100 (unpaid)</td>
            </tr>
            <tr>
              <td>Domestic Work</td>
              <td>2</td>
              <td>$15</td>
              <td>$30 (unpaid)</td>
            </tr>
            <tr>
              <td>Sleep/Recovery</td>
              <td>8</td>
              <td>$20</td>
              <td>$160 (unpaid)</td>
            </tr>
          </tbody>
        </table>
        <div className="total-summary">
          <strong>Total Value Created Daily:</strong> $490<br/>
          <strong>Total Wage Received:</strong> $160<br/>
          <strong>Surplus Value Rate:</strong> 206%
        </div>
      </div>
    );
    onShowPopup(content);
  };

  return (
    <div className="reproduction-observatory">
      <h2 className="section-title">🔄 Social Reproduction Observatory</h2>
      
      <div className={`daily-cycle ${cycleRunning ? 'running' : ''}`}>
        <div className="cycle-center">
          {cycleRunning ? '⚡' : '👤'}
        </div>
        
        {dailyActivities.map((activity, index) => {
          const angle = (index / dailyActivities.length) * 360;
          const radius = 200;
          const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
          const y = Math.sin((angle - 90) * Math.PI / 180) * radius;
          
          return (
            <div
              key={activity.id}
              className={`activity-node ${selectedActivity === activity.id ? 'active' : ''}`}
              style={{
                position: 'absolute',
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)'
              }}
              onClick={() => analyzeActivity(activity.id)}
            >
              <div className="activity-icon">{activity.icon}</div>
              <div className="activity-label">{activity.label}</div>
              <div className="activity-time">{activity.time}</div>
            </div>
          );
        })}
      </div>
      
      <div className="observatory-controls">
        <button className="control-btn" onClick={runFullCycle}>
          ▶️ Run Full Cycle
        </button>
        <button className="control-btn" onClick={showHiddenLabor}>
          🧊 Reveal Hidden Labor
        </button>
        <button className="control-btn" onClick={calculateDailyValue}>
          💰 Calculate Daily Value
        </button>
      </div>
      
      <div className="reproduction-metrics">
        <h3>Reproduction Metrics</h3>
        <div className="metrics-grid">
          {reproductionMetrics.map((metric, idx) => (
            <div key={idx} className="metric-card">
              <h4>{metric.title}</h4>
              <p>{metric.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialReproductionObservatory;