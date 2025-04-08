'use client';
import React, { useState } from 'react';

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

  return (
    <section className="flex items-center justify-center flex-col lg:flex-row  gap-8 px-6 py-10">
      <h2 className="text-5xl lg:text-8xl text-center font-bold text-black drop-shadow-sm font-[Paprika] lg:w-1/2 ">
        FAQs ?
      </h2>
      <div className="hidden lg:block h-[430px] w-[8px] bg-red-600 rounded-sm"></div>

      <div className="flex items-center lg:-ml-40 flex-col gap-4 w-full lg:w-1/2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="w-full max-w-[400px] h-[60px] perspective cursor-pointer"
            onClick={() => setFlipped(flipped === index ? null : index)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${
                flipped === index ? 'rotate-y-180' : ''
              }`}
            >
              {/* Front */}
              <div className="absolute inset-0 bg-[#d9d9d9] flex items-center gap-3 rounded shadow-md backface-hidden ">
                <span className="bg-[#f39c12] h-full pt-4 text-black font-bold w-10 text-center rounded">Q</span>
                <p className="text-sm text-black">{faq.question}</p>
              </div>

              {/* Back */}
              <div className="absolute inset-0 bg-[#d9d9d9] flex items-center justify-between  rounded shadow-md rotate-y-180 backface-hidden">
                <p className="text-sm text-black">{faq.answer}</p>
                <span className="bg-[#f39c12] text-black h-full pt-4 font-bold w-10 text-center rounded">A</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

