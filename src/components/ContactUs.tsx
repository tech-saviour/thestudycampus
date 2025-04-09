'use client';

import React from 'react';
import Image from 'next/image';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';

const ContactUs = () => {
    return (
        <section
            className="w-10/12 flex lg:w-full bg-[#f4ebea] my-36 mx-auto   px-10 lg:px-32 border rounded-md max-w-6xl  mt-10"
            aria-labelledby="contact-heading"
        >
            <div className="relative lg:flex items-center lg:h-96 z-10">
                {/* Image with vertical orange bar */}
                <div className="flex justify-center lg:block relative z-10 w-full lg:w-auto">
                    <div className="absolute h-60 w-14 bg-[#FF8800] z-0 top-1/2 -translate-y-1/2 lg:h-96 lg:w-44 lg:ml-32 lg:transform lg:-translate-x-1/2" />
                    <div className="relative z-10">
                        <Image
                            src="/phone-image.png"
                            alt="Phone"
                            width={260}
                            height={300}
                            className="rounded-md mt-6 lg:mt-0 shadow-md mx-auto lg:mx-0"
                        />
                    </div>
                </div>


                {/* Text Content */}
                <div className="relative z-10 py-8 lg:px-2 text-black text-center lg:text-left">
                    <h2 id="contact-heading" className="text-sm font-semibold uppercase mt-8">
                        For More Information
                    </h2>

                    <div className=" z-40 bg-[#FF8800] -mx-10 px-4 lg:pr-96 py-2 my-2">
                        <h3 className="text-3xl lg:text-5xl lg:-mx-2 font-bold">Contact Us</h3>
                    </div>

                    <div className="mt-4 text-sm text-gray-800 leading-relaxed">
                        <p className="font-semibold flex text-left gap-1">
                            Address <MdLocationOn className="text-lg" />
                        </p>
                        <p className='flex text-left'>Gagol road near Acchronda mood, Partapur, Meerut</p>

                        <p className="mt-3 flex items-center gap-2">
                            <BsTelephoneFill className="text-lg" /> 8077852471
                        </p>

                        <p className="flex items-center gap-2">
                            <MdEmail className="text-lg" />
                            <a href="mailto:info@thestudycampus.in" className="underline">
                                info@thestudycampus.in
                            </a>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContactUs;