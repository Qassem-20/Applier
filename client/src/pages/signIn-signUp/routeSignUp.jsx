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
              <a className="col-4 align" href="/signUpConsumer">
                <img className="img-fluid" src={traineeBackground} alt="" />
                <h2 className="align">Trainee</h2>
              </a>
              <a className="col-4 align" href="/signUpCompany">
                <img className="img-fluid" src={companyBackground} alt="" />
                <h2 className="align">Company</h2>
              </a>
              <a className="col-4 align" href="/signUpMedicalStudent">
                <img
                  className="img-fluid "
                  src={medicalStudentBackground}
                  alt="medicalStudentBackground"
                />
                <h2 className="align">Medical Student</h2>
              </a>
            </div>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default routeSignUp;
