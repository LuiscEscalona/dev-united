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

  const likeTweet = (id, likes, favorites, uid) => {
    if (!likes) likes = 0;
    if (favorites && favorites.includes(uid)) {
      // firestore.doc(`tweets/${id}/favorites/${uid}`).delete();
      let newFavorites = favorites.filter((fav) => {
        return fav !== uid;
      });

      firestore.doc(`tweets/${id}`).update({ favorites: newFavorites });
    } else {
      firestore.doc(`tweets/${id}`).update({ favorites: [...favorites, uid] });
      // firestore.doc(`tweets/${id}`).update({ likes: likes + 1 });
    }
  };

  const getHeart = (id, likes, favorites, uid) => {
    if (favorites && favorites.includes(uid)) {
      return (
        <span onClick={() => likeTweet(id, likes, favorites, uid)}>
          <img src={FullLike} alt="" /> {favorites && favorites.length}
        </span>
      );
    } else {
      return (
        <span onClick={() => likeTweet(id, likes, favorites, uid)}>
          <img src={EmptyLike} alt="" /> {favorites && favorites.length}
        </span>
      );
    }
  };

  return (
    <>
      {tweets.map((tweet) => {
        return (
          <div className="tweet-container" key={tweet.id}>
            <img
              className="tweetForm-photo"
              src={tweet.photo}
              alt="profile-pic"
            />
            <div className="tweet-data">
              <div>
                <h3>
                  <span className="tweet-autor" id={tweet.color}>
                    {tweet.autor}
                  </span>{" "}
                  - fecha - {tweet.username}
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

              {getHeart(tweet.id, tweet.likes, tweet.favorites, user.uid)}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Tweet;
