import { trendingProducts } from "@/data/trendingProducts";
import ProductList from "./ProductList";

const TrendingProducts = () => {
  return (
    <div className="max-w-screen-xl pt-20 px-8">
      <div className="flex items-center justify-center ">
        <div className="w-14 h-[2px] bg-black rounded-lg"></div>
        <div className="mx-4 text-2xl font-semibold">TRENDING</div>
        <div className="w-14 h-[2px] bg-black rounded-lg"></div>
      </div>
      <div className="italic text-center text-sm mb-8">
        Top View in this week
      </div>

      <ProductList products={trendingProducts} />
    </div>
  );
};

export default TrendingProducts;
