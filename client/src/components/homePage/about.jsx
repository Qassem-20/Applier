import "../../assets/css/welcoming.css";
import "../../assets/css/footer.css"
import "../../assets/css/custom.css"
import React, { Component } from "react";

export class about extends Component {
  render() {
    return (
      <div className="container-about" id="About">
        <div className="sb_footer section_padding container">
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

          <hr style={{color: 'white'}}></hr>

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