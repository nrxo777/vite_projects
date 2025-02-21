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
    <div className="text-center m4 bg-gray-600 text-white p-4 text-3xl">
      <h2>Github Followers: {data.followers}</h2>
      <img className="" src={data.avatar_url} alt="user-image" width={300} />
    </div>
  );
};

export default Github;
