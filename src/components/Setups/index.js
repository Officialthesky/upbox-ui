import React from "react";
import "./index.css";
export default function Setups() {
  return (
    <div className="workingSection">
      <div className="innerWorkingDivision">
        <div className="workingSectionTitle">
          <h1>How it works?</h1>
          <img src="underline2.png" />
        </div>
        <div className="setUpProfile">
          <div className="setUpProfileImages">
            <img src="Vectorfirst.png" className="setUpProfileFirstVector" />

            <img src="photo1.png" className="setUpProfileFirstPhoto" />
            <img src="art1.png" className="setUpProfileFirstArt" />
            <h1 className="setUpProfileFirstNumber">1</h1>
          </div>
          <div className="setUpProfileIntro">
            <h1>Setup your profile & preferences</h1>
            <p>
              Once you create an account, you can start to tell us your likes
              and dislikes so we can tailor the experience just for you.
            </p>
          </div>
        </div>
        <div className="setUpReview">
          <div className="setUpReviewImages">
            <div className="reviewVectorDivision">
              <img src="Vectorsecond.png" className="setUpReviewVector" />
            </div>
            <img src="photo2.png" className="setUpReviewPhoto" />
            <img src="art2.png" className="setUpReviewArt" />
            <h1>2</h1>
          </div>
          <div className="setUpReviewIntro">
            <h1>Review your custom box</h1>
            <p>
              Once we get to know you, we will show you the box we’ve crafted.
              This is your chance to approve it before we ship it to your house.
            </p>
          </div>
        </div>
        <div className="setUpTry">
          <div className="setUpTryImages">
            <img src="art3.png" className="setUpTryArt" />
            <img src="photo3.png" className="setUpTryPhoto" />

            <h1>3</h1>
          </div>
          <div className="setUpTryIntro">
            <h1>Try it on at home</h1>
            <p>
              Your box will arrive within 3-5 days (usually sooner) and you get
              the joy to unbox your Upbox. Try it all on and send back whatever
              you’re not in love with.
            </p>
          </div>
        </div>
        <button className="tryButton">TRY IT FOR YOURSELF &#62;</button>
      </div>
    </div>
  );
}
