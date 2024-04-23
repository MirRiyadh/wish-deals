kiimport React from "react";
import icon1 from "../../../assests/brands/iphone_logo.png";
import icon2 from "../../../assests/brands/Samsung_logo.png";
import icon3 from "../../../assests/brands/Oneplus-logo.png";
import icon4 from "../../../assests/brands/huawei-logo.png";
import { Link } from "react-router-dom";

const Brands = () => {
  const brands = [
    {
      name: "apple",
      img: icon1,
      id: 1,
    },
    {
      name: "samsung",
      img: icon2,
      id: 2,
    },
    {
      name: "oneplus",
      img: icon3,
      id: 3,
    }
  ];
  return (
    <div className="mb-10 md:mb-20">
      <h1 className="text-center md:text-left w-10/12 md:w-11/12 lg:w-8/12 2xl:w-7/12 m-auto text-xl font-semibold uppercase ">
        Categories
        <hr className="my-2 border w-24 m-auto md:w-full" />
        <hr className="my-2 border-[2px] border-amber-400 -mt-3 mb-8 w-24 m-auto md:ml-0 md:w-40 bg-amber-400 " />
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-10/12 md:w-11/12 lg:w-8/12 2xl:w-7/12 m-auto my-4">
        {brands.map((brand) => (
          <Link key={brand.id} to={`categories/${brand.name}`}>
            <div className=" border p-4 shadow-sm">
              <img src={brand.img} className="text-center w-16 m-auto" alt="" />
              <h3>{brand.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Brands;
