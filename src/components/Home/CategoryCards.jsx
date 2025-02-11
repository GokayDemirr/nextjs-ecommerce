import { categoryImages } from "@/data/categoryImages";

const CategoryCards = () => {
  return (
    <div className="max-w-screen-xl">
      <div className="grid grid-cols-4 gap-10 pt-8">
        {categoryImages.map((category, index) => (
          <div
            key={index}
            className={`relative  rounded-lg shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer ${category.className}  `}
          >
            <img
              src={category.src}
              alt={category.alt}
              className="w-full h-full object-cover rounded-lg"
            />

            <button className="absolute bottom-2 right-1/2 translate-x-1/2  bg-white rounded-sm shadow-lg font-semibold py-3 px-12 cursor-pointer hover:bg-black/80 hover:text-white transition-all duration-300">
              {category.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;
