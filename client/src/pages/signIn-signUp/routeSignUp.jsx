import "../../assets/css/signUpSignIn.css";
import traineeBackground from "../../assets/images/traineeBackground.png";
import companyBackground from "../../assets/images/companyBackground.png";
import medicalStudentBackground from "../../assets/images/medicalStudentBackground.jpeg";
import WelcomeNav from "../../components/Nav/welcomeNav";
import { Container } from "react-bootstrap";

import React, { Component, Fragment } from "react";

export class routeSignUp extends Component {
  render() {
    return (
      <Fragment>
        <WelcomeNav />
        <div className="container">
          <Container mt-2>
            <div className="row">
              <a className="col-4" href="/signUpConsumer">
                <img className="img-fluid" src={traineeBackground} alt="" />
              </a>
              <a className="col-4" href="/signUpCompany">
                <img className="img-fluid" src={companyBackground} alt="" />
              </a>
              <a className="col-4" href="/signUpMedicalStudent">
                <img
                  className="img-fluid"
                  src={medicalStudentBackground}
                  alt=""
                />
              </a>
            </div>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default routeSignUp;
