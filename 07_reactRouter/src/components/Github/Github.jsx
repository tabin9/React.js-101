import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();
  console.log(data);

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/tabin9")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="m-4 bg-gray-600 text-white p-4 text-3xl flex">
      <div className="pl-10 pr-20">
        <img src={data.avatar_url} alt="Git Pic" width={200} />
      </div>
      <div className="px-20 py-5">
        <div className="py-2">Name: {data.name}</div>
        <div className="py-2">ID: {data.id}</div>
        <div className="py-2">Location: {data.location}</div>
      </div>
    </div>
  );
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/tabin9");
  return response.json();
}