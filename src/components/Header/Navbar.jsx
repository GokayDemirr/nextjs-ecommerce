import {
  bagCategories,
  walletCategories,
  beltCategories,
  glassesCategories,
  watchCategories,
} from "@/data/categories";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-16 ">
        <DropdownMenu title="Bags" subcategories={bagCategories} />
        <DropdownMenu title="Wallets" subcategories={walletCategories} />
        <DropdownMenu title="Belts" subcategories={beltCategories} />
        <DropdownMenu title="Glasses" subcategories={glassesCategories} />
        <DropdownMenu title="Watches" subcategories={watchCategories} />
      </ul>
    </nav>
  );
};

export default Navbar;
