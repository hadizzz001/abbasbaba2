"use client";

import { useState, useEffect } from "react";
import { TempProps } from "../types";

interface CarCardProps {
  temp: TempProps;
}

const CarCard = ({ temp }: CarCardProps) => {
  const { _id, title, price, img, category } = temp;

  const [isCodeValid, setIsCodeValid] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setIsCodeValid(localStorage.getItem("isValidCode") === "true");
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === img.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [img.length]);

  const imageUrl = img[currentImageIndex].replace(
    "/upload/",
    "/upload/w_500/q_30/f_auto/"
  );

  return (
            <a
          href={`/product?id=${_id}&&imgg=${imageUrl}`}
          className="text-gray-900 font-semibold text-lg hover:text-blue-600"
        >
    <div className="w-[100px] sm:w-[300px] flex flex-col items-center p-3  relative">
      {/* Badge */}
      {category === "Hot Sale" && (
        <img
          src="https://res.cloudinary.com/drupytlml/image/upload/v1740521061/m5fzgzf1a4p6xn3bj1mn.png"
          alt="Hot Sale Badge"
          className="absolute w-16 h-16 top-2 left-2 z-10"
        />
      )}

      {/* Image (square & zoomed to fill) */}
      <div className="w-[100px] h-[100px] sm:w-[300px] sm:h-[300px] overflow-hidden">

        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover" // <-- zoom/crop instead of white background
        />
      </div>

      {/* Title & Price */}
      <div className="mt-3 text-center">
        <a
          href={`/product?id=${_id}&&imgg=${imageUrl}`}
          className="text-gray-900 font-semibold text-lg hover:text-blue-600"
        >
          {title}
        </a>
        {isCodeValid && (
          <p className="text-blue-600 font-bold text-lg mt-1">${price}</p>
        )}
      </div>
    </div>
    </a>
  );
};

export default CarCard;
