import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";
import useBuyer from "../../hooks/useBuyer";

import Loading from "../../layout/Loading/Loading";

import BookModal from "../BookModal/BookModal";
import Categories from "../Categories/Categories";
import Leftside from "./Leftside/Leftside";

const Products = () => {
  const { user } = useContext(AuthContext);
  const [categoriesname, setCategoriesName] = useState("");
  const [categories, setCategories] = useState([]);
  const [appointment, setAppointment] = useState(null);

  useEffect(() => {
    fetch(`https://react-assignment-twelve-server.vercel.app/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        `https://react-assignment-twelve-server.vercel.app/products`
      );
      const data = await res.json();
      console.log(products);
      return data;
    },
  });

  const handleWishlist = (product) => {
    console.log("wish", product, user.email);
    const { phone_img, phone_name, phone_processor, phone_ram, phone_camera } =
      product.phone_details;

    const wishlist = {
      name: phone_name,
      img: phone_img,
      processor: phone_processor,
      ram: phone_ram,
      category_name: product.category_name,
      condition_type: product.condition_type,
      price: product.price,
      email: user.email,
      status: product.status,
      camera: phone_camera,
    };

    fetch("https://react-assignment-twelve-server.vercel.app/wishlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wishlist),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Added to wishlist");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleCategoriesName = (categoriesname) => {
    setCategoriesName(categoriesname);
  };

  return (
    <div className="mt-14 mb-20">
      <div className="w-4/12 m-auto">
        <h2 className="text-2xl text-center md:text-left pl-5 xl:pl-10 uppercase hidden md:block text-gray-500 font-semibold my-3">
          {categoriesname}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-10/12 md:w-11/12 lg:w-9/12 2xl:w-8/12 m-auto ">
        <div className=" my-2 text-center md:text-left  col-span-1">
          <h2 className="pl-5 font-semibold text-slate-500 text-xl">
            Categories:
          </h2>
          <hr className="md:w-32 mt-1 md:ml-5" />

          <div className="my-3 pl-5">
            {categories.map((category) => (
              <button
                onClick={() => handleCategoriesName(category.category_name)}
                className="my-1 mx-2 md:my-2 md:mx-0 py-2 px-3 inline-block md:block bg-amber-400 hover:bg-black hover:text-white rounded-sm mt-3 text-xs md:text-base font-semibold w-60  md:text-left m-auto uppercase md:w-36 xl:px-1 lg:w-40 xl:text-center"
                key={category.id}
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
            {products.map((product) => (
              <Leftside
                product={product}
                setAppointment={setAppointment}
                key={product._id}
                handleWishlist={handleWishlist}
              ></Leftside>
            ))}
          </div>
        </div>
      </div>
      {appointment && (
        <BookModal
          setAppointment={setAppointment}
          appointment={appointment}
          refetch={refetch}
        ></BookModal>
      )}
    </div>
  );
};

export default Products;
