import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../firebase/AuthProvider";
import Loading from "../../layout/Loading/Loading";

const MyProduct = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);

  const {
    data: myProducts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myProducts"],
    queryFn: async () => {
      const res = await fetch(
        `https://react-assignment-twelve-server.vercel.app/products/myproducts?email=${user?.email}`,
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

  console.log(myProducts);

  const handleAdvertise = (id) => {
    fetch(
      `https://react-assignment-twelve-server.vercel.app/products/adversite/${id}`,
      {
        method: "PUT",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          toast.success("Adversited successfully", 5000);
          refetch();
        }
      });
  };

  const handleSold = (id) => {
    fetch(
      `https://react-assignment-twelve-server.vercel.app/products/sold/${id}`,
      {
        method: "PUT",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          toast.success("Item Sold successfully", 5000);
          refetch();
        }
      });
  };

  const handleDelete = (id) => {
    fetch(`https://react-assignment-twelve-server.vercel.app/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          toast.success("Delete successfully", 5000);
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="md:w-11/12  lg:w-8/12 m-auto py-10 md:pb-56 md:pt-5">
      <h1 className="text-2xl lg:my-3 mb-3 font-semibold">Product Lists</h1>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-orange-400 dark:text-white">
            <tr>
              <th scope="col" className="py-3 px-6">
                Product Name
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                Camera
              </th>
              <th scope="col" className="py-3 px-6">
                Ram / Storage
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
              <th scope="col" className="py-3 px-6">
                Advertise
              </th>
              <th scope="col" className="py-3 px-6">
                <span className="sr-only">Delete</span>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-black">
            {myProducts.map((myProduct) => (
              <tr class="bg-white border-b dark:bg-orange-50 dark:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-200">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                >
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 rounded-full mr-3"
                      src={myProduct?.phone_details?.phone_img}
                      alt=""
                    />
                    {myProduct?.phone_details?.phone_name}
                  </div>
                </th>
                <td class="py-4 px-6 ">{myProduct.price}</td>
                <td class="py-4 px-6 ">
                  {myProduct?.phone_details?.phone_camera}
                </td>

                <td class="py-4 px-6 ">
                  {myProduct?.phone_details?.phone_ram}
                </td>
                <td class="py-4 px-6 ">
                  {myProduct?.status !== "sold" ? (
                    <>
                      <button
                        onClick={() => handleSold(myProduct._id)}
                        className="bg-teal-500 hover:bg-sky-500 px-3 py-1 rounded-2xl font-semibold capitalize text-white"
                      >
                        Available
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleSold(myProduct._id)}
                        className="bg-slate-400 px-6 py-1 rounded-2xl font-semibold capitalize text-white"
                      >
                        Sold
                      </button>
                    </>
                  )}
                </td>

                <td class="py-4 px-6 hover:underline">
                  {myProduct?.adversite ? (
                    <>
                      <button
                        onClick={() => handleAdvertise(myProduct._id)}
                        className="bg-blue-400 px-4 py-1 rounded-2xl font-semibold capitalize text-white"
                      >
                        Running
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleAdvertise(myProduct._id)}
                        className="bg-rose-400 hover:bg-rose-600  px-4 py-1 rounded-2xl font-semibold capitalize text-white"
                      >
                        Adversite
                      </button>
                    </>
                  )}
                </td>

                <td class="py-4 px-6 text-right">
                  <button
                    onClick={() => handleDelete(myProduct._id)}
                    href="#"
                    class="font-medium text-rose-600 dark:text-rose-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProduct;
