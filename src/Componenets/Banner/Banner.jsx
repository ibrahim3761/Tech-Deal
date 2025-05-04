import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  const slides = [
    {
      title: "Discover Monthly Tech Surprises",
      subtitle: "Handpicked gadgets and accessories delivered to your doorstep.",
      bgColor: "bg-gradient-to-r from-cyan-500 to-blue-500",
    },
    {
      title: "Curated Just For You",
      subtitle: "Personalized subscription boxes based on your preferences.",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      title: "Support Local Innovators",
      subtitle: "Every box helps local businesses and creators grow.",
      bgColor: "bg-gradient-to-r from-green-500 to-lime-500",
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="rounded-xl overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`${slide.bgColor} h-60 md:h-80 flex flex-col justify-center items-center text-white text-center p-5`}>
              <h2 className="text-2xl md:text-4xl font-bold mb-2">{slide.title}</h2>
              <p className="text-sm md:text-lg max-w-2xl">{slide.subtitle}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
