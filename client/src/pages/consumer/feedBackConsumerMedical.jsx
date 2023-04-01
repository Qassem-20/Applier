import "../../assets/css/feedback.css";
import profileIcon from "../../assets/images/profileIcon.png";
import ConsumerNav from "../../components/Nav/consumerNav";
import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReviewStore from "../../stores/ReviewStore";
import { Container, Row, Col } from "react-bootstrap";

const FeedBackConsumerMedical = () => {
  const { medicalId } = useParams();

  const store = ReviewStore();

  const createReview = async (e) => {
    e.preventDefault();
    await store.registerReviewMedical();
    window.location.reload();
  };
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/medicalStudents/${medicalId}`)
      .then((response) => {
        setUserProfile(response.data.medicalStudent);
      });
  }, []);

  return (
    <Fragment>
      <ConsumerNav />

      <Container className="mt-5 p-5 bg-white">
        <Row>
          <Col>
            <img src={profileIcon} alt="Profile" />
          </Col>

          <Col>
            <p>Name: {userProfile.name}</p>
            <p>Nationality: {userProfile.nationality}</p>
            <p>City: {userProfile.city}</p>
          </Col>

          <Col>
            <p>Major: {userProfile.main_major}</p>
            <p>Phone Number: {userProfile.phone_number}</p>
            <p>Specialty: {userProfile.specialty}</p>
          </Col>
        </Row>
      </Container>
      <form onSubmit={createReview}>
        <Container className=" mt-4 p-5 bg-white">
          <h1>Add Review</h1>
          <p>Rate</p>
          <div className="rate">
            <input
              type="radio"
              id="star5"
              name="rate"
              value="5"
              onChange={store.handleChange}
            />
            <label htmlFor="star5" title="text">
              5 stars
            </label>
            <input
              type="radio"
              id="star4"
              name="rate"
              value="4"
              onChange={store.handleChange}
            />
            <label htmlFor="star4" title="text">
              4 stars
            </label>
            <input
              type="radio"
              id="star3"
              name="rate"
              value="3"
              onChange={store.handleChange}
            />
            <label htmlFor="star3" title="text">
              3 stars
            </label>
            <input
              type="radio"
              id="star2"
              name="rate"
              value="2"
              onChange={store.handleChange}
            />
            <label htmlFor="star2" title="text">
              2 stars
            </label>
            <input
              type="radio"
              id="star1"
              name="rate"
              value="1"
              onChange={store.handleChange}
            />
            <label htmlFor="star1" title="text">
              1 star
            </label>
          </div>
          <textarea
            className="inputStyling description"
            type="text"
            placeholder="Type your review here (max 500 character)"
            maxlength="500"
            name="description"
            value={store.values.description}
            onChange={store.handleChange}
          />
          <input
            type="hidden"
            name="medical"
            className="inputStyling"
            onChange={store.handleChange}
            value={(store.values.medical = userProfile._id)}
          />
          <button className="primaryButton" type="submit">
            Add review
          </button>
        </Container>
      </form>
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

export default FeedBackConsumerMedical;
