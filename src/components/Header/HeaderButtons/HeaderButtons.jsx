import CartButton from "./CartButton";
import ProfileButton from "./ProfileButton";
import SearchButton from "./SearchButton";
import WishlistButton from "./WishlistButton";

const HeaderButtons = () => {
  return (
    <div className="flex gap-4 ">
      <SearchButton />
      <ProfileButton />
      <WishlistButton />
      <CartButton />
    </div>
  );
};

export default HeaderButtons;
