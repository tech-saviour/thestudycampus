'use client';

import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const AboutUsSection = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 'some', once: false });
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
            className="bg-[#FFF8F1] py-12 scroll-mt-24 pt-8"
            aria-labelledby="about-us-heading"
            id="about"
        >
            <div
                className="max-w-screen-xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12"
                ref={ref}
            >
                {/* Left Content */}
                <motion.div
                    className="w-full lg:w-1/2 space-y-6"
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
                    }}
                >
                    <h2
                        id="about-us-heading"
                        className="text-4xl text-center sm:text-left font-bold font-baloo text-orange-500"
                    >
                        About Us
                    </h2>

                    <div className="space-y-4 text-sm sm:text-base text-black leading-relaxed">
                        <p>
                            <strong className="italic">Nurturing Young Minds</strong><br />
                            At Little Steps Play School, we believe that every child is unique. Our early learning environment is filled with fun, creativity, and exploration, helping children grow socially and emotionally.
                        </p>
                        <p>
                            <strong className="italic">Experienced & Caring Staff</strong><br />
                            Our qualified teachers use playful methods to introduce numbers, letters, music, and stories, fostering curiosity and confidence in each child.
                        </p>
                        <p>
                            <strong className="italic">Safe & Joyful Spaces</strong><br />
                            We provide a colorful, safe, and hygienic environment where children can learn through play, express themselves freely, and build early friendships.
                        </p>
                    </div>
                </motion.div>

                {/* Right Image + Decorations */}
                <motion.div
                    className="relative flex justify-center w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px]"
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
                    }}
                >
                    <div className="absolute bottom-2 right-1 sm:-bottom-4 sm:-right-4 w-11/12 h-11/12 sm:w-full sm:h-full rounded-full bg-gray-600 z-0" />
                    <div className="absolute right-4 bottom-8 sm:-bottom-2 sm:-right-2w-11/12 h-11/12 sm:w-full sm:h-full rounded-full bg-orange-500 z-10" />
                    <div className="absolute -top-2 -left-2 w-11/12 h-11/12 sm:w-full sm:h-full rounded-full bg-blue-500 z-20" />

                    <div className="relative w-11/12 h-11/12 sm:w-full sm:h-full rounded-full overflow-hidden z-30 shadow-2xl">
                        <Image
                            src="/image.png"
                            alt="Classroom scene with teacher and students"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <Image
                        src="/icon-pen.png"
                        alt="Pen Icon"
                        width={60}
                        height={60}
                        className="absolute top-4 right-14 sm:top-2 sm:right-2 lg:top-4 lg:right-4 z-40"
                    />
                    <Image
                        src="/icon-home.png"
                        alt="Home Icon"
                        width={60}
                        height={60}
                        className="absolute bottom-4 z-40"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default AboutUsSection;

