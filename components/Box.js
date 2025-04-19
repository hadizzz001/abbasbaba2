"use client";
import { useEffect, useRef, useState } from "react";

const OfferBox = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({});
  const [offerData, setOfferData] = useState({ text: "", img: [""] });
  const boxRef = useRef(null);

  // Check localStorage on mount
  useEffect(() => {
    const closed = localStorage.getItem("offerClosed");
    if (closed === "true") {
      setIsVisible(false);
    }
  }, []);

  // Fetch offer data
  useEffect(() => {
    const fetchOffer = async () => {
      try {
        const res = await fetch("/api/offer1");
        const data = await res.json();
        setOfferData(data[0]);
      } catch (err) {
        console.error("Failed to fetch offer data:", err);
      }
    };

    fetchOffer();
  }, []);

  // Countdown timer
  useEffect(() => {
    const endTime = new Date();
    endTime.setDate(endTime.getDate() + 2); // 2 days from now

    const updateTimer = () => {
      const now = new Date();
      const diff = endTime - now;

      if (diff <= 0) {
        setIsVisible(false);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setIsVisible(false);
        localStorage.setItem("offerClosed", "true");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Manual close handler
  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("offerClosed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center" style={{zIndex: 99999999999}}>
      <div
        ref={boxRef}
        className="relative bg-white rounded-xl shadow-xl p-6 w-[90%] max-w-lg text-center"
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-5xl"
        >
          &times;
        </button>
        <img
          src={offerData?.img[0]}
          alt="Offer"
          className="w-full rounded-md mb-4"
        />
        <h2 className="text-5xl font-semibold mb-2">{offerData.text || "Limited Time Offer!"}</h2>
        <p className="text-lg mb-4">Hurry up! Offer ends in:</p>
        <div className="text-5xl font-bold text-red-600">
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </div>
      </div>
    </div>
  );
};

export default OfferBox;
