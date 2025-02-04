import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const SearchButton = () => {
  return (
    <button className="transition-all cursor-pointer hover:text-teal-400 hover:scale-120">
      <SearchOutlinedIcon fontSize="medium" />
    </button>
  );
};

export default SearchButton;
