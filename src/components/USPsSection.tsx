'use client';
import Image from 'next/image';

export default function USPsSection() {
  return (
    <section className="relative w-full overflow-hidden flex flex-col lg:flex-row bg-[#fff8f3]">
      {/* Curved divider on large screens */}
      <div className="hidden lg:block absolute ml-10 left-2/6 top-0 h-full w-2/3 z-20 overflow-hidden">
        <svg
          className="h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 0 C 15 0, 15 100, 0 100 Z"
            fill="#fff8f3"
            transform="scale(2,1)"
          />
        </svg>
      </div>

      {/* Left Content */}
      <div className="w-full text-center sm:text-left lg:w-2/5 px-6 sm:px-10 py-28 relative z-30">
        <h2 className="text-5xl text-center sm:text-7xl font-[Pacifico] text-stroke-black text-shadow-lg  text-orange-500 mb-4 relative inline-block">
          Our&apos;s USPs
          <span className="absolute -top-4 -right-12 hidden md:block">
            <Image src="/icon-pen.png" alt="doodle" width={40} height={40} />
          </span>
        </h2>
        <h3 className="text-xl sm:text-3xl font-semibold text-shadow-md text-gray-900 mb-4">
          Our play school is where their brilliance begins.
        </h3>
        <p className="text-lg text-gray-700 text-justify leading-relaxed">
          Our play school is a nurturing haven where early learning blossoms
          through creativity, exploration, and fun! We emphasize personalized
          attention, interactive teaching methods, and a safe, joyful
          environment that inspires young minds to grow.
        </p>
        <p className="text-lg text-gray-700 mt-2 text-justify">
          With a focus on holistic development, we foster curiosity, confidence,
          and essential social skills in every child, laying the foundation for
          a bright future.
        </p>
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-4/6 bg-gradient-to-tr from-[#ff9933] to-[#ff8800] px-6 sm:px-10 py-12 relative z-10">
        <ul className="space-y-6">
          <li className="flex items-center bg-white/20 hover:bg-white/30 transition rounded-full  backdrop-blur-sm shadow-md lg:ml-28" >        
              <Image src="/usps/usp1.png" alt="Caring Teachers" width={80} height={80} />       
            <span className="text-white font-semibold text-xl capitalize">Caring Teachers</span>
          </li>

          <li className="flex items-center bg-white/20 hover:bg-white/30 transition rounded-full backdrop-blur-sm shadow-md lg:ml-40">
              <Image src="/usps/usp2.png" alt="Child Friendly Infrastructure" width={80} height={80} />           
            <span className="text-white font-semibold text-xl capitalize">Child Friendly Infrastructure</span>
          </li>

          <li className="flex items-center  bg-white/20 hover:bg-white/30 transition rounded-full  backdrop-blur-sm shadow-md lg:ml-44">      
              <Image src="/usps/usp3.png" alt="CCTV Surveillance" width={80} height={80} />  
            <span className="text-white font-semibold text-xl capitalize">CCTV Surveillance</span>
          </li>

          <li className="flex items-center  bg-white/20 hover:bg-white/30 transition rounded-full backdrop-blur-sm shadow-md lg:ml-44">         
              <Image src="/usps/usp4.png" alt="Transportation Facilities" width={80} height={80} />         
            <span className="text-white font-semibold text-xl capitalize">Transportation Facilities</span>
          </li>

          <li className="flex items-center  bg-white/20 hover:bg-white/30 transition rounded-full backdrop-blur-sm shadow-md lg:ml-40">           
              <Image src="/usps/usp5.png" alt="Trust and Support" width={80} height={80} />           
            <span className="text-white font-semibold text-xl capitalize">Trust and Support</span>
          </li>

          <li className="flex items-center bg-white/20 hover:bg-white/30 transition rounded-full  backdrop-blur-sm shadow-md lg:ml-28">        
              <Image src="/usps/usp6.png" alt="Innovative Learning Tools" width={80} height={80} />         
            <span className="text-white font-semibold text-xl capitalize">Innovative Learning Tools</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
