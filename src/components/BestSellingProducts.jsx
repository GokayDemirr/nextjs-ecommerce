import { bestSellingProducts } from "@/data/bestSellingProducts";
import ProductList from "./ProductList";

const BestSellingProducts = () => {
  return (
    <div className="max-w-screen-xl pt-20 px-8">
      <div className="flex items-center justify-center">
        <div className="w-14 h-[2px] bg-black rounded-lg"></div>
        <div className="mx-4 text-2xl font-semibold">BEST SELLER</div>
        <div className="w-14 h-[2px] bg-black rounded-lg"></div>
      </div>

      <div className="text-center italic text-sm mb-8">
        Top sale in this week
      </div>

      <ProductList products={bestSellingProducts} />
    </div>
  );
};

export default BestSellingProducts;
