import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import contactBg from '../../assets/contact-bg.png';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-100px' });

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // immediate override
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = `*New Contact Inquiry*
    
Name: ${formData.name}
Phone: ${formData.phone || 'Not provided'}
Email: ${formData.email || 'Not provided'}

Message:
${formData.message}`;

    const whatsappUrl = `https://wa.me/233244791435?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section" style={{...styles.section, padding: isMobile ? '4rem 1.5rem' : '6rem 4rem'}} ref={sectionRef}>

      {/* Background image + blue overlay — identical approach to AboutSection */}
      <div style={styles.bgContainer}>
        <img
          src={contactBg}
          alt="Cornerstone Dental Clinic interior"
          style={{
            ...styles.bgImage,
            transform: isInView ? 'scale(1.08)' : 'scale(1)',
            transition: 'transform 8s ease-out'
          }}
        />
        <div style={styles.bgOverlay} />
      </div>

      {/* Content */}
      <div style={styles.contentWrapper}>

        {/* Top row: heading on the left, badge on the right */}
        <div style={{...styles.topRow, flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '1.5rem' : '0'}}>
          <div style={styles.topLeft}>
            <h2 style={styles.heading}>
              Get in touch.<br />
              We're here<br />
              for your smile.
            </h2>
            <p style={styles.subheading}>
              Reach out to book an appointment, ask a question, or simply say hello.<br />
              Our team is happy to assist you every step of the way.
            </p>
          </div>
          <div style={styles.topRight}>
            <div style={styles.badge}>CONTACT US</div>
          </div>
        </div>

        {/* Bottom row: form (left) | info + map (right) */}
        <div className="contact-bottom-row" style={{...styles.bottomRow, flexDirection: isMobile ? 'column' : 'row'}}>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={styles.formCard}
          >
            <h3 style={styles.cardTitle}>Send us a message</h3>
            <form onSubmit={handleSubmit} style={styles.form}>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
                style={styles.input}
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                style={styles.input}
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                style={styles.input}
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                rows={4}
                required
                style={{ ...styles.input, resize: 'vertical', minHeight: '110px' }}
              />
              <motion.button
                type="submit"
                style={styles.submitBtn}
                whileHover={{ scale: 1.03, boxShadow: '0 10px 28px rgba(255,255,255,0.2)' }}
              >
                {sent ? '✓ Message sent!' : 'Send message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Info cards + Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{...styles.infoCol, width: isMobile ? '100%' : 'auto'}}
          >
            {/* Info cards */}
            <div style={styles.infoCards}>
              {/* Hours */}
              <div style={{...styles.infoCard, padding: isMobile ? '1rem' : '1.2rem 1.5rem'}}>
                <div style={styles.iconCircle}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <p style={styles.infoLabel}>Working Hours</p>
                  <p style={styles.infoValue}>Monday – Saturday</p>
                  <p style={styles.infoValue}>8:00 am – 5:00 pm</p>
                </div>
              </div>

              {/* Phone */}
              <div style={styles.infoCard}>
                <div style={styles.iconCircle}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.21 3a2 2 0 012.18-2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p style={styles.infoLabel}>Phone Numbers</p>
                  <a href="tel:0372098267" style={styles.infoLink}>037 209 8267</a>
                  <a href="tel:0244791435" style={styles.infoLink}>024 479 1435</a>
                </div>
              </div>

              {/* Email */}
              <div style={styles.infoCard}>
                <div style={styles.iconCircle}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p style={styles.infoLabel}>Email Address</p>
                  <a href="mailto:cornerstonedentalpr@gmail.com" style={styles.infoLink}>
                    cornerstonedentalpr@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map — searches directly for Cornerstone Dental Clinic Tamale */}
            <div style={styles.mapWrapper}>
              <iframe
                title="Cornerstone Dental Clinic Tamale Location"
                src="https://maps.google.com/maps?q=Cornerstone+Dental+Clinic+Tamale+Ghana&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '16px', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    position: 'relative',
    padding: '6rem 4rem',
    color: '#ffffff',
    overflow: 'hidden',
    margin: 0,
    backgroundColor: '#0a2d5c',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '780px',
    borderRadius: 0
  },
  bgContainer: {
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
    backgroundColor: 'rgba(18, 84, 166, 0.72)',
    zIndex: 2
  },
  contentWrapper: {
    position: 'relative',
    zIndex: 3,
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    gap: '4rem'
  },
  topRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%'
  },
  topLeft: {
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem'
  },
  topRight: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '0.5rem'
  },
  badge: {
    padding: '0.5rem 1.4rem',
    borderRadius: '50px',
    border: '1px solid rgba(255,255,255,0.3)',
    fontSize: '0.85rem',
    fontWeight: '500',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    backdropFilter: 'blur(4px)',
    WebkitBackdropFilter: 'blur(4px)'
  },
  heading: {
    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
    lineHeight: '1.15',
    fontWeight: '600',
    margin: 0,
    letterSpacing: '-0.02em'
  },
  subheading: {
    fontSize: '1.1rem',
    opacity: 0.85,
    lineHeight: '1.6',
    fontWeight: '300',
    margin: 0
  },
  bottomRow: {
    display: 'flex',
    gap: '3rem',
    alignItems: 'flex-start'
  },
  formCard: {
    flex: '1',
    background: 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
    borderRadius: '20px',
    border: '1px solid rgba(255,255,255,0.18)',
    padding: '2.5rem'
  },
  cardTitle: {
    fontSize: '1.4rem',
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: '2rem',
    marginTop: 0
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem'
  },
  input: {
    width: '100%',
    padding: '0.9rem 1.2rem',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.25)',
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: '#ffffff',
    fontSize: '1rem',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    '::placeholder': { color: 'rgba(255,255,255,0.5)' }
  },
  submitBtn: {
    marginTop: '0.5rem',
    padding: '1rem',
    borderRadius: '50px',
    background: 'rgba(255,255,255,0.95)',
    color: '#0a3a78',
    fontWeight: '700',
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
    letterSpacing: '0.5px',
    transition: 'all 0.3s ease'
  },
  infoCol: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  infoCards: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  infoCard: {
    display: 'flex',
    gap: '1.2rem',
    alignItems: 'flex-start',
    background: 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
    borderRadius: '16px',
    border: '1px solid rgba(255,255,255,0.18)',
    padding: '1.2rem 1.5rem'
  },
  iconCircle: {
    width: '42px',
    height: '42px',
    minWidth: '42px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255,255,255,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoLabel: {
    fontSize: '0.78rem',
    fontWeight: '600',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    opacity: 0.7,
    margin: '0 0 0.4rem 0'
  },
  infoValue: {
    margin: '0.1rem 0',
    fontSize: '1rem',
    fontWeight: '500'
  },
  infoLink: {
    display: 'block',
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    margin: '0.1rem 0',
    opacity: 0.95
  },
  mapWrapper: {
    width: '100%',
    height: '260px',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 16px 40px rgba(0,0,0,0.25)',
    border: '1px solid rgba(255,255,255,0.18)'
  }
};
