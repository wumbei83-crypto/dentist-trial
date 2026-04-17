import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroImage from '../../assets/hero.png';
import logoImg from '../../assets/logo.png';

const searchKnowledgeBase = [
  { title: 'Braces & Clear Aligners', type: 'Service', section: 'services', keywords: ['braces', 'aligners', 'invisalign', 'orthodontics', 'crooked', 'straight'] },
  { title: 'Teeth Whitening', type: 'Service', section: 'services', keywords: ['white', 'whitening', 'yellow', 'stain', 'bleach', 'color'] },
  { title: 'Dental Implants (Titanium)', type: 'Service', section: 'services', keywords: ['implant', 'missing', 'fake teeth', 'crown', 'replace', 'hole'] },
  { title: 'Dental Prosthetics (Dentures)', type: 'Service', section: 'services', keywords: ['dentures', 'prosthetics', 'teeth'] },
  { title: 'Tooth Extraction & Surgery', type: 'Service', section: 'services', keywords: ['pain', 'hurt', 'extract', 'pull', 'wisdom', 'decay', 'surgery'] },
  { title: 'Our Pricing & Insurance', type: 'FAQ', section: 'faq', keywords: ['cost', 'price', 'insurance', 'pay', 'expensive', 'cheap', 'money', 'fee'] },
  { title: 'Opening Hours & Location', type: 'Info', section: 'footer', keywords: ['time', 'open', 'close', 'hours', 'weekend', 'sunday', 'where', 'location', 'address'] },
  { title: 'Contact Support (Emergency)', type: 'Action', section: 'contact', keywords: ['call', 'phone', 'email', 'number', 'whatsapp', 'emergency'] },
  { title: 'Schedule Consultation', type: 'Action', section: 'consultation', keywords: ['book', 'schedule', 'appointment', 'visit', 'consult', 'meet'] },
  { title: 'Our Specialists Team', type: 'Team', section: 'specialist', keywords: ['doctor', 'dentist', 'specialist', 'who', 'expert', 'team'] },
];

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchFocused(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !event.target.closest('.mobile-nav-btn')) {
        setIsMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const searchResults = searchQuery 
    ? searchKnowledgeBase.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.keywords.some(kw => kw.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];
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
        <div className="desktop-search" ref={searchRef} style={styles.searchContainer}>
          <div style={styles.searchInputWrapper}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{position: 'absolute', left: '12px', zIndex: 2}}>
              <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              style={styles.searchInput}
            />
          </div>
          
          <AnimatePresence>
            {isSearchFocused && searchQuery.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                style={styles.searchResultsDropdown}
              >
                {searchResults.length > 0 ? (
                  searchResults.map((item, idx) => (
                    <div 
                      key={idx} 
                      style={styles.searchResultItem}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(10,58,120,0.05)' }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
                      onClick={() => {
                        setIsSearchFocused(false);
                        setSearchQuery('');
                        document.getElementById(item.section)?.scrollIntoView({behavior: 'smooth'});
                      }}
                    >
                      <span style={{fontWeight: '600', color: '#0a3a78'}}>{item.title}</span>
                      <span style={{fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '12px', background: '#e0e6ed', color: '#333'}}>{item.type}</span>
                    </div>
                  ))
                ) : (
                  <div style={{...styles.searchResultItem, justifyContent: 'center', color: '#666', cursor: 'default'}}>
                    No matching results
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <nav className="desktop-nav" style={styles.nav}>
          <a href="#about" style={styles.navLink}>About us</a>
          <a href="#services" style={styles.navLink}>Services</a>
          <a href="#specialist" style={styles.navLink}>Specialists</a>
          <a href="#testimonials" style={styles.navLink}>Testimonials</a>
        </nav>
        <div 
          className="desktop-contact" 
          style={styles.contact}
          onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
        >
          Contact
        </div>
        <button 
          className="mobile-nav-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              style={styles.mobileMenuDropdown}
            >
              {[
                { label: 'About us', id: 'about' },
                { label: 'Services', id: 'services' },
                { label: 'Specialists', id: 'specialist' },
                { label: 'Testimonials', id: 'testimonials' },
                { label: 'FAQ', id: 'faq' },
                { label: 'Contact', id: 'contact' },
              ].map(link => (
                <div
                  key={link.id}
                  style={styles.mobileMenuLink}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    document.getElementById(link.id)?.scrollIntoView({behavior: 'smooth'});
                  }}
                >
                  {link.label}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
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
            <span className="h1-line-1">Your Smile,</span><br className="mobile-hide-br" />
            <span className="h1-line-2">Handled Right.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtext"
            style={styles.subtext}
          >
            We're a premium orthodontic and aesthetic <br className="mobile-hide-br" />
            dental clinic in Tamale - Northern Region of Ghana, crafting<br className="mobile-hide-br" />
            confident smiles for those who settle for nothing ordinary.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              padding: '0.6rem 1.8rem 0.6rem 0.6rem',
              borderRadius: '50px',
              boxShadow: '0 12px 35px rgba(10, 58, 120, 0.08)',
              marginTop: '2.5rem',
              gap: '1.2rem',
              border: '1px solid rgba(255, 255, 255, 1)'
            }}
          >
            <div style={{ display: 'flex' }}>
              {[
                'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=100&h=100&fit=crop',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
                'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=100&h=100&fit=crop',
                'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=100&h=100&fit=crop'
              ].map((src, i) => (
                <img 
                  key={i}
                  src={src} 
                  alt={`Happy client ${i + 1}`} 
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    border: '3px solid #ffffff',
                    marginLeft: i === 0 ? '0' : '-18px',
                    objectFit: 'cover',
                    position: 'relative',
                    zIndex: 4 - i,
                    boxShadow: '0 4px 10px rgba(0,0,0,0.08)'
                  }}
                />
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ fontSize: '1.45rem', fontWeight: '700', color: 'var(--color-primary-dark)', letterSpacing: '-0.02em', lineHeight: '1' }}>10,000+</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b" stroke="none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <span style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--color-text-dark)', opacity: 0.8, marginTop: '0.2rem' }}>Satisfied clients</span>
            </div>
          </motion.div>
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
            className="hero-cta-wrapper"
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
              onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
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
    zIndex: 10,
    position: 'relative'
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
    fontSize: '4.8rem',
    color: 'var(--color-primary-dark)',
    marginBottom: '1rem',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
    fontWeight: '600',
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
  },
  searchContainer: {
    position: 'relative',
    margin: '0 2rem',
    flex: 1,
    maxWidth: '260px',
    zIndex: 50
  },
  searchInputWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },
  searchInput: {
    width: '100%',
    padding: '0.5rem 1rem 0.5rem 2.2rem',
    borderRadius: '50px',
    border: '1px solid rgba(0,0,0,0.08)',
    backgroundColor: 'rgba(255,255,255,0.7)',
    color: '#333',
    fontSize: '0.9rem',
    outline: 'none',
    boxShadow: '0 4px 12px rgba(10,58,120,0.04)',
    transition: 'all 0.3s ease'
  },
  searchResultsDropdown: {
    position: 'absolute',
    top: '120%',
    left: 0,
    width: '100%',
    minWidth: '280px',
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    backdropFilter: 'blur(16px)',
    borderRadius: '16px',
    boxShadow: '0 15px 40px rgba(10,58,120,0.15)',
    border: '1px solid rgba(255,255,255,1)',
    overflow: 'hidden',
    zIndex: 100,
    padding: '0.3rem 0'
  },
  searchResultItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.8rem 1.2rem',
    cursor: 'pointer',
    borderBottom: '1px solid rgba(0,0,0,0.03)',
    transition: 'background 0.2s',
  },
  mobileMenuDropdown: {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    backdropFilter: 'blur(16px)',
    borderTop: '1px solid rgba(0,0,0,0.05)',
    boxShadow: '0 20px 40px rgba(10,58,120,0.15)',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 100,
    padding: '0.5rem 0'
  },
  mobileMenuLink: {
    padding: '1rem 2rem',
    fontSize: '1.05rem',
    fontWeight: '500',
    color: '#0a3a78',
    textDecoration: 'none',
    borderBottom: '1px solid rgba(0,0,0,0.03)',
    cursor: 'pointer'
  }
};
