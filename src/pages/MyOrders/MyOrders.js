import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../firebase/AuthProvider";
import Loading from "../../layout/Loading/Loading";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/orders?email=${user?.email}`;

  const { data: orders = [], isLoading } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  console.log(orders);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="md:w-11/12  m-auto">
      <h1 className="text-2xl lg:my-3 mb-3 font-semibold">My Orders</h1>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-orange-400 dark:text-white">
            <tr>
              <th scope="col" className="py-3 px-6">
                Product name
              </th>
              <th scope="col" className="py-3 px-6">
                User Name
              </th>
              <th scope="col" className="py-3 px-6">
                Location
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                <span className="sr-only">Pay</span>
              </th>
            </tr>
          </thead>
          <tbody className="text-black">
            {orders?.map((order) => (
              <tr class="bg-white border-b dark:bg-orange-50 dark:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-200">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                >
                  {order.item_name}
                </th>
                <td class="py-4 px-6 ">{order.buyer_name}</td>
                <td class="py-4 px-6 ">{order.meet_location}</td>
                <td class="py-4 px-6">{order.price}</td>
                <td class="py-4 px-6 text-right">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Pay
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
