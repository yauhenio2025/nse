import React, { useState } from 'react';
import { dailyActivities, reproductionMetrics } from '../../data/ma/socialReproduction';
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
          <strong>Key Insight:</strong> Capitalism depends on massive amounts of unpaid labor, especially from women, to reproduce the workforce. This hidden abode of reproduction is as crucial as the visible factory floor.
        </p>
      </div>
    );
    onShowPopup(content);
  };

  const calculateTotalValue = () => {
    const calculations = reproductionMetrics.valueCalculations;
    const content = (
      <div className="value-calculation">
        <h2>Total Value Calculation</h2>
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
            {calculations.map((calc, index) => (
              <tr key={index}>
                <td>{calc.activity}</td>
                <td>{calc.hours}</td>
                <td>${calc.valuePerHour}</td>
                <td>${calc.totalValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="total-summary">
          <strong>Daily Value Created:</strong> ${calculations.reduce((sum, calc) => sum + calc.totalValue, 0)}<br />
          <strong>Daily Wage Received:</strong> $160<br />
          <strong>Surplus Extracted:</strong> ${calculations.reduce((sum, calc) => sum + calc.totalValue, 0) - 160}
        </p>
      </div>
    );
    onShowPopup(content);
  };

  // Calculate positions for circular layout
  const getActivityPosition = (index: number, total: number) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
    const radius = 40; // percentage
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);
    return { left: `${x}%`, top: `${y}%` };
  };

  return (
    <div className="reproduction-observatory">
      <h2 className="section-title">🔄 Observe How Capitalism Reproduces Itself Daily</h2>
      
      <div className="daily-cycle">
        <div className="cycle-center">
          <span>💰</span>
        </div>
        
        {dailyActivities.map((activity, index) => {
          const position = getActivityPosition(index, dailyActivities.length);
          return (
            <div
              key={activity.id}
              className={`activity-node ${selectedActivity === activity.id ? 'selected' : ''}`}
              style={position}
              onClick={() => analyzeActivity(activity.id)}
            >
              <span>{activity.icon}</span>
              <small>{activity.label}</small>
            </div>
          );
        })}
        
        {/* Flow lines */}
        {dailyActivities.map((_, index) => {
          const angle = (index / dailyActivities.length) * 2 * Math.PI;
          return (
            <div
              key={`flow-${index}`}
              className="flow-line"
              style={{
                transform: `rotate(${angle}rad)`,
                transformOrigin: 'center',
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: '40%',
                marginLeft: '-20%'
              }}
            />
          );
        })}
      </div>
      
      <div className="reproduction-analysis">
        {reproductionMetrics.metrics.map((metric, index) => (
          <div key={index} className="analysis-metric">
            <h4>{metric.title}</h4>
            <p>{metric.value}</p>
          </div>
        ))}
      </div>
      
      <div className="reproduction-controls">
        <button 
          className="control-btn" 
          onClick={runFullCycle}
          disabled={cycleRunning}
        >
          ▶️ Run 24-Hour Cycle
        </button>
        <button className="control-btn" onClick={showHiddenLabor}>
          👁️ Reveal Hidden Labor
        </button>
        <button className="control-btn" onClick={calculateTotalValue}>
          💵 Calculate Total Value
        </button>
      </div>
    </div>
  );
};