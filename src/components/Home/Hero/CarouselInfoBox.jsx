import { carouselImages } from "@/data/carouselImages";

const CarouselInfoBox = ({ currentIndex }) => {
  return (
    <div className={`absolute ${carouselImages[currentIndex].infoBoxPosition}`}>
      <div className="font-bold text-2xl ">
        {carouselImages[currentIndex].title}
      </div>
      <div className="font-black text-3xl tracking-wide mb-2 ">
        {carouselImages[currentIndex].description}
      </div>
      <button className="bg-black text-white p-2 rounded-xs shadow-lg cursor-pointer hover:bg-black/60">
        Explore Now
      </button>
    </div>
  );
};

export default CarouselInfoBox;
