import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Icons will map to the media we uploaded
import AestheticIcon from '../../assets/media__1773642166530.png'; // glowing tooth
import OrthoIcon from '../../assets/media__1773642166154.png';    // braces
import WhiteningIcon from '../../assets/media__1773642166416.png'; // teeth
import SurgicalIcon from '../../assets/media__1773642166245.png';  // tooth with flap
// We don't have Implantology icon right now, we will reuse Surgical or similar as placeholder
import ImplantIcon from '../../assets/media__1773642166530.png';  // placeholder

const services = [
  { id: 1, title: 'Aesthetic dentistry', image: AestheticIcon, desc: 'Smile restoration, built to last. Permanent, natural-looking tooth replacements.' },
  { id: 2, title: 'Orthodontics', image: OrthoIcon, desc: 'Aligning your bite for perfect health and confidence with modern clear aligners.' },
  { id: 3, title: 'Implantology', image: ImplantIcon, desc: 'Using 3D-guided surgery, our implants restore full chewing function and aesthetics with precise fit, bone integration, and lifelike ceramic crowns.' },
  { id: 4, title: 'Whitening', image: WhiteningIcon, desc: 'Professional whitening treatments that safely lift stains and restore your bright smile.' },
  { id: 5, title: 'Surgical dentistry', image: SurgicalIcon, desc: 'Expert surgical care from extractions to bone grafting, prioritizing comfort.' },
];

export default function ServicesSection() {
  const [hoveredId, setHoveredId] = useState(null);

  // When hovering on a card, it expands relative to others
  const getCardWidth = (id) => {
    if (hoveredId === null) return 'calc(20% - 1.6rem)'; // default equal width
    if (hoveredId === id) return '40%'; // Expanded width
    return '15%'; // Compressed width
  };

  return (
    <section id="services" style={styles.section}>
      <div style={styles.header}>
        <p style={styles.kicker}>SERVICES</p>
        <h2 style={styles.heading}>Expert care for every smile</h2>
        <p style={styles.subtext}>
          We offer a full spectrum of treatments — each tailored to elevate<br/>
          your health, confidence, and natural beauty.
        </p>
      </div>

      <div style={styles.cardsContainer} onMouseLeave={() => setHoveredId(null)}>
        {services.map((service) => (
          <motion.div
            key={service.id}
            onMouseEnter={() => setHoveredId(service.id)}
            animate={{ width: getCardWidth(service.id) }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{
              ...styles.card,
              background: hoveredId === service.id ? 'var(--color-primary-light)' : 'var(--color-primary)'
            }}
          >
            <div style={styles.cardImageContainer}>
               <img src={service.image} alt={service.title} style={styles.cardImage} />
            </div>
            
            {/* Title - always visible, shifts position based on hover */}
            <motion.h3 
              layout
              style={{
                ...styles.cardTitle,
                textAlign: hoveredId === service.id ? 'left' : 'center',
                paddingLeft: hoveredId === service.id ? '1rem' : '0'
              }}
            >
              {service.title}
            </motion.h3>

            {/* Description - only visible on hover */}
            <AnimatePresence>
              {hoveredId === service.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  style={styles.cardDesc}
                >
                  <p>{service.desc}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <div style={styles.actionContainer}>
        <button className="btn btn-primary" style={styles.scheduleBtn}>
          🗓️ Schedule a visit
        </button>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '6rem 4rem',
    backgroundColor: 'var(--color-light-bg)',
    margin: '2rem 0',
    borderRadius: 'var(--radius-xl)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  kicker: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: 'var(--color-text-muted)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '1rem'
  },
  heading: {
    fontSize: '3rem',
    color: 'var(--color-text-dark)',
    marginBottom: '1rem'
  },
  subtext: {
    fontSize: '1.1rem',
    color: 'var(--color-text-dark)',
    opacity: 0.8,
  },
  cardsContainer: {
    display: 'flex',
    gap: '2rem',
    height: '400px', // Fixed height for cards
    width: '100%',
  },
  card: {
    borderRadius: 'var(--radius-md)',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    color: 'var(--color-white)',
    boxShadow: '0px 10px 30px rgba(18, 84, 166, 0.1)',
  },
  cardImageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '2rem',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    maxHeight: '180px',
  },
  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: '500',
    margin: 0,
    position: 'relative',
    zIndex: 2,
    paddingBottom: '0.5rem'
  },
  cardDesc: {
    fontSize: '0.85rem',
    lineHeight: '1.5',
    opacity: 0.9,
    paddingLeft: '1rem',
    paddingBottom: '1rem',
    position: 'relative',
    zIndex: 2
  },
  actionContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '4rem'
  },
  scheduleBtn: {
    padding: '1rem 2.5rem',
    fontSize: '1.1rem'
  }
};
