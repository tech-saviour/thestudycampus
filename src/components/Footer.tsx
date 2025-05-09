'use client';

import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative bg-[#ff8800] text-white">
      {/* Wavy SVG at the top */}
      <div className="absolute -top-16 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          className="w-full h-18 sm:h-20"
        >
          <path
            d="M0,40 
               C75,90 150,-10 225,40 
               C300,90 375,-10 450,40 
               C525,90 600,-10 675,40 
               C750,90 825,-10 900,40 
               C975,90 1050,-10 1125,40 
               C1200,90 1275,-10 1350,40 
               L1200,0 
               L0,0 
               Z"
            fill="#ff8800"
          />
        </svg>
      </div>

      {/* Footer content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto px-20 py-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold flex items-center gap-2">
              <MdLocationOn size={24} />
              Address
            </h3>
            <p className="mt-2 text-sm">
              Gagol road near Acchronda mood, <br />
              Partapur, Meerut
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg font-bold flex items-center gap-2">
              Contact Us
            </h3>
            <p className="mt-2 text-sm">
              <a href="tel:8077852471" className="underline flex gap-1"> <MdPhone size={24} />8077852471</a>
            </p>
            <p className="mt-1 text-sm">
              <a href="mailto:info@thestudycampus.in" className="underline flex gap-1"><MdEmail size={24} /> info@thestudycampus.in</a>
            </p>
          </motion.div>

          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="flex mt-2 space-x-4">
              <Link href="https://www.instagram.com" aria-label="Instagram">
                <FaInstagram size={24} />
              </Link>
              <Link href="https://www.facebook.com" aria-label="Facebook">
                <FaFacebookF size={24} />
              </Link>
              <Link href="https://www.twitter.com" aria-label="Twitter">
                <FaTwitter size={24} />
              </Link>
              <Link href="https://www.linkedin.com" aria-label="LinkedIn">
                <FaLinkedinIn size={24} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 text-center text-sm"
        >
          &copy; {new Date().getFullYear()} The Study Campus. All rights reserved.
        </motion.div>
      </motion.div>
    </footer>
  );
}


