import React from "react";
import { FaBook, FaBookmark, FaClock, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Leftside = () => {
  return (
    <div className="card bg-base-100 shadow-xl mx-4 mb-5 border rounded-md ">
      <figure>
        <img className="w-full p-3" src="" />
      </figure>
      <div className="card-body p-3">
        <h2 className="card-title"></h2>
        <p className="text-sm text-gray-500"></p>
        <p className="text-3xl font-bold">$</p>
        <div className="flex justify-between">
          <div>
            <p className="flex items-center font-semibold mb-1 ">
              <FaStar className="mr-1 text-yellow-500" />
            </p>
            <p className="flex items-center font-semibold ">
              <FaClock className="mr-1 text-green-600" />
            </p>
          </div>
          <div>
            <p className="flex items-center font-semibold ">
              <FaBookmark className="mr-1 text-sky-500" />
            </p>
          </div>
        </div>

        <hr />
        <div className="card-actions justify-between items-center">
          <img className="w-8 h-8 shadow rounded-full" src="" />{" "}
          <p className="font-semibold text-slate-700"> </p>
          <button className=" py-2 px-5 bg-indigo-400 hover:bg-indigo-600  rounded-md font-semibold flex items-center text-white font-bold">
            <Link to={`/courses-details/`}>Details </Link>
            <FaBook className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Leftside;
