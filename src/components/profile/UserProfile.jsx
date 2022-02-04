import React from "react";

import { logout } from "../../firebase";
import Photo from "../../resources/svg/ornacia.svg";

import Back from "../../resources/svg/back.svg";
import Logout from "../../resources/svg/logout.svg";

function UserProfile({
  user,
  color,
  username,
  post,
  setPost,
  favorites,
  setFavorites,
}) {
  const clickPost = () => {
    setPost(true);
    setFavorites(false);
  };

  const clickFav = () => {
    setFavorites(true);
    setPost(false);
  };

  return (
    <div>
      <div className="header-container">
        <div>
          <div className="username-header">
            <img src={Back} alt="" />
            <span>{username && username.username}</span>
          </div>
          <img src={Logout} alt="" onClick={logout} />
        </div>
      </div>
      <div className="username-container">
        <img
          className="username-pic"
          id={username && username.color}
          src={user ? user.photoURL : Photo}
          alt=""
        />
        <h1 className="username" id={username && username.color}>
          {username ? username.username : "Cancuella"}
        </h1>
      </div>
      {user ? (
        <>
          <div className="tabs-container">
            <div>
              <div
                className={post ? "tabs selected" : "tabs"}
                onClick={clickPost}
              >
                POSTS
              </div>
              <div
                className={favorites ? "tabs selected" : "tabs"}
                onClick={clickFav}
              >
                FAVORITES
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default UserProfile;
