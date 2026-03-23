import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import chairBg from '../../assets/dental_chair_bg.png';
import ins1 from '../../assets/insurance1.webp';
import ins2 from '../../assets/insurance2.webp';
import ins3 from '../../assets/insurance3.webp';

const insuranceLogos = [ins1, ins2, ins3];

const CountUpStat = ({ endValue, suffix = "", duration = 2.5 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        const easeOut = 1 - Math.pow(1 - progress, 4); // smooth ease out curve
        setCount(Math.floor(easeOut * endValue));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(endValue);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, endValue, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-100px' });

  return (
    <section id="about" className="about-section" style={styles.section} ref={sectionRef}>
      {/* Background Image & Overlay */}
      <div style={styles.bgImageContainer}>
        <img
          src={chairBg}
          alt="Advanced Dental Clinic Interior"
          style={{
            ...styles.bgImage,
            transform: isInView ? 'scale(1.08)' : 'scale(1)',
            transition: 'transform 8s ease-out'
          }}
        />
        <div style={styles.bgOverlay}></div>
      </div>
      
      <div className="about-content-wrapper" style={styles.contentWrapper}>
        <div className="about-top-content" style={styles.topContent}>
          <div className="about-left-col" style={styles.leftCol}>
            <h2 style={styles.heading}>
              Unveil excellence.<br />
              Discover the Cornerstone<br />
              Smiles difference.
            </h2>
            <p style={styles.description}>
              At Cornerstone Dental Clinic Tamale, we believe that your smile deserves more than just care – it deserves celebration. Our board-certified experts offer a spa-like, comforting experience paired with cutting-edge dental and orthodontic treatments.
            </p>
          </div>
          
          <div className="about-right-col" style={styles.rightCol}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <div style={styles.aboutBadge}>ABOUT US</div>
              <div style={styles.hefraBadge}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px', color: '#4ade80'}}>
                  <path d="M22 11.08V12a10 10 10 0 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                HeFRA Licensed
              </div>
            </div>
          </div>
        </div>

        <div className="about-stats-row" style={styles.statsRow}>
          <div style={styles.statCard}>
            <h3 style={styles.statNumber}><CountUpStat endValue={15} suffix="+" /></h3>
            <p style={styles.statLabel}>Years of excellence</p>
          </div>
          <div style={styles.statCard}>
            <h3 style={styles.statNumber}><CountUpStat endValue={98} suffix="%" /></h3>
            <p style={styles.statLabel}>Patient satisfaction rate</p>
          </div>
          <div style={styles.statCard}>
            <h3 style={styles.statNumber}><CountUpStat endValue={10000} suffix="+" /></h3>
            <p style={styles.statLabel}>Smiles transformed</p>
          </div>
          <div style={styles.statCard}>
            <h3 style={styles.statNumber}><CountUpStat endValue={5} suffix="+" /></h3>
            <p style={styles.statLabel}>Certified experts</p>
          </div>
        </div>

        {/* Insurance Marquee */}
        <div style={styles.insuranceContainer}>
          <p style={styles.insuranceLabel}>Trusted by major health insurance providers</p>
          <div style={styles.marqueeWrapper}>
            <div className="marquee-track" style={{...styles.marqueeTrack, animationDuration: '30s'}}>
              {[...Array(6)].map((_, i) => (
                <React.Fragment key={i}>
                  {insuranceLogos.map((logo, idx) => (
                    <img key={`${i}-${idx}`} src={logo} alt="Accepted Health Insurance" className="insurance-logo-img" />
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    position: 'relative',
    padding: '6rem 4rem',
    color: 'var(--color-white)',
    overflow: 'hidden',
    margin: 0,
    backgroundColor: '#0a2d5c', // deep blue fallback
    display: 'flex',
    flexDirection: 'column',
    minHeight: '700px'
  },
  bgImageContainer: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    zIndex: 1
  },
  bgImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    opacity: 0.9
  },
  bgOverlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(18, 84, 166, 0.7)', // Lighter, vivid blue tint matching theme
    zIndex: 2
  },
  contentWrapper: {
    position: 'relative',
    zIndex: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1
  },
  topContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: '6rem'
  },
  leftCol: {
    maxWidth: '650px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    textAlign: 'left'
  },
  heading: {
    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
    lineHeight: '1.15',
    color: 'var(--color-white)',
    margin: 0,
    letterSpacing: '-0.02em',
    fontWeight: '600'
  },
  description: {
    fontSize: '1.15rem',
    lineHeight: '1.6',
    opacity: 0.85,
    fontWeight: '300', // Lightweight elegant text
    margin: 0
  },
  rightCol: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '0.5rem' // alignment buffer
  },
  aboutBadge: {
    padding: '0.5rem 1.4rem',
    borderRadius: '50px',
    border: '1px solid rgba(255,255,255,0.3)',
    fontSize: '0.85rem',
    fontWeight: '500',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    backdropFilter: 'blur(4px)',
    WebkitBackdropFilter: 'blur(4px)',
  },
  statsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '2rem',
    width: '100%'
  },
  statCard: {
    flex: 1,
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    padding: '2.5rem 1.5rem',
    borderRadius: 'var(--radius-md)',
    border: '1px solid rgba(255,255,255,0.15)',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  },
  statNumber: {
    fontSize: '3.5rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
    lineHeight: '1',
    letterSpacing: '-0.02em',
    color: 'var(--color-white)',
  },
  statLabel: {
    fontSize: '1rem',
    opacity: 0.8,
    margin: 0,
    fontWeight: '400'
  },
  hefraBadge: {
    padding: '0.5rem 1.4rem',
    borderRadius: '50px',
    border: '1px solid rgba(74, 222, 128, 0.4)',
    background: 'rgba(74, 222, 128, 0.1)',
    color: '#fff',
    fontSize: '0.85rem',
    fontWeight: '600',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    backdropFilter: 'blur(4px)',
    WebkitBackdropFilter: 'blur(4px)',
  },
  insuranceContainer: {
    marginTop: '6rem',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    paddingTop: '3rem'
  },
  insuranceLabel: {
    fontSize: '0.9rem',
    color: 'rgba(255,255,255,0.6)',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '2rem',
    fontWeight: '500'
  },
  marqueeWrapper: {
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
    WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
  },
  marqueeTrack: {
    display: 'flex',
    gap: '6rem',
    paddingRight: '6rem',
    alignItems: 'center'
  },
  insuranceLogo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    fontSize: '1.4rem',
    fontWeight: '700',
    color: 'rgba(255,255,255,0.4)',
    fontFamily: '"Inter", sans-serif',
    whiteSpace: 'nowrap',
  }
};
