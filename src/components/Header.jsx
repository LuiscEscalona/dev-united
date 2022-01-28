import React from "react";
import Photo from "../resources/svg/ornacia.svg";
import Title from "../resources/svg/title.svg";
import Flag from "../resources/svg/logo-small.svg";

function Header({ user, color }) {
  return (
    <div className="header-container">
      <div>
        <img
          className="header-photo"
          id={color ? color : "white"}
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
