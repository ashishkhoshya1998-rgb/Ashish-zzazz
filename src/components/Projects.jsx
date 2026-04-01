import { motion } from 'framer-motion';

const projects = [
  {
    title: 'FinFlow Dashboard',
    desc: 'A comprehensive fintech dashboard redesign focused on simplifying complex financial data into intuitive visual experiences.',
    tags: ['UI/UX', 'Fintech', 'Dashboard'],
    placeholder: 'FINFLOW',
  },
  {
    title: 'CryptoVault',
    desc: 'End-to-end design for a crypto wallet application with seamless onboarding and secure transaction flows.',
    tags: ['Web3', 'Mobile', 'Crypto'],
    placeholder: 'CRYPTO',
  },
  {
    title: 'NeoBank App',
    desc: 'Digital banking experience designed for the next generation, featuring biometric auth and smart budgeting tools.',
    tags: ['Banking', 'Mobile', 'Product'],
    placeholder: 'NEOBANK',
  },
  {
    title: 'Brand Evolution',
    desc: 'Complete brand identity overhaul for a leading financial services company, from strategy to implementation.',
    tags: ['Branding', 'Strategy', 'Identity'],
    placeholder: 'BRAND',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <div>
          <p className="section-label">Selected Work</p>
          <h2 className="section-title">Featured Projects</h2>
        </div>
        <a href="#projects" className="section-link">
          View All <span className="arrow">&rarr;</span>
        </a>
      </div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.div
            className="project-card"
            key={project.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={cardVariants}
          >
            <div className="project-card-image">
              <div className="project-img-placeholder">{project.placeholder}</div>
              <div className="project-card-overlay">
                <span>View Case Study &rarr;</span>
              </div>
            </div>
            <div className="project-card-info">
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-desc">{project.desc}</p>
              <div className="project-card-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
