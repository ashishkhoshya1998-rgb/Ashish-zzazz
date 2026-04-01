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
            <div className="about-avatar">A</div>
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
            driven by purpose.
          </h3>
          <p className="about-text">
            I'm a product designer with a passion for crafting digital experiences
            that make complex things feel simple. With expertise spanning fintech,
            banking, and web3, I bring a human-centered approach to every project.
            <br /><br />
            By combining design thinking, brand strategy, and meticulous execution,
            I help businesses create products that users genuinely love.
          </p>

          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Exp.</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">30+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Clients</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
