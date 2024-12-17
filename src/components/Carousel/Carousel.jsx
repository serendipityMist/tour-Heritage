import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setSlide((prev) => (prev === data.slides.length - 1 ? 0 : prev + 1));
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setSlide((prev) => (prev === 0 ? data.slides.length - 1 : prev - 1));
  };

  // Automatically change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative w-full h-full">
      {data.slides.map((item, idx) => (
        <img
          key={idx}
          src={item.src}
          alt={item.alt}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            slide === idx ? "opacity-100" : "opacity-0"
          }`}
          style={{ filter: "brightness(0.7)" }} // Darken image slightly
        />
      ))}
      <div className="absolute inset-0 bg-black opacity-60 h-full w-full"></div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {/* {data.slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSlide(idx)}
            className={`h-3 w-3 rounded-full ${
              slide === idx ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))} */}
      </div>
    </div>
  );
};
