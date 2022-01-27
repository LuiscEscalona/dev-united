import React from "react";
import UserProfile from "./UserProfile";

function Profile({ user }) {
  return (
    <>
      <UserProfile user={user} />
    </>
  );
}

export default Profile;
