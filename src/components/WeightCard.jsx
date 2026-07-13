import { useState } from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function WeightCard({ i = 0, value, history, onSet }) {
  const [input, setInput] = useState(value ?? '');
  const [prevValue, setPrevValue] = useState(value);

  if (value !== prevValue) {
    setPrevValue(value);
    setInput(value ?? '');
  }

  const dates = Object.keys(history).sort();
  const lastDate = dates[dates.length - 1];
  const prevDate = dates[dates.length - 2];
  const delta = lastDate && prevDate ? +(history[lastDate] - history[prevDate]).toFixed(1) : null;

  const submit = (e) => {
    e.preventDefault();
    const num = parseFloat(input);
    if (!Number.isNaN(num) && num > 0) onSet(num);
  };

  return (
    <motion.div
      className="stat-card weight-card"
      custom={i}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={cardVariants}
    >
      <div className="stat-card-top">
        <div className="stat-card-icon">⚖️</div>
        {delta != null && (
          <span className={`weight-delta ${delta <= 0 ? 'down' : 'up'}`}>
            {delta > 0 ? '+' : ''}{delta} kg
          </span>
        )}
      </div>
      <div className="stat-card-value">
        {value ?? '--'}
        <span className="stat-unit">kg</span>
      </div>
      <div className="stat-card-label">Weight Today</div>
      <form className="weight-form" onSubmit={submit}>
        <input
          type="number"
          step="0.1"
          min="0"
          placeholder="Log kg"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </motion.div>
  );
}
