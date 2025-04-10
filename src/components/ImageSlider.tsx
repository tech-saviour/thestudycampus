'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { src: '/Default.png', alt: 'Children playing in classroom' },
  { src: '/Variant3.png', alt: 'Kids learning and drawing' },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="w-full -mt-16" aria-label="Image Carousel">
      <div className="relative w-full max-w-[100%] mx-auto aspect-[16/9] sm:aspect-[4/3] md:aspect-[3/2] lg:aspect-[2/1] overflow-hidden rounded-none sm:rounded-xl shadow-lg">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          sizes="100vw"
          className="object-cover transition duration-500 ease-in-out"
          priority
        />

        {/* Left Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white transition z-10"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white transition z-10"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 w-2.5 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;




