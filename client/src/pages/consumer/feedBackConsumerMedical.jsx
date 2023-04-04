import "../../assets/css/feedback.css";
import profileIcon from "../../assets/images/profileIcon.png";
import ConsumerNav from "../../components/Nav/consumerNav";
import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReviewStore from "../../stores/ReviewStore";
import { Container, Row, Col } from "react-bootstrap";
import ApplierAddingReview from "../../components/applierComponents/applierAddingReview";

const FeedBackConsumerMedical = () => {
  const { medicalId } = useParams();

  const store = ReviewStore();

  const createReview = async (e) => {
    e.preventDefault();
    await store.registerReviewMedical();
    window.location.reload();
  };
  const [userProfile, setUserProfile] = useState({});
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/medicalStudents/${medicalId}`, {
        withCredentials: true,
      })
      .then((response) => {
        setUserProfile(response.data.medicalStudent);
      });
    axios
      .get(`http://localhost:4000/api/v1/reviewsMedical/${medicalId}`, {
        withCredentials: true,
      })
      .then((response) => {
        setReviews(response.data.reviews);
      })
      .catch((error) => {
        console.log(error);
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

      <ApplierAddingReview
        store={store}
        createReview={createReview}
        userProfile={userProfile}
      />
      <Container>
        <Container className="mt-5">
          <Row>
            <Col sm={6}>
              <h1>Reviews</h1>
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
        {Array.isArray(reviews) &&
          reviews.map((review) => (
            <Container
              className="mt-4 rounded bg-white border border-dark p-5"
              key={review._id}
            >
              <Row>
                <Col sm={7}>
                  <p>{review.description}</p>
                </Col>
                <Col className="m-auto" sm={2}>
                  <span>
                    {review.rate} <span>&#11088;</span>
                  </span>
                </Col>
              </Row>
            </Container>
          ))}
      </Container>
    </Fragment>
  );
};

export default FeedBackConsumerMedical;
