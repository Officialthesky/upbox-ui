import React from "react";
import "./index.css";
export default function Banner() {
  return (
    <div className="landingContainer">
      <div className="leftContainer">
        <h1>Look good without leaving your house.</h1>
        <p>
          Upbox is the easiest way to look your best without having to hunt for
          the perfect makeup combination. Our stylists curate the latest trends
          and send them directly to your door every month.
        </p>
        <button>SIGN UP &#62;</button>
      </div>
      <div className="rightContainer">
        <img src="box 1.png" />
      </div>
    </div>
  );
}
