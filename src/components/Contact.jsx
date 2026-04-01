import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Contact() {
  return (
    <>
      <section className="contact-section" id="contact">
        <div className="contact-bg-gradient" />
        <motion.div
          className="contact-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <p className="section-label">Get in Touch</p>
          <h2 className="contact-title">
            Let's create
            <br />
            something <span>great</span>.
          </h2>
          <p className="contact-text">
            Have a project in mind? I'd love to hear about it. Let's discuss how
            we can work together to bring your vision to life.
          </p>
          <a href="mailto:hello@ashish.design" className="contact-email">
            hello@ashish.design
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 15L15 5M15 5H8M15 5v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </section>

      <footer className="footer">
        <div className="footer-left">
          &copy; 2024 Ashish. Built with <span>&hearts;</span> and purpose.
        </div>
        <div className="footer-social">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">Dribbble</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </footer>
    </>
  );
}
