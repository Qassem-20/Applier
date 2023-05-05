import "../../assets/css/signUpSignIn.css";
import traineeBackground from "../../assets/images/uniBackground.jpg";
import companyBackground from "../../assets/images/companyBack.png";
import medicalStudentBackground from "../../assets/images/medStudent.jpg";
import WelcomeNav from "../../components/Nav/welcomeNav";
import { Container, Stack, Card, Button } from "react-bootstrap";

import React, { Component, Fragment } from "react";

export class routeSignUp extends Component {
  render() {
    return (
      <Fragment>
        <WelcomeNav />

        <Container className="mt-2">
          <Stack className="col-md-5 mx-auto">
         
          <Card>
            <Card.Img variant="top" src={traineeBackground} />
            <Card.Body>
              <Card.Text>
               <Button variant="dark" href="/signUpConsumer" style={{minWidth: 153}}>University Student</Button>
              </Card.Text>
            </Card.Body>
          </Card>
          
          <Card>
            <Card.Img variant="top" src={medicalStudentBackground} />
            <Card.Body>
              <Card.Text>
               <Button variant="dark" href="/signUpMedicalStudent" style={{minWidth: 153}}>Medical Student</Button>
              </Card.Text>
            </Card.Body>
          </Card>
          
          <Card>
            <Card.Img variant="top" src={companyBackground} />
            <Card.Body>
              <Card.Text>
               <Button variant="dark" href="signUpCompany" style={{minWidth: 153}}>Company</Button>
              </Card.Text>
            </Card.Body>
          </Card>
          
          </Stack>
        </Container>
      </Fragment>
    );
  }
}

export default routeSignUp;
