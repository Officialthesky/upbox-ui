import React from "react";
import "./index.css";
export default function Pricingplan() {
  return (
    <div className="pricingPlan">
      <div className="planTitle">
        <h1>Pick your plan</h1>
        <img src="underline.png" />
      </div>
      <div className="priceCards">
        <div className="priceCard">
          <h1>Monthly</h1>
          <h2>$18/mo</h2>
          <button>FIND YOUR BOX</button>
        </div>
        <div className="priceCard">
          <h1>Yearly</h1>
          <h2>$15/mo</h2>
          <button>FIND YOUR BOX</button>
        </div>
      </div>
      <div className="planRenewal">
        <p>
          Your plan auto-renews at the end of 30 days from the 1st day you
          signed-up.
        </p>
      </div>
    </div>
  );
}
