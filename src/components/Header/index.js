import React from "react";
import "./index.css";
export default function Header() {
  return (
    <header>
      <div className="logoContainer">
        <img src="Logo (2).png" />
      </div>
      <div className="navigationContainer">
        <nav>
          <ul>
            <li>THIS MONTH</li>
            <li>SKIN</li>
            <li>HAIR</li>
            <li>BATH</li>
            <li>SALE</li>
          </ul>
        </nav>
      </div>
      <div className="loginHeaderBtn">
        <button>LOG IN &#62;</button>
      </div>
    </header>
  );
}
