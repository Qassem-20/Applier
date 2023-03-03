import "../../assets/css/signUpSignIn.css";
import WelcomeNav from "../../components/Nav/welcomeNav";

import React, { Component, Fragment } from "react";
import { Col, Row } from "react-bootstrap";

export class signUpCompany extends Component {
  render() {
    return (
      <Fragment>
        <WelcomeNav />
        <div className="container SignUpFormat">
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
          <Row>
            <Col md={6} sm={12}>
              <p className="labelTag">Organization logo</p>
              <input type="file" className="inputStyling" name="" value="" />
              <p className="labelTag">Organization name in English</p>
              <input type="text" className="inputStyling" name="" value="" />
              <p className="labelTag">Organization registration number</p>
              <input type="text" className="inputStyling" name="" value="" />
              <p className="labelTag">Organization phone</p>
              <input type="phone" className="inputStyling" name="" value="" />
              <p className="labelTag">Organization name in Arabic</p>
              <input type="text" className="inputStyling" name="" value="" />
              <p className="labelTag">Organization email</p>
              <input type="email" className="inputStyling" name="" value="" />
              <p className="labelTag">
                Organization website <span>(if exists)</span>{" "}
                <input type="link" className="inputStyling" name="" value="" />
              </p>
              <p className="labelTag">About organization</p>
              <input type="text" className="inputStyling" name="" value="" />
            </Col>
            <Col md={6} sm={12}>
              <p className="labelTag">Supervisor full name</p>
              <input type="name" className="inputStyling" name="" value="" />
              <p className="labelTag">Supervisor email</p>
              <input type="email" className="inputStyling" name="" value="" />
              <p className="labelTag">Supervisor email confirmation</p>
              <input type="email" className="inputStyling" name="" value="" />
              <p className="labelTag">Supervisor phone</p>
              <input type="phone" className="inputStyling" name="" value="" />
              <p className="labelTag">Password</p>
              <input
                type="password"
                className="inputStyling"
                name=""
                value=""
              />
              <p className="labelTag">Password confirmation</p>
              <input
                type="password"
                className="inputStyling"
                name=""
                value=""
              />
              <p className="labelTag">Country</p>
              <select className="inputStyling">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
              <p className="labelTag">City</p>
              <select className="inputStyling">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </Col>
          </Row>
          <button className="btn login" type="submit">
            submit
          </button>
        </div>
      </Fragment>
    );
  }
}

export default signUpCompany;
