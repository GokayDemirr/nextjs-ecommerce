import Logo from "./Header/Logo";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Footer = () => {
  return (
    <footer className="max-w-screen-xl pt-20 px-8 w-full mx-auto mb-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:place-items-center ">
        <div className="w-1/5">
          <ul className="flex flex-col gap-4 ">
            <Logo />
            <li className="flex items-center gap-4">
              <LocationOnIcon />
              <div className="text-gray-500">Map</div>
            </li>
            <li className="flex items-center gap-4">
              <EmailIcon />
              <div className="text-gray-500">Mail</div>
            </li>{" "}
            <li className="flex items-center gap-4">
              <LocalPhoneIcon />
              <div className="text-gray-500">Phone</div>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Categories</h4>
          <ul className="flex flex-col gap-2 text-gray-500">
            <li>Belts</li>
            <li>Wallets</li>
            <li>Glasses</li>
            <li>Bags</li>
            <li>Watches</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="flex flex-col gap-2 text-gray-500">
            <li>About Us</li>
            <li>Careers</li>
            <li>Our Stores</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Support</h4>
          <ul className="flex flex-col gap-2 text-gray-500">
            <li>FAQ</li>
            <li>Shipping & Returns</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
