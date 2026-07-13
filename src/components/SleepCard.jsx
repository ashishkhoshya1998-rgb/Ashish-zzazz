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

export default function SleepCard({ i = 0, value, goal, onSet }) {
  const hours = value ?? 0;
  const progress = goal ? (hours / goal) * 100 : 0;

  const adjust = (delta) => onSet(Math.max(0, +(hours + delta).toFixed(1)));

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
        <div className="stat-card-icon">🌙</div>
        <div className="stat-ring-wrap">
          <ProgressRing progress={progress} color="var(--sleep)" />
          <span className="stat-ring-percent">{Math.round(Math.min(progress, 100))}%</span>
        </div>
      </div>
      <div className="stat-card-value">
        {hours}
        <span className="stat-unit">hrs</span>
      </div>
      <div className="stat-card-label">Sleep</div>
      <div className="stat-card-goal">Goal: {goal} hrs</div>
      <div className="stepper">
        <button onClick={() => adjust(-0.5)} aria-label="Decrease sleep">−</button>
        <span>{hours} hrs</span>
        <button onClick={() => adjust(0.5)} aria-label="Increase sleep">+</button>
      </div>
    </motion.div>
  );
}
