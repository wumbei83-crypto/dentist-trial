import React from 'react';

const specialists = [
  { id: 1, name: 'Dr. David Wilson', role: 'Orthodontist', desc: 'Specialist in root canal treatments, combining precision and comfort.', years: '2016', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop' },
  { id: 2, name: 'Dr. Emma Robinson', role: 'Esthetician', desc: 'Crafts aesthetic transformations with veneers and cosmetic care.', years: '2016', img: 'https://images.unsplash.com/photo-1594824436998-dabc82b6c7c4?w=400&h=500&fit=crop' },
  { id: 3, name: 'Dr. Sophia Turner', role: 'Endodontist', desc: 'Specialist in root canal treatments, combining precision and comfort.', years: '2012', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop' }
];

export default function SpecialistsSection() {
  return (
    <section id="specialists" style={styles.section}>
      <div style={styles.header}>
        <div style={styles.titleArea}>
          <h2 style={styles.heading}>
            Meet the minds<br/>behind your smile
          </h2>
          <div style={styles.badgeLine}>
            <span>👨‍⚕️👩‍⚕️👨‍⚕️ +14</span>
          </div>
        </div>
        <p style={styles.desc}>
          Our team of dedicated professionals brings precision, empathy,<br/>
          and artistry to every treatment — combining years of experience<br/>
          with a shared passion for truly personalized care.
        </p>
        <button className="btn btn-outline" style={styles.viewAllBtn}>
          View all specialists →
        </button>
      </div>

      <div style={styles.specialistsGrid}>
        {specialists.map(dr => (
          <div key={dr.id} style={styles.card}>
            <div style={styles.imgContainer}>
              <span style={styles.roleBadge}>{dr.role}</span>
              <img src={dr.img} alt={dr.name} style={styles.img} />
            </div>
            <div style={styles.cardInfo}>
              <h3 style={styles.drName}>{dr.name}</h3>
              <p style={styles.drDesc}>{dr.desc}</p>
              <p style={styles.drYears}>Practicing since {dr.years}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pricing Widgets block */}
      <div style={styles.widgetsRow}>
        <div style={styles.widgetCard}>
          <h4 style={styles.widgetTitle}>Estimated cost range</h4>
          <div style={styles.progressBar}>
            <div style={{...styles.progressFill, width: '40%'}}></div>
          </div>
          <div style={styles.widgetFooter}>
            <span style={styles.widgetSub}>$500</span>
            <span style={styles.widgetSub}>$25000</span>
          </div>
          <p style={styles.widgetMainValue}>$2,400 - $4,900*</p>
          <p style={styles.widgetDisclaimer}>*Estimate only. Final cost in clinic</p>
        </div>

        <div style={styles.widgetCard}>
          <h4 style={styles.widgetTitle}>Treatment complexity</h4>
          <div style={styles.arcContainer}>
            {/* SVG Arc for complexity gauge */}
            <svg viewBox="0 0 100 50" style={{width: '100%', height: 'auto', stroke: 'var(--color-primary-light)', strokeWidth: 8, fill: 'none', strokeLinecap: 'round'}}>
              <path d="M 10 45 A 40 40 0 0 1 90 45" stroke="rgba(0,0,0,0.1)" />
              <path d="M 10 45 A 40 40 0 0 1 65 15" />
            </svg>
            <div style={styles.arcValue}>
                <span style={{fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-text-dark)'}}>68%</span><br/>
                <span style={{fontSize: '0.75rem', color: 'var(--color-text-muted)'}}>Estimation only</span>
            </div>
          </div>
          <div style={styles.widgetFooterArc}>
            <span>0%</span>
            <span>100%</span>
          </div>
        </div>

        <div style={styles.widgetCard}>
          <h4 style={styles.widgetTitle}>Treatment time (est.)</h4>
          <div style={styles.blocksContainer}>
            {[1,2,3,4,5,6,7,8].map(b => (
              <div key={b} style={{...styles.timeBlock, background: b <= 3 ? 'var(--color-primary-light)' : 'rgba(0,0,0,0.05)'}}></div>
            ))}
          </div>
          <p style={{...styles.widgetMainValue, marginTop: '2.5rem'}}>3 week</p>
          <p style={styles.widgetDisclaimer}>Subject to consultation</p>
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
    borderRadius: 'max(0px, min(var(--radius-xl), calc((100vw - 4px - 100%) * 9999)))'
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
  badgeLine: {
    background: 'var(--color-light-bg)',
    padding: '0.2rem 0.8rem',
    borderRadius: '30px',
    fontSize: '0.9rem',
    fontWeight: '600',
    color: 'var(--color-primary-dark)'
  },
  desc: {
    fontSize: '1.1rem',
    color: 'var(--color-text-dark)',
    opacity: 0.8,
    maxWidth: '600px',
    marginBottom: '2rem'
  },
  viewAllBtn: {
    padding: '0.8rem 1.5rem',
    borderRadius: '30px',
    fontWeight: '500'
  },
  specialistsGrid: {
    display: 'flex',
    gap: '2rem',
    marginBottom: '6rem',
    overflowX: 'auto',
    paddingBottom: '1rem'
  },
  card: {
    flex: 1,
    minWidth: '280px',
    backgroundColor: 'var(--color-white)',
    border: '1px solid rgba(0,0,0,0.05)',
    borderRadius: 'var(--radius-md)',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
  },
  imgContainer: {
    position: 'relative',
    height: '350px'
  },
  roleBadge: {
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    background: 'rgba(255,255,255,0.9)',
    padding: '0.4rem 0.8rem',
    borderRadius: '4px',
    fontSize: '0.75rem',
    fontWeight: '600',
    zIndex: 2,
    color: 'var(--color-text-dark)'
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  cardInfo: {
    padding: '1.5rem',
    background: 'var(--color-primary-dark)',
    color: 'var(--color-white)'
  },
  drName: {
    fontSize: '1.25rem',
    marginBottom: '0.5rem',
    color: 'var(--color-white)'
  },
  drDesc: {
    fontSize: '0.9rem',
    lineHeight: '1.5',
    opacity: 0.8,
    marginBottom: '1rem'
  },
  drYears: {
    fontSize: '0.75rem',
    opacity: 0.6
  },
  widgetsRow: {
    display: 'flex',
    gap: '2rem',
    marginTop: '-4rem', // overlap slightly with specialists bottom margin
    padding: '0 2rem'
  },
  widgetCard: {
    flex: 1,
    background: 'var(--color-white)',
    borderRadius: 'var(--radius-md)',
    padding: '2rem',
    boxShadow: '0 20px 40px rgba(18,84,166,0.08)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative'
  },
  widgetTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '2rem',
    color: 'var(--color-text-dark)'
  },
  progressBar: {
    width: '100%',
    height: '12px',
    background: 'var(--color-light-bg)',
    borderRadius: '6px',
    overflow: 'hidden',
    marginBottom: '0.5rem'
  },
  progressFill: {
    height: '100%',
    background: 'var(--color-primary-light)'
  },
  widgetFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '2rem'
  },
  widgetSub: {
    fontSize: '0.75rem',
    color: 'var(--color-text-muted)',
    fontWeight: '500'
  },
  widgetMainValue: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: 'var(--color-text-dark)',
    marginBottom: '0.5rem'
  },
  widgetDisclaimer: {
    fontSize: '0.75rem',
    color: 'var(--color-text-muted)'
  },
  arcContainer: {
    position: 'relative',
    width: '150px',
    height: '80px',
    marginBottom: '1rem'
  },
  arcValue: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center'
  },
  widgetFooterArc: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
    fontSize: '0.75rem',
    color: 'var(--color-text-muted)',
    marginTop: '-0.5rem'
  },
  blocksContainer: {
    display: 'flex',
    gap: '4px',
    width: '100%',
    marginBottom: '1rem'
  },
  timeBlock: {
    flex: 1,
    height: '24px',
    borderRadius: '4px'
  }
};
