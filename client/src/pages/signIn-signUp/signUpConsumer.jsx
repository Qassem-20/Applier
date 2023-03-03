import "../../assets/css/signUpSignIn.css";
import WelcomeNav from "../../components/Nav/welcomeNav";
import { Col, Row, Container } from "react-bootstrap";

import React, { Fragment, Component } from "react";

export class signUpConsumer extends Component {
  render() {
    return (
      <Fragment>
        <WelcomeNav />
        <div className="SignUpFormat container">
          <Row>
            <Col xl={8}>
              <h1>Welcome to Applier</h1>
              <p>Register your account</p>
            </Col>
            <Col>
              <span> Already have an account? </span>
              <a href="/signIn">SignIn</a>
            </Col>
          </Row>
          <hr />
          <Container m-5>
            <p className="labelTag">Full name</p>
            <input type="name" className="inputStyling" name="" value="" />
            <p className="labelTag">Nationality</p>
            <select className="inputStyling">
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
            <p className="labelTag">Phone Number</p>
            <input type="phone" className="inputStyling" name="" value="" />
            <p className="labelTag">Email</p>
            <input type="email" className="inputStyling" name="" value="" />
            <p className="labelTag">Password</p>
            <input type="password" className="inputStyling" name="" value="" />
            <br />
            <button className="btn login" type="submit">
              submit
            </button>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default signUpConsumer;
