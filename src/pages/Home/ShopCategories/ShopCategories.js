import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Loading from "../../../layout/Loading/Loading";
import DisplayProducts from "../DisplayProducts/DisplayProducts";
import ShopModal from "../DisplayProducts/ShopModal";

const ShopCategories = () => {
  const [appointment, setAppointment] = useState(null);

  const {
    data: displayProducts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/products`);
      const data = await res.json();
      console.log(displayProducts);
      return data;
    },
  });

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
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  const newProducts = displayProducts.slice(0, 6);

  return (
    <div className="mb-10 md:mb-20">
      <h1 className="text-center md:text-left w-10/12 md:w-11/12 lg:w-8/12 2xl:w-7/12 m-auto text-xl font-semibold uppercase ">
        New Arrivals
        <hr className="my-2 border w-24 m-auto md:w-full" />
        <hr className="my-2 border-[2px] border-amber-400 -mt-3 mb-8 w-24 m-auto md:ml-0 md:w-40 bg-amber-400 " />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-10/12 md:w-11/12 lg:w-8/12 2xl:w-7/12 m-auto my-4">
        {newProducts?.map((displayProduct) => (
          <DisplayProducts
            displayProduct={displayProduct}
            key={displayProduct._id}
            setAppointment={setAppointment}
            handleWishlist={handleWishlist}
          ></DisplayProducts>
        ))}
      </div>
      <div>
        {appointment && (
          <ShopModal
            setAppointment={setAppointment}
            appointment={appointment}
            refetch={refetch}
          ></ShopModal>
        )}
      </div>
      <div className="md:my-10">
        <button className="px-6 py-2 bg-orange-400 text-white font-semibold uppercase hover:shadow-lg hover:text-black">
          <Link to="/products">Show All</Link>
        </button>
      </div>
    </div>
  );
};

export default ShopCategories;
