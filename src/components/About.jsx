import { motion } from 'framer-motion';

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-grid">
        <motion.div
          className="about-image-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeLeft}
        >
          <div className="about-image-placeholder">
            <div className="about-avatar">AK</div>
          </div>
          <div className="about-image-accent" />
        </motion.div>

        <motion.div
          className="about-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeRight}
        >
          <p className="section-label">About Me</p>
          <h3>
            Designing for <span>impact</span>,
            <br />
            driven by empathy.
          </h3>
          <p className="about-text">
            I'm Ashish Khoshya — a Senior Product Designer with 4+ years of experience
            turning complex enterprise software into experiences people understand,
            trust, and enjoy.
            <br /><br />
            My approach combines empathy, clarity, and systems thinking. From design
            systems to 0→1 products, UX architecture to vibe coding — I bring a
            human-centered lens to every challenge. IIT Guwahati alumnus, now
            stitching it all together with AI.
          </p>

          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">4+</div>
              <div className="stat-label">Years Exp.</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">IIT</div>
              <div className="stat-label">Guwahati</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
