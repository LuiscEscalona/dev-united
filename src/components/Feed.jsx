import React from "react";
import { useEffect } from "react";
import { firestore, auth } from "../firebase";
import Tweet from "./Tweet";

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
            username: doc.data().username,
            color: doc.data().color,
            photo: doc.data().photo,
            favorites: doc.data().favorites,
          };
        });
        setTweets(tweets);
      });
    // auth.onAuthStateChanged((user) => {
    //   setUser(user);
    // });

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
