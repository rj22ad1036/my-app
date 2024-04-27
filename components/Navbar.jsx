import React from "react";
import BookIcon from "./icons/Bookicon";
import MaskIcon from "./icons/Mask";

const Navbar = () => {
  return (
    <div className="flex items-center flex-row w-full h-14 p-4 bg-[#3c1196] pl-5 pr-5">
      <div className="flex items-center w-1/2 text-3xl font-semibold text-[#af94e8] flex-row gap-3">
        <div>
          <BookIcon />
        </div>
        <div> ViChron</div>
      </div>
      <div className="flex items-center justify-between w-1/2  text-xl text-white font-semibold ">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/login">Login</a>
        <a href="/help">Help</a>
      </div>
    </div>
  );
};

export default Navbar;
