import React from "react";
import Tweet from "../Tweet";

function Posts({ tweets, user, color }) {
  let tweetsUser = tweets.filter((tweet) => {
    if (user) {
      if (user.uid === tweet.uid) {
        return true;
      }
    }
  });

  return (
    <>
      <div className="feed">
        <Tweet tweets={tweetsUser} user={user} color={color} />
      </div>
    </>
  );
}

export default Posts;
