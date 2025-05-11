"use client";

import Image from "next/image";
import { TempProps } from "../types";
import Link from "next/link";
import { useState, useEffect } from "react";

interface CarCardProps {
  temp: TempProps;
}

const CarCard = ({ temp }: CarCardProps) => {
  const { _id, title, price, img, category, views } = temp;

  const [isCodeValid, setIsCodeValid] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const storedValidity = localStorage.getItem("isValidCode");
    console.log("storedValidity ", storedValidity);

    if (storedValidity === "true") {
      setIsCodeValid(true);
    } else {
      setIsCodeValid(false);
    }
  }, []);

  useEffect(() => {
    // Auto-slide images every 3 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === img.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [img.length]);

  const modifiedUrl = img[currentImageIndex].replace(
    "/upload/",
    "/upload/w_500/q_30/f_auto/"
  );

  return (
    <div className="br_grid br_grid-cols-1 supports-subgrid:br_row-span-4 supports-subgrid:br_grid-rows-[subgrid]">
      <div className="Layout br_contents">
        <center>
          <span className="br_contents br_edition-">
            <div className="">
              <div className="initial:br_row-span-1 br_col-start-1 br_row-start-1 br_relative">
                <div className="br_aspect-[4/5] sm:br_aspect-square">
                  <div className="br_w-full br_h-full br_relative br_flex br_items-center br_justify-center">
                    <div className="relative br_w-full br_h-full br_flex br_justify-center br_items-center">
                      {category === "Hot Sale" && (
                        <img
                          src="https://res.cloudinary.com/drupytlml/image/upload/v1740521061/m5fzgzf1a4p6xn3bj1mn.png"
                          alt="Hot Sale Badge"
                          className="absolute left-0 w-44 h-44 sm:w-44 sm:h-44"
                          style={{ top: "-20px" }}
                        />
                      )}
                      <img
                        className="br_w-full br_h-full br_object-center br_object-contain br_mx-auto br_max-h-64 sm:br_max-h-72 sm:br_px-4"
                        alt="Car Image"
                        loading="lazy"
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 50vw"
                        src={modifiedUrl}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="initial:br_row-span-1 br_col-start-1 br_row-start-2 br_px-3 group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center">
                <h3
                  style={{ height: "100px" }}
                  className="br_text-base-sans-spaced br_line-clamp-2 sm:br_line-clamp-none edition:br_text-grey-500 edition:br_hidden first:edition:br_inline edition:before:br_content-['_–_'] apex:edition:br_text-grey-300"
                >
                  <a
                    href={`/product?id=${_id}&&imgg=${modifiedUrl}`}
                    className="br_text-current br_no-underline"
                  >
                    {title}
                    <br />
                    {!isCodeValid ? (
                      <span></span>
                    ) : (
                      <span style={{color:'#398dcc'}}>${price}</span>
                    )}
                    {/* <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                      <svg
                        version="1.0"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 64 64"
                        xmlSpace="preserve"
                        fill="#222"
                        stroke="#222"
                        style={{ width: '16px', height: '16px' }}
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                          <g>
                            <path
                              fill="#ffffff"
                              d="M32,48.001c-14.195,0-21.43-11.734-23.59-15.989C10.574,27.793,17.891,16,32,16 
          c14.195,0,21.431,11.734,23.591,15.988C53.427,36.208,46.109,48.001,32,48.001z"
                            />
                            <g>
                              <path
                                fill="#222"
                                d="M63.716,30.516C63.349,29.594,54.45,8,32,8C9.55,8,0.652,29.594,0.285,30.516
            c-0.379,0.953-0.379,2.016,0,2.969C0.652,34.407,9.55,56.001,32,56.001c22.45,0,31.349-21.594,31.716-22.517
            C64.095,32.531,64.095,31.469,63.716,30.516z M32,48.001c-14.195,0-21.43-11.734-23.59-15.989
            C10.574,27.793,17.891,16,32,16c14.195,0,21.431,11.734,23.591,15.988C53.427,36.208,46.109,48.001,32,48.001z"
                              />
                              <circle fill="#222" cx={32} cy={32} r={8} />
                            </g>
                          </g>
                        </g>
                      </svg>
                      <span>{views}</span>
                    </div> */}
                    <span className="br_absolute br_inset-0 br_z-10" />
                  </a>
                </h3>
              </div>
            </div>
          </span>
        </center>
      </div>
    </div>
  );
};

export default CarCard;
