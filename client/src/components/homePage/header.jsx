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
            A venue where university students can get opportunities with a
            companies or patients, and where companies and patients found the
            trainee.
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
