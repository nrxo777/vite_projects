import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user)
    return (
      <div className="block mb-2 font-large m-5 text-white">Please login</div>
    );

  return (
    <div className="block mb-2 font-large m-5 text-white">
      Welcome {user.username}
    </div>
  );
};

export default Profile;
