import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return (
    <div className="text-center text-2xl bg-amber-800 text-white p-4">
      User: {userid}
    </div>
  );
};

export default User;
