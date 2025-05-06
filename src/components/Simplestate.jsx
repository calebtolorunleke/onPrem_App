import React from "react";
import { useState } from "react";

const Simplestate = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="item-center text-center bg-red-100 rounded p-6">
      <h1>COUNTER</h1>
      <p className="h-10 w-50 border p-6 py-10  my-6 m-auto">Count: {count}</p>
      <div className="flex flex-row gap-5 justify-center">
        <button onClick={Increment} className="bg-red-100 text-green-800">
          Increase
        </button>
        <button onClick={Decrement} className="text-red-800">
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Simplestate;
