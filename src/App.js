import React, { useState } from "react";
import WelcomePage from "./components/WelcomePage.jsx";
import Header from "../src/components/Header";
import TweetForm from "./components/TweetForm";
import Feed from "./components/Feed";
import Profile from "./components/profile/Profile.jsx";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [tweets, setTweets] = useState([]);
  const [tweet, setTweet] = useState({
    tweet: "",
    autor: "",
    uid: "",
    mail: "",
  });
  const [color, setColor] = useState("");

  return (
    <>
      <WelcomePage user={user} color={color} setColor={setColor} />
      <Header user={user} color={color} />
      <TweetForm user={user} tweet={tweet} setTweet={setTweet} />
      <Feed
        user={user}
        setUser={setUser}
        tweets={tweets}
        setTweets={setTweets}
        tweet={tweet}
        setTweet={setTweet}
        color={color}
      />
      <Profile user={user} tweets={tweets} color={color} />
    </>
  );
}

export default App;
