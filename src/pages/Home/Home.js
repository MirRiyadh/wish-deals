import React from "react";
import IconsSection from "./IconsSection/IconsSection";
import ShopCategories from "./ShopCategories/ShopCategories";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <IconsSection></IconsSection>
      <ShopCategories></ShopCategories>
    </div>
  );
};

export default Home;
