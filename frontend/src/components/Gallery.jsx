import React, { useState, useEffect, useRef } from "react";
import gallerySection from "../../data/gallerySection.json";

function Gallery() {
  const [imageIndex, setImageIndex] = useState(0);
  const numImages = gallerySection.length;
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex(prev => (prev === numImages - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [numImages]);

  const handleCircleClick = (index) => setImageIndex(index);

  // Determine styles for images based on their position relative to the active image
  const getImageStyle = idx => {
    const distance = Math.min(
      Math.abs(idx - imageIndex),
      Math.abs(idx - imageIndex + numImages),
      Math.abs(idx - imageIndex - numImages)
    );

    if (distance === 0) {
      // Active image
      return "border-4 border-red-500 scale-100 z-10 opacity-100";
    } else if (distance === 1) {
      // One image away
      return "opacity-80 scale-90 z-5";
    } else if (distance === 2) {
      // Two images away
      return "opacity-50 scale-80 z-0";
    }
    // Images further away are hidden
    return "opacity-0 pointer-events-none scale-70";
  };

  // Calculate transform to center the active image
  const getTransformStyle = () => {
    const imageWidthPercentage = 100 / 3; // Each image takes ~33.33% of container width
    const offset = imageWidthPercentage * imageIndex;
    return `translateX(calc(50% - ${offset}% - ${imageWidthPercentage / 2}%))`;
  };

  return (
    <div className="w-full p-12 mt-3 flex flex-col justify-around items-center gap-8">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-3xl text-black">GALLERY</h1>
        <p className="text-xl text-gray-400">
          Check our gallery from the recent events
        </p>
      </div>

      <div className="p-4 w-full flex flex-col items-center">
        <div className="overflow-hidden w-[80%] flex justify-center items-center">
          <div
            ref={sliderRef}
            className="flex items-center gap-6 transition-transform duration-700 ease-in-out"
            style={{ transform: getTransformStyle() }}
          >
            {gallerySection.map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={img.alt}
                className={`w-1/3 flex-shrink-0 object-cover rounded-lg shadow-lg ${getImageStyle(idx)} transition-all duration-700`}
                style={{
                  minWidth: "33.33%",
                  maxWidth: "33.33%",
                }}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center w-full items-center p-5 gap-3">
          {gallerySection.map((_, index) => (
            <button
              key={index}
              onClick={() => handleCircleClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                imageIndex === index ? "bg-red-500 scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;