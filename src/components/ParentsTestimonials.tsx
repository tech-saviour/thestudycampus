// components/ParentsTestimonials.tsx
'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Mrs Choti Wali",
    location: "Ghaziabad",
    text: "Our experience at play school has been truly exceptional. ",
    imgSrc: "/parent.png",
  },
  {
    name: "Mrs Another Wali",
    location: "Delhi NCR",
    text: "Absolutely love the learning environment here. ",
    imgSrc: "/parent.png",
  },
  {
    name: "Mrs Happy Mom",
    location: "Noida",
    text: " My child enjoys every day at the play school!",
    imgSrc: "/parent.png",
  },
  {
    name: "Mrs Kind Soul",
    location: "Indirapuram",
    text: "Safe and creative space for kids. Totally recommend it!",
    imgSrc: "/parent.png",
  },
];

const ParentsTestimonials = () => {
  return (
    <section className="relative w-full bg-[#fff8f3]">
      <div className="max-w-screen-xl mx-auto py-12 px-4 md:px-8">
        <h2 className="text-4xl font-[Pacifico] text-center text-black drop-shadow-md mb-10">
          Parents Testimonials
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={50}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000 }}
          loop={true}
          pagination={{ clickable: true }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-gray-100 rounded-2xl shadow-lg text-center pb-28 pt-12 px-4 mx-auto max-w-sm">
                {/* Vertical stripe */}
                <div className="absolute left-14 top-0 bottom-0 w-2 bg-[#FF8800] rounded-md"></div>
                <div className="absolute left-20 top-0 bottom-0 w-2 bg-gray-300 rounded-md"></div>

                {/* Circle image */}
                <div className="absolute top-20 left-14 transform -translate-x-20">
                <div className="w-28 h-45 rounded-full border-2 border-red-500 overflow-hidden">
                    <Image
                      src={testimonial.imgSrc}
                      alt={`${testimonial.name} image`}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg ml-24  font-semibold ">{testimonial.name}</h3>

                {/* Stars */}
                <div className="text-yellow-400 ml-24 mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>

                {/* Red line */}
                <div className="h-1 w-56 ml-24 bg-red-500  my-3 rounded-full"></div>

                <p className="text-sm ml-24 text-gray-700">{testimonial.text}</p>
                <p className="text-sm ml-24 mt-6 font-medium">{`${testimonial.name} from ${testimonial.location}`}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Orange strip bottom */}
      <div className="bg-orange-400 h-32 w-full -mt-28"></div>
    </section>
  );
};

export default ParentsTestimonials;
