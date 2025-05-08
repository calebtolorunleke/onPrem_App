import React from "react";
import { products } from "./product";

const cart = () => {
  console.log(products);
  return (
    <div className="w-[420px] rounded-md shadow-2xl p-7 mx-auto ">
      <h1 className="text-center text-4xl my-4">Your Bag</h1>
    </div>
  );
};

export default cart;
