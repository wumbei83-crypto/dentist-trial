import React from 'react';
import '../../styles/index.css'; // Make sure global styles are applied

export default function Layout({ children }) {
  return (
    <>
      <div className="app-container">
        {children}
      </div>
    </>
  );
}
