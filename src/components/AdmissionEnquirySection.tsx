'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AdmissionEnquirySection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    child: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    setStatus(result.message);

    if (res.ok) {
      setFormData({ name: '', email: '', mobile: '', child: '' });
    }
  };

  return (
    <section
      className="relative bg-[#fff7f0] py-20 px-4 sm:px-10 flex flex-col lg:flex-row items-center justify-center gap-8 overflow-hidden"
      aria-labelledby="admission-heading"
    >
      {/* Decorative Icons */}
      <motion.div
        className="absolute top-8 left-4 sm:left-10 z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/icon-pen.png"
          alt="Pen Icon"
          width={60}
          height={60}
        />
      </motion.div>
      <motion.div
        className="absolute bottom-8 left-8 sm:left-12 z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/icon-home.png"
          alt="Home Icon"
          width={60}
          height={60}
        />
      </motion.div>

      {/* Left Text Section */}
      <motion.div
        className="max-w-xl text-center lg:text-left z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h1
          id="admission-heading"
          className="text-3xl sm:text-4xl font-semibold leading-snug text-gray-900"
        >
          Admission Open – Nurturing Bright Futures Begins Here!
        </h1>
        <p className="mt-4 text-gray-700 text-base">
          At <strong>The Study Campus</strong>, we believe that every child deserves a joyful and enriching start to their learning journey.
        </p>
      </motion.div>

      {/* Right Form Section */}
      <motion.div
        className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 w-full max-w-md z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <h2 className="text-xl font-bold mb-4 text-center text-gray-900">
          Admission Enquiry AY 2025–26
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="rounded-full px-4 py-2 bg-gray-200 placeholder:text-gray-600 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Id"
            className="rounded-full px-4 py-2 bg-gray-200 placeholder:text-gray-600 focus:outline-none"
          />
          <input
            type="tel"
            name="mobile"
            required
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile Number"
            className="rounded-full px-4 py-2 bg-gray-200 placeholder:text-gray-600 focus:outline-none"
          />
          <input
            type="text"
            name="child"
            value={formData.child}
            onChange={handleChange}
            placeholder="Child Name"
            className="rounded-full px-4 py-2 bg-gray-200 placeholder:text-gray-600 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 mt-2 self-center rounded-md transition"
          >
            Submit
          </button>
          {status && (
            <p className="text-center text-sm text-green-600 font-medium">{status}</p>
          )}
        </form>
      </motion.div>
    </section>
  );
}


