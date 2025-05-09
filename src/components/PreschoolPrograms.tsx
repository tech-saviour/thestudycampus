'use client';

import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const programs = [
    {
        title: 'Play Group',
        age: '(2-3 years kids)',
        duration: '3 hours/day',
        imgSrc: '/play.png',
        imgAlt: 'Kids dressed up in costume for play group',
    },
    {
        title: 'Nursery',
        age: '(3-4 years kids)',
        duration: '3 hours/day',
        imgSrc: '/nursery.png',
        imgAlt: 'Nursery kids enjoying activity time',
    },
    {
        title: 'Junior KG',
        age: '(4-5 years kids)',
        duration: '4 hours/day',
        imgSrc: '/juniorkg.png',
        imgAlt: 'Junior KG student reading a book',
    },
    {
        title: 'Senior KG',
        age: '(5-6 years kids)',
        duration: '4 hours/day',
        imgSrc: '/seniorkg.png',
        imgAlt: 'Senior KG kids participating in group activity',
    },
];

export default function PreschoolPrograms() {
    return (
        <section id="programs" className="bg-[#fff8f3] py-12 px-4 sm:px-8 md:px-16 scroll-mt-24 pt-8">
            <h2 className="text-3xl md:text-4xl font-bold font-baloo text-center text-black mb-10">
                Our Preschool Programs
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {programs.map((program, index) => (
                    <AnimatedCard key={program.title} index={index} program={program} />
                ))}
            </div>
        </section>
    );
}

// Separated component with animation logic
function AnimatedCard({ program, index }: { program: any; index: number }) {
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
        <motion.article
            ref={ref}
            initial="hidden"
            animate={controls}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 },
                },
            }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col cursor-pointer"
        >
            {/* Image with wavy bottom */}
            <div className="relative w-full h-48">
                <Image
                    src={program.imgSrc}
                    alt={program.imgAlt}
                    fill
                    className="object-cover rounded-t-xl"
                />
                <svg
                    className="absolute bottom-[-1px] left-0 w-full rotate-180"
                    viewBox="0 0 500 50"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id="yellow-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#fef08a" />
                            <stop offset="100%" stopColor="#facc15" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0,30 C150,80 350,0 500,30 L500,00 L0,0 Z"
                        fill="url(#yellow-gradient)"
                    />
                </svg>
            </div>

            {/* Curved Yellow Section */}
            <div className="bg-gradient-to-b from-yellow-200 to-yellow-300 pt-10 pb-6 px-4 text-center -mt-[1px]">
                <h3 className="text-xl font-extrabold font-baloo text-black drop-shadow-sm">
                    {program.title}
                </h3>
                <p className="text-gray-800 font-semibold drop-shadow-sm">{program.age}</p>
                <p className="text-gray-900 font-semibold drop-shadow-sm">{program.duration}</p>
            </div>
        </motion.article>
    );
}
