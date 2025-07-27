'use client';

import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#ff8800] text-white">
      {/* Decorative Wave */}
      <div className="absolute -top-16 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-18 sm:h-20">
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

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-14"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Address */}
          <motion.address
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="not-italic text-sm"
          >
            <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
              <MdLocationOn size={24} />
              Address
            </h3>
            <p>
              Gagol road near Acchronda mood, <br />
              Partapur, Meerut
            </p>
          </motion.address>

          {/* Contact */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            aria-labelledby="footer-contact"
          >
            <h3 id="footer-contact" className="text-lg font-bold mb-2 flex items-center gap-2">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <MdPhone size={20} />
                <a href="tel:8077852471" className="hover:underline">8077852471</a>
              </li>
              <li className="flex items-center gap-2">
                <MdEmail size={20} />
                <a href="mailto:info@thestudycampus.in" className="hover:underline">info@thestudycampus.in</a>
              </li>
            </ul>
          </motion.section>

          {/* Social */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            aria-labelledby="footer-social"
          >
            <h3 id="footer-social" className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex gap-4">
              {[
                { href: 'https://www.instagram.com', Icon: FaInstagram, label: 'Instagram' },
                { href: 'https://www.facebook.com', Icon: FaFacebookF, label: 'Facebook' },
                { href: 'https://www.twitter.com', Icon: FaTwitter, label: 'Twitter' },
                { href: 'https://www.linkedin.com', Icon: FaLinkedinIn, label: 'LinkedIn' },
              ].map(({ href, Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="transition-transform text-white hover:text-gray-200"
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 mt-10 pt-4 text-center text-sm">
          &copy; {year} The Study Campus. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
}
