import React from "react";
import Tweet from "../Tweet";

function Posts({ tweets, user, color, post, favorites }) {
  let tweetsUser = tweets.filter((tweet) => {
    if (user) {
      if (user.uid === tweet.uid) {
        return true;
      }
    }
  });

  let favoritesUser = tweets.filter((tweet) => {
    if (tweet.favorites && tweet.favorites.includes(user.uid)) {
      return true;
    }
  });

  return (
    <>
      <div className="feed">
        <Tweet
          tweets={post ? tweetsUser : favoritesUser}
          user={user}
          color={color}
        />
      </div>
    </>
  );
}

export default Posts;
