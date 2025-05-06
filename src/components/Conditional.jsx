import React from "react";

export const Conditional = () => {
  const isUserLoggedIn = false;
  const isLoading = false;
  const isError = true;

  if (isUserLoggedIn) {
    return (
      <div>
        <button className="custom-btn">Log Out</button>
      </div>
    );
  }

  return (
    <div>
      <div className="text-4xl font-bold">Conditional Rendering</div>
      <button className="custom-btn">Log Out</button>
      {isLoading ? <h1>loading....</h1> : <h1>Main data</h1>}

      {isError && <h1>An Error occured....</h1>}
    </div>
  );
};
