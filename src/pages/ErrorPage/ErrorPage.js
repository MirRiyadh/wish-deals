import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-40 ">
        <div className="text-red-500 font-bold text-7xl">404</div>

        <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10 capitalize">
          This page does not exist
        </div>

        <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8 capitalize">
          The page you are looking for could not be found.
        </div>

        <Link to="/">
          <button className="px-4 py-2 bg-blue-400 mt-4 font-bold text-white hover:bg-blue-600">
            Go To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
