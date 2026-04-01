import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "Consistently impressed by their exceptional design skills, strategic thinking, and unwavering dedication to delivering outstanding user experiences.",
    name: 'Sarah Chen',
    role: 'VP of Product, FinTech Co.',
    initials: 'SC',
  },
  {
    text: "They transformed our complex financial product into something our users actually enjoy using. The attention to detail and user empathy is remarkable.",
    name: 'Michael Torres',
    role: 'CTO, NeoBank',
    initials: 'MT',
  },
  {
    text: "Working with them was a game-changer for our brand. They brought clarity to our vision and delivered a design system that scales beautifully.",
    name: 'Emily Zhang',
    role: 'Founder, CryptoVault',
    initials: 'EZ',
  },
  {
    text: "A rare combination of creative vision and strategic execution. They don't just design — they solve business problems through design.",
    name: 'David Park',
    role: 'Head of Design, TechBank',
    initials: 'DP',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="section-header">
        <div>
          <p className="section-label">Testimonials</p>
          <h2 className="section-title">What People Say</h2>
        </div>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <motion.div
            className="testimonial-card"
            key={t.name}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={cardVariants}
          >
            <div className="testimonial-quote-mark">&ldquo;</div>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">{t.initials}</div>
              <div className="testimonial-author-info">
                <h4>{t.name}</h4>
                <p>{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
