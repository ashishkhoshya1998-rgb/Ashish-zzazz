import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

const highlights = [
  { emoji: '🎨', text: '4+ Years in Product Design' },
  { emoji: '🎓', text: 'IIT Guwahati' },
  { emoji: '🏐', text: 'Volleyball on weekends' },
  { emoji: '🤖', text: 'AI tools daily' },
];

const tags = ['Design Systems', '0→1 Products', 'UX Architecture', 'Vibe Coding', 'IIT Guwahati'];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-gradient" />

      <div className="hero-content">
        <motion.div
          className="hero-profile"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="hero-avatar">AK</div>
          <span className="hero-role">Senior Product Designer</span>
        </motion.div>

        <motion.h1
          className="hero-title"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Ashish
          <br />
          <span className="accent italic">Khoshya</span>
        </motion.h1>

        <motion.div
          className="hero-belief"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h2 className="belief-heading">I believe in</h2>
          <p className="hero-subtitle">
            turning complex enterprise software into experiences people understand,
            trust, and enjoy — through empathy, clarity, and systems thinking. 4+ years of
            it, and now stitching it all together with AI.
          </p>
        </motion.div>

        <motion.div
          className="hero-tags"
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          {tags.map((tag) => (
            <span className="hero-tag-pill" key={tag}>{tag}</span>
          ))}
        </motion.div>

        <motion.div
          className="hero-cta-group"
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <a href="#projects" className="btn-primary">
            View Case Studies
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 2v10M4 9l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" className="btn-secondary">
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          className="hero-highlights"
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          {highlights.map((item) => (
            <div className="highlight-pill" key={item.text}>
              <span className="highlight-emoji">{item.emoji}</span>
              {item.text}
            </div>
          ))}
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
