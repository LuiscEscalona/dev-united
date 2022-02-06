import React from "react";
import Photo from "../resources/svg/ornacia.svg";
import Title from "../resources/svg/title.svg";
import Flag from "../resources/svg/logo-small.svg";

function Header({ user, color, username }) {
  return (
    <div className="header-container">
      <div>
        <div className="header-photo-container" id={username && username.color}>
          <img
            className="header-photo"
            src={user ? user.photoURL : Photo}
            alt=""
          />
        </div>

        <img src={Flag} alt="" />

        <img src={Title} alt="" />
      </div>
    </div>
  );
}

export default Header;
