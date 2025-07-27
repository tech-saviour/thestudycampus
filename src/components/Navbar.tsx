'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsHome(pathname === '/');
  }, [pathname]);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (section: string) => {
    if (isHome) {
      handleScroll(section);
    } else {
      router.push(`/#${section}`);
    }
    setMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', href: '/', type: 'link' },
    { label: 'About Us', section: 'about', type: 'scroll' },
    {
      label: 'Gallery',
      type: 'dropdown',
      items: [
        { label: 'Photos', href: '/gallery/photos' },
        { label: 'Videos', href: '/gallery/videos' },
      ],
    },
    { label: 'Programs', section: 'programs', type: 'scroll' },
    { label: 'Contact Us', href: '/contact', type: 'link' },
    { label: 'Admissions', href: '/admissions', type: 'link' },
  ];

  return (
    <>
      <header className="bg-[#FF8800] text-white sticky top-0 z-50 " role="banner">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3" aria-label="Main navigation">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="The Study Campus Logo" width={55} height={44} />
            <div className="leading-tight">
              <p className="font-bold text-2xl">The Study Campus</p>
              <p className="text-sm -mt-1">Play School</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6 text-base font-medium">
            {navItems.map((item, idx) =>
              item.type === 'link' ? (
                <motion.li key={idx} whileHover={{ scale: 1.05 }}>
                  <Link href={item.href!} className="hover:underline">{item.label}</Link>
                </motion.li>
              ) : item.type === 'scroll' ? (
                <motion.li key={idx} whileHover={{ scale: 1.05 }}>
                  <button onClick={() => handleNavClick(item.section!)} className="cursor-pointer hover:underline">
                    {item.label}
                  </button>
                </motion.li>
              ) : (
                <motion.li
                  key={idx}
                  className="relative"
                  onMouseEnter={() => setGalleryOpen(true)}
                  onMouseLeave={() => setGalleryOpen(false)}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center cursor-pointer gap-1">
                    {item.label}
                    <ChevronDown size={16} />
                  </div>
                  <AnimatePresence>
                    {galleryOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-8 left-0 bg-white text-black rounded p-2 z-50"
                      >
                        {item.items!.map((sub, subIdx) => (
                          <li key={subIdx}>
                            <Link href={sub.href} className="block px-4 py-2 hover:bg-gray-100 rounded">{sub.label}</Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.li>
              )
            )}
          </ul>

          {/* Mobile Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden" aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

 
        {/* Mobile Slide-In Menu */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-40 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
              />

              {/* Side Menu */}
              <motion.aside
                className="fixed top-0 right-0 h-full w-64 bg-white text-black z-50 shadow-lg p-6 flex flex-col gap-4"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween' }}
              >
                <button onClick={() => setMenuOpen(false)} className="self-end text-gray-600">
                  <X size={24} />
                </button>

                <ul className="flex flex-col gap-3 font-medium text-base">
                  {navItems.map((item, idx) =>
                    item.type === 'link' ? (
                      <li key={idx}>
                        <Link href={item.href!} onClick={() => setMenuOpen(false)}>{item.label}</Link>
                      </li>
                    ) : item.type === 'scroll' ? (
                      <li key={idx}>
                        <button onClick={() => handleNavClick(item.section!)}>{item.label}</button>
                      </li>
                    ) : (
                      <details key={idx} className="group">
                        <summary className="flex items-center gap-1 cursor-pointer">
                          {item.label}
                          <ChevronDown size={16} />
                        </summary>
                        <ul className="pl-4 mt-1 space-y-1">
                          {item.items!.map((sub, subIdx) => (
                            <li key={subIdx}>
                              <Link href={sub.href} onClick={() => setMenuOpen(false)}>{sub.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    )
                  )}
                </ul>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

      </header>

      {/* Wave SVG under navbar */}
      <div className="relative z-40 -mt-1">
        <svg
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-20"
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
    </>
  );
}
