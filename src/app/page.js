import BestSellingProducts from "@/components/BestSellingProducts";
import Footer from "@/components/Footer";
import CategoryCards from "@/components/Home/CategoryCards";
import Carousel from "@/components/Home/Hero/Carousel";
import News from "@/components/News";
import TrendingProducts from "@/components/TrendingProducts";
import TrustBadges from "@/components/TrustBadges";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Carousel />
      <CategoryCards />
      <TrendingProducts />
      <BestSellingProducts />
      <News />
      <TrustBadges />
      <Footer />
    </div>
  );
};

export default Home;
