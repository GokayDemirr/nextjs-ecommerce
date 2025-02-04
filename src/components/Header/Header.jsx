import HeaderButtons from "./HeaderButtons/HeaderButtons";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="flex justify-between p-4">
      <Logo />
      <Navbar />
      <HeaderButtons />
    </div>
  );
};

export default Header;
