"use client";
import { useState, useEffect } from "react";
import { carouselImages } from "@/data/carouselImages";
import CircleIcon from "@mui/icons-material/Circle";
import Image from "next/image";
import CarouselInfoBox from "./CarouselInfoBox";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [key]);

  return (
    <div className="relative">
      <Image
        src={carouselImages[currentIndex].src}
        alt={`${carouselImages[currentIndex].title} ${carouselImages[currentIndex].description}`}
        width={1900}
        height={693}
        layout="responsive"
        className="object-cover"
      />

      <CarouselInfoBox currentIndex={currentIndex} />

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {carouselImages.map((_, index) => (
          <CircleIcon
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setKey(index);
            }}
            sx={{
              color: currentIndex === index ? "text.primary" : "text.secondary",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
