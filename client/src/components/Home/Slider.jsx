import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        //   deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
      >
        <div>
          <img
            src="/img/slide1.avif"
            className=" w-full h-[550px] object-cover"
          />
        </div>
        <div>
          {" "}
          <img
            src="/img/slide2.webp"
            className=" w-full h-[550px] object-cover"
          />
        </div>
        <div>
          {" "}
          <img
            src="/img/slide3.jpeg"
            className=" w-full h-[550px] object-cover"
          />
        </div>
        <div>
          <img
            src="/img/slide4.webp"
            className=" w-full h-[550px] object-cover"
          />
        </div>
      </Carousel>
      ;
    </div>
  );
};

export default Slider;
