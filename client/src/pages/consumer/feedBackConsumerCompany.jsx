import "../../assets/css/feedback.css";
import { Container, Row, Col } from "react-bootstrap";
import ConsumerNav from "../../components/Nav/consumerNav";
import ReviewStore from "../../stores/ReviewStore";
import React, { Fragment, useState, useEffect } from "react";
import ApplierAddingReview from "../../components/applierComponents/applierAddingReview";
import axios from "axios";
import { useParams } from "react-router-dom";
const FeedBackConsumerCompany = () => {
  const { companyId } = useParams();

  const store = ReviewStore();
  const createReview = async (e) => {
    e.preventDefault();
    await store.registerReviewCompany();
    window.location.reload();
  };

  const [userProfile, setUserProfile] = useState({});
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    axios
      .get(`/api/v1/companies/${companyId}`, {
        withCredentials: true,
      })
      .then((response) => {
        setUserProfile(response.data.company);
      });
    axios
      .get(`/api/v1/reviewsCompany/${companyId}`, {
        withCredentials: true,
      })
      .then((response) => {
        setReviews(response.data.reviews);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [companyId]);

  return (
    <Fragment>
      <ConsumerNav />

      <Container className="mt-5 p-5 bg-white">
        <Row>
          <Col>
            <p>Company Name: {userProfile.organization_name}</p>
            <p>Bio: {userProfile.organization_bio}</p>
          </Col>
          <Col>
            <p>City: {userProfile.city}</p>
            <p>
              Website:
              <a href={userProfile.organization_website}>
                {userProfile.organization_website}
              </a>
            </p>
          </Col>
        </Row>
      </Container>
      <ApplierAddingReview
        store={store}
        createReview={createReview}
        userProfile={userProfile}
      />
      <Container>
        <Container>
          <Row className="mt-5">
            <Col sm={6}>
              <h1>Reviews</h1>
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

export default FeedBackConsumerCompany;
