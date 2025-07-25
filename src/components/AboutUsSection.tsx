'use client';

import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

const AboutUsSection = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.5, once: false });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [inView, controls]);

    return (
        <section
            ref={ref}
            id="about"
            aria-labelledby="about-us-heading"
            className="relative bg-[#FFF8F1] py-20 scroll-mt-24 transition-colors duration-300"
        >
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-16">
                {/* Text Content */}
                <motion.article
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, x: -60 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
                    }}
                    className="w-full lg:w-1/2 space-y-6"
                >
                    <header>
                        <h2
                            id="about-us-heading"
                            className="text-4xl sm:text-5xl font-bold font-baloo text-orange-500 text-center sm:text-left"
                        >
                            About Us
                        </h2>
                    </header>

                    <div className="space-y-5 text-black text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="italic text-orange-600">Nurturing Young Minds</strong><br />
                            At Little Steps Play School, every child is a star. We provide a vibrant, joyful learning space
                            where fun, creativity, and exploration are part of everyday learning.
                        </p>
                        <p>
                            <strong className="italic text-orange-600">Experienced & Caring Staff</strong><br />
                            Our educators bring warmth, expertise, and play-based techniques to introduce early concepts
                            through music, movement, and storytelling.
                        </p>
                        <p>
                            <strong className="italic text-orange-600">Safe & Joyful Spaces</strong><br />
                            From bright classrooms to clean play zones, safety and joy come together in every corner of our school.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6"
                    >
                        <Link
                            href="#contact"
                            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300"
                        >
                            Schedule a Visit
                        </Link>
                    </motion.div>
                </motion.article>

                {/* Image & Decoration */}
                <motion.figure
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, x: 60 },
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.7, delay: 0.2, ease: 'easeOut' },
                        },
                    }}
                    whileHover={{ scale: 1.02, rotate: 1 }}
                    transition={{ type: 'spring', stiffness: 120 }}
                    className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px]"
                    aria-label="Playful classroom environment"
                >
                    {/* Background Circles */}
                    <div className="absolute -bottom-6 right-0 w-full h-full rounded-full bg-gray-600 z-0" />
                    <div className="absolute -bottom-2 -right-2 w-full h-full rounded-full bg-orange-500 z-10" />
                    <div className="absolute -top-2 -left-2 w-full h-full rounded-full bg-blue-500 z-20" />

                    {/* Main Image */}
                    <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl z-30">
                        <Image
                            src="/image.png"
                            alt="Teacher interacting with children in classroom"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>

                    {/* Animated Icons */}
                    <motion.div
                        whileHover={{ y: -5, rotate: -5 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        className="absolute top-4 right-4 z-40"
                    >
                        <Image src="/icon-pen.png" alt="Pen icon" width={60} height={60} />
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        className="absolute bottom-4 left-4 z-40"
                    >
                        <Image src="/icon-home.png" alt="Home icon" width={60} height={60} />
                    </motion.div>
                </motion.figure>
            </div>
        </section>
    );
};

export default AboutUsSection;
