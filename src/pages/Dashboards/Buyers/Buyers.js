import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

import Loading from "../../../layout/Loading/Loading";

const Buyers = () => {
  const {
    data: buyers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users/buyer", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Delete successfully", 4000);
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="md:w-11/12  m-auto">
      <h1 className="text-2xl lg:my-3 mb-3 font-semibold">Buyer Lists</h1>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-orange-400 dark:text-white">
            <tr>
              <th scope="col" className="py-3 px-6">
                User Name
              </th>
              <th scope="col" className="py-3 px-6">
                User email
              </th>
              <th scope="col" className="py-3 px-6">
                User Status
              </th>

              <th scope="col" className="py-3 px-6">
                <span className="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody className="text-black">
            {buyers.map((user) => (
              <tr class="bg-white border-b dark:bg-orange-50 dark:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-200">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                >
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 rounded-full mr-3"
                      src={user.image}
                      alt=""
                    />
                    {user.name}
                  </div>
                </th>
                <td class="py-4 px-6 ">{user.email}</td>
                <td class="py-4 px-6 ">{user.user_role}</td>

                <td class="py-4 px-6 text-right">
                  <button
                    onClick={() => handleDelete(user._id)}
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
export default Buyers;
