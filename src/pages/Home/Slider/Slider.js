import { Carousel } from "flowbite-react";
import React from "react";
import "./Slider.css";

const Slider = () => {
  return (
    <>
      <div className="h-56 sm:h-64 lg:h-96 ">
        <Carousel slideInterval={6000}>
          <div className="slider2 h-96  ">
            <div className="w-8/12 m-auto pt-28 lg:w-4/12 2xl:w-6/12 lg:text-left ">
              <h1 className="text-base md:text-2xl font-semibold  text-white md:text-black">
                New Arrival
              </h1>
              <h1 className=" text-white text-lg md:text-black">
                Buy Or Sell your Unused
              </h1>
              <h1 className=" text-white text-4xl lg:text-6xl font-bold md:text-black">
                Smartphones
              </h1>
              <button className="bg-indigo-400 text-white md:text-black px-8 py-2 font-semibold shadow-md rounded-md hover:bg-purple-400 hover:text-white hover:border  my-3 lg:my-8">
                Buy now
              </button>
            </div>
          </div>

          <div className="slider1 h-96  ">
            <div className="w-8/12 m-auto pt-24 lg:text-left lg:w-4/12">
              <h1 className="text-2xl font-semibold text-white">
                Happy Shopping
              </h1>
              <h1 className=" text-white text-5xl lg:text-6xl font-bold mb-3">
                Buy, Sell
              </h1>
              <h1 className=" text-white text-3xl lg:text-3xl font-bold">
                {" "}
                & Enjoy
              </h1>
              <button className="bg-sky-400 text-white px-8 py-2 font-semibold shadow-md rounded-md hover:bg-slate-100 hover:text-black  my-3 lg:my-8">
                Buy now
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Slider;
