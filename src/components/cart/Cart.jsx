import React from "react";
import { products } from "./product";
import { useState } from "react";
import SingleCartItem from "./SingleCartItem";

const cart = () => {
  const [Cart, setCart] = useState(products);
  console.log(products);
  const handleClearCart = () => {
    setCart([]);
  };

  const getTotalprice = Cart.reduce((total, item) => total + item.price, 0);

  const handleRemoveItem = (itemid) => {
    console.log(itemid);

    const remainingItems = Cart.filter((product) => product.id !== itemid);
    setCart(remainingItems);
  };

  // const handleRemoveItem = (itemid) => {
  //   const remainingItems = Cart.filter((product) => product.id !== itemid);
  //   setCart(remainingItems);
  // };

  if (Cart.length === 0) {
    return (
      <div className="w-[420px] rounded-md shadow-2xl p-7 my-7 mx-auto">
        <h1 className="text-center text-4xl p-5 my-4">Your Bag</h1>
        <p className="my-3 text-purple-600">Your Bag is Empty</p>
        <button
          onClick={() => setCart(products)}
          className="block bg-purple-600 w-[150px] h-[40px] mx-auto rounded-md text-white"
        >
          Continue Shopping
        </button>
      </div>
    );
  } else {
    return (
      <div className="w-[420px] rounded-md shadow-2xl p-7 mx-auto ">
        <h1 className="text-center text-4xl p-5 my-4">Your Bag</h1>
        <p className="my-3 text-purple-600">
          {Cart.length} items left in the bag
        </p>
        <div className="flex flex-col gap-5">
          {Cart.map((item) => {
            return (
              <SingleCartItem
                key={item.id}
                {...item}
                handleRemoveItem={handleRemoveItem}
              />
            );
          })}
        </div>
        <div className="flex justify-between items-center text-2xl">
          <p>Total</p>
          <p>${getTotalprice}</p>
        </div>
        <button
          onClick={handleClearCart}
          className="block bg-red-600 w-[150px] h-[40px] mx-auto rounded-sn text-white"
        >
          Clear cart
        </button>
      </div>
    );
  }
};

export default cart;
