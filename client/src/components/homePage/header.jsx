import { Container } from "react-bootstrap";
import "../../assets/css/welcoming.css";
import React, { Component, Fragment } from "react";

export class header extends Component {
  render() {
    return (
      <Fragment>
        <Container className=" header_container">
          <p className="textStyling">
            "A venue where university students can get opportunities with a
            corporation or patients, and where companies and patients found the
            trainee."
          </p>
          <div className=" d-flex justify-content-center">
            <a href="/signIn" className="btn active" id="signInButton">
              start your journey with Applier
            </a>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default header;
