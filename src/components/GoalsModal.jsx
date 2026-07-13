import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function GoalsModal({ open, onClose, goals, onSave, onReset }) {
  const [form, setForm] = useState(goals);
  const [wasOpen, setWasOpen] = useState(open);

  if (open && !wasOpen) {
    setWasOpen(true);
    setForm(goals);
  } else if (!open && wasOpen) {
    setWasOpen(false);
  }

  const submit = (e) => {
    e.preventDefault();
    onSave({
      water: Math.max(1, +form.water),
      steps: Math.max(1000, +form.steps),
      sleep: Math.max(1, +form.sleep),
    });
    onClose();
  };

  const handleReset = () => {
    if (window.confirm('Reset all health data? This cannot be undone.')) {
      onReset();
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-card"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
            <h3 className="modal-title">Daily Goals</h3>
            <form onSubmit={submit} className="goals-form">
              <label>
                Water (glasses)
                <input
                  type="number"
                  min="1"
                  value={form.water}
                  onChange={(e) => setForm({ ...form, water: e.target.value })}
                />
              </label>
              <label>
                Steps
                <input
                  type="number"
                  min="1000"
                  step="500"
                  value={form.steps}
                  onChange={(e) => setForm({ ...form, steps: e.target.value })}
                />
              </label>
              <label>
                Sleep (hours)
                <input
                  type="number"
                  min="1"
                  step="0.5"
                  value={form.sleep}
                  onChange={(e) => setForm({ ...form, sleep: e.target.value })}
                />
              </label>
              <div className="modal-actions">
                <button type="button" className="btn-secondary" onClick={handleReset}>
                  Reset All Data
                </button>
                <button type="submit" className="btn-primary">
                  Save Goals
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
