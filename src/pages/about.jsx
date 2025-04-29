import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../components/common/Product";

const About = () => {
  const [productName, setProductName] = useState("");
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const res = await axios.get(
        `https://dummyjson.com/products/search?q=${productName}`
      );
      setProductData(res.data.products);
    };

    const timerId = setTimeout(getProduct, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [productName]);
  return (
    <div className="min-h-screen w-full bg-white text-black  pt-24">
      <div className="flex px-12 items-center gap-x-6">
        <input
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Enter project name"
          type="text"
          className="px-5 py-2 border w-96 border-blue-600 rounded-lg text-black/50 placeholder:text-black-50"
        />
        <h1 className="text-xl">Filter product</h1>
      </div>
      <div className="w-full px-12 mt-8 grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 lg:gap-6 md:gap-5 gap-3">
        {productData &&
          productData?.map((product) => {
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

export default About;
