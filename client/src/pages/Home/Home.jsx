import React from "react";
import Slider from "../../components/Home/Slider";
import FeaturedProduct from "../../components/Home/FeaturedProduct";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProduct />
      <Contact />
    </div>
  );
};

export default Home;
