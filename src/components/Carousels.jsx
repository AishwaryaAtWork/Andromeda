import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function Carousels(props) {
  // Extract slider images data from props
  const { sliderImages } = props.sliderImagesData;

  // State to keep track of current image slide index
  const [currIndex, setCurrIndex] = useState(0);

  // Move to next slide automatically every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrIndex((currIndex) =>
        currIndex < sliderImages.length - 1 ? currIndex + 1 : 0
      );
    }, 4000);
    // Cleanup function to prevent memory leaks
    return () => clearInterval(interval);
  }, [setCurrIndex, sliderImages.length]);

  // Function to move to previous slide
  const prevSlide = () => {
    const isFirstSlide = currIndex === 0;
    const newIndex = isFirstSlide ? sliderImages.length - 1 : currIndex - 1;
    setCurrIndex(newIndex);
  };

  // Function to move to next slide
  const nextSlide = () => {
    const isLastSlide = currIndex === sliderImages.length - 1;
    const newIndex = isLastSlide ? 0 : currIndex + 1;
    setCurrIndex(newIndex);
  };

  // Function to move to specific slide
  const goToSlide = (slideIndex) => {
    setCurrIndex(slideIndex);
  };

  return (
    <div className="h-[660px]">
      {/* Container for the images */}
      <div className="h-[630px] w-full mx-auto my-5 relative group">
        {/* Display the current image */}
        <img
          className="max-h-full min-w-full object-fill rounded-sm"
          src={`${sliderImages[currIndex].url}`}
        />

        {/* Display the left arrow button */}
        <div
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full
              p-2 text-white cursor-pointer transition ease-in-out hover:scale-110 duration-300"
        >
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        {/* Display the right arrow button */}
        <div
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full
              p-2 text-white cursor-pointer transition ease-in-out hover:scale-110 duration-300"
        >
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        {/* Display the dots that allow the user to move to a specific slide */}
        <div className="flex top-4 justify-center py-2 text-zinc-700">
          {sliderImages.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
