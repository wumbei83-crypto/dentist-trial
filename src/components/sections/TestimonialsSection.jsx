import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import beforeImg from '../../assets/before.jpg';
import afterImg from '../../assets/after.jpg';
import newOrthoBefore from '../../assets/orthodontics-new-before.webp';
import newOrthoAfter from '../../assets/orthodontics-new-after.webp';
import newImplantBefore from '../../assets/implantology-new-before.webp';
import newImplantAfter from '../../assets/implantology-new-after.webp';
import newWhiteningBefore from '../../assets/whitening-new-before.webp';
import newWhiteningAfter from '../../assets/whitening-new-after.webp';

const testimonialsData = [
  {
    tab: 'Aesthetic dentistry',
    name: 'Christina',
    headline: "Christina's smile,\ntransformed",
    desc: "Christina felt self-conscious about the gaps and uneven shape of her teeth. She wanted a natural, brighter smile that still felt like her own – just more balanced, natural, and confidently beautiful.",
    list: [
      "Smile design planning with digital preview",
      "Minimal tooth preparation to preserve enamel",
      "Placement of ultra-thin porcelain veneers"
    ],
    before: afterImg,
    after: beforeImg,
    reviewQuote: '"Life changing experience."',
    reviewDesc: "Choosing Cornerstone Dental was the best decision for my oral health. The entire team is simply phenomenal and the results literally speak for themselves. Highly recommended!"
  },
  {
    tab: 'Orthodontics',
    name: 'Joseph',
    headline: "Joseph's alignment,\nperfected",
    desc: "Joseph struggled with severe crowding and bite alignment issues that affected his confidence and oral health. He wanted a discreet, effective solution to straighten his teeth with traditional metal brackets.",
    list: [
      "Comprehensive 3D intraoral scanning",
      "Custom clear aligner therapy formulation",
      "Progressive bite correction and alignment"
    ],
    before: newOrthoBefore,
    after: newOrthoAfter,
    reviewQuote: '"I finally have the smile I always wanted."',
    reviewDesc: "I never thought my teeth could look this straight. The clear aligner process was so easy and the team at Cornerstone made every visit an absolute pleasure."
  },
  {
    tab: 'Implantology',
    name: 'Rashida',
    headline: "Rashida's perfect smile,\nrestored in Tamale",
    desc: "Having missing teeth made it incredibly difficult for Rashida to enjoy her favorite foods and smile naturally. She needed a permanent, strong solution that looked and functioned exactly like natural teeth.",
    list: [
      "3D cone beam CT scanning for precise planning",
      "Surgical placement of titanium dental implants",
      "Custom color-matched porcelain crown restoration"
    ],
    before: newImplantBefore,
    after: newImplantAfter,
    reviewQuote: '"I got my original smile back!"',
    reviewDesc: "Losing my teeth affected my confidence for years. The implant procedure at Cornerstone in Tamale was surprisingly painless. My new teeth feel completely natural, and I can finally eat whatever I want!"
  },
  {
    tab: 'Whitening',
    name: 'Sarah',
    headline: "Sarah's radiance,\nrefreshed",
    desc: "Years of coffee and tea had left Sarah's teeth looking dull and stained. She wanted a professional, immediate whitening solution for an upcoming special event.",
    list: [
      "Professional clinical teeth scaling",
      "In-office laser acceleration session",
      "Custom take-home maintenance kit"
    ],
    before: newWhiteningBefore,
    after: newWhiteningAfter,
    reviewQuote: '"Unbelievable instant results!"',
    reviewDesc: "I couldn't believe the difference after just one session! My teeth are shades whiter and I couldn't stop smiling at my event. The laser whitening was completely comfortable."
  }
];

const tabs = testimonialsData.map(t => t.tab);

