'use client';

import Image from 'next/image';

const AboutUsSection = () => {
    return (
        <section
            className="bg-[#FFF8F1] py-12"
            aria-labelledby="about-us-heading"
        >
            <div className="max-w-screen-xl  mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Left Content */}
                <div className="w-full  lg:w-1/2 space-y-6">
                    <h2
                        id="about-us-heading"
                        className="text-4xl text-center sm:text-left font-bold font-baloo text-orange-500"
                    >
                        About Us
                    </h2>


                    <div className="space-y-4 text-sm sm:text-base text-black leading-relaxed">
                        <p>
                            <strong className="italic">Lorem ipsum dolor</strong><br />
                            sit amet consectetur. Ullamcorper odio metus pellentesque nec sit. Leo mi quam ultrices placerat amet ornare
                        </p>
                        <p>
                            <strong className="italic">hendrerit tortor</strong><br />
                            ac Tristique massa magna adipiscing euismod dignissim convallis adipiscing blandit commodo.
                        </p>
                        <p>
                            <strong className="italic">Lorem ipsum dolor</strong><br />
                            sit amet consectetur. Ullamcorper odio metus pellentesque nec sit. Leo mi quam ultrices placerat amet ornare
                        </p>
                        <p>
                            <strong className="italic">hendrerit tortor</strong><br />
                            ac Tristique massa magna adipiscing euismod dignissim convallis adipiscing blandit commodo.
                        </p>
                    </div>
                </div>

                {/* Image with Ring + Decorations */}
                <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px]">
                    {/* Background rings */}
                    <div className="absolute -bottom-4 -right-4 w-full h-full rounded-full bg-gray-600 z-0" />
                    <div className="absolute -bottom-2 -right-2 w-full h-full rounded-full bg-orange-500 z-10" />
                    <div className="absolute -top-2 -left-2 w-full h-full rounded-full bg-blue-500 z-20" />
                    {/* Main image */}
                    <div className="relative w-full h-full rounded-full overflow-hidden z-30 shadow-2xl">
                        <Image
                            src="/image.png"
                            alt="Classroom scene with teacher and students"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Decorative Icons */}
                    <Image
                        src="/icon-pen.png"
                        alt="Pen Icon"
                        width={60}
                        height={60}
                        className="absolute  top-4 right-14 sm:top-2 sm:right-2 lg:top-4 lg:right-4 z-40"
                    />
                    <Image
                        src="/icon-home.png"
                        alt="Home Icon"
                        width={60}
                        height={60}
                        className="absolute bottom-4  z-40"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
