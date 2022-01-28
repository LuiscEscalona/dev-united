import React from "react";
import { firestore } from "../firebase";
import Photo from "../resources/svg/ornacia.svg";
import Post from "../resources/svg/buttonpost.svg";

function TweetForm({ tweet, setTweet, user }) {
  const handleChange = (e) => {
    let nuevoTweet = {
      tweet: e.target.value,
      uid: user.uid,
      email: user.email,
      autor: user.displayName,
    };
    setTweet(nuevoTweet);
  };

  const sendTweet = (e) => {
    e.preventDefault();

    firestore.collection("tweets").add(tweet);
  };

  return (
    <div className="tweetForm-container">
      <div>
        <img
          className="tweetForm-photo"
          src={user ? user.photoURL : Photo}
          alt=""
        />
        <form>
          <textarea
            value={tweet.tweet}
            name="tweet"
            onChange={handleChange}
            cols="30"
            rows="5"
            placeholder="What's happening?"
          />
          <div>200 max.</div>
          <img src={Post} alt="" onClick={sendTweet} className="post-button" />
        </form>
      </div>
    </div>
  );
}

export default TweetForm;
