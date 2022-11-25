import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../layout/Loading/Loading";
import Categories from "../Categories/Categories";
import Leftside from "./Leftside/Leftside";

const Products = () => {
  const [categoriesname, setCategoriesName] = useState("");
  const [categories, setCategories] = useState([]);

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/products`);
      const data = await res.json();
      console.log(products);
      return data;
    },
  });

  useEffect(() => {
    fetch(`http://localhost:5000/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleCategoriesName = (categoriesname) => {
    setCategoriesName(categoriesname);
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="w-4/12 m-auto">
        <h2 className="text-2xl text-center md:text-left pl-5 xl:pl-10 uppercase hidden md:block text-gray-500 font-semibold my-3">
          {categoriesname}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 ">
        <div className=" my-2 md:pl-4 lg:pl-56 text-center md:text-left ">
          <h2 className="pl-5 font-semibold text-slate-500 text-xl">
            Categories:
          </h2>
          <hr className="md:w-32 mt-1 md:ml-5" />

          <div className="my-3 pl-5">
            {categories.map((category) => (
              <button
                onClick={() => handleCategoriesName(category.category_name)}
                className="my-1 mx-2 md:my-2 md:mx-0 py-2 px-3 inline-block md:block bg-sky-300 hover:bg-sky-400 rounded-sm mt-3 text-xs md:text-base font-semibold w-60  md:text-left m-auto "
                key={category.id}
              >
                <Link to={`/categories/${category.category_name}`}>
                  {category.category_name}
                </Link>
              </button>
            ))}
          </div>
        </div>

        {products?.map((products) => (
          <Leftside products={products} key={products._id}></Leftside>
        ))}

        <div className="col-span-2 my-2 lg:grid grid-cols-2 <gap-4"></div>
      </div>
    </div>
  );
};

export default Products;
