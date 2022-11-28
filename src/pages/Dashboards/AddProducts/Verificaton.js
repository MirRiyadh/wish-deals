import React from "react";

const Verificaton = () => {
  return (
    <div className="flex justify-center w-11/12 m-auto  ">
      <div className="bg-orange-400 mt-[35%] 2xl:mt-[25%] p-8  md:p-20 rounded-md ">
        <h1 className="text-2xl text-white font-bold capitalize">
          Sorry! You need to verify first
        </h1>
        <div className="my-4">
          <button className="bg-white px-8 py-2 md:px-9 font-semibold hover:bg-sky-300 shadow-md  ">
            Contact With Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verificaton;
