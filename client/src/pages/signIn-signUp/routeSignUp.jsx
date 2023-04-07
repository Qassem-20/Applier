import "../../assets/css/signUpSignIn.css";
import traineeBackground from "../../assets/images/traineeBackground.png";
import companyBackground from "../../assets/images/companyBackground.png";
import medicalStudentBackground from "../../assets/images/medicalStudentBackground.jpeg";
import WelcomeNav from "../../components/Nav/welcomeNav";
import { Container, Row } from "react-bootstrap";

import React, { Component, Fragment } from "react";

export class routeSignUp extends Component {
  render() {
    return (
      <Fragment>
        <WelcomeNav />

        <Container className="mt-2">
          <Row>
            <a className="col-4 align" href="/signUpConsumer">
              <img
                className="img-fluid"
                src={traineeBackground}
                alt="User img"
              />
              <h2 className="align">User</h2>
            </a>
            <a className="col-4 align" href="/signUpMedicalStudent">
              <img
                className="img-fluid "
                src={medicalStudentBackground}
                alt="Medical img"
              />
              <h2 className="align">Medical Student</h2>
            </a>
            <a className="col-4 align" href="/signUpCompany">
              <img
                className="img-fluid"
                src={companyBackground}
                alt="Company img"
              />
              <h2 className="align">Company</h2>
            </a>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default routeSignUp;
