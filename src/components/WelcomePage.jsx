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
  const [inputEnabled, setInputEnabled] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    const unsubscribe = firestore
      .collection("usernames")
      .onSnapshot((snapshot) => {
        const usernames = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            uid: doc.data().uid,
            username: doc.data().username,
            email: doc.data().email,
            color: doc.data().color,
          };
        });
        setUsernames(usernames);
        console.log(usernames);
      });
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      usernames.find((username) => {
        if (username.uid === user.uid) {
          setUsername(username);
          setInputEnabled(false);
          console.log(username);
        } else {
          setInputEnabled(true);
        }
      });

      // if (username.username.length === 0) {
      //   setInputEnabled(true);
      // } else {
      //   setInputEnabled(false);
      // }

      // const usernameVerification = usernames.forEach((username) => {
      //   console.log(username);
      //   if (username.uid === user.uid) {
      //     return username;
      //   }
      // });

      // console.log(verification);
    }
  }, [user]);

  const colorSelection = (e) => {
    setColor(e.target.id);
    setIsSelected(true);
  };

  const handleChange = (e) => {
    let nuevoUsername = {
      username: e.target.value,
      email: user.email,
      uid: user.uid,
      color: color,
    };
    setUsername(nuevoUsername);
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
              <h1>WELCOME {user.displayName}!</h1>
              {inputEnabled ? (
                <input
                  value={username.username}
                  type="text"
                  onChange={handleChange}
                  placeholder="Type your usermane"
                />
              ) : (
                <h3>You already have a username, lets go!</h3>
              )}

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
              <img src={Continue} alt="" onClick={continueHandler} />
            </>
          )}
          <span>© 2020 Devs_United - BETA</span>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
