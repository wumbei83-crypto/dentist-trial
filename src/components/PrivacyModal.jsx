import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PrivacyModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-privacy-modal', handleOpen);
    return () => window.removeEventListener('open-privacy-modal', handleOpen);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={styles.overlay}
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            style={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={styles.header}>
              <h2 style={styles.title}>Privacy Policy</h2>
              <button style={styles.closeBtn} onClick={() => setIsOpen(false)}>✕</button>
            </div>
            <div style={styles.content}>
              <p style={{marginTop: 0}}><strong>Effective Date:</strong> January 1, 2026</p>
              <p>At Cornerstone Dental Clinic, your privacy and the security of your personal and medical information are of our utmost priority. This Privacy Policy outlines how we collect, use, protect, and handle your data when you visit our website or use our services.</p>
              
              <h3 style={styles.sectionTitle}>1. Information We Collect</h3>
              <p>We may collect personal identification information including but not limited to your name, email address, phone number, and medical history when you fill out forms, book consultations, or interact with our clinic physically and online.</p>

              <h3 style={styles.sectionTitle}>2. How We Use Your Information</h3>
              <p>Your details are used strictly to provide you with world-class dental care, manage your appointments, process insurance claims, and communicate important updates regarding your treatment. We will never sell or rent your personal information to third parties.</p>

              <h3 style={styles.sectionTitle}>3. Data Protection</h3>
              <p>We implement a variety of premium security measures to maintain the safety of your personal information. Our systems are fully compliant with local and international healthcare data privacy regulations.</p>

              <h3 style={styles.sectionTitle}>4. WhatsApp Booking Integration</h3>
              <p>When using our direct booking feature, your form details are formatted and transmitted directly to our official WhatsApp line. Please note that WhatsApp carries its own peer-to-peer and end-to-end encryption standards.</p>

              <h3 style={styles.sectionTitle}>5. Contact Us</h3>
              <p>If there are any questions regarding this privacy policy, you may contact our data protection officer at <strong>cornerstonedentalpr@gmail.com</strong>.</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(10, 58, 120, 0.4)',
    backdropFilter: 'blur(8px)',
    zIndex: 99999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem'
  },
  modal: {
    width: '100%',
    maxWidth: '650px',
    maxHeight: '85vh',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(16px)',
    borderRadius: '24px',
    boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    border: '1px solid rgba(255,255,255,0.4)',
  },
  header: {
    padding: '1.5rem 2rem',
    borderBottom: '1px solid rgba(0,0,0,0.05)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },
  title: {
    margin: 0,
    fontSize: '1.5rem',
    color: '#0a3a78',
    fontWeight: '600'
  },
  closeBtn: {
    background: 'rgba(0,0,0,0.05)',
    border: 'none',
    fontSize: '1.2rem',
    cursor: 'pointer',
    color: '#333',
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    transition: 'background 0.2s',
  },
  content: {
    padding: '2rem',
    overflowY: 'auto',
    color: '#444',
    lineHeight: '1.7',
    fontSize: '0.95rem'
  },
  sectionTitle: {
    fontSize: '1.1rem',
    color: '#0a3a78',
    marginTop: '1.5rem',
    marginBottom: '0.5rem'
  }
};
