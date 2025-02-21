import React, { useState, useEffect } from "react";

const Github = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/nrxo777")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="bg-gray-600 text-white">
      <h2 className="text-center m-4  p-4 text-3xl">
        Github Name: {data.name}
      </h2>
      <div className="flex flex-col items-center text-white">
        <img
          className="rounded-full w-96 h-96 m3 px-7 py-7"
          src={data.avatar_url}
          alt="user-image"
          width={300}
        />
        <div className="mb-2 text-2xl px-7 py-7 text-left tracking-tight text-gray-50">
          <h3>
            User ID:{" "}
            <span className="font-bold text-orange-400">{data.login}</span>
          </h3>

          <h3>
            User following:{" "}
            <span className="font-bold text-orange-400">{data.following}</span>
          </h3>

          <h3>
            User followers:{" "}
            <span className="font-bold text-orange-400">{data.followers}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Github;
