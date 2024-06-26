import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="w-full h-full  flex flex-col gap-0 leading-6 ">
        <div className="flex px-12 gap-14 ">
          <div className="w-80 h-56  flex flex-col">
            <h2 className="mb-3 font-semibold text-xl">Category</h2>
            <span className="text-sm">FAQ</span>
            <span className="text-sm">Home</span>
            <span className="text-sm">About</span>
            <span className="text-sm">Contact</span>
            <span className="text-sm">Stores</span>
          </div>{" "}
          <div className="w-80 h-56  flex flex-col">
            <h2 className="mb-3 font-semibold text-xl">Links</h2>
            <span className="text-sm">FAQ</span>
            <span className="text-sm">Home</span>
            <span className="text-sm">About</span>
            <span className="text-sm">Contact</span>
            <span className="text-sm">Stores</span>
          </div>
          <div className="w-80 h-56 ">
            <h2 className="mb-3 font-semibold text-xl">About</h2>
            <p className="text-sm break-all">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse in
              eos autem architecto iste totam commodi, expedita ad,
              reprehenderit necessitatibus quas voluptas odio?
            </p>
          </div>
          <div className="w-80 h-56 ">
            <h2 className="mb-3 font-semibold text-xl">Contact</h2>
            <p className="text-sm break-all">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse in
              eos autem architecto iste totam commodi, expedita ad,
              reprehenderit necessitatibus quas voluptas odio?
            </p>
          </div>
        </div>
        <div className="mx-9  h-full flex justify-between ">
          <div className="flex gap-2 align-middle ml-4">
            <h1 className=" text-2xl">Logo</h1>
            <span className="text-center relative top-2 text-sm">
              @copyright 2024 All Right Reserved
            </span>
          </div>
          <img src="/img/payment.png" className=" h-14" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
