import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// New High-End Asset Imports
import AestheticIcon from '../../assets/aesthetic.webp';
import OrthoIcon from '../../assets/braces.webp';
import OrthoHoverIcon from '../../assets/invisalign.webp';
import ImplantIcon from '../../assets/implantology.webp';
import WhiteningIcon from '../../assets/whitening.webp';
import SurgicalIcon from '../../assets/surgical.webp';

const services = [
  { 
    id: 1, title: 'Aesthetic dentistry', image: AestheticIcon, 
    shortDesc: 'Flawless smile design, built for confidence', 
    desc: 'From dental veneers to full restorations, we perfectly map out natural-looking, beautiful confident smiles tailored exactly for you.' 
  },
  { 
    id: 2, title: 'Orthodontics', image: OrthoIcon, hoverImage: OrthoHoverIcon,
    shortDesc: 'Perfect alignment, clear & comfortable', 
    desc: 'We gently align your bite for optimal health and aesthetics using both traditional braces and modern, nearly invisible clear aligners.' 
  },
  { 
    id: 3, title: 'Implantology', image: ImplantIcon, 
    shortDesc: 'Smile restoration, built to last', 
    desc: 'Permanent, natural-looking tooth replacements. Using 3D-guided surgery, our implants restore full chewing function and aesthetics with precise fit, bone integration, and lifelike ceramic crowns.' 
  },
  { 
    id: 4, title: 'Whitening', image: WhiteningIcon, 
    shortDesc: 'Brilliant white, safely achieved', 
    desc: 'Professional teeth whitening treatments designed to safely lift deep stains and instantly restore your vibrant, bright smile without causing sensitivity.' 
  },
  { 
    id: 5, title: 'Surgical dentistry', image: SurgicalIcon, 
    shortDesc: 'Pain-free care, expert precision', 
    desc: 'Offering expert tooth extraction, advanced root canal treatments, and comprehensive surgical dentistry in a completely sterile, comfortable environment.' 
  },
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
        {services.map((service) => {
          const isHovered = hoveredId === service.id;
          return (
            <motion.div
              layout
              key={service.id}
              onMouseEnter={() => setHoveredId(service.id)}
              animate={{ width: getCardWidth(service.id) }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              style={{
                ...styles.card,
                // Soft whitish glare applied from the bottom upwards matching the mockup precisely
                background: isHovered 
                  ? 'radial-gradient(circle at 50% 90%, #468ce3 0%, #1555a6 70%, #0a3a78 100%)' 
                  : 'radial-gradient(circle at 50% 110%, #3e81d6 0%, #1254a6 60%, #0a3a78 100%)'
              }}
            >
              <div style={{ display: 'flex', width: '100%', height: '100%' }}>
                
                {/* Left Side: Icon and Title */}
                <motion.div layout style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '1rem', minWidth: '130px', justifyContent: 'space-between' }}>
                  <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '0.5rem' }}>
                     <motion.img 
                       key={isHovered && service.hoverImage ? 'hovered' : 'static'}
                       initial={{ opacity: 0.6 }}
                       animate={{ opacity: 1 }}
                       transition={{ duration: 0.2 }}
                       src={isHovered && service.hoverImage ? service.hoverImage : service.image} 
                       alt={service.title} 
                       className={service.id === 1 || service.id === 5 ? "service-icon-normal" : "service-icon-zoomed"}
                       style={{ 
                         width: '100%', height: '100%', maxHeight: '220px', 
                         objectFit: 'contain', 
                         transition: 'transform 0.3s ease'
                       }} 
                     />
                  </div>
                  <motion.h3 layout style={{ ...styles.cardTitle, textAlign: 'center', paddingBottom: '0.5rem', fontSize: '1.2rem' }}>
                    {service.title}
                  </motion.h3>
                </motion.div>

                {/* Right Side: Hidden Panel Revealed on Hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      layout
                      initial={{ opacity: 0, width: 0, paddingLeft: 0, marginLeft: 0 }}
                      animate={{ opacity: 1, width: '240px', paddingLeft: '1.5rem', marginLeft: '0.5rem' }}
                      exit={{ opacity: 0, width: 0, paddingLeft: 0, marginLeft: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        borderLeft: '1px solid rgba(255,255,255,0.1)' // subtle vertical panel divider
                      }}
                    >
                      <div style={{ width: '220px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                        
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '2.5rem' }}>
                          <h4 style={{ fontSize: '1rem', lineHeight: '1.4', margin: 0, fontWeight: '600', color: 'var(--color-white)', maxWidth: '150px' }}>
                            {service.shortDesc}
                          </h4>
                          <motion.div 
                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.3)' }}
                            style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.15)', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', flexShrink: 0 }}
                          >
                            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>↗</span>
                          </motion.div>
                        </div>
                        
                        <div style={{ marginTop: 'auto', marginBottom: '1.5rem' }}>
                          <p style={{ fontSize: '0.85rem', lineHeight: '1.5', opacity: 0.85, margin: 0, letterSpacing: '0.02em' }}>
                            {service.desc}
                          </p>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </motion.div>
          );
        })}
      </div>

      <div style={styles.actionContainer}>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          style={styles.scheduleBtn}
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
    height: '330px', // Matches premium mockup ratio
    width: '100%',
  },
  card: {
    borderRadius: 'var(--radius-md)',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    color: 'var(--color-white)',
    boxShadow: '0px 10px 30px rgba(18, 84, 166, 0.15)',
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
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '0.4rem 1.8rem 0.4rem 0.4rem',
    fontSize: '1.05rem',
    fontWeight: '500',
    borderRadius: '50px',
    boxShadow: '0 8px 24px rgba(18, 84, 166, 0.3)',
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
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  }
};
