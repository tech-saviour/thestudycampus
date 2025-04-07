'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <>
      {/* Sticky Header with higher z-index */}
      <header className="bg-[#FF8800] text-white shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="The Study Campus Logo"
              width={55}
              height={44}
              className="object-contain"
            />
            <div className="leading-tight">
              <p className="font-bold text-2xl">The Study Campus</p>
              <p className="text-base text-right -mt-1">Play School</p>
            </div>
          </div>

          <ul className="hidden md:flex items-center space-x-6 font-medium text-base">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li
              className="relative"
              onMouseEnter={() => setGalleryOpen(true)}
              onMouseLeave={() => setGalleryOpen(false)}
            >
              <div className="flex items-center space-x-1 cursor-pointer">
                <span>Gallery</span>
                <ChevronDown size={16} />
              </div>
              {galleryOpen && (
                <ul className="absolute bg-white text-black mt-2 rounded shadow-md p-2 z-10 space-y-1">
                  <li><Link href="/gallery/photos" className="block px-3 py-1 hover:bg-gray-100 rounded">Photos</Link></li>
                  <li><Link href="/gallery/videos" className="block px-3 py-1 hover:bg-gray-100 rounded">Videos</Link></li>
                </ul>
              )}
            </li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/programs">Programs</Link></li>
            <li><Link href="/admissions">Admissions</Link></li>
          </ul>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden px-4 pb-4">
            <ul className="flex flex-col space-y-2 font-medium">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li>
                <details className="group">
                  <summary className="flex items-center space-x-1 cursor-pointer">
                    <span>Gallery</span>
                    <ChevronDown size={16} />
                  </summary>
                  <ul className="pl-4 mt-1 space-y-1">
                    <li><Link href="/gallery/photos">Photos</Link></li>
                    <li><Link href="/gallery/videos">Videos</Link></li>
                  </ul>
                </details>
              </li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/programs">Programs</Link></li>
              <li><Link href="/admissions">Admissions</Link></li>
            </ul>
          </nav>
        )}
      </header>

      {/* Wave SVG: placed normally and under header using z-index */}
      <div className="relative z-50 -mt-1">
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



