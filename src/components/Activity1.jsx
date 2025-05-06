import React from "react";
import deodorant from "../assets/deodorant.jpeg";
import wristWatch from "../assets/wristWatch.jpg";
import fans from "../assets/fans.jpeg";
import phones from "../assets/phones.jpg";

const Activity1 = () => {
  return (
    <div className="w-full">
      <div className="shadow w-90 p-5 mx-auto ">
        <h1 className="text-black-700 font-bold my-3">Your Bag</h1>
        <h6 className="text-justify text-purple-700 text-xs mb-2">
          4 Items left in Cart
        </h6>
        <div className="flex flex-col">
          <section className="flex flex-row gap-2 justify-between">
            <img src={phones} alt="" className="w-25 h-25" />
            <div className="gap-2 flex-col flex text-left">
              <p>Philly Powerbank</p>
              <p>$7000</p>
              <button className="bg-purple-600 text-white  w-[100px] h-[30px] rounded-lg p-1;">
                Remove
              </button>
            </div>
          </section>
          <hr className=" my-4 border" />
          <section className="flex flex-row gap-2 justify-between">
            <img src={wristWatch} alt="" className="w-25 h-25" />
            <div className="gap-2 flex-col flex text-left">
              <p>Philly Powerbank</p>
              <p>$7000</p>
              <button className="bg-purple-600 text-white  w-[100px] h-[30px] rounded-lg p-1;">
                Remove
              </button>
            </div>
          </section>
          <hr className=" my-4 border" />
          <section className="flex flex-row gap-2 justify-between">
            <img src={fans} alt="" className="w-25 h-25" />
            <div className="gap-2 flex-col flex text-left">
              <p>Philly Powerbank</p>
              <p>$7000</p>
              <button className="bg-purple-600 text-white  w-[100px] h-[30px] rounded-lg p-1;">
                Remove
              </button>
            </div>
          </section>
          <hr className=" my-4 border" />
          <section className="flex flex-row gap-2 justify-between">
            <img src={deodorant} alt="" className="w-25 h-25" />
            <div className="gap-2 flex-col flex text-left">
              <p>Philly Powerbank</p>
              <p>$7000</p>
              <button className="bg-purple-600 text-white  w-[100px] h-[30px] rounded-lg p-1;">
                Remove
              </button>
            </div>
          </section>
          <hr className=" my-4 border" />
          <div className="flex flex-row justify-between my-3">
            <p>Total:</p>
            <p>$71000</p>
          </div>
          <div className="mb-5">
            <button className="bg-red-600 align-center text-white  w-[100px] h-[30px] rounded-lg p-1;">
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity1;
