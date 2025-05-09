'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function USPsSection() {
  const [isInView, setIsInView] = useState(false);
  const [isListInView, setIsListInView] = useState(false);

  // Check if element is in view based on scroll
  const handleScroll = () => {
    const leftElement = document.getElementById('leftContent');
    const rightElement = document.getElementById('rightContent');

    const leftRect = leftElement?.getBoundingClientRect();
    const rightRect = rightElement?.getBoundingClientRect();

    // If the element is in the viewport, trigger the animation
    if ((leftRect?.top ?? Infinity) <= window.innerHeight && (leftRect?.bottom ?? -Infinity) >= 0) {
      setIsInView(true);
    } else {
      setIsInView(false);
    }

    if ((rightRect?.top ?? Infinity) <= window.innerHeight && (rightRect?.bottom ?? -Infinity) >= 0) {
      setIsListInView(true);
    } else {
      setIsListInView(false);
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
    <section className="relative w-full overflow-hidden flex flex-col lg:flex-row bg-[#fff8f3]">
      {/* Curved divider on large screens */}
      <div className="hidden lg:block absolute ml-10 left-2/6 top-0 h-full w-2/3 z-20 overflow-hidden">
        <svg
          className="h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 0 C 15 0, 15 100, 0 100 Z"
            fill="#fff8f3"
            transform="scale(2,1)"
          />
        </svg>
      </div>

      {/* Left Content */}
      <motion.div
        id="leftContent"
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="w-full text-center sm:text-left lg:w-2/5 px-6 sm:px-10 py-28 relative z-30"
      >
        <h2 className="text-5xl text-center sm:text-7xl font-[Pacifico] text-stroke-black text-shadow-lg text-orange-500 mb-4 relative inline-block">
          Our&apos;s USPs
          <span className="absolute -top-4 -right-12 hidden md:block">
            <Image src="/icon-pen.png" alt="doodle" width={40} height={40} />
          </span>
        </h2>
        <h3 className="text-xl sm:text-3xl font-semibold text-shadow-md text-gray-900 mb-4">
          Our play school is where their brilliance begins.
        </h3>
        <p className="text-lg text-gray-700 text-justify leading-relaxed">
          Our play school is a nurturing haven where early learning blossoms
          through creativity, exploration, and fun! We emphasize personalized
          attention, interactive teaching methods, and a safe, joyful
          environment that inspires young minds to grow.
        </p>
        <p className="text-lg text-gray-700 mt-2 text-justify">
          With a focus on holistic development, we foster curiosity, confidence,
          and essential social skills in every child, laying the foundation for
          a bright future.
        </p>
      </motion.div>

      {/* Right Content */}
      <motion.div
        id="rightContent"
        initial={{ opacity: 0, y: 100 }}
        animate={isListInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full lg:w-4/6 bg-gradient-to-tr from-[#ff9933] to-[#ff8800] px-6 sm:px-10 py-12 relative z-10"
      >
        <ul className="space-y-6">
          <motion.li
            className="flex items-center bg-white/20 hover:bg-white/30 transition rounded-full backdrop-blur-sm shadow-md lg:ml-28"
            whileHover={{ scale: 1.1 }}
          >
            <Image src="/usps/usp1.png" alt="Caring Teachers" width={80} height={80} />
            <span className="text-white font-semibold text-xl capitalize">Caring Teachers</span>
          </motion.li>

          <motion.li
            className="flex items-center bg-white/20 hover:bg-white/30 transition rounded-full backdrop-blur-sm shadow-md lg:ml-40"
            whileHover={{ scale: 1.1 }}
          >
            <Image src="/usps/usp2.png" alt="Child Friendly Infrastructure" width={80} height={80} />
            <span className="text-white font-semibold text-xl capitalize">Child Friendly Infrastructure</span>
          </motion.li>

          <motion.li
            className="flex items-center bg-white/20 hover:bg-white/30 transition rounded-full backdrop-blur-sm shadow-md lg:ml-44"
            whileHover={{ scale: 1.1 }}
          >
            <Image src="/usps/usp3.png" alt="CCTV Surveillance" width={80} height={80} />
            <span className="text-white font-semibold text-xl capitalize">CCTV Surveillance</span>
          </motion.li>

          <motion.li
            className="flex items-center bg-white/20 hover:bg-white/30 transition rounded-full backdrop-blur-sm shadow-md lg:ml-44"
            whileHover={{ scale: 1.1 }}
          >
            <Image src="/usps/usp4.png" alt="Transportation Facilities" width={80} height={80} />
            <span className="text-white font-semibold text-xl capitalize">Transportation Facilities</span>
          </motion.li>

          <motion.li
            className="flex items-center bg-white/20 hover:bg-white/30 transition rounded-full backdrop-blur-sm shadow-md lg:ml-40"
            whileHover={{ scale: 1.1 }}
          >
            <Image src="/usps/usp5.png" alt="Trust and Support" width={80} height={80} />
            <span className="text-white font-semibold text-xl capitalize">Trust and Support</span>
          </motion.li>

          <motion.li
            className="flex items-center bg-white/20 hover:bg-white/30 transition rounded-full backdrop-blur-sm shadow-md lg:ml-28"
            whileHover={{ scale: 1.1 }}
          >
            <Image src="/usps/usp6.png" alt="Innovative Learning Tools" width={80} height={80} />
            <span className="text-white font-semibold text-xl capitalize">Innovative Learning Tools</span>
          </motion.li>
        </ul>
      </motion.div>
    </section>
  );
}
