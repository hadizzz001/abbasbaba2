"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const MyCarousel = () => {
  const [slides, setSlides] = useState([]);

  // Fetch the banners when the component mounts
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch("/api/banner1");  // Adjust your API endpoint if needed
        const data = await response.json();
        // Flatten the img array from the fetched data
        const images = data.flatMap(item => item.img);
        setSlides(images);  // Set the flattened array of image URLs
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };

    fetchBanners();
  }, []);

  return (
    <div className="relative w-full mb-20">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={1000}
        className="h-auto"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative overflow-hidden">
            <img
  src={image}
  alt={`Banner ${index + 1}`}
  className="w-full h-auto object-contain transition-transform duration-[4000ms] ease-in-out"
/>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        @keyframes slideInLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default MyCarousel;
