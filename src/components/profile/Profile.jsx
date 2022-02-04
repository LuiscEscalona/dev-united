import React from "react";
import { useState } from "react";
import UserProfile from "./UserProfile";
import Posts from "./Posts";

function Profile({ user, tweets, color, username }) {
  const [post, setPost] = useState(true);
  const [favorites, setFavorites] = useState(false);
  return (
    <>
      <UserProfile
        user={user}
        color={color}
        username={username}
        post={post}
        setPost={setPost}
        favorites={favorites}
        setFavorites={setFavorites}
      />
      <Posts
        tweets={tweets}
        user={user}
        color={color}
        post={post}
        favorites={favorites}
      />
    </>
  );
}

export default Profile;
