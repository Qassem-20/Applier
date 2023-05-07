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
        <Container className="header_container">
          <p className={`textStyling ${this.state.showText ? "showText" : ""}`}>
          Unlock Your Potential: Connect with Top Companies and Patients through Our Platform - The Ultimate Opportunity Hub for University Students!
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
