"use client";
import { useState } from "react";

const DropdownMenu = ({ title, subcategories }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className="relative cursor-pointer hover:text-teal-400"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {title}
      {isOpen && (
        <div className="absolute z-2 cursor-default bg-white shadow-xl rounded-lg p-4 flex gap-12">
          {subcategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-black font-bold mb-2 whitespace-nowrap border-b-2">
                {category.name}
              </h3>
              <ul>
                {category.items.map((item, index) => (
                  <li
                    key={index}
                    className="text-black cursor-pointer hover:text-teal-400 whitespace-nowrap mb-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </li>
  );
};

export default DropdownMenu;