export default function TestimonialsSection() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const currentIndex = tabs.indexOf(activeTab);
  const currentData = testimonialsData[currentIndex];

  const handlePrev = () => {
    if (currentIndex > 0) setActiveTab(tabs[currentIndex - 1]);
  };

  const handleNext = () => {
    if (currentIndex < tabs.length - 1) setActiveTab(tabs[currentIndex + 1]);
  };

  return (
    <section className="testimonials-section" style={styles.section} id="testimonials">
       <div style={styles.header}>
          <span style={styles.kicker}>Testimonials</span>
          <h2 style={styles.title}>Real stories. Real smiles.</h2>
          <p style={styles.subtitle}>
            Nothing speaks louder than the words of those who've experienced<br className="mobile-hide-br" />
            true, visible transformation firsthand.
          </p>
       </div>

       <div className="tabs-container" style={styles.tabsContainer}>
          {tabs.map((tab) => (
             <div 
               key={tab} 
               onClick={() => setActiveTab(tab)}
               style={{
                 ...styles.tab,
                 color: activeTab === tab ? '#1555a6' : '#666',
                 borderBottom: activeTab === tab ? '3px solid #1555a6' : '3px solid transparent'
               }}
             >
               {tab}
             </div>
          ))}
          <div style={styles.tabLine} />
       </div>

       <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="testimonial-content-row" 
            style={styles.contentRow}
          >
             {/* Left Column (Details) */}
             <div className="testi-col-left" style={styles.colLeft}>
                <h3 style={styles.personTitle}>
                  {currentData.headline.split('\n').map((line, i) => (
                    <React.Fragment key={i}>{line}{i === 0 && <br/>}</React.Fragment>
                  ))}
                </h3>
                <p style={styles.personDesc}>{currentData.desc}</p>
                <h4 style={styles.whatWeDid}>What we did</h4>
                <ul style={styles.list}>
                  {currentData.list.map((item, i) => (
                    <li key={i} style={styles.listItem}>{item}</li>
                  ))}
                </ul>
             </div>

             {/* Middle Column (Interactive Compare Slider) */}
             <div className="testi-col-mid" style={styles.colMid}>
                <div style={styles.sliderWrapper}>
                  <div style={styles.beforeLabel}>Before</div>
                  <div style={styles.afterLabel}>After</div>
                  
                  <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src={currentData.before} alt="Before treatment" />}
                    itemTwo={<ReactCompareSliderImage src={currentData.after} alt="After treatment" />}
                    style={{ width: '100%', height: '100%', borderRadius: '16px' }}
                  />
                </div>
             </div>

             {/* Right Column (Ethical Review Card Replacement) */}
             <div className="testi-col-right" style={styles.colRight}>
                <div style={styles.reviewCard}>
                  <div style={styles.stars}>★★★★★</div>
                  <h4 style={styles.reviewHeading}>{currentData.reviewQuote}</h4>
                  <p style={styles.reviewText}>
                    {currentData.reviewDesc}
                  </p>
                  <div style={styles.reviewFooter}>
                     <div style={styles.googleBadge}>G</div>
                     <span style={styles.verifiedText}>Verified Patient Review</span>
                  </div>
                </div>
             </div>
          </motion.div>
       </AnimatePresence>

       <div className="nav-container" style={styles.navContainer}>
          <motion.button 
            style={{ ...styles.navBtn, opacity: currentIndex === 0 ? 0.3 : 1, cursor: currentIndex === 0 ? 'default' : 'pointer' }}
            whileHover={currentIndex !== 0 ? { backgroundColor: '#f0f5fa', borderColor: '#1555a6' } : {}}
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1555a6" strokeWidth="1.5"><path d="M15 18l-6-6 6-6"/></svg>
          </motion.button>
          
          <span style={styles.navText}>{`0${currentIndex + 1}/0${tabs.length}`}</span>
          
          <motion.button 
            style={{ ...styles.navBtn, opacity: currentIndex === tabs.length - 1 ? 0.3 : 1, cursor: currentIndex === tabs.length - 1 ? 'default' : 'pointer' }}
            whileHover={currentIndex !== tabs.length - 1 ? { backgroundColor: '#f0f5fa', borderColor: '#1555a6' } : {}}
            onClick={handleNext}
            disabled={currentIndex === tabs.length - 1}
          >
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1555a6" strokeWidth="1.5"><path d="M9 18l6-6-6-6"/></svg>
          </motion.button>
       </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '6rem 2rem',
    backgroundColor: '#ffffff'
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem'
  },
  kicker: {
    fontSize: '0.85rem',
    fontWeight: '700',
    color: '#84b4e3',
    letterSpacing: '0.05em',
    textTransform: 'uppercase'
  },
  title: {
    fontSize: '3.6rem',
    fontWeight: '600',
    color: '#0a3a78',
    margin: '0.5rem 0 1rem 0',
    letterSpacing: '-0.02em'
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#444',
    lineHeight: '1.6'
  },
  tabsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '3rem',
    marginBottom: '4rem',
    position: 'relative'
  },
  tab: {
    paddingBottom: '1rem',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '1.1rem',
    transition: 'all 0.3s ease',
    position: 'relative',
    zIndex: 2
  },
  tabLine: {
    position: 'absolute',
    bottom: 0,
    left: '10%',
    width: '80%',
    height: '2px',
    backgroundColor: '#e6edf5',
    zIndex: 1
  },
  contentRow: {
    display: 'flex',
    gap: '3rem',
    alignItems: 'stretch',
    maxWidth: '1300px',
    margin: '0 auto'
  },
  colLeft: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingRight: '1rem'
  },
  personTitle: {
    fontSize: '2.4rem',
    color: '#0a3a78',
    fontWeight: '600',
    lineHeight: '1.1',
    marginBottom: '1.5rem',
    letterSpacing: '-0.02em'
  },
  personDesc: {
    fontSize: '1.05rem',
    color: '#444',
    lineHeight: '1.6',
    marginBottom: '2rem'
  },
  whatWeDid: {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#0a3a78',
    marginBottom: '1rem'
  },
  list: {
    paddingLeft: '1.5rem',
    margin: 0,
    color: '#444'
  },
  listItem: {
    marginBottom: '0.8rem',
    fontSize: '1.05rem',
    lineHeight: '1.5'
  },
  colMid: {
    flex: '1.4',
    display: 'flex',
    justifyContent: 'center'
  },
  sliderWrapper: {
    position: 'relative',
    width: '100%',
    height: '380px',
    borderRadius: '16px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    backgroundColor: '#0a3a78' 
  },
  beforeLabel: {
    position: 'absolute',
    top: '1.5rem',
    left: '1.5rem',
    color: '#fff',
    zIndex: 10,
    fontWeight: '500',
    fontSize: '1.1rem',
    textShadow: '0 2px 4px rgba(0,0,0,0.7)'
  },
  afterLabel: {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    color: '#fff',
    zIndex: 10,
    fontWeight: '500',
    fontSize: '1.1rem',
    textShadow: '0 2px 4px rgba(0,0,0,0.7)'
  },
  colRight: {
    flex: '1',
    display: 'flex'
  },
  reviewCard: {
    background: 'linear-gradient(135deg, #1555a6 0%, #0a3a78 100%)',
    borderRadius: '16px',
    padding: '2.5rem',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    boxShadow: '0 20px 40px rgba(10,58,120,0.2)'
  },
  stars: {
    fontSize: '1.8rem',
    color: '#ffd700',
    marginBottom: '1.5rem',
    letterSpacing: '2px'
  },
  reviewHeading: {
    fontSize: '1.6rem',
    fontWeight: '600',
    marginBottom: '1.2rem',
    lineHeight: '1.3'
  },
  reviewText: {
    fontSize: '1.05rem',
    lineHeight: '1.6',
    opacity: 0.9,
    marginBottom: '2.5rem'
  },
  reviewFooter: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginTop: 'auto'
  },
  googleBadge: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: '#ffffff',
    color: '#1555a6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '800',
    fontSize: '1.2rem'
  },
  verifiedText: {
    fontSize: '0.95rem',
    fontWeight: '500',
    opacity: 0.9
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '1.5rem',
    maxWidth: '1300px',
    margin: '2rem auto 0 auto',
    paddingRight: '1rem'
  },
  navBtn: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    border: '1px solid #c8d9ea',
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  navText: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#0a3a78',
    letterSpacing: '2px'
  }
};
