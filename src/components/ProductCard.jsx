"use client";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setCurrentImageIndex(1); // Hover durumunda resim değişecek
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentImageIndex(0); // Hover bittiğinde tekrar ilk resmi göster
  };

  return (
    <div className="flex flex-col">
      <div className="relative mb-2 w-full h-full">
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="cursor-pointer w-full h-full object-fit"
        />
        <div className="absolute top-3 left-3">
          {product.discount && (
            <div className="bg-green-400 font-semibold p-4 rounded-full w-14 h-14 flex items-center justify-center text-white text-md">
              <div className="mb-1">-</div>
              <div>{product.discount}%</div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="font-semibold flex gap-1 items-center">
          <span className="text-sm cursor-pointer">{product.name}</span>
          <span className="text-red-400 text-xs">
            {product.isNew && "NEW!"}
          </span>
        </div>
        <div className="flex justify-between w-full">
          <div className="text-sm italic">${product.price.toFixed(2)}</div>
          <div className="text-sm flex gap-1">
            {product.sizes.map((size, index) => (
              <div key={index}>
                {size}
                {index !== product.sizes.length - 1 && " -"}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
