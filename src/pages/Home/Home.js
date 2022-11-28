import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import Advertise from "./Advertise/Advertise";
import Brands from "./Brands/Brands";
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
      <Brands></Brands>
      <Advertise></Advertise>
      <AboutUs></AboutUs>
      <NewsLetters></NewsLetters>
    </div>
  );
};

export default Home;
