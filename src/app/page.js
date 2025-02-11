import CategoryCards from "@/components/Home/CategoryCards";
import Carousel from "@/components/Home/Hero/Carousel";
import TrendingProducts from "@/components/TrendingProducts";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Carousel />
      <CategoryCards />
      <TrendingProducts />
    </div>
  );
};

export default Home;
