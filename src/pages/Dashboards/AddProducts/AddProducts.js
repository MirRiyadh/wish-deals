import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../firebase/AuthProvider";
import Loading from "../../../layout/Loading/Loading";
import AddProduct from "./AddProduct";
import Verificaton from "./Verificaton";

const AddProducts = () => {
  const { user } = useContext(AuthContext);

  const {
    data: verify,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["verify"],
    queryFn: async () => {
      const res = await fetch(
        `https://react-assignment-twelve-server.vercel.app/verify/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      {verify?.verified ? (
        <>
          <AddProduct></AddProduct>
        </>
      ) : (
        <>
          <Verificaton></Verificaton>
        </>
      )}
    </div>
  );
};

export default AddProducts;
