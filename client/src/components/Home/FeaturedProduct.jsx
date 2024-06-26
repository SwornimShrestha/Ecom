import React from "react";

const FeaturedProduct = () => {
  return (
    <div>
      <main className="mx-12 my-12">
        <div class="w-full h-[550px] bg-slate-300 grid grid-cols-4 grid-rows-2 gap-1">
          <div class="row-span-2 flex justify-center items-center overflow-hidden">
            <img src="/img/Features1.jpeg" />
          </div>
          <div class="col-span-2 flex justify-center items-center overflow-hidden">
            <img src="/img/Features2.webp" />
          </div>
          <div class=" flex justify-center items-center overflow-hidden">
            <img src="/img/Features3.jpeg" />
          </div>
          <div class=" flex justify-center items-center overflow-hidden ">
            <img src="/img/Features4.jpeg" />
          </div>
          <div class="col-span-2 flex justify-center items-center overflow-hidden">
            <img src="/img/Features5jpeg.jpeg" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default FeaturedProduct;
