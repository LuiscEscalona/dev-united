import React from "react";
import { useEffect } from "react";
import { firestore, auth, logout } from "../firebase";
import Tweet from "./Tweet";
import Logout from "../resources/svg/logout.svg";

function Feed({ user, setUser, tweets, setTweets, color }) {
  useEffect(() => {
    const unsubscribe = firestore
      .collection("tweets")
      .onSnapshot((snapshot) => {
        const tweets = snapshot.docs.map((doc) => {
          return {
            tweet: doc.data().tweet,
            autor: doc.data().autor,
            id: doc.id,
            likes: doc.data().likes,
            email: doc.data().email,
            uid: doc.data().uid,
          };
        });
        setTweets(tweets);
      });
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="feed">
        <Tweet tweets={tweets} user={user} color={color} />
      </div>
    </>
  );
}

export default Feed;
