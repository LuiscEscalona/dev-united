import React from "react";
import UserProfile from "./UserProfile";
import Posts from "./Posts";

function Profile({ user, tweets, color }) {
  return (
    <>
      <UserProfile user={user} color={color} />
      <Posts tweets={tweets} user={user} color={color} />
    </>
  );
}

export default Profile;
