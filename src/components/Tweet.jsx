import React from "react";
import { firestore } from "../firebase";
import Photo from "../resources/svg/ornacia.svg";
import PicDefault from "../resources/svg/picdefault.svg";
import Delete from "../resources/svg/delete.svg";
import FullLike from "../resources/svg/fulllike.svg";
import EmptyLike from "../resources/svg/emptylike.svg";

function Tweet({ tweets, user, color }) {
  const deleteTweet = (id) => {
    firestore.doc(`tweets/${id}`).delete();
  };

  // let enableDelete;
  // if (user === null) {
  //   enableDelete = 0;
  // } else {
  //   enableDelete = user.uid;
  // }

  const likeTweet = (id, likes) => {
    if (!likes) likes = 0;
    firestore.doc(`tweets/${id}`).update({ likes: likes + 1 });
  };

  return (
    <>
      {tweets.map((tweet) => {
        return (
          <div className="tweet-container" key={tweet.id}>
            <img
              className="tweetForm-photo"
              src={
                !user
                  ? Photo
                  : tweet.uid === user.uid
                  ? user.photoURL
                  : PicDefault
              }
              alt=""
            />
            <div className="tweet-data">
              <div>
                <h3>
                  <span className="tweet-autor" id={color ? color : "white"}>
                    {tweet.autor}
                  </span>{" "}
                  - fecha
                </h3>
                {!user ? null : user.uid === tweet.uid ? (
                  <img
                    src={Delete}
                    alt=""
                    onClick={() => deleteTweet(tweet.id)}
                  />
                ) : null}
                {/* {tweet.uid === enableDelete ? (
                  <span onClick={() => deleteTweet(tweet.id)}>X</span>
                ) : null} */}
              </div>
              <p>{tweet.tweet}</p>
              <span onClick={() => likeTweet(tweet.id, tweet.likes)}>
                <img src={tweet.likes ? FullLike : EmptyLike} alt="" />{" "}
                <span>{tweet.likes ? tweet.likes : 0}</span>
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Tweet;
