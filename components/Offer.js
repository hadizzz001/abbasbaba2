import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function OfferHeadline() {
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const res = await fetch("/api/offer");
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0 && Array.isArray(data[0].text)) {
          setTexts(data[0].text);
        }
      } catch (err) {
        console.error("Failed to fetch offer texts:", err);
      }
    };

    fetchOffers();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#222",
        color: "white",
        fontSize: "14px",
        padding: "5px 0",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 99999999,
      }}
    >
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {texts.length > 0 ? (
          texts.map((text, index) => (
            <SwiperSlide key={index}>
              <div style={{ textAlign: "center" }}>{text}</div>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <div style={{ textAlign: "center" }}>Loading offers...</div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
}
