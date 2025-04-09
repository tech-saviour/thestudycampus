'use client';

import Image from 'next/image';
import React from 'react';

export default function AdmissionEnquirySection() {
  return (
    <section
      className="relative bg-[#fff7f0] py-20 px-4 sm:px-10 flex flex-col lg:flex-row items-center justify-center gap-8 overflow-hidden"
      aria-labelledby="admission-heading"
    >
      {/* Decorative Icons */}
      <Image
        src="/icon-pen.png"
        alt="Pen Icon"
        width={60}
        height={60}
        className="absolute top-8 left-4 sm:left-10 z-10"
      />
      <Image
        src="/icon-home.png"
        alt="Home Icon"
        width={60}
        height={60}
        className="absolute bottom-8 left-8 sm:left-12 z-10"
      />

      {/* Left Text Section */}
      <div className="max-w-xl text-center lg:text-left z-20">
        <h1
          id="admission-heading"
          className="text-3xl sm:text-4xl font-semibold leading-snug text-gray-900"
        >
          Admission Open – Nurturing Bright Futures Begins Here!
        </h1>
        <p className="mt-4 text-gray-700 text-base">
          At <strong>[Your Play School Name]</strong>, we believe that every child deserves a joyful and enriching start to their learning journey. Our play-based curriculum, experienced staff, and safe, welcoming environment make us the perfect place for your little one to grow, explore, and thrive!
        </p>
      </div>

      {/* Right Form Section */}
      <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 w-full max-w-md z-20">
        <h2 className="text-xl font-bold mb-4 text-center text-gray-900">
          Admission Enquiry AY 2025–26
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // handleSubmit logic
          }}
          className="flex flex-col gap-4"
          aria-label="Admission enquiry form"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            className="rounded-full px-4 py-2 bg-gray-200 placeholder:text-gray-600 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email Id"
            className="rounded-full px-4 py-2 bg-gray-200 placeholder:text-gray-600 focus:outline-none"
          />
          <input
            type="tel"
            name="mobile"
            required
            placeholder="Mobile Number"
            className="rounded-full px-4 py-2 bg-gray-200 placeholder:text-gray-600 focus:outline-none"
          />
          <input
            type="text"
            name="child"
            placeholder="Child Name"
            className="rounded-full px-4 py-2 bg-gray-200 placeholder:text-gray-600 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 mt-2 self-center rounded-md transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
