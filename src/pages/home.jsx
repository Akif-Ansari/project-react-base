import React, { useEffect, useState } from "react";
import Product from "../components/common/Product";

const Home = () => {
  const [productsList, setProductsList] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProductsList(data.products);
    };
    getProducts();
  }, []);

  return (
    <div className="min-h-screen w-full bg-white text-black pt-24 sm:px-8 px-5">
      <h1 className="text-2xl font-bold text-blue-900">Products List</h1>
      <div className="w-full mt-8 grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 lg:gap-6 md:gap-5 gap-3">
        {productsList?.map((product) => {
          return (
            <Product
              id={product.id}
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              logoUrl={product.thumbnail}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
