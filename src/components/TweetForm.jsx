import React from "react";

function TweetForm(props) {
  return (
    <div className="tweetForm-container">
      <div>
        <div className="tweetForm-photo">FOTO</div>
        <form>
          <textarea
            // value={tweet.tweet}
            name="tweet"
            // onChange={handleChange}
            cols="30"
            rows="5"
            placeholder="What's happening?"
          />
          <div>200 max.</div>
          <button>POST</button>
        </form>
      </div>
    </div>
  );
}

export default TweetForm;
