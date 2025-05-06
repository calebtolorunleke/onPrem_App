import React, { useState } from "react";
// import { useState } from "react";

const LoginState = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    job: "Frontend Dev",
    location: "Lagos",
  });

  //London
  const handleUserChange = () =>
    setUser({
      ...user,
      location: "london",
      job: "backend engineer",
    });

  const [products, setProducts] = useState(["fruits", "bag", "jean"]);

  const clearCart = () => {
    setProducts([]);
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold">COMPLEX STATE</h2>
      <p className="">my name is {user.name}</p>
      <p>my job: {user.job}</p>
      <p>i live in {user.location}</p>
      <button onClick={handleUserChange} className="custom-btn">
        Change User
      </button>
      {products.map((product, index) => {
        return <li key={index}>{product}</li>;
      })}

      <button onClick={clearCart} className="custom-btn">
        Clear Cart
      </button>
    </div>
  );
};

export default LoginState;
