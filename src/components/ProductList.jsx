"use client";
import ProductCard from "./ProductCard";
import { useState } from "react";

const ProductList = ({ products }) => {
  const [visibleProducts, setVisibleProducts] = useState(8);

  const loadMore = () => {
    setVisibleProducts((prev) => prev + 8);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 overflow-hidden gap-12">
        {products.slice(0, visibleProducts).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <button
        className="border-2 py-4 px-7 rounded-full w-fit mx-auto cursor-pointer hover:bg-teal-400 hover:text-white transition-all"
        onClick={loadMore}
      >
        Load More
      </button>
    </div>
  );
};

export default ProductList;
