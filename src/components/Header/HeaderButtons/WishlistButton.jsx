import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const WishlistButton = () => {
  return (
    <button className="transition-all cursor-pointer hover:text-teal-400 hover:scale-120">
      <FavoriteBorderOutlinedIcon />
    </button>
  );
};

export default WishlistButton;
