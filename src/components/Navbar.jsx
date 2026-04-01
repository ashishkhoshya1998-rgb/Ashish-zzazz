import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <a href="#" className="nav-logo">
        AK<span>.</span>
      </a>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
        <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Work</a>
        <a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')}>Resume</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
        <div className="nav-status-dot" title="Available for work" />
      </div>

      <button
        className={`nav-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </motion.nav>
  );
}
