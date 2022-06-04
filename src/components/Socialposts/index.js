import React from "react";
import "./index.css";
export default function SocialPosts() {
  return (
    <div className="socialPosts">
      <div className="innerPostsSection">
        <h1>Social Posts</h1>
        <div className="postsBannersWithTitle">
          <div className="post">
            <img src="img1.png" />
            <p>How to rock the lip look that turns heads</p>
          </div>
          <div className="post">
            <img src="img2.png" />
            <p>Find the perfect shade for the season</p>
          </div>
          <div className="post">
            <img src="img3.png" />
            <p>The 5 eye shadow secrets you never knew</p>
          </div>
          <div className="post">
            <img src="img4.png" />
            <p>The pro-tips for at home hair dying</p>
          </div>
        </div>
        <button>FOLLOW US ON INSTAGRAM</button>
      </div>
      <div className="socialPostsVectorIcon">
        <img src="squig2.png" />
      </div>
    </div>
  );
}
