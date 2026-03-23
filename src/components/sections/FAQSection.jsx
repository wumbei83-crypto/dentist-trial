import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqData = [
  {
    question: "What should I expect during my first visit to Cornerstone Dental?",
    answer: "Your first visit includes a comprehensive oral examination, digital X-rays if necessary, and a one-on-one consultation with our specialists. We take the time to understand your dental history, address any concerns, and build a personalized treatment plan tailored exactly to your needs."
  },
  {
    question: "How much do dental implants cost in Ghana?",
    answer: "The cost of dental implants varies depending on the complexity of the procedure and the materials used. At Cornerstone Dental in Tamale, we offer the most transparent pricing and premium titanium implants locally available. We will provide a full breakdown of costs during your initial consultation."
  },
  {
    question: "Where can I fix a broken tooth in Tamale?",
    answer: "If you're dealing with a broken or chipped tooth, our emergency dental team in Tamale is fully equipped to restore it immediately. Depending on the severity, we use tooth-colored composite bonding, porcelain veneers, or extremely durable dental crowns to seamlessly repair your smile."
  },
  {
    question: "Is the teeth whitening procedure safe and does it hurt?",
    answer: "Yes, our professional in-office laser whitening is completely safe and highly effective. While some patients may experience mild, temporary sensitivity, our specialists use advanced protective barriers to shield your gums, ensuring an entirely comfortable and painless aesthetic experience."
  },
  {
    question: "Do you offer discreet options like clear aligners instead of metal braces?",
    answer: "Absolutely. For patients looking for a nearly invisible orthodontic solution, we provide custom clear aligner therapy. They are removable, incredibly comfortable, and highly effective for progressive bite correction and alignment without the visual weight of traditional metal brackets."
  }
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div style={styles.accordionItem}>
      <button 
        onClick={onClick}
        style={styles.accordionButton}
      >
        <span style={{ ...styles.questionText, color: isOpen ? '#1555a6' : '#0a3a78' }}>
          {question}
        </span>
        <motion.div 
          animate={{ rotate: isOpen ? 45 : 0 }} 
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={styles.iconWrapper}
        >
           <Plus size={24} color={isOpen ? '#1555a6' : '#0a3a78'} strokeWidth={2.5} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p style={styles.answerText}>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" style={styles.section} id="faq">
       <div style={styles.container}>
          
          <div style={styles.header}>
            <span style={styles.kicker}>FAQ</span>
            <h2 className="section-title" style={styles.title}>Common questions.</h2>
            <p style={styles.subtitle}>
              Everything you need to know about our premium procedures, pricing,<br className="mobile-hide-br" />
              and experiencing dentistry at Cornerstone.
            </p>
          </div>

          <div style={styles.accordionContainer}>
             {faqData.map((item, index) => (
               <AccordionItem 
                 key={index}
                 question={item.question}
                 answer={item.answer}
                 isOpen={openIndex === index}
                 onClick={() => handleToggle(index)}
               />
             ))}
          </div>

          <div style={styles.bottomAction}>
             <p style={styles.actionText}>Still have questions or facing a dental emergency?</p>
             <motion.button 
               whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(10, 58, 120, 0.2)' }}
               style={styles.contactBtn}
             >
                Contact our clinic
             </motion.button>
          </div>

       </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '8rem 2rem',
    backgroundColor: '#f8fafd', // Very soft blue-grey to contrast the white Testimonials
    display: 'flex',
    justifyContent: 'center'
  },
  container: {
    width: '100%',
    maxWidth: '900px',
    margin: '0 auto'
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem'
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
    color: '#555',
    lineHeight: '1.6'
  },
  accordionContainer: {
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    padding: '2rem 3rem',
    boxShadow: '0 20px 40px rgba(0,0,0,0.04)'
  },
  accordionItem: {
    borderBottom: '1px solid #eef2f6',
    padding: '1.5rem 0',
    '&:last-child': {
      borderBottom: 'none'
    }
  },
  accordionButton: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left',
    padding: 0,
    outline: 'none'
  },
  questionText: {
    fontSize: '1.2rem',
    fontWeight: '600',
    transition: 'color 0.3s ease',
    paddingRight: '2rem',
    lineHeight: '1.4'
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#f0f5fa',
    flexShrink: 0
  },
  answerText: {
    paddingTop: '1.2rem',
    color: '#555',
    lineHeight: '1.7',
    fontSize: '1.05rem',
    margin: 0,
    paddingRight: '2rem'
  },
  bottomAction: {
    marginTop: '4rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem'
  },
  actionText: {
    fontSize: '1.1rem',
    color: '#444',
    margin: 0,
    fontWeight: '500'
  },
  contactBtn: {
    background: 'transparent',
    color: '#0a3a78',
    padding: '1rem 3.5rem',
    borderRadius: '50px',
    fontWeight: '600',
    fontSize: '1.05rem',
    border: '2px solid #0a3a78',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  }
};
