import { useState, useEffect } from "react";

import React from "react";

const useFetch = (api) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(api);
        const result = await res.json();
        setData(result);
        isLoading(false);
      } catch (error) {
        console.log(error);
      }
      getData();
    };
  }, [api]);

  return <div>data, isLoading</div>;
};

export default useFetch;
