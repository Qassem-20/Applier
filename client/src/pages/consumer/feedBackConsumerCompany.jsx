import "../../assets/css/feedback.css";
import profileIcon from "../../assets/images/profileIcon.png";
import { Container, Row, Col } from "react-bootstrap";
import ConsumerNav from "../../components/Nav/consumerNav";
import CompanyStore from "../../stores/CompanyStore";
import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const FeedBackConsumerCompany = () => {
  const { companyId } = useParams();
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/companies/${companyId}`)
      .then((response) => {
        setUserProfile(response.data.company);
      });
  }, []);
  return (
    <Fragment>
      <ConsumerNav />

      <Container className="mt-5 p-5 bg-white">
        <Row>
          <Col>
            <p>Company Name: {userProfile.organization_name}</p>
            <p>Bio:</p>
            <p>{userProfile.organization_bio}</p>
            <p>City: {userProfile.city}</p>
            <p>website: {userProfile.organization_website}</p>
          </Col>
        </Row>
      </Container>

      <Container>
        <h1 className="mt-3">Add Review</h1>
        <p>Rate</p>
        <div className="rate">
          <input type="radio" id="star5" name="rate" value="5" />
          <label htmlFor="star5" title="text">
            5 stars
          </label>
          <input type="radio" id="star4" name="rate" value="4" />
          <label htmlFor="star4" title="text">
            4 stars
          </label>
          <input type="radio" id="star3" name="rate" value="3" />
          <label htmlFor="star3" title="text">
            3 stars
          </label>
          <input type="radio" id="star2" name="rate" value="2" />
          <label htmlFor="star2" title="text">
            2 stars
          </label>
          <input type="radio" id="star1" name="rate" value="1" />
          <label htmlFor="star1" title="text">
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

export default FeedBackConsumerCompany;
