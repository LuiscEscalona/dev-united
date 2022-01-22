import React from "react";

function Tweet(props) {
  return (
    <div className="tweet-container">
      <div className="tweetForm-photo">foto</div>
      <div className="tweet-data">
        <div>
          <h3>username - fecha</h3>
          <span>Delete</span>
        </div>
        <p>cancuella cancanca</p>
        <span>likes</span>
      </div>
    </div>
  );
}

export default Tweet;
