import React from 'react';
import Layout from './components/layout/Layout';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import SpecialistsSection from './components/sections/SpecialistsSection';

function App() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SpecialistsSection />
    </Layout>
  );
}

export default App;
