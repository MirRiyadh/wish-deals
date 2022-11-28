import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { FaBook, FaBookmark, FaClock, FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Loading from "../../layout/Loading/Loading";
import CategoryModal from "./CategoryModal";
import SingleCategory from "./SingleCategory";
import axios from "axios";
import toast from "react-hot-toast";

const Categories = () => {
  const [categoriesname, setCategoriesName] = useState("");
  const [categories, setCategories] = useState([]);
  const [appointment, setAppointment] = useState(null);
  const items = useLoaderData();

  useEffect(() => {
    axios.get("http://localhost:5000/categories").then((response) => {
      setCategories(response.data);
    });
  }, []);

  const handleCategoriesName = (categoriesname) => {
    setCategoriesName(categoriesname);
  };

  const handleWishlist = (id) => {
    fetch(`http://localhost:5000/products/wishlist/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          toast.success("Added to wishlist", 5000);
        }
      });
  };

  return (
    <div className="mb-20 mt-14">
      <div className="w-4/12 m-auto">
        <h2 className="text-2xl text-center md:text-left pl-5 xl:pl-10 uppercase hidden md:block text-gray-500 font-semibold my-3">
          {categoriesname}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-10/12 md:w-11/12 lg:w-9/12 2xl:w-8/12 m-auto">
        <div className=" my-2 text-center md:text-left  col-span-1">
          <h2 className="pl-5  font-semibold text-slate-500 text-xl">
            Categories:
          </h2>
          <hr className="md:w-32 mt-1 md:ml-5" />

          <div className="my-3 pl-5">
            {categories.map((category) => (
              <button
                onClick={() => handleCategoriesName(category.category_name)}
                className="my-1 mx-2 md:my-2 md:mx-0 py-2 px-3 inline-block md:block bg-amber-400 hover:bg-black hover:text-white rounded-sm mt-3 text-xs md:text-base font-semibold w-60  md:text-left m-auto uppercase md:w-36 xl:px-1 lg:w-40 xl:text-center"
                key={category._id}
              >
                <Link to={`/categories/${category.category_name}`}>
                  {category.category_name}
                </Link>
              </button>
            ))}
          </div>
        </div>
        <div className=" col-span-3 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
            {items.map((item) => (
              <SingleCategory
                item={item}
                key={item._id}
                setAppointment={setAppointment}
                handleWishlist={handleWishlist}
              ></SingleCategory>
            ))}
          </div>
        </div>
      </div>
      {appointment && <CategoryModal appointment={appointment}></CategoryModal>}
    </div>
  );
};

export default Categories;
