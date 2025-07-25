'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';

const usps = [
  {
    label: 'Caring Teachers',
    img: '/usps/usp1.png',
    alt: 'Caring teacher illustration',
    offset: 'lg:ml-28',
  },
  {
    label: 'Child Friendly Infrastructure',
    img: '/usps/usp2.png',
    alt: 'Colorful and safe infrastructure',
    offset: 'lg:ml-40',
  },
  {
    label: 'CCTV Surveillance',
    img: '/usps/usp3.png',
    alt: 'Surveillance camera icon',
    offset: 'lg:ml-44',
  },
  {
    label: 'Transportation Facilities',
    img: '/usps/usp4.png',
    alt: 'School bus illustration',
    offset: 'lg:ml-44',
  },
  {
    label: 'Trust and Support',
    img: '/usps/usp5.png',
    alt: 'Handshake representing trust',
    offset: 'lg:ml-40',
  },
  {
    label: 'Innovative Learning Tools',
    img: '/usps/usp6.png',
    alt: 'Books and smartboard',
    offset: 'lg:ml-28',
  },
];

export default function USPsSection() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftInView = useInView(leftRef, { once: false, amount: 0.4 });
  const rightInView = useInView(rightRef, { once: false, amount: 0.4 });

  const leftControls = useAnimation();
  const rightControls = useAnimation();

  useEffect(() => {
    leftControls.start(leftInView ? 'visible' : 'hidden');
  }, [leftInView, leftControls]);

  useEffect(() => {
    rightControls.start(rightInView ? 'visible' : 'hidden');
  }, [rightInView, rightControls]);

  return (
    <section
      id="usps"
      className="relative w-full overflow-hidden flex flex-col lg:flex-row bg-[#fff8f3]"
      aria-labelledby="usps-heading"
    >
      {/* Decorative curved SVG */}
      <div className="hidden lg:block absolute ml-10 left-2/6 top-0 h-full w-2/3 z-20 overflow-hidden">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M 0 0 C 15 0, 15 100, 0 100 Z" fill="#fff8f3" transform="scale(2,1)" />
        </svg>
      </div>

      {/* Left Text Content */}
      <motion.div
        ref={leftRef}
        initial="hidden"
        animate={leftControls}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
        }}
        className="w-full text-center sm:text-left lg:w-2/5 px-6 sm:px-10 py-28 relative z-30"
      >
        <h2
          id="usps-heading"
          className="text-5xl text-center sm:text-7xl font-[Pacifico] text-stroke-black text-shadow-lg text-orange-500 mb-4 relative inline-block"
        >
          Our&apos;s USPs
          <span className="absolute -top-4 -right-12 hidden md:block">
            <Image src="/icon-pen.png" alt="doodle pen" width={40} height={40} />
          </span>
        </h2>
        <h3 className="text-xl sm:text-3xl font-semibold text-shadow-md text-gray-900 mb-4">
          Our play school is where their brilliance begins.
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          Our play school is a nurturing haven where early learning blossoms
          through creativity, exploration, and fun! We emphasize personalized
          attention, interactive teaching methods, and a safe, joyful
          environment that inspires young minds to grow.
        </p>
        <p className="text-lg text-gray-700 mt-3 text-justify">
          With a focus on holistic development, we foster curiosity, confidence,
          and essential social skills in every child, laying the foundation for
          a bright future.
        </p>
      </motion.div>

      {/* Right USP List */}
      <motion.div
        ref={rightRef}
        initial="hidden"
        animate={rightControls}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.2 },
          },
        }}
        className="w-full lg:w-4/6 bg-gradient-to-tr from-[#ff9933] to-[#ff8800] px-6 sm:px-10 py-14 relative z-10"
      >
        <ul className="space-y-6">
          {usps.map((usp) => (
            <motion.li
              key={usp.label}
              whileHover={{ scale: 1.07 }}
              transition={{ type: 'spring', stiffness: 250 }}
              className={`flex items-center gap-4 bg-white/20 hover:bg-white/30 transition rounded-full backdrop-blur-sm shadow-md px-4 py-2 ${usp.offset}`}
            >
              <Image src={usp.img} alt={usp.alt} width={80} height={80} />
              <span className="text-white font-semibold text-xl capitalize">{usp.label}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
