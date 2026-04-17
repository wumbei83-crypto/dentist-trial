import React from 'react';
import ClinicExperts from '../../assets/clinic-experts.webp';

export default function SpecialistsSection() {
  return (
    <section id="specialist" style={styles.section}>
      <div style={styles.header}>
        <div style={styles.titleArea}>
          <h2 style={styles.heading}>
            The experts behind<br/>your confident smile
          </h2>
        </div>
        <p style={styles.desc}>
          Our clinic is home to a dedicated team of fully qualified, licensed,<br/>
          and registered professionals, offering an unparalleled standard<br/>
          of comprehensive in-house dental care.
        </p>
      </div>

      <div style={styles.singleSpecialistContainer}>
        <div style={styles.imageColumn}>
          <div style={styles.imgWrapper}>
            {/* Real clinic photo of dentist and patient */}
            <img 
              src={ClinicExperts} 
              alt="Our experts at work" 
              style={styles.singleImg} 
            />
          </div>
          <div style={styles.awardPlaque}>
            <div style={styles.awardIconWrapper}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
            <div style={styles.awardContent}>
              <span style={styles.awardKicker}>Award Winner</span>
              <span style={styles.awardTitle}>Best Dental Services<br/>in Tamale</span>
              <span style={{ fontSize: '0.8rem', fontWeight: '500', color: 'var(--color-text-dark)', opacity: 0.7, marginTop: '0.3rem' }}>
                Northern Ghana Business Merit Awards
              </span>
            </div>
          </div>
        </div>
        
        <div style={styles.infoColumn}>
          <span style={styles.roleBadgeSingle}>Our Expertise</span>
          <h3 style={styles.drNameSingle}>Qualified & Licensed Team</h3>
          <p style={styles.drDescSingle}>
            We pride ourselves on offering complete, state-of-the-art dental care all under one roof. Our multidisciplinary team ensures every diagnosis and treatment is handled by experienced, locally registered experts who combine unmatched precision with genuine empathy and care.
          </p>
          <p style={styles.drYearsSingle}>Setting a standard of excellence</p>
          
          <ul style={styles.specialtiesList}>
            <li style={styles.specialtyItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={styles.checkIcon}>
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Fully Certified Practitioners
            </li>
            <li style={styles.specialtyItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={styles.checkIcon}>
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Comprehensive In-House Care
            </li>
            <li style={styles.specialtyItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={styles.checkIcon}>
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Locally & Nationally Registered
            </li>
          </ul>

          <button 
            className="btn btn-primary mobile-reduce-btn" 
            style={{marginTop: '2.5rem', padding: '1rem 2rem', borderRadius: '50px', fontSize: '1.05rem', boxShadow: '0 8px 24px rgba(18, 84, 166, 0.3)'}}
            onClick={() => {
              const section = document.getElementById('contact');
              if (section) section.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Learn more about our practice →
          </button>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '6rem 4rem',
    backgroundColor: 'var(--color-white)',
    position: 'relative',
    borderRadius: 0,
    borderTop: '1px solid #e4eaf2',
    borderBottom: '1px solid #e4eaf2'
  },
  header: {
    marginBottom: '4rem',
    position: 'relative'
  },
  titleArea: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '1rem',
    marginBottom: '1rem'
  },
  heading: {
    fontSize: '3rem',
    color: 'var(--color-text-dark)',
  },
  desc: {
    fontSize: '1.1rem',
    color: 'var(--color-text-dark)',
    opacity: 0.8,
    maxWidth: '600px',
    marginBottom: '2rem'
  },
  singleSpecialistContainer: {
    display: 'flex',
    gap: '4rem',
    marginBottom: '4rem',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  imageColumn: {
    flex: '1',
    minWidth: '320px',
    position: 'relative',
    maxWidth: '450px'
  },
  imgWrapper: {
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 25px 50px rgba(10,58,120,0.15)',
    height: '550px',
    width: '100%'
  },
  singleImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block'
  },
  awardPlaque: {
    position: 'absolute',
    bottom: '-1.5rem',
    right: '-1rem',
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    padding: '1.2rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
    maxWidth: '340px',
    border: '1px solid rgba(255,255,255,0.8)',
    zIndex: 5
  },
  awardIconWrapper: {
    background: 'var(--color-light-bg)',
    borderRadius: '50%',
    width: '48px',
    height: '48px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0
  },
  awardContent: {
    display: 'flex',
    flexDirection: 'column'
  },
  awardKicker: {
    fontSize: '0.75rem',
    fontWeight: '700',
    color: 'var(--color-primary-light)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  },
  awardTitle: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: 'var(--color-text-dark)',
    lineHeight: '1.3'
  },
  infoColumn: {
    flex: '1',
    minWidth: '300px'
  },
  roleBadgeSingle: {
    display: 'inline-block',
    background: 'var(--color-light-bg)',
    color: 'var(--color-primary-dark)',
    padding: '0.5rem 1rem',
    borderRadius: '30px',
    fontSize: '0.85rem',
    fontWeight: '600',
    marginBottom: '1rem'
  },
  drNameSingle: {
    fontSize: '2.5rem',
    fontWeight: '600',
    color: 'var(--color-text-dark)',
    marginBottom: '1rem',
    letterSpacing: '-0.02em'
  },
  drDescSingle: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: 'var(--color-text-dark)',
    opacity: 0.8,
    marginBottom: '1.5rem'
  },
  drYearsSingle: {
    fontSize: '0.95rem',
    fontWeight: '500',
    color: 'var(--color-primary)',
    marginBottom: '2rem'
  },
  specialtiesList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    color: 'var(--color-text-dark)'
  },
  specialtyItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    fontSize: '1.05rem',
    fontWeight: '500'
  },
  checkIcon: {
    color: 'var(--color-primary-light)'
  }
};
