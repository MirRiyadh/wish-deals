import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import IconsSection from "./IconsSection/IconsSection";
import NewsLetters from "./NewsLetters/NewsLetters";
import ShopCategories from "./ShopCategories/ShopCategories";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <IconsSection></IconsSection>
      <ShopCategories></ShopCategories>
      <AboutUs></AboutUs>
      <NewsLetters></NewsLetters>
    </div>
  );
};

export default Home;
