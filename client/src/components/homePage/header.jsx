import { Container } from "react-bootstrap";
import "../../assets/css/welcoming.css";
import React, { Component, Fragment } from "react";

export class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: false,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ showText: true });
      clearInterval(this.timer);
    }, 1000); // 1 second delay
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <Fragment>
        <Container className=" header_container">
          <p className={`textStyling ${this.state.showText ? "showText" : ""}`}>
            A platform where university students can get opportunities with
            companies or patients, and where companies and patients can find
            trainees!
          </p>
          <div className=" d-flex justify-content-center">
            <a href="/routeSignUp" className="btn active" id="signInButton">
              Start your journey with Applier
            </a>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default header;
