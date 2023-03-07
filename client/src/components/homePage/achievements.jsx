import "../../assets/css/welcoming.css";
import traineeIcon from "../../assets/images/trainee_logo.png";
import companyIcon from "../../assets/images/building_logo.png";
import opportunitiesIcon from "../../assets/images/opportunities_logo.png";
import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

export class achievements extends Component {
  render() {
    return (
      <Fragment>
        <Container id="achievementsContainer">
          <h1 className="centerAlignment">Our Achievements</h1>
          <Row>
            <Col>
              <img
                src={traineeIcon}
                alt="traineeIcon"
                className="achievementsImgs"
              />
              <p className="achievementsTextStyle">50000 trainee</p>
            </Col>
            <Col>
              <img
                src={opportunitiesIcon}
                alt="traineeIcon"
                className="achievementsImgs"
              />
              <p className="achievementsTextStyle">1000 opportunities</p>
            </Col>
            <Col>
              <img
                src={companyIcon}
                alt="companyIcon"
                className="achievementsImgs"
              />
              <p className="achievementsTextStyle">2000 companies</p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default achievements;
