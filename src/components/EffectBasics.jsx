import React from "react";
import { useEffect, useState } from "react";

export const EffectBasics = () => {
  const [value, setValue] = useState(0);
  const [num, setNum] = useState(100);
  useEffect(() => {
    console.log("use effect run");
  }, [value]);
  return (
    <div className="w-[600px] h-[400px] mx-auto MY-10 SHADOW-2XL">
      <h1 className="text-center">USE EFFECT BASICS</h1>
      <h1>Value: {value}</h1>

      <div className="text-center">
        <button
          onClick={() => setValue(value + 1)}
          className="block bg-purple-600 w-[150px] h-[40px]  mx-auto rounded-md text-white"
        >
          Change Value
        </button>
        <h1>Number: {num}</h1>
        <button
          onClick={() => setNum(num + 1)}
          className="block bg-purple-600 w-[150px] h-[40px]  mx-auto rounded-md text-white"
        >
          Change Number
        </button>
      </div>
    </div>
  );
};
