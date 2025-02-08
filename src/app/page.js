import CategoryCards from "@/components/Home/CategoryCards";
import Carousel from "@/components/Home/Hero/Carousel";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Carousel />
      <CategoryCards />
    </div>
  );
};

export default Home;
