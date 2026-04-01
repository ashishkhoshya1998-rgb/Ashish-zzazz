import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-gradient" />

      <div className="hero-content">
        <motion.div
          className="hero-tag"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <span className="hero-tag-dot" />
          Available for projects
        </motion.div>

        <motion.h1
          className="hero-title"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Crafting Digital
          <br />
          <span className="accent">Experiences</span> that
          <br />
          <span className="outline-text">Inspire</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Product designer focused on creating meaningful, user-centered digital
          experiences through design thinking and strategic planning.
        </motion.p>

        <motion.div
          className="hero-cta-group"
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <a href="#projects" className="btn-primary">
            View Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#about" className="btn-secondary">
            About Me
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span>Scroll</span>
        <div className="scroll-line" />
      </motion.div>
    </section>
  );
}
