'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  { question: 'What is the ideal age for a child to join a play school?', answer: 'The ideal age is between 1.5 to 2.5 years.' },
  { question: 'Is the play school curriculum structured?', answer: 'Yes, it follows a flexible and engaging structure.' },
  { question: 'Are the teachers trained in early childhood education?', answer: 'Yes, all staff are certified in early childhood care.' },
  { question: 'What are the school hours?', answer: 'School hours are from 9:00 AM to 12:30 PM.' },
  { question: 'Is there a nap time?', answer: 'Yes, nap time is included for younger age groups.' },
  { question: 'Are meals provided?', answer: 'We provide healthy snacks but not full meals.' },
];

export default function FAQSection() {
  const [flipped, setFlipped] = useState<number | null>(null);
  const [isInView, setIsInView] = useState(false);

  // Check if the FAQ section is in the viewport
  const handleScroll = () => {
    const element = document.getElementById('faq-section');
    const rect = element?.getBoundingClientRect();
    
    if ((rect?.top ?? Infinity) <= window.innerHeight && (rect?.bottom ?? -Infinity) >= 0) {
      setIsInView(true);
    } else {
      setIsInView(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="faq-section"
      className="flex items-center justify-center flex-col lg:flex-row gap-8 px-6 py-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="text-5xl lg:text-8xl text-center font-bold text-black drop-shadow-sm font-[Paprika] lg:w-1/2"
      >
        FAQs ?
      </motion.h2>

      <div className="hidden lg:block h-[430px] w-[8px] bg-red-600 rounded-sm"></div>

      <div className="flex items-center lg:-ml-40 flex-col gap-4 w-full lg:w-1/2">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="w-full max-w-[400px] h-[60px] perspective cursor-pointer"
            onClick={() => setFlipped(flipped === index ? null : index)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${
                flipped === index ? 'rotate-y-180' : ''
              }`}
            >
              {/* Front */}
              <div className="absolute inset-0 bg-[#d9d9d9] flex items-center gap-3 rounded shadow-md backface-hidden">
                <span className="bg-[#f39c12] h-full pt-4 text-black font-bold w-10 text-center rounded">Q</span>
                <p className="text-sm text-black">{faq.question}</p>
              </div>

              {/* Back */}
              <div className="absolute inset-0 bg-[#d9d9d9] flex items-center justify-between rounded shadow-md rotate-y-180 backface-hidden">
                <p className="text-sm text-black">{faq.answer}</p>
                <span className="bg-[#f39c12] text-black h-full pt-4 font-bold w-10 text-center rounded">A</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

