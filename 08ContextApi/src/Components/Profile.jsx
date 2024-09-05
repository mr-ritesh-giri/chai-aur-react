import React, { useContext } from "react";
import UserContext from "../Context/userContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please Login First</div>;

  return (
    <div>
      Welcome {user.username} & your password is {user.password}.
    </div>
  );
}

export default Profile;
