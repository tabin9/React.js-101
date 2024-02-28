import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user)
    return (
      <div className="text-2xl mt-4 underline  bg-yellow-500 p-4">
        Please Login
      </div>
    );

  return (
    <>
      <div className="text-2xl mt-4 underline">Welcome - {user.username}</div>
      <div>Password: {user.password}</div>
    </>
  );
}

export default Profile;
