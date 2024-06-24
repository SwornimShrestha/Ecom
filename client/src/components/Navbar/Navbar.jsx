import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Navbar = () => {
  return (
    <div>
      <nav className="w-full h-10 bg-[red] flex justify-between font-normal text-lg">
        <div className="flex w-2/6 bg-slate-500 pl-2 gap-4 ">
          <div>Mens</div>
          <div>Accessiorier</div>
          <div>Women</div>
        </div>
        <div className=" w-2/6 bg-slate-800 flex justify-center">LOgo </div>
        <div className="flex w-2/6 bg-slate-300 pl-16 gap-3">
          <div>HomePage</div>
          <div>About</div>
          <div>Contact</div>
          <div>Stores</div>
          <div className="flex gap-2 p-1">
            <SearchIcon />
            <AccountCircleIcon />
            <FavoriteBorderIcon />
            <ShoppingCartIcon />
            <span>0</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
