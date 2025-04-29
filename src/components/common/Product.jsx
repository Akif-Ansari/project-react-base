import React from "react";
import { useNavigate } from "react-router";

const Product = ({ category, id, description, price, title, logoUrl }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate("/product", { state: { productId: id } });
  };
  return (
    <div className="w-full hover:-top-1 relative  transition duration-500 ease-in cursor-pointer bg-white shadow-2xl text-black rounded-3xl px-8 py-5 flex flex-col items-start">
      <h1 className="text-xl font-bold text-black">{title}</h1>
      <p className="text-sm opacity-60">{description}</p>
      <img src={logoUrl} className="w-full h-fit" />
      <span className="text-base ">{category}</span>
      <h2 className="lg;text-5xl md:text-4xl text-3xl font-bold">${price}</h2>
      <div className="flex w-full  py-2 items-center justify-end gap-x-3">
        <button
          onClick={() => handleClick(id)}
          className="outline-none border-none text-white bg-blue-500 rounded-lg text-sm font-bold px-6 py-3"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Product;
