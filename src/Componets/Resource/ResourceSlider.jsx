import React, { useState } from "react";
import Slider from "react-slick";

import { Box, Typography, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import SocialImage from "../../assets/Image/jobs.png";
import MarketingImage from "../../assets/Image/officejobs.png";
import SupportImage from "../../assets/Image/jobs.png";
import CRMImage from "../../assets//Image/officejobs.png";

const images = [SocialImage, MarketingImage, SupportImage];

const ResourceSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const getSlideIndexes = () => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    return { prevIndex, nextIndex };
  };

  const { prevIndex, nextIndex } = getSlideIndexes();
  React.useEffect(() => {
    const interval = setTimeout(() => {
      goToNext();
    }, 3000); // Change image every 3 seconds

    return () => clearTimeout(interval); // Cleanup timeout on component unmount or re-render
  }, [currentIndex]);

  return (
    <>
      <div className="text-[2em] text-center mt-[6em]">
        <h1>
          <b>Behind the Scenes with Office Based Jobs</b>
        </h1>
      </div>

      <div className="w-full max-w-6xl mx-auto relative">
        <div className="flex items-center justify-center h-[24rem] my-8">
          {/* Previous Image (smaller) */}
          <div
            className="h-60 w-60 relative opacity-70 transition-all duration-300 cursor-pointer transform hover:opacity-90"
            onClick={goToPrevious}
          >
            <img
              src={images[prevIndex]}
              alt="Previous slide"
              className="h-full w-[120rem] object-cover rounded-l-lg shadow"
            />
          </div>

          {/* Current Image (larger) */}
          <div className="h-[24rem] w-[30rem] relative z-0 transition-all duration-300 shadow-lg">
            <img
              src={images[currentIndex]}
              alt="Current slide"
              className="h-full w-[120rem] object-cover"
            />
          </div>

          {/* Next Image (smaller) */}
          <div
            className="h-60 w-60 relative opacity-70 transition-all duration-300 cursor-pointer transform hover:opacity-90"
            onClick={goToNext}
          >
            <img
              src={images[nextIndex]}
              alt="Next slide"
              className="h-full w-[120rem] object-cover rounded-r-lg shadow"
            />
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-500 p-3 rounded-full shadow-lg text-white opacity-90 hover:opacity-100 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={goToPrevious}
        >
          <ArrowBack fontSize="large" />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-500 p-3 rounded-full shadow-lg text-white opacity-90 hover:opacity-100 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={goToNext}
        >
          <ArrowForward fontSize="large" />
        </button>

        {/* Dots indicator */}
        <div className="flex justify-center mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 mx-1 rounded-full ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ResourceSlider;
