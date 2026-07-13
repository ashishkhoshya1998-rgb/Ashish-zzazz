import { BarChart, LineChart } from './Charts';

export default function TrendsSection({ getSeries, goals }) {
  const water = getSeries('water');
  const steps = getSeries('steps');
  const sleep = getSeries('sleep');
  const weight = getSeries('weight');

  return (
    <section className="trends-section">
      <h2 className="section-title-sm">Weekly Trends</h2>
      <div className="trends-grid">
        <div className="trend-card">
          <div className="trend-card-header">
            <span className="trend-card-title">💧 Water</span>
          </div>
          <BarChart data={water} goal={goals.water} color="var(--water)" />
        </div>
        <div className="trend-card">
          <div className="trend-card-header">
            <span className="trend-card-title">👣 Steps</span>
          </div>
          <BarChart data={steps} goal={goals.steps} color="var(--steps)" />
        </div>
        <div className="trend-card">
          <div className="trend-card-header">
            <span className="trend-card-title">🌙 Sleep</span>
          </div>
          <BarChart data={sleep} goal={goals.sleep} color="var(--sleep)" />
        </div>
        <div className="trend-card">
          <div className="trend-card-header">
            <span className="trend-card-title">⚖️ Weight</span>
          </div>
          <LineChart data={weight} color="var(--accent)" />
        </div>
      </div>
    </section>
  );
}
