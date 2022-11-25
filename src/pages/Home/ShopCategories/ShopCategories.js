import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../../layout/Loading/Loading";
import DisplayProducts from "../DisplayProducts/DisplayProducts";

const ShopCategories = () => {
  const [bal, setBal] = useState("");

  const { data: displayProducts, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/products`);
      const data = await res.json();
      console.log(displayProducts);
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1>SHOP BY CATEGORIES</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-10/12 md:w-8/12 m-auto my-4">
        {displayProducts?.map((displayProduct) => (
          <DisplayProducts
            displayProduct={displayProduct}
            key={displayProduct._id}
          ></DisplayProducts>
        ))}
      </div>
    </div>
  );
};

export default ShopCategories;
