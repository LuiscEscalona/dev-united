import React from "react";
import Photo from "../resources/svg/ornacia.svg";
import Title from "../resources/svg/title.svg";
import Flag from "../resources/svg/logo-small.svg";

function Header({ user }) {
  return (
    <div className="header-container">
      <div>
        <img
          className="header-photo"
          src={user ? user.photoURL : Photo}
          alt=""
        />

        <img src={Flag} alt="" />

        <img src={Title} alt="" />
      </div>
    </div>
  );
}

export default Header;
