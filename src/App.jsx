import React from 'react';
import Layout from './components/layout/Layout';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import ConsultationSection from './components/sections/ConsultationSection';
import SpecialistsSection from './components/sections/SpecialistsSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import FAQSection from './components/sections/FAQSection';
import ContactSection from './components/sections/ContactSection';
import PrivacyModal from './components/PrivacyModal';

function App() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ConsultationSection />
      <SpecialistsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <PrivacyModal />
    </Layout>
  );
}

export default App;
