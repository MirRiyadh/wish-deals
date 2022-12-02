import React from "react";
import { BsClockHistory, BsHeartFill } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import BookModal from "../../BookModal/BookModal";
import { RiHeartFill } from "react-icons/ri";

const DisplayProducts = ({
  displayProduct,
  setAppointment,
  handleWishlist,
}) => {
  const { condition_type, location, price, phone_details, used_duration, _id } =
    displayProduct;

  return (
    <div className="w-full max-w-sm rounded-lg shadow-md border-orange-300 border bg-gray-50">
      <div>
        <div className="absolute pl-5 pt-5 ">
          <button onClick={() => handleWishlist(displayProduct)}>
            <RiHeartFill
              className="text-2xl text-rose-600 hover:text-white border-2 hover:bg-rose-600  w-8 h-8 p-1 rounded-full"
              title="add to wishlist"
            />
          </button>
        </div>
        <a href="#">
          <img
            className="p-8 rounded-t-lg"
            src={phone_details?.phone_img}
            alt="product image"
          />
        </a>
      </div>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">
            {phone_details?.phone_name}
          </h5>
        </a>
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
          {location}
        </span>
        <div className="flex items-center mt-2.5 mb-5 justify-between">
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
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 2xl:text-xl lg:text-lg text-orange-500">
            {" "}
            {price}/-
          </span>
          <a href="#">
            <label
              htmlFor="shop-modal"
              onClick={() => setAppointment(displayProduct)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
            >
              Book Now
            </label>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DisplayProducts;
