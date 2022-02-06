import React, { useState } from "react";
import WelcomePage from "./components/WelcomePage.jsx";
import Header from "../src/components/Header";
import TweetForm from "./components/TweetForm";
import Feed from "./components/Feed";
import Profile from "./components/profile/Profile.jsx";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [usernames, setUsernames] = useState([]);
  const [username, setUsername] = useState({
    username: "",
    photo: "",
    uid: "",
    email: "",
    color: "",
  });
  const [tweets, setTweets] = useState([]);
  const [tweet, setTweet] = useState({
    tweet: "",
    autor: "",
    uid: "",
    email: "",
    username: "",
    photo: "",
    color: "",
    favorites: [],
  });
  const [color, setColor] = useState("");

  return (
    <>
      <WelcomePage
        user={user}
        setUser={setUser}
        username={username}
        setUsername={setUsername}
        usernames={usernames}
        setUsernames={setUsernames}
        color={color}
        setColor={setColor}
      />
      {user && (
        <>
          <Header user={user} color={color} username={username} />
          <TweetForm
            user={user}
            username={username}
            tweet={tweet}
            setTweet={setTweet}
            color={color}
          />
          <Feed
            user={user}
            setUser={setUser}
            username={username}
            tweets={tweets}
            setTweets={setTweets}
            tweet={tweet}
            setTweet={setTweet}
            color={color}
          />

          <Profile
            user={user}
            tweets={tweets}
            color={color}
            username={username}
          />
        </>
      )}
    </>
  );
}

export default App;
