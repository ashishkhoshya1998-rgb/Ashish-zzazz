import { motion } from 'framer-motion';
import ProgressRing from './ProgressRing';

export default function Header({ waterPct, stepsPct, sleepPct }) {
  const clamp = (n) => Math.min(100, Math.max(0, n || 0));
  const avg = Math.round((clamp(waterPct) + clamp(stepsPct) + clamp(sleepPct)) / 3);
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
  const dateStr = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return (
    <motion.section
      className="tracker-header"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="tracker-header-text">
        <p className="section-label">{dateStr}</p>
        <h1 className="tracker-title">
          {greeting}, <span className="accent">Ashish</span>
        </h1>
        <p className="tracker-subtitle">Here's your health snapshot for today.</p>
      </div>
      <div className="tracker-header-ring">
        <ProgressRing progress={avg} size={120} stroke={10} />
        <div className="tracker-header-ring-label">
          <span className="ring-percent">{avg}%</span>
          <span className="ring-caption">Daily Goal</span>
        </div>
      </div>
    </motion.section>
  );
}
