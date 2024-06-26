import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import XIcon from "@mui/icons-material/X";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
const Contact = () => {
  return (
    <div>
      <main className="flex  bg-sky-500 h-12 justify-center gap-48 items-center text-white  mb-10 font-semibold ">
        <div>
          <h3>BE IN TOUCH WITH US</h3>
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Enter your e-mail"
            className="rounded-l h-7"
          />
          <button className="bg-black text-xs  rounded-r w-20 h-7">
            JOIN US
          </button>
        </div>
        <div className="flex gap-2">
          <FacebookOutlinedIcon />
          <XIcon />
          <GoogleIcon />
          <InstagramIcon />
        </div>
      </main>
    </div>
  );
};

export default Contact;
