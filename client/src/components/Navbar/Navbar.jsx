import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Navbar = () => {
  return (
    <div className="">
      <nav className="  w-full h-14  flex justify-between font-thin text-base pt-2 ">
        <div className="flex w-2/6 pl-2 gap-4 ">
          <div>Mens</div>
          <div>Accessiorier</div>
          <div>Women</div>
        </div>
        <div className=" w-2/6 flex justify-center text-2xl">LOgo </div>
        <div className="flex w-2/6  pl-[100px] gap-3  ">
          <div>HomePage</div>
          <div>About</div>
          <div>Contact</div>
          <div>Stores</div>
          <div className="flex gap-2 p-1 align-middle cursor-pointer">
            <SearchIcon />
            <AccountCircleIcon />
            <FavoriteBorderIcon />
            <div className="relative top-[-2px]">
              <ShoppingCartIcon />
              <span className="absolute top-[-3px] w-5 h-5 text-center text-sm bg-blue-400 rounded-full text-white">
                0
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
