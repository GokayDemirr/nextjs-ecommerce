import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const WishlistButton = () => {
  return (
    <button className="transition-all cursor-pointer hover:text-teal-400 hover:scale-120">
      <FavoriteBorderOutlinedIcon fontSize="medium" />
    </button>
  );
};

export default WishlistButton;
