import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const CartButton = () => {
  return (
    <button className="transition-all cursor-pointer hover:text-teal-400 hover:scale-120">
      <ShoppingCartOutlinedIcon />
    </button>
  );
};

export default CartButton;
