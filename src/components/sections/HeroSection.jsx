import React, { useState } from 'react';
import { motion } from 'framer-motion';
import heroImage from '../../assets/hero.png';
import logoImg from '../../assets/logo.png';

export default function HeroSection() {
  return (
    <section className="hero-section" style={styles.section}>
      {/* Navbar overlay */}
      <header className="hero-header" style={styles.header}>
        <div className="logo" aria-label="Cornerstone Dental Clinic Tamale" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer' }}>
          <img src={logoImg} alt="Cornerstone Dental Clinic Logo" className="hero-logo-img" style={{ width: 'auto', objectFit: 'contain' }} />
          <div className="header-text-block" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontWeight: '600', color: 'var(--color-primary-dark)', letterSpacing: '-0.02em' }}>Cornerstone</span>
            <span style={{ fontWeight: '500', color: 'var(--color-primary)', letterSpacing: '-0.01em' }}>Dental Clinic</span>
          </div>
        </div>
        <nav className="desktop-nav" style={styles.nav}>
          <a href="#about" style={styles.navLink}>About us</a>
          <a href="#services" style={styles.navLink}>Services</a>
          <a href="#specialists" style={styles.navLink}>Specialists</a>
          <a href="#calculator" style={styles.navLink}>Calculator</a>
          <a href="#testimonials" style={styles.navLink}>Testimonials</a>
        </nav>
        <div className="desktop-contact" style={styles.contact}>Contact</div>
        <button className="mobile-nav-btn">Menu</button>
      </header>

      <div className="hero-content" style={styles.content}>
        <div className="hero-left" style={styles.leftColumn}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-heading-left"
            style={styles.mainHeading}
          >
            <span className="h1-line-1" style={{ display: 'inline-block', paddingLeft: '2.5rem' }}>Not all smiles</span><br className="mobile-hide-br" />
            <span className="h1-line-2">need fixing, some</span><br className="mobile-hide-br" />
            <span className="h1-line-3">need vision</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtext"
            style={styles.subtext}
          >
            We're a premium orthodontic and aesthetic<br className="mobile-hide-br" />
            dental clinic in Northern Region Ghana, crafting<br className="mobile-hide-br" />
            confident smiles for those who settle for nothing ordinary.
          </motion.p>
        </div>

        {/* Central 3D Tooth */}
        <div className="hero-center" style={styles.centerColumn}>
          <motion.div
            className="tooth-wrapper"
            animate={{
              y: [-20, 20, -20],
              rotateZ: [-2, 2, -2],
              rotateY: [-10, 10, -10]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={styles.toothWrapper}
          >
            <img
              src={heroImage}
              className="tooth-img"
              alt="Best dental clinic in Tamale - Cornerstone Dental 3D Tooth"
              style={{
                width: '100%',
                height: '100%',
                maxWidth: '500px',
                objectFit: 'contain',
                filter: 'drop-shadow(0px 30px 40px rgba(32, 109, 197, 0.4))',
                transform: 'scale(1.0)'
              }}
            />
          </motion.div>
        </div>

        <div className="hero-right" style={styles.rightColumn}>
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-heading-right"
            style={styles.rightHeading}
          >
            Luxury care<br />
            made personal
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ width: 'fit-content' }}
          >
            <motion.button
              animate={{ 
                boxShadow: [
                  "0 8px 24px rgba(18, 84, 166, 0.4)",
                  "0 12px 32px rgba(18, 84, 166, 0.8)",
                  "0 8px 24px rgba(18, 84, 166, 0.4)"
                ],
                scale: [1, 1.03, 1]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.06 }}
              className="hero-cta"
              style={styles.ctaButton}
            >
              <div style={styles.calendarCircle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            Schedule a visit
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Floating faded text background marquee */}
      <div style={styles.fadedTextContainer}>
        <div className="marquee-track">
          <span className="hero-faded-text" style={{ ...styles.fadedText, flexShrink: 0 }}>Cornerstone Dental Clinic</span>
          <span className="hero-faded-text" style={{ ...styles.fadedText, flexShrink: 0 }}>Cornerstone Dental Clinic</span>
          <span className="hero-faded-text" style={{ ...styles.fadedText, flexShrink: 0 }}>Cornerstone Dental Clinic</span>
          <span className="hero-faded-text" style={{ ...styles.fadedText, flexShrink: 0 }}>Cornerstone Dental Clinic</span>
          <span className="hero-faded-text" style={{ ...styles.fadedText, flexShrink: 0 }}>Cornerstone Dental Clinic</span>
          <span className="hero-faded-text" style={{ ...styles.fadedText, flexShrink: 0 }}>Cornerstone Dental Clinic</span>
          <span className="hero-faded-text" style={{ ...styles.fadedText, flexShrink: 0 }}>Cornerstone Dental Clinic</span>
          <span className="hero-faded-text" style={{ ...styles.fadedText, flexShrink: 0 }}>Cornerstone Dental Clinic</span>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    position: 'relative',
    width: '100%',
    minHeight: '85vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    backgroundColor: 'var(--color-light-bg)'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2rem 4rem',
    zIndex: 10
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'var(--color-primary)',
    fontSize: '1.2rem'
  },
  logoIcon: {
    fontSize: '1.5rem',
  },
  nav: {
    display: 'flex',
    gap: '2rem',
  },
  navLink: {
    textDecoration: 'none',
    color: 'var(--color-text-dark)',
    fontWeight: '500',
    fontSize: '0.95rem'
  },
  contact: {
    fontWeight: '500',
    cursor: 'pointer'
  },
  content: {
    display: 'flex',
    flex: 1,
    padding: '0 4rem',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 2,
    position: 'relative'
  },
  leftColumn: {
    flex: 1,
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    zIndex: 1
  },
  centerColumn: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    height: '600px',
    zIndex: 5,
    margin: '0'
  },
  rightColumn: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    maxWidth: '450px',
    paddingLeft: '2rem',
    zIndex: 1
  },
  mainHeading: {
    fontSize: '3.6rem',
    color: 'var(--color-primary-dark)',
    marginBottom: '1rem',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
    fontWeight: '500',
    whiteSpace: 'nowrap'
  },
  subtext: {
    color: 'var(--color-text-dark)',
    fontSize: '1.05rem',
    lineHeight: '1.6',
    opacity: 0.8
  },
  toothWrapper: {
    position: 'relative',
    zIndex: 10,
    cursor: 'pointer',
    transformStyle: 'preserve-3d',
  },
  rightHeading: {
    fontSize: '3.6rem',
    color: 'var(--color-primary-dark)',
    marginBottom: '2rem',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
    fontWeight: '500',
    whiteSpace: 'nowrap'
  },
  ctaButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '0.4rem 1.8rem 0.4rem 0.4rem',
    fontSize: '1.05rem',
    fontWeight: '500',
    borderRadius: '50px',
    background: 'linear-gradient(90deg, #3fa1f0 0%, var(--color-primary) 70%, var(--color-primary-dark) 100%)',
    color: 'var(--color-white)',
    textShadow: '0 1px 2px rgba(10, 58, 120, 0.5)',
    border: 'none',
    cursor: 'pointer'
  },
  calendarCircle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.2)',
    color: 'var(--color-white)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
  },
  fadedTextContainer: {
    position: 'absolute',
    bottom: '-2rem',
    left: 0,
    width: '100%',
    zIndex: 1,
    opacity: 0.05,
    pointerEvents: 'none',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  fadedText: {
    fontSize: '10rem',
    fontWeight: '800',
    color: 'var(--color-primary-dark)',
    paddingRight: '6rem'
  }
};
