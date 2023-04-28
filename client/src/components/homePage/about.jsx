import "../../assets/css/welcoming.css";
import "../../assets/css/footer.css"
import "../../assets/css/custom.css"
import React, { Component } from "react";

export class about extends Component {
  render() {
    return (
      <div className="container-about" id="About">
        {/* <h4>About</h4>
        <p>change your language</p>
        <div id="google_translate_element"> </div> */}
        <div className="sb_footer section_padding">
          <div className="sb_footer-Links">
            <div className="sb_footer-Links_div">
              <h4>Company</h4>
              <a href="/about">
                <p>About</p>
              </a>
              <a href="/careers">
                <p>Careers</p>
              </a>
              <a href="/contact">
                <p>Contact Us</p>
              </a>
            </div>
            <div className="sb_footer-Links_div">
              <h4>Useful Links</h4>
              <a href="/">
                <p>Home</p>
              </a>
              <a href="/routesignup">
                <p>Sign Up</p>
              </a>
              <a href="/signin">
                <p>Sign In</p>
              </a>
            </div> 
          </div>

          <hr></hr>

          <div className="sb_footer-below">
            <div className="sb_footer-copyright">
              <p>
                @{new Date().getFullYear()} Applier, All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default about;