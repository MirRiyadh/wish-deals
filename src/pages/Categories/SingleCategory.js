import React from "react";
import { BsClockHistory } from "react-icons/bs";
import { FaBook, FaBookmark, FaClock, FaStar, FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleCategory = ({ item }) => {
  console.log(item);
  const { condition_type, location, price, phone_details, used_duration } =
    item;
  return (
    <div class="w-full max-w-sm rounded-lg shadow-md border-orange-300 border bg-gray-50">
      <a href="#">
        <img
          class="p-8 rounded-t-lg"
          src={phone_details.phone_img}
          alt="product image"
        />
      </a>
      <div class="px-5 pb-5">
        <a href="#">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 mb-2">
            {phone_details.phone_name}
          </h5>
        </a>
        <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
          {location}
        </span>
        <div class="flex items-center mt-2.5 mb-5 justify-between">
          <div className="flex items-center font-semibold capitalize">
            <span>
              <FaTools className="mr-1" />
            </span>
            <p>{condition_type}</p>
          </div>
          <div className="flex items-center font-semibold capitalize">
            <span>
              <BsClockHistory className="mr-1" />
            </span>
            <p>{used_duration}</p>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-2xl font-bold text-gray-900 2xl:text-xl lg:text-lg">
            {" "}
            {price}/-
          </span>
          <a
            href="#"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;