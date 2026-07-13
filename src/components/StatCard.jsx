import { motion } from 'framer-motion';
import ProgressRing from './ProgressRing';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function StatCard({ i = 0, emoji, label, value, unit, goal, color, quickAdds, onAdd }) {
  const progress = goal ? (value / goal) * 100 : 0;

  return (
    <motion.div
      className="stat-card"
      custom={i}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={cardVariants}
    >
      <div className="stat-card-top">
        <div className="stat-card-icon">{emoji}</div>
        <div className="stat-ring-wrap">
          <ProgressRing progress={progress} color={color} />
          <span className="stat-ring-percent">{Math.round(Math.min(progress, 100))}%</span>
        </div>
      </div>
      <div className="stat-card-value">
        {value}
        <span className="stat-unit">{unit}</span>
      </div>
      <div className="stat-card-label">{label}</div>
      <div className="stat-card-goal">Goal: {goal.toLocaleString()} {unit}</div>
      <div className="stat-quick-adds">
        {quickAdds.map((q) => (
          <button key={q} className="quick-add-btn" onClick={() => onAdd(q)}>
            +{q}
          </button>
        ))}
        <button className="quick-add-btn quick-add-reset" onClick={() => onAdd(-value)}>
          Reset
        </button>
      </div>
    </motion.div>
  );
}
