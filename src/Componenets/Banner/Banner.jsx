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
      subtitle:
        "Handpicked gadgets and accessories delivered to your doorstep.",
      image: "https://i.ibb.co.com/C3c1YC8T/tech-service.jpg", 
    },
    {
      title: "Curated Just For You",
      subtitle: "Personalized subscription boxes based on your preferences.",
      image: "https://i.ibb.co.com/sdwRFvSQ/subscription.jpg",
    },
    {
      title: "Support Local Innovators",
      subtitle: "Every box helps local businesses and creators grow.",
      image: "https://i.ibb.co.com/q3331h5D/9010726-4053104.jpg",
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
            <div
              className="relative min-h-screen md:min-h-[600px] w-full bg-cover bg-center flex items-center justify-center text-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="relative z-10 text-white p-4 max-w-3xl space-y-10">
                <h2 className="text-xl md:text-5xl font-bold">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-xl font-semibold">{slide.subtitle}</p>
                <p className="text-xs md:text-lg">
                  Explore exclusive gadgets, innovative tools, and handpicked
                  tech accessories delivered right to your doorstep every month.
                </p>
                <ul className="text-sm md:text-lg list-disc list-inside">
                  <li>No commitment – cancel anytime</li>
                  <li>Tailored to your interests</li>
                  <li>Free shipping on all boxes</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
