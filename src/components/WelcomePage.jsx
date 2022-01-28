import React from "react";
import { loginGoogle } from "../firebase";
import Logo from "../resources/svg/logo.svg";
import Continue from "../resources/svg/buttoncontinue.svg";
import SignIn from "../resources/svg/googlesignin.svg";

function WelcomePage({ user, color, setColor }) {
  const colorSelection = (e) => {
    console.log(e.target.id);
    setColor(e.target.id);
  };

  return (
    <>
      <div className="welcome-page-container">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div>
          {!user ? (
            <>
              <h1>LOREM IPSUM DOLOR</h1>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
              <img src={SignIn} alt="" onClick={loginGoogle} />
            </>
          ) : (
            <>
              <h1>WELCOME {user.displayName}!</h1>
              <input type="text" placeholder="Type your usermane" />
              <h3>Select your favorite color</h3>
              <div className="colorpicker">
                <div className="colorbox" id="pink" onClick={colorSelection} />
                <div
                  className="colorbox"
                  id="orange"
                  onClick={colorSelection}
                />
                <div
                  className="colorbox"
                  id="yellow"
                  onClick={colorSelection}
                />
                <div className="colorbox" id="green" onClick={colorSelection} />
                <div className="colorbox" id="blue" onClick={colorSelection} />
                <div
                  className="colorbox"
                  id="violet"
                  onClick={colorSelection}
                />
              </div>
              <img src={Continue} alt="" />
            </>
          )}
          <span>© 2020 Devs_United - BETA</span>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
