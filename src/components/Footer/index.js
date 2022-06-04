import React from "react";
import "./index.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="innerFooterSection">
        <div className="footerLogoAndSocials">
          <div className="footerLogo">
            <img src="Logo (2).png"></img>
          </div>
          <div className="footerSocials">
            <div className="footerSocialDivision">
              <img src="ig.png" />
              <img src="fb.png" />
              <img src="tw.png" />
              <img src="sc.png" />
            </div>
          </div>
        </div>
        <div className="footerLinks">
          <div className="footerUpboxLink">
            <div className="innerFooterUpboxDivision">
              <h1>UPBOX</h1>
              <p>Upbox Bag</p>
              <p>Upbox Box Platinum</p>
              <p>Upbox Box VIP</p>
              <p>Deals</p>
              <p>Seasonal Items</p>
              <p>Upbox Promise</p>
            </div>
          </div>
          <div className="footerSocialLinks">
            <div className="innerFooterSocialDivision">
              <h1>Find Us On</h1>
              <p>Instagram</p>
              <p>Facebook</p>
              <p>TikTok</p>
              <p>SnapChat</p>
              <p>Twitter</p>
            </div>
          </div>
          <div className="footerProductLinks">
            <div className="innerFooterProductDivision">
              <h1>Product</h1>
              <p>Get the App</p>
              <p>Loyalty Program</p>
              <p>Affiliates</p>
              <p>Press</p>
            </div>
          </div>
          <div className="footerHelpLinks">
            <div className="innerFooterHelpDivision">
              <h1>Help</h1>
              <p>Returns</p>
              <p>FAQ</p>
              <p>Contact</p>
              <p>Community</p>
              <p>Videos</p>
            </div>
          </div>
        </div>
        <div className="footerPolicies">
          <div className="footerTerms">
            <p>
              © 2020 Quest AI. Upbox is a Sample Project and open source design
              project free for personal and commercial use.
            </p>
            <p>Terms</p>
          </div>

          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}
