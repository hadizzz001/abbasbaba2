"use client"

import React from 'react'; 
import { Carousel } from 'react-bootstrap';

const MyComponent = () => {
  return (
    <div className="syw-container">
      <Carousel indicators={false} controls={false}>
        <Carousel.Item>
          <div className="image-container">
            <img
              className="wallet-image"
              src="https://ucarecdn.com/320f15d7-7efa-4ec6-a07d-c2ce7113f6af/banner1.webpp"
              alt="background"
              width={3000}
              height={1200}
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-container">
            <img
              className="wallet-image"
              src="https://ucarecdn.com/96d39f65-a135-4bf3-8724-f0b087e3aa7a/banner2.webp"
              alt="background"
              width={3000}
              height={1200}
            />
          </div>
        </Carousel.Item> 
      </Carousel>
 

    </div>
  );
};

export default MyComponent;

