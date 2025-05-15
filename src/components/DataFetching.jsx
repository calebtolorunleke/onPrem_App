import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import useFetch from "../hooks/useFetch";

const url = "https://jsonplaceholder.typicode.com/users";

const DataFetching = () => {
  //   const [users, setusers] = useState([]);
  //   const [isLoading, setIsLoading] = useState(true);
  //   useEffect(() => {
  //     const getUsers = async () => {
  //       try {
  //         const response = await fetch(url);
  //         const data = await response.json();
  //         console.log(data);
  //         setusers(data);
  //         setIsLoading(false);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     getUsers();
  //   }, []);

  const { data: users, isLoading } = useFetch(url);

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <PropagateLoader size={25} color="blue" />
      </div>
    );
  }
  return (
    <p>
      <h1 className="text-3xl text-blue-600">List of users</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h3 className="text-2xl">{user.name}</h3>
            <p>{user.email}</p>
          </div>
        );
      })}
    </p>
  );
};

export default DataFetching;
