import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

const ProductsPage = () => {
  const [productData, setProductData] = useState({});
  const location = useLocation();
  const productId = location.state.productId;
  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`https://dummyjson.com/products/${productId}`);
      const data = await res.json();
      console.log(data);
      setProductData(data);
    };
    getProduct();
  }, []);
  return (
    <div className="min-h-screen w-full pt-24">
      <div className="w-full flex items-star justify-between">
        <img src={productData?.thumbnail} alt="" className="h-[600px] w-1/2" />
        <div className="flex flex-col items-start w-1/2 p-5 px-20">
          <h1 className="text-3xl font-bold text-orange-500">
            {productData?.title}
          </h1>
          <p className="mt-8 text-base text-black/60">
            {productData?.description}
          </p>
          <h2 className="mt-2 text-xl">
            Category : <span>{productData?.category}</span>
          </h2>
          <h2 className="mt-2 text-xl  ">
            Brand : <span>{productData?.brand}</span>
          </h2>
          <button className="px-8 py-3 mt-3 rounded-lg text-sm bg-blue-500 text-white">
            Buy Now
          </button>
        </div>
      </div>
      <div className="mt-8 flex items-center gap-x-12 flex-wrap ">
        {productData?.images?.map((image, index) => {
          return (
            <img
              src={image}
              key={index}
              className="h-64 w-64 hover:shadow-2xl rounded-3xl transition duration-[500ms] ease hover:-top-2 relative "
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
