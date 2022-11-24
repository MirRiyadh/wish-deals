import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaAngellist, FaCheck, FaRegSmileBeam } from "react-icons/fa";
import { Link } from "react-router-dom";
import photo1 from "../../../assests/photos/photo1.jpg";

const AboutUs = () => {
  return (
    <div>
      <div className="w-11/12  lg:w-8/12 2xl:w-7/12 m-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <img src={photo1} alt="" />
          </div>

          <div className="text-center md:text-left mb-4 lg:pt-16">
            <p className="text-base text-amber-500 font-semibold">About Us </p>
            <h2 className="text-3xl lg:text-5xl font-semibold mb-4 text-gray-600">
              Why Wishdeals
            </h2>
            <p className="text-slate-400 mb-4">
              — Wishdeals is a leading buy & sell company for used smartphones.
              By professionally manage all used devices in our website and
              selling them directly, We’re able to offer smartphones that work
              like new at a much lower price. On top of that, choosing used
              smartphones is good for the recycle. Why wait? Buy smart. Not new.
            </p>
            <button className="bg-rose-500 hover:bg-rose-600 font-semibold shadow-md py-2 px-5 text-white rounded-md">
              <Link to="/products">BUY A PHONE </Link>
            </button>
            <div className="flex items-center  font-semibold justify-center md:justify-start mt-4">
              <BsCurrencyDollar className="mr-2 bg-gray-200 p-2 rounded-full text-4xl text-black" />{" "}
              <span className="text-2xl md:text-lg text-slate-500">
                Trustable & verified sellers
              </span>
            </div>
            <div className="flex items-center  font-semibold justify-center md:justify-start mt-4">
              <FaAngellist className="mr-2 bg-gray-200 p-2 rounded-full text-4xl text-black" />{" "}
              <span className="text-2xl md:text-lg text-slate-500">
                Professionally checked by wishdeals
              </span>
            </div>
            <div className="flex items-center  font-semibold justify-center md:justify-start mt-4">
              <FaRegSmileBeam className="mr-2 bg-gray-200 p-2 rounded-full text-4xl text-black" />{" "}
              <span className="text-2xl md:text-lg text-slate-500">
                Client Satisfaction
              </span>
            </div>
            <div className="flex items-center mt-8  font-semibold justify-center md:justify-start"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
