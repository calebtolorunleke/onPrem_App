import React from "react";

const SingleCartItem = ({ id, img, price, name, handleRemoveItem }) => {
  return (
    <div className="flex justify-between items-center border-b-2 border-b-black padding-b-2">
      <img src={img} alt={name} className="h-[100px] w-[100px]" />
      <div className="w-[50%] flex justify-end flex-col">
        <p>{name}</p>
        <p>${price}</p>
        <button
          onClick={() => handleRemoveItem(id)}
          className="block bg-purple-600 w-[150px] h-[40px] mx-auto rounded-md text-white"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default SingleCartItem;
