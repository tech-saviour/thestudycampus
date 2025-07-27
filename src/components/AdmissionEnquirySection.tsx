'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

export default function AdmissionEnquirySection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    child: '',
    _gotcha: '', // Honeypot field
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam prevention: if honeypot filled, block submission
    if (formData._gotcha) return;

    setLoading(true);

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success('Form submitted successfully!');
        setSubmitted(true);
        setFormData({ name: '', email: '', mobile: '', child: '', _gotcha: '' });
      } else {
        toast.error(result.message || 'Something went wrong.');
      }
    } catch (error) {
      toast.error('Network error. Please try again.');
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative bg-[#fff7f0] py-20 px-4 sm:px-10 flex flex-col lg:flex-row items-center justify-center gap-12 overflow-hidden"
      aria-labelledby="admission-heading"
    >
      {/* Decorative Icons */}
      <motion.div
        className="absolute top-8 left-4 sm:left-10 z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Image src="/icon-pen.png" alt="" width={60} height={60} aria-hidden="true" />
      </motion.div>
      <motion.div
        className="absolute bottom-8 left-8 sm:left-12 z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Image src="/icon-home.png" alt="" width={60} height={60} aria-hidden="true" />
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
          At <strong>The Study Campus</strong>, we believe every child deserves a joyful and enriching start to their learning journey.
        </p>
      </motion.div>

      {/* Right Form Section */}
      <motion.div
        className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 w-full max-w-md z-20 min-h-[400px] relative"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        role="form"
        aria-label="Admission Enquiry Form"
      >
        <AnimatePresence>
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center text-center h-full"
            >
              <Image src="/success-check.gif" alt="Success" width={100} height={100} />
              <h2 className="text-lg font-semibold text-green-700 mt-4">
                Thank you! We&apos;ll get in touch shortly.
              </h2>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h2 className="text-xl font-bold text-center text-gray-900">
                Admission Enquiry AY 2025–26
              </h2>

              {/* Honeypot field */}
              <input
                type="text"
                name="_gotcha"
                className="hidden"
                autoComplete="off"
                tabIndex={-1}
              />

              {[
                { id: 'name', type: 'text', placeholder: 'Full Name' },
                { id: 'email', type: 'email', placeholder: 'Email ID' },
                { id: 'mobile', type: 'tel', placeholder: 'Mobile Number' },
                { id: 'child', type: 'text', placeholder: "Child's Name" },
              ].map((field) => (
                <input
                  key={field.id}
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  required
                  placeholder={field.placeholder}
                  value={formData[field.id as keyof typeof formData]}
                  onChange={handleChange}
                  className="rounded-full w-full px-4 py-2 bg-gray-100 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                />
              ))}

              <motion.button
                type="submit"
                whileTap={{ scale: 0.95 }}
                disabled={loading}
                className={`bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 mt-2 rounded-full transition-all w-full ${
                  loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
