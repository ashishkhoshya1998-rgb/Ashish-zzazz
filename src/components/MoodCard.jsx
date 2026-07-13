import { motion } from 'framer-motion';

const MOODS = [
  { key: 'great', emoji: '😄', label: 'Great' },
  { key: 'good', emoji: '🙂', label: 'Good' },
  { key: 'okay', emoji: '😐', label: 'Okay' },
  { key: 'low', emoji: '😔', label: 'Low' },
  { key: 'stressed', emoji: '😣', label: 'Stressed' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function MoodCard({ i = 0, value, onSet }) {
  return (
    <motion.div
      className="stat-card mood-card"
      custom={i}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={cardVariants}
    >
      <div className="stat-card-label">How are you feeling today?</div>
      <div className="mood-options">
        {MOODS.map((m) => (
          <button
            key={m.key}
            className={`mood-btn ${value === m.key ? 'active' : ''}`}
            onClick={() => onSet(m.key)}
          >
            <span className="mood-emoji">{m.emoji}</span>
            <span className="mood-text">{m.label}</span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}
