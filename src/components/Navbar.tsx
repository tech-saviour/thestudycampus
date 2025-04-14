'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [isHome, setIsHome] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  // Ensure pathname is only used on client
  useEffect(() => {
    setIsHome(pathname === '/');
  }, [pathname]);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (section: string) => {
    if (isHome) {
      handleScroll(section);
    } else {
      router.push(`/#${section}`);
    }
    setMenuOpen(false);
  };

  return (
    <>
      <header className="bg-[#FF8800] text-white sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-2">
          <Link href="/" className="cursor-pointer"><Image
              src="/logo.png"
              alt="The Study Campus Logo"
              width={55}
              height={44}
              className="object-contain"
            />
            </Link>
            <div className="leading-tight">
              <Link href="/" className="cursor-pointer"><p className="font-bold text-2xl">The Study Campus</p></Link>
              <Link href="/" className="cursor-pointer"><p className="text-base text-right -mt-1">Play School</p></Link>
            </div>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-6 font-medium text-base">
            <li><Link href="/" className="cursor-pointer">Home</Link></li>
            <li>
              <span className="cursor-pointer" onClick={() => handleNavClick('about')}>About Us</span>
            </li>
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
            <li><Link href="/contact" className="cursor-pointer">Contact Us</Link></li>
            <li>
              <span className="cursor-pointer" onClick={() => handleNavClick('programs')}>Programs</span>
            </li>
            <li><Link href="/admissions" className="cursor-pointer">Admissions</Link></li>
          </ul>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden px-4 pb-4">
            <ul className="flex flex-col space-y-2 font-medium">
              <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
              <li><span className="cursor-pointer" onClick={() => handleNavClick('about')}>About Us</span></li>
              <li>
                <details className="group">
                  <summary className="flex items-center space-x-1 cursor-pointer">
                    <span>Gallery</span>
                    <ChevronDown size={16} />
                  </summary>
                  <ul className="pl-4 mt-1 space-y-1">
                    <li><Link href="/gallery/photos" onClick={() => setMenuOpen(false)}>Photos</Link></li>
                    <li><Link href="/gallery/videos" onClick={() => setMenuOpen(false)}>Videos</Link></li>
                  </ul>
                </details>
              </li>
              <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
              <li><span className="cursor-pointer" onClick={() => handleNavClick('programs')}>Programs</span></li>
              <li><Link href="/admissions" onClick={() => setMenuOpen(false)}>Admissions</Link></li>
            </ul>
          </nav>
        )}
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



