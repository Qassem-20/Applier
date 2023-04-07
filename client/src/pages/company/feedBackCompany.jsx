import "../../assets/css/feedback.css";
import profileImg from "../../assets/images/profileIcon.png";
import flagIcon from "../../assets/images/flagIcon.png";
import replyIcon from "../../assets/images/replyIcon.webp";
import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CompanyNav from "../../components/Nav/companyNav";

const FeedBackCompany = () => {
  return (
    <Fragment>
      <CompanyNav />
      <Container className="mt-5">
        <Row>
          <Col sm={6}>
            <h1>Feedback</h1>
          </Col>
          <Col className="mt-3" sm={4}>
            <select className="inputStyling" name="" placeholder="">
              <option value=""></option>
              <option value="">Highly Rated</option>
              <option value="">Recently Rated</option>
              <option value="">Lowest Rated</option>
            </select>
          </Col>
        </Row>
      </Container>
      <Container className="mt-4 rounded bg-white border border-dark p-2">
        <Row>
          <Col sm={3}>
            <img className="m-auto" src={profileImg} alt="" />
            <p className="text-center">Ahmed</p>
          </Col>
          <Col sm={7}>
            <p>feiubrgbveiruibviure;auv;erbuvae;ribveira;buver;av</p>
          </Col>
          <Col className="m-auto" sm={2}>
            <img className="infoImg" src={flagIcon} alt="Report Icon" />
            <img className="infoImg" src={replyIcon} alt="Reply Icon" />
            <span>
              4 <span>&#11088;</span>
            </span>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default FeedBackCompany;
