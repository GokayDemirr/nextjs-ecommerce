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
      <ul className="flex gap-8 text-sm">
        <DropdownMenu title="Çanta" subcategories={bagCategories} />
        <DropdownMenu title="Cüzdan" subcategories={walletCategories} />
        <DropdownMenu title="Kemer" subcategories={beltCategories} />
        <DropdownMenu title="Gözlük" subcategories={glassesCategories} />
        <DropdownMenu title="Saat" subcategories={watchCategories} />
      </ul>
    </nav>
  );
};

export default Navbar;
