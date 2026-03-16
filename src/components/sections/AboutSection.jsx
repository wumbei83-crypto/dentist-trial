import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.topRow}>
        <div style={styles.headingCol}>
          <h2 style={styles.heading}>
            Unveil excellence.<br />
            Discover the Cornerstone<br />
            Dental Clinic difference.
          </h2>
        </div>
        <div style={styles.textCol}>
          <p style={styles.description}>
            <span style={{fontWeight: 'bold'}}>ABOUT US</span><br/><br/>
            At Cornerstone Dental Clinic in Tamale - Ghana, we believe that your smile deserves more than just care – it deserves celebration. Our board-certified experts offer a spa-like, comforting experience paired with cutting-edge dental and orthodontic treatments.
          </p>
        </div>
      </div>
      
      {/* Background image overlay or pattern can go here */}
      <div style={styles.bgImagePlaceholder}>
          {/* We'll use a CSS gradient that simulates the blue room mockup for now */}
      </div>

      <div style={styles.statsRow}>
        <div style={styles.statCard}>
          <h3 style={styles.statNumber}>15+</h3>
          <p style={styles.statLabel}>Years of excellence</p>
        </div>
        <div style={styles.statCard}>
          <h3 style={styles.statNumber}>98%</h3>
          <p style={styles.statLabel}>Patient satisfaction rate</p>
        </div>
        <div style={styles.statCard}>
          <h3 style={styles.statNumber}>5000+</h3>
          <p style={styles.statLabel}>Smiles transformed</p>
        </div>
        <div style={styles.statCard}>
          <h3 style={styles.statNumber}>17</h3>
          <p style={styles.statLabel}>Certified experts</p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    position: 'relative',
    padding: '6rem 4rem',
    backgroundColor: 'var(--color-primary)', // The About Us section uses the mid-blue usually, or dark blue canvas
    color: 'var(--color-white)',
    overflow: 'hidden',
    borderRadius: 'var(--radius-xl)', // Optional: match the card aesthetic
    margin: '2rem 0',
    background: 'linear-gradient(180deg, #1764c0 0%, #104c94 100%)'
  },
  topRow: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    zIndex: 2,
    marginBottom: '15rem' // room for the background chair image
  },
  headingCol: {
    flex: 1,
    paddingRight: '2rem'
  },
  heading: {
    fontSize: '3.5rem',
    lineHeight: '1.2',
    color: 'var(--color-white)',
    margin: 0,
    letterSpacing: '-0.02em'
  },
  textCol: {
    flex: 1,
    maxWidth: '500px',
    display: 'flex',
    justifyContent: 'flex-end',
    textAlign: 'left'
  },
  description: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    opacity: 0.9
  },
  bgImagePlaceholder: {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80%',
    height: '60%',
    // In missing the dental chair image, using a placeholder subtle silhouette gradient
    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
    zIndex: 1,
    pointerEvents: 'none'
  },
  statsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '2rem',
    position: 'relative',
    zIndex: 2
  },
  statCard: {
    flex: 1,
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    padding: '2rem',
    borderRadius: 'var(--radius-md)',
    border: '1px solid rgba(255,255,255,0.15)',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
  },
  statNumber: {
    fontSize: '3rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
    color: 'var(--color-white)',
  },
  statLabel: {
    fontSize: '1.1rem',
    opacity: 0.9,
    margin: 0
  }
};
