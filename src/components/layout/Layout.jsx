import React from 'react';
import '../../styles/index.css';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <div 
        className="outer-tint-frame" 
        style={{
          width: '100%',
          maxWidth: '1470px', /* Accounts for 1440px inner + 30px horizontal padding */
          backgroundColor: 'rgba(255, 255, 255, 0.25)',
          borderRadius: '45px', 
          padding: '15px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)'
        }}
      >
        <div className="app-container">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}
