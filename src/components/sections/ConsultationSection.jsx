import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import jawAsset from '../../assets/booking-asset-3.webp';
import toothAsset from '../../assets/booking-asset-4.webp';

const PulseRing = ({ delay = 0, size = "300px" }) => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: [0.8, 1.2, 1.5], opacity: [0, 0.4, 0] }}
    transition={{ duration: 4, repeat: Infinity, delay: delay, ease: "easeOut" }}
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: size,
      height: size,
      marginTop: `-${parseInt(size) / 2}px`,
      marginLeft: `-${parseInt(size) / 2}px`,
      borderRadius: '50%',
      backgroundColor: 'rgba(21, 85, 166, 0.05)',
      border: '2px solid rgba(21, 85, 166, 0.1)',
      zIndex: 0
    }}
  />
);

export default function ConsultationSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    reason: '',
    date: '',
    time: '',
    provider: ''
  });
  const [useInsurance, setUseInsurance] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter your name and phone number.");
      return;
    }

    const insuranceText = useInsurance === 'yes' ? `Yes (${formData.provider || 'Provider not selected'})` : (useInsurance === 'no' ? 'No (Self-paying)' : 'Not specified');
    const message = `Hello Cornerstone Dental! I would like to book a consultation.
    
*Details:*
- Name: ${formData.name}
- Phone: ${formData.phone}
- Reason: ${formData.reason || 'Not specified'}
- Date: ${formData.date || 'Not specified'}
- Time: ${formData.time || 'Not specified'}
- Insurance: ${insuranceText}`;

    const whatsappUrl = `https://wa.me/233244791435?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setIsSuccess(true);
  };

  useEffect(() => {
    const checkStatus = () => {
      // Ghana is GMT+0 year-round. Get current hour and day in UTC.
      const now = new Date();
      const currentHour = now.getUTCHours();
      const currentDay = now.getUTCDay(); // 0 is Sunday, 1 is Monday...
      
      // Open Monday (1) to Saturday (6), from 8 AM to 4:59 PM.
      const isWorkingDay = currentDay !== 0;
      const isWorkingHour = currentHour >= 8 && currentHour < 17;
      
      setIsOpen(isWorkingDay && isWorkingHour);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="consultation" className="consultation-section" style={styles.section}>
      <div style={{
        position: 'absolute',
        top: '2.5rem',
        right: '2.5rem',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        zIndex: 50
      }}>
        <motion.div 
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: isOpen ? '#22c55e' : '#ef4444',
            boxShadow: isOpen ? '0 0 8px rgba(34, 197, 94, 0.6)' : '0 0 8px rgba(239, 68, 68, 0.6)'
          }}
          animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <span style={{ 
          fontSize: '0.7rem', 
          fontWeight: '500', 
          color: isOpen ? '#15803d' : '#b91c1c', 
          letterSpacing: '0.05em', 
          textTransform: 'uppercase' 
        }}>
          {isOpen ? 'Now Open' : 'Closed'}
        </span>
      </div>

      {/* Left Decor Container */}
      <div className="left-decor" style={styles.leftDecor}>
        <PulseRing delay={0} size="450px" />
        <PulseRing delay={2} size="450px" />
        <motion.img
          src={jawAsset}
          alt="Upper and Lower Jaw Structure"
          style={styles.jawImg}
          initial={{ y: 0, rotate: -15 }}
          animate={{ y: [-15, 15, -15], rotate: [-15, -10, -15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Right Decor Container */}
      <div className="right-decor" style={styles.rightDecor}>
        <PulseRing delay={0} size="450px" />
        <PulseRing delay={2} size="450px" />
        <motion.img
          src={toothAsset}
          alt="Dental Tooth Structure"
          style={styles.toothImg}
          initial={{ y: 0, rotate: 18 }}
          animate={{ y: [-15, 15, -15], rotate: [18, 22, 18] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div style={styles.content}>
        <div style={styles.header}>
          <span style={styles.kicker}>Consultation</span>
          <h2 className="section-title" style={styles.title}>Book your first step</h2>
          <p style={styles.subtitle}>
            Choose your preferred date, treatment type,<br className="mobile-hide-br" />
            and we'll handle the rest.
          </p>
        </div>

        {isSuccess ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            style={{ textAlign: 'center', padding: '3rem 0' }}
          >
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 style={{ fontSize: '2rem', color: '#0a3a78', marginBottom: '1rem' }}>Booking Request Sent!</h3>
            <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: '1.6' }}>
              Thank you, <strong style={{color: '#0a3a78'}}>{formData.name}</strong>. We've safely redirected you to WhatsApp to confirm your appointment.<br/><br/>
              Our patient care team will reply to you shortly!
            </p>
            <motion.button 
              onClick={() => { setIsSuccess(false); setFormData({name:'', phone:'', reason:'', date:'', time:'', provider:''}); setUseInsurance(''); }}
              style={{ ...styles.submitBtn, marginTop: '2rem', background: '#e0e6ed', color: '#0a3a78', boxShadow: 'none' }}
              whileHover={{ scale: 1.05 }}
            >
              Book Another Session
            </motion.button>
          </motion.div>
        ) : (
          <form style={styles.formContainer} onSubmit={handleBooking}>
            <div className="form-row" style={styles.formRow}>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your name" style={styles.inputField} />
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Enter your phone number" style={styles.inputField} />
            </div>
            <div className="form-row" style={styles.formRow}>
              <div style={styles.selectWrapper}>
                <select name="reason" value={formData.reason} onChange={handleChange} style={{ ...styles.inputField, appearance: 'none', cursor: 'pointer', color: formData.reason ? '#0a3a78' : '#666' }}>
                  <option value="" disabled>Reason for visit</option>
                  <option value="Tooth Pains">Tooth Pains</option>
                  <option value="Teeth Whitening">Teeth Whitening</option>
                  <option value="Dentures">Dentures</option>
                  <option value="Implant">Implant</option>
                  <option value="Regular Check-up">Regular Check-up</option>
                  <option value="Other">Other</option>
                </select>
                <div style={styles.dropdownIcon}>
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="1 1 6 6 11 1"></polyline>
                  </svg>
                </div>
              </div>
              <div style={styles.selectWrapper}>
                <input type="text" name="date" value={formData.date} onChange={handleChange} placeholder="Date" style={styles.inputField} onFocus={(e) => e.target.type = 'date'} onBlur={(e) => { if (e.target.value === '') e.target.type = 'text' }} />
                <div style={{ ...styles.dropdownIcon, pointerEvents: 'none' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
              </div>
              <div style={styles.selectWrapper}>
                <input type="text" name="time" value={formData.time} onChange={handleChange} placeholder="Time" style={styles.inputField} onFocus={(e) => e.target.type = 'time'} onBlur={(e) => { if (e.target.value === '') e.target.type = 'text' }} />
                <div style={{ ...styles.dropdownIcon, pointerEvents: 'none' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
              </div>
            </div>

          <div className="form-row" style={styles.formRow}>
            <div style={styles.selectWrapper}>
              <select 
                value={useInsurance} 
                onChange={(e) => setUseInsurance(e.target.value)}
                style={{ ...styles.inputField, appearance: 'none', cursor: 'pointer', color: useInsurance ? '#0a3a78' : '#666' }}
              >
                <option value="" disabled>Will you use Insurance?</option>
                <option value="yes">Yes, I will use insurance</option>
                <option value="no">No, I am self-paying</option>
              </select>
              <div style={styles.dropdownIcon}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="1 1 6 6 11 1"></polyline>
                </svg>
              </div>
            </div>

            {useInsurance === 'yes' ? (
              <motion.div 
                initial={{ opacity: 0, x: -10 }} 
                animate={{ opacity: 1, x: 0 }}
                style={styles.selectWrapper}
              >
                <select 
                  name="provider"
                  value={formData.provider}
                  onChange={handleChange}
                  style={{ ...styles.inputField, appearance: 'none', cursor: 'pointer', color: formData.provider ? '#0a3a78' : '#666' }}
                >
                  <option value="" disabled>Select your provider</option>
                  <option value="ace">Ace Medical Insurance</option>
                  <option value="apex">Apex Health Insurance</option>
                  <option value="gab">GAB Health Insurance</option>
                </select>
                <div style={styles.dropdownIcon}>
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="1 1 6 6 11 1"></polyline>
                  </svg>
                </div>
              </motion.div>
            ) : (
              <div style={{ flex: 1 }} className="mobile-hide-flex-placeholder"></div>
            )}
          </div>

          <div className="action-row" style={styles.actionRow}>
            <motion.button
              type="submit"
              style={styles.submitBtn}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(10, 58, 120, 0.4)' }}
            >
              Book Direct
            </motion.button>
            <p className="privacy-text" style={styles.privacyText}>
              By clicking this button you accept <a href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('open-privacy-modal')); }} style={styles.link}>Privacy Policy</a>
            </p>
          </div>
        </form>
        )}
      </div>
    </section>
  );
}

const styles = {
  section: {
    position: 'relative',
    width: '100%',
    padding: '8rem 2rem',
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftDecor: {
    position: 'absolute',
    left: '-6%',
    top: '12%',
    width: '400px',
    height: '400px',
    zIndex: 20,
    pointerEvents: 'none'
  },
  jawImg: {
    position: 'relative',
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    zIndex: 2,
    filter: 'drop-shadow(0px 20px 30px rgba(0,0,0,0.1))'
  },
  rightDecor: {
    position: 'absolute',
    right: '-8%',
    bottom: '10%',
    width: '420px',
    height: '420px',
    zIndex: 20,
    pointerEvents: 'none'
  },
  toothImg: {
    position: 'relative',
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    zIndex: 2,
    filter: 'drop-shadow(0px 20px 30px rgba(0,0,0,0.1))'
  },
  content: {
    position: 'relative',
    zIndex: 10,
    width: '100%',
    maxWidth: '750px',
    margin: '0 auto',
    backgroundColor: 'rgba(255,255,255,0.7)',
    backdropFilter: 'blur(5px)',
    padding: '2rem',
    borderRadius: '24px'
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem'
  },
  kicker: {
    fontSize: '0.8rem',
    fontWeight: '700',
    color: '#84b4e3',
    letterSpacing: '0.05em',
    textTransform: 'uppercase'
  },
  title: {
    fontSize: '3.2rem',
    fontWeight: '600',
    color: '#0a3a78',
    margin: '0.5rem 0 0.8rem 0',
    letterSpacing: '-0.02em'
  },
  subtitle: {
    color: '#333',
    fontSize: '1.05rem',
    margin: '0 auto',
    lineHeight: '1.5',
    fontWeight: '400'
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem'
  },
  formRow: {
    display: 'flex',
    gap: '2.5rem',
    width: '100%'
  },
  inputField: {
    flex: 1,
    border: 'none',
    borderBottom: '2px solid #e0e6ed',
    padding: '0.6rem 0',
    fontSize: '1.05rem',
    color: '#0a3a78',
    backgroundColor: 'transparent',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    width: '100%'
  },
  selectWrapper: {
    flex: 1,
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },
  dropdownIcon: {
    position: 'absolute',
    right: '0',
    pointerEvents: 'none'
  },
  actionRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '0.5rem',
    gap: '2rem'
  },
  submitBtn: {
    background: 'linear-gradient(90deg, #1555a6 0%, #0a3a78 100%)',
    color: 'var(--color-white)',
    padding: '1rem 3.5rem',
    borderRadius: '50px',
    fontWeight: '500',
    fontSize: '1.05rem',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 8px 24px rgba(10, 58, 120, 0.25)',
    whiteSpace: 'nowrap'
  },
  privacyText: {
    fontSize: '0.85rem',
    color: '#888',
    margin: 0,
    textAlign: 'right'
  },
  link: {
    color: '#1555a6',
    textDecoration: 'underline'
  }
};
