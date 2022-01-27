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

  return (
    <>
      <WelcomePage user={user} />
      <Header user={user} />
      <TweetForm user={user} tweet={tweet} setTweet={setTweet} />
      <Feed
        user={user}
        setUser={setUser}
        tweets={tweets}
        setTweets={setTweets}
        tweet={tweet}
        setTweet={setTweet}
      />
      <Profile user={user} />
    </>
  );
}

export default App;
