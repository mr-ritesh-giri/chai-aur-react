import React from "react";
import { useParams } from "react-router-dom";
function User() {
  const { userId } = useParams();
  return (
    <>
      <h1 className="text-center bg-gray-500 text-3xl text-white p-8">
        User {userId}
      </h1>
    </>
  );
}

export default User;
