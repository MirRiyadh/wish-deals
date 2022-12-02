import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../firebase/AuthProvider";
import Loading from "../../../layout/Loading/Loading";
import AdversiteItem from "./AdversiteItem";
import AdversiteModal from "./AdversiteModal";

const Advertise = () => {
  const { user } = useContext(AuthContext);
  const [appointment, setAppointment] = useState(null);
  const {
    data: adversiteItems = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["adversite"],
    queryFn: async () => {
      const res = await fetch(
        `https://react-assignment-twelve-server.vercel.app/products/adversite`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
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

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="my-10 md:my-20 ">
      {adversiteItems.length !== 0 ? (
        <div>
          <h1 className="text-center md:text-left w-10/12 md:w-11/12 lg:w-8/12 2xl:w-7/12 m-auto text-xl font-semibold uppercase ">
            Adversite Item
            <hr className="my-2 border w-24 m-auto md:w-full" />
            <hr className="my-2 border-[2px] border-amber-400 -mt-3 mb-8 w-24 m-auto md:ml-0 md:w-40 bg-amber-400 " />
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-10/12 md:w-11/12 lg:w-8/12 2xl:w-7/12 m-auto my-4">
            {adversiteItems.map((adversiteItem) => (
              <AdversiteItem
                key={adversiteItem._id}
                adversiteItem={adversiteItem}
                setAppointment={setAppointment}
                refetch={refetch}
                handleWishlist={handleWishlist}
              ></AdversiteItem>
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div>
        {appointment && (
          <AdversiteModal appointment={appointment}></AdversiteModal>
        )}
      </div>
    </div>
  );
};

export default Advertise;
