import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="hero-section" style={styles.section}>
      {/* Navbar overlay */}
      <header style={styles.header}>
        <div className="logo" style={styles.logo}>
          <span style={styles.logoIcon}>🦷</span>
          <span style={{ fontWeight: '600' }}>Cornerstone Dental Clinic</span>
        </div>
        <nav style={styles.nav}>
          <a href="#about" style={styles.navLink}>About us</a>
          <a href="#services" style={styles.navLink}>Services</a>
          <a href="#specialists" style={styles.navLink}>Specialists</a>
          <a href="#calculator" style={styles.navLink}>Calculator</a>
          <a href="#testimonials" style={styles.navLink}>Testimonials</a>
        </nav>
        <div style={styles.contact}>Contact</div>
      </header>

      <div style={styles.content}>
        <div style={styles.leftColumn}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={styles.mainHeading}
          >
            Not all smiles<br/>
            need fixing, some<br/>
            need vision
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={styles.subtext}
          >
            We're a premium orthodontic and aesthetic<br/>
            clinic crafting confident smiles for those<br/>
            who settle for nothing ordinary.
          </motion.p>
        </div>

        {/* Central 3D Tooth */}
        <div style={styles.centerColumn}>
          <motion.div
            animate={{ rotateY: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={styles.toothWrapper}
          >
            {/* We will use a fallback image or CSS shape until the hero tooth asset is placed */}
            <div style={styles.toothPlaceholder}>
               <img src="/placeholder-hero-tooth.png" alt="3D Tooth" style={{width: '100%', height:'100%', objectFit: 'contain', display: 'none'}} id="hero-tooth" />
               <div style={{width:'300px', height:'400px', background: 'radial-gradient(circle, #85e0ff 0%, #206dc5 80%)', borderRadius: '50% 50% 20% 20%', display: 'flex', alignItems:'center', justifyContent:'center', color:'white', fontWeight:'bold', transform: 'rotateX(20deg) rotateZ(-5deg)'}}>
                 3D TOOTH ASSET HERE
               </div>
            </div>
          </motion.div>
        </div>

        <div style={styles.rightColumn}>
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={styles.rightHeading}
          >
            Luxury care<br/>
            made personal
          </motion.h2>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="btn btn-primary"
            style={styles.ctaButton}
          >
            🗓️ Schedule a visit
          </motion.button>
        </div>
      </div>

      {/* Floating faded text background */}
      <div style={styles.fadedTextContainer}>
          <span style={styles.fadedText}>Cornerstone Dental Clinic — Soft. Defined.</span>
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
    maxWidth: '400px',
  },
  centerColumn: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    height: '600px'
  },
  rightColumn: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    maxWidth: '350px',
    paddingLeft: '2rem'
  },
  mainHeading: {
    fontSize: '3.5rem',
    color: 'var(--color-text-dark)',
    marginBottom: '1rem'
  },
  subtext: {
    color: 'var(--color-text-dark)',
    fontSize: '1rem',
    lineHeight: '1.6',
    opacity: 0.8
  },
  toothWrapper: {
    position: 'relative',
    zIndex: 5,
    cursor: 'pointer',
    transformStyle: 'preserve-3d',
  },
  rightHeading: {
    fontSize: '3rem',
    color: 'var(--color-text-dark)',
    marginBottom: '2rem'
  },
  ctaButton: {
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    borderRadius: '50px',
    boxShadow: '0 8px 24px rgba(18, 84, 166, 0.3)',
    background: 'var(--color-primary-dark)'
  },
  fadedTextContainer: {
    position: 'absolute',
    bottom: '-20px',
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 1,
    opacity: 0.05,
    pointerEvents: 'none',
    whiteSpace: 'nowrap'
  },
  fadedText: {
    fontSize: '10rem',
    fontWeight: '800',
    color: 'var(--color-primary-dark)'
  }
};
