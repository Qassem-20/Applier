import "../../assets/css/feedback.css";
import profileIcon from "../../assets/images/profileIcon.png";
import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

const feedBackConsumerCompany = () => {
  return (
    <Fragment>
      <Container className="mt-5 p-5 bg-white">
        <Row>
          <Col>
            <img src={profileIcon} alt="Profile" />
          </Col>

          <Col>
            <p>University Name</p>
            <p>Major</p>
            <p>City</p>
          </Col>

          <Col>
            <p>Rate</p>
            <p>Phone Number</p>
            <p>WhatsApp URL</p>
          </Col>
        </Row>
      </Container>

      <Container>
        <h1>Add Review</h1>
        <p>Rate</p>
        <div class="rate">
          <input type="radio" id="star5" name="rate" value="5" />
          <label for="star5" title="text">
            5 stars
          </label>
          <input type="radio" id="star4" name="rate" value="4" />
          <label for="star4" title="text">
            4 stars
          </label>
          <input type="radio" id="star3" name="rate" value="3" />
          <label for="star3" title="text">
            3 stars
          </label>
          <input type="radio" id="star2" name="rate" value="2" />
          <label for="star2" title="text">
            2 stars
          </label>
          <input type="radio" id="star1" name="rate" value="1" />
          <label for="star1" title="text">
            1 star
          </label>
        </div>
        <input className="inputStyling" type="text" />
        <a className="btn login" href="/feedBackConsumer">
          Submit
        </a>
      </Container>

      <Container>
        <Container className="mt-3">
          <Row>
            <Col sm={6}>
              <h1>Reviews</h1>
            </Col>
            <Col className="mt-5" sm={4}>
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
              <img className="m-auto" src={profileIcon} alt="" />
              <p className="text-center">Ahmed</p>
            </Col>
            <Col sm={7}>
              <p>feiubrgbveiruibviure;auv;erbuvae;ribveira;buver;av</p>
            </Col>
            <Col className="m-auto" sm={2}>
              <span>
                3 <span>&#11088;</span>
              </span>
            </Col>
          </Row>
        </Container>
      </Container>
    </Fragment>
  );
};

export default feedBackConsumerCompany;
