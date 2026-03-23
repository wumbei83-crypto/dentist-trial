import React from 'react';
import logoImg from '../../assets/logo.png';

const navLinks = [
  { label: 'About us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Specialists', href: '#specialists' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const legalLinks = [
  'Privacy policy',
  'Terms of service',
  'Patient consent & disclaimer',
];

export default function Footer() {
  return (
    <footer style={styles.footer}>
      {/* Main grid row */}
      <div className="footer-main" style={styles.main}>

        {/* Column 1 — Logo */}
        <div style={styles.logoCol}>
          <div style={{...styles.logoMark, backgroundColor: 'transparent'}}>
            <img src={logoImg} alt="Cornerstone Dental Logo" style={{ width: '40px', height: '40px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
          </div>
          <div>
            <p style={styles.logoName}>Cornerstone</p>
            <p style={styles.logoSub}>Dental Clinic</p>
          </div>
        </div>

        {/* Column 2 — Navigation */}
        <nav style={styles.navCol}>
          {navLinks.map(link => (
            <a key={link.label} href={link.href} style={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Column 3 — Contact Us */}
        <div style={styles.infoCol}>
          <p style={styles.colHeading}>CONTACT US</p>
          <a href="tel:0372098267" style={styles.infoText}>037 209 8267</a>
          <a href="tel:0244791435" style={styles.infoText}>024 479 1435</a>
          <a href="mailto:cornerstonedentalpr@gmail.com" style={styles.infoText}>
            cornerstonedentalpr@gmail.com
          </a>
          <p style={styles.infoTextPlain}>Tamale, Northern Region,<br />Ghana</p>
        </div>

        {/* Column 4 — Visit Hours */}
        <div style={styles.infoCol}>
          <p style={styles.colHeading}>VISIT HOURS</p>
          <p style={styles.infoTextPlain}>Mon – Sat: 8:00 AM – 5:00 PM</p>
          <p style={styles.infoTextPlain}>Sunday: Closed</p>
        </div>

        {/* Column 5 — Follow Us */}
        <div style={styles.infoCol}>
          <p style={styles.colHeading}>FOLLOW US</p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialLink}
          >
            <svg width="16" height="16" fill="white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            <span>Instagram</span>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialLink}
          >
            <svg width="16" height="16" fill="white" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            <span>Facebook</span>
          </a>
        </div>

      </div>

      {/* Divider */}
      <div style={styles.divider} />

      {/* Bottom bar */}
      <div className="footer-bottom" style={styles.bottom}>
        <p style={styles.copyright}>
          © {new Date().getFullYear()} Cornerstone Dental Clinic. All rights reserved.
        </p>
        <div style={styles.legalLinks}>
          {legalLinks.map((item, i) => (
            <React.Fragment key={item}>
              <a href="#" style={styles.legalLink}>{item}</a>
              {i < legalLinks.length - 1 && <span style={styles.legalDot}>·</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Developer Signature */}
      <div style={styles.signatureBar}>
        <p style={styles.signatureText}>
          Designed & Developed by <span style={styles.signatureBrand}>ConnectHub Digital Solutions</span>
        </p>
        <div style={styles.signatureContacts}>
          <a href="tel:+233247647014" style={styles.signatureLink}>+233 (0)24 764 7014</a>
          <span style={styles.signatureDot}>|</span>
          <a href="tel:+233557600439" style={styles.signatureLink}>+233 (0)55 760 0439</a>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#1555a6',
    padding: '3.5rem 4rem 2rem 4rem',
    color: '#ffffff',
    borderRadius: '0 0 30px 30px', // matches the outer-tint-frame inner rounding
  },
  main: {
    display: 'flex',
    gap: '3rem',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    marginBottom: '3rem',
  },
  logoCol: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.9rem',
    minWidth: '160px',
    flex: '0 0 auto',
  },
  logoMark: {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255,255,255,0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  logoName: {
    margin: 0,
    fontWeight: '700',
    fontSize: '1rem',
    lineHeight: '1.2',
  },
  logoSub: {
    margin: 0,
    fontWeight: '400',
    fontSize: '0.85rem',
    opacity: 0.75,
  },
  navCol: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '0.5rem 2rem',
    flex: '1',
    alignItems: 'center',
    paddingTop: '0.3rem',
  },
  navLink: {
    color: 'rgba(255,255,255,0.85)',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: '500',
    transition: 'color 0.2s ease',
    whiteSpace: 'nowrap',
  },
  infoCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
    minWidth: '160px',
  },
  colHeading: {
    margin: '0 0 0.6rem 0',
    fontWeight: '700',
    fontSize: '0.75rem',
    letterSpacing: '1.5px',
    opacity: 0.65,
    textTransform: 'uppercase',
  },
  infoText: {
    color: 'rgba(255,255,255,0.9)',
    textDecoration: 'none',
    fontSize: '0.95rem',
    margin: 0,
    transition: 'opacity 0.2s ease',
  },
  infoTextPlain: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: '0.95rem',
    margin: 0,
    lineHeight: '1.5',
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    color: 'rgba(255,255,255,0.9)',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: '500',
    transition: 'opacity 0.2s ease',
  },
  divider: {
    width: '100%',
    height: '1px',
    backgroundColor: 'rgba(255,255,255,0.15)',
    margin: '0 0 1.5rem 0',
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  copyright: {
    margin: 0,
    fontSize: '0.85rem',
    opacity: 0.6,
  },
  legalLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
  },
  legalLink: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: '0.82rem',
    textDecoration: 'none',
    transition: 'opacity 0.2s ease',
  },
  legalDot: {
    color: 'rgba(255,255,255,0.3)',
    fontSize: '0.75rem',
  },
  signatureBar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    marginTop: '2rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid rgba(255,255,255,0.08)',
  },
  signatureText: {
    margin: 0,
    fontSize: '0.75rem',
    color: 'rgba(255,255,255,0.4)',
    letterSpacing: '0.5px',
  },
  signatureBrand: {
    color: 'rgba(255,255,255,0.7)',
    fontWeight: '500',
  },
  signatureContacts: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
  },
  signatureLink: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: '0.75rem',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
  },
  signatureDot: {
    color: 'rgba(255,255,255,0.2)',
    fontSize: '0.7rem',
  },
};
