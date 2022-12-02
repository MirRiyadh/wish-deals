import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";
import Loading from "../../layout/Loading/Loading";

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);

  const {
    data: wishlists,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["mywishlist"],
    queryFn: async () => {
      const res = await fetch(
        `https://react-assignment-twelve-server.vercel.app/wishlist?email=${user?.email}`,
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

  const handlePayment = (id) => {
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

  const handleDelete = (id) => {
    if (window.confirm("Are you sure delete the item?") === true) {
      fetch(
        `https://react-assignment-twelve-server.vercel.app/wishlist/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            console.log(data);
            toast.success("Delete successfully", 5000);
            refetch();
          }
        });
    } else {
      return "ok";
    }
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="md:w-11/12  lg:w-11/12 2xl:w-10/12 m-auto py-10 md:pb-56 md:pt-5">
      <h1 className="text-2xl lg:my-3 mb-3 font-semibold">Wishlists</h1>
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
                Processor
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
              <th scope="col" className="py-3 px-6">
                <span className="sr-only">Delete</span>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-black">
            {wishlists.map((wishlist) => (
              <tr class="bg-white border-b dark:bg-orange-50 dark:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-200">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                >
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 rounded-full mr-3"
                      src={wishlist?.img}
                      alt=""
                    />
                    {wishlist?.name}
                  </div>
                </th>
                <td class="py-4 px-6 ">{wishlist.price}</td>
                <td class="py-4 px-6 ">{wishlist?.camera}</td>

                <td class="py-4 px-6 ">{wishlist?.ram}</td>
                <td class="py-4 px-6 ">{wishlist?.processor}</td>

                <td class="py-4 px-6 hover:underline">
                  {wishlist?.price && !wishlist.paid && (
                    <Link to={`/wishlist/payment/${wishlist._id}`}>
                      <button className="bg-blue-400 px-4 py-1 rounded-2xl font-semibold capitalize text-white">
                        Pay
                      </button>
                    </Link>
                  )}
                  {wishlist?.price && wishlist.paid && (
                    <Link>
                      <button className="bg-blue-400 px-4 py-1 rounded-2xl font-semibold capitalize text-white">
                        Paid
                      </button>
                    </Link>
                  )}
                  {/* {wishlist?.price && !wishlist.paid ? (
                    <>
                      <button
                        onClick={() => handlePayment(wishlist._id)}
                        className="bg-blue-400 px-4 py-1 rounded-2xl font-semibold capitalize text-white"
                      >
                        Paid
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handlePayment(wishlist._id)}
                        className="bg-blue-400 hover:bg-rose-600  px-4 py-1 rounded-2xl font-semibold capitalize text-white"
                      >
                        Pay
                      </button>
                    </>
                  )} */}
                </td>

                <td class="py-4 px-6 text-right">
                  <button
                    onClick={() => handleDelete(wishlist._id)}
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

export default Wishlist;
