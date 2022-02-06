/* eslint-disable array-callback-return */
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { firestore, loginGoogle, auth } from "../firebase.js";
import Logo from "../resources/svg/logo.svg";
import Continue from "../resources/svg/buttoncontinue.svg";
import SignIn from "../resources/svg/googlesignin.svg";

function WelcomePage({
  user,
  setUser,
  username,
  setUsername,
  usernames,
  setUsernames,
  color,
  setColor,
}) {
  // const [inputEnabled, setInputEnabled] = useState(false);
  const [show, setShow] = useState(true);
  useEffect(() => {
    console.log("efecto ejecutado");
    const unsubscribe = firestore
      .collection("usernames")
      .onSnapshot((snapshot) => {
        const usernames = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            uid: doc.data().uid,
            username: doc.data().username,
            photo: doc.data().photo,
            email: doc.data().email,
            color: doc.data().color,
          };
        });
        setUsernames(usernames);
      });
    auth.onAuthStateChanged((user) => {
      console.log("se ejecuto el onAuthChange", user);

      usernames.forEach((username) => {
        console.log(username.uid === user.uid);
        if (username.uid === user.uid) {
          setUsername(username);
          // setInputEnabled(false);
          setShow(false);
        } else {
          // setInputEnabled(true);
          setShow(true);
        }
      });

      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  // useEffect(() => {
  //   if (user) {
  //     usernames.find((username) => {
  //       if (username.uid === user.uid) {
  //         setUsername(username);
  //         setInputEnabled(false);
  //         setShow(false);
  //       } else {
  //         setInputEnabled(true);
  //         setShow(true);
  //       }
  //     });
  //   }
  // }, [user, usernames]);

  const handleChange = (e) => {
    let newUsername = {
      username: e.target.value,
      email: user.email,
      photo: user.photoURL,
      uid: user.uid,
      color: color,
    };
    setUsername(newUsername);
  };

  const colorSelection = (e) => {
    let newUsername = {
      ...username,
      color: e.target.id,
    };
    setUsername(newUsername);
    setColor(e.target.id);
  };

  const continueHandler = (e) => {
    e.preventDefault();

    firestore.collection("usernames").add(username);
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
              {show ? (
                <>
                  <h1>WELCOME {user.displayName}!</h1>
                  <input
                    value={username.username}
                    name="username"
                    type="text"
                    onChange={handleChange}
                    placeholder="Type your usermane"
                  />
                  <h3>Select your favorite color</h3>
                  <div className="colorpicker">
                    <div
                      className="colorbox"
                      id="pink"
                      onClick={colorSelection}
                    />
                    <div
                      value="orange"
                      className="colorbox"
                      id="orange"
                      name="color"
                      onClick={colorSelection}
                    />
                    <div
                      value="yellow"
                      className="colorbox"
                      id="yellow"
                      name="color"
                      onClick={colorSelection}
                    />
                    <div
                      value="green"
                      className="colorbox"
                      id="green"
                      name="color"
                      onClick={colorSelection}
                    />
                    <div
                      value="blue"
                      className="colorbox"
                      id="blue"
                      name="color"
                      onClick={colorSelection}
                    />
                    <div
                      value="violet"
                      className="colorbox"
                      id="violet"
                      name="color"
                      onClick={colorSelection}
                    />
                  </div>
                  <img src={Continue} alt="" onClick={continueHandler} />
                </>
              ) : (
                <div>ya existe</div>
              )}
            </>
          )}
          <span>© 2020 Devs_United - BETA</span>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
