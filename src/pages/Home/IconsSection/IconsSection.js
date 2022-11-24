import React from "react";
import icon1 from "../../../assests/icons/icon1.png";
import icon2 from "../../../assests/icons/icon2.png";
import icon3 from "../../../assests/icons/icon3.png";
import icon4 from "../../../assests/icons/icon4.png";

const IconsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 w-10/12 md:w-11/12 lg:w-8/12 2xl:w-7/12 m-auto my-10 md:my-24 rounded-md p-3 border shadow">
      <div className="flex flex-col items-center  mb-3 md:mb-0">
        <div>
          <img className="w-14 mb-3" src={icon1} alt="" />
        </div>
        <div>
          <h2 className=" lg:text-lg text-left font-semibold">Safe delivery</h2>
        </div>
      </div>

      <div className="flex flex-col items-center mb-3 md:mb-0">
        <div>
          <img className="w-12" src={icon2} alt="" />
        </div>
        <div>
          <h2 className=" lg:text-lg text-left font-semibold">Support 24/7</h2>
        </div>
      </div>

      <div className="flex flex-col items-center mb-3 md:mb-0">
        <div>
          <img className="w-12 mb-1" src={icon3} alt="" />
        </div>
        <div>
          <h2 className=" lg:text-lg text-left font-semibold">100% safe</h2>
        </div>
      </div>

      <div className="flex flex-col items-center mb-3 md:mb-0">
        <div>
          <img className="w-10" src={icon4} alt="" />
        </div>
        <div>
          <h2 className=" lg:text-lg text-left font-semibold">Big savings</h2>
        </div>
      </div>
    </div>
  );
};

export default IconsSection;
