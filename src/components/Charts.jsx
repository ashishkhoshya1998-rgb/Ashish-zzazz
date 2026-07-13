const WIDTH = 320;
const HEIGHT = 140;
const PADDING = 20;

export function BarChart({ data, goal, color = 'var(--accent)' }) {
  const values = data.map((d) => d.value ?? 0);
  const max = Math.max(goal || 0, ...values, 1);
  const scale = HEIGHT - 44;
  const gap = 10;
  const barWidth = (WIDTH - PADDING * 2 - gap * (data.length - 1)) / data.length;
  const goalY = goal ? HEIGHT - 24 - (Math.min(goal, max) / max) * scale : null;

  return (
    <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="chart-svg" preserveAspectRatio="none">
      {goalY != null && (
        <line x1={PADDING} x2={WIDTH - PADDING} y1={goalY} y2={goalY} className="chart-goal-line" />
      )}
      {data.map((d, i) => {
        const val = d.value ?? 0;
        const barHeight = (val / max) * scale;
        const x = PADDING + i * (barWidth + gap);
        const y = HEIGHT - 24 - barHeight;
        return (
          <g key={d.date}>
            <rect
              x={x}
              y={d.value ? y : HEIGHT - 24}
              width={barWidth}
              height={d.value ? Math.max(barHeight, 2) : 0}
              rx={4}
              fill={color}
              opacity={d.value ? 1 : 0.3}
            />
            {!d.value && (
              <rect x={x} y={HEIGHT - 26} width={barWidth} height={2} rx={1} fill="var(--border-light)" />
            )}
            <text x={x + barWidth / 2} y={HEIGHT - 8} textAnchor="middle" className="chart-label">
              {d.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function LineChart({ data, color = 'var(--accent)' }) {
  const points = data.filter((d) => d.value != null);

  if (points.length === 0) {
    return <p className="chart-empty">No weight logged yet this week</p>;
  }

  const values = points.map((p) => p.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const scale = HEIGHT - 44;

  const coords = data.map((d, i) => ({
    ...d,
    x: PADDING + (i / (data.length - 1)) * (WIDTH - PADDING * 2),
    y: d.value == null ? null : HEIGHT - 24 - ((d.value - min) / range) * scale,
  }));

  const validCoords = coords.filter((c) => c.y != null);
  const pathD = validCoords.map((c, i) => `${i === 0 ? 'M' : 'L'} ${c.x} ${c.y}`).join(' ');

  return (
    <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="chart-svg" preserveAspectRatio="none">
      <path d={pathD} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {validCoords.map((c) => (
        <circle key={c.date} cx={c.x} cy={c.y} r="4" fill="var(--bg-card)" stroke={color} strokeWidth="2" />
      ))}
      {coords.map((c) => (
        <text key={c.date} x={c.x} y={HEIGHT - 8} textAnchor="middle" className="chart-label">
          {c.label}
        </text>
      ))}
    </svg>
  );
}
