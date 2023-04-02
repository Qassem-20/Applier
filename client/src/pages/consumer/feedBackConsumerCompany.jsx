import "../../assets/css/feedback.css";
import profileIcon from "../../assets/images/profileIcon.png";
import { Container, Row, Col } from "react-bootstrap";
import ConsumerNav from "../../components/Nav/consumerNav";
import ReviewStore from "../../stores/ReviewStore";
import React, { Fragment, useState, useEffect } from "react";
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
      .get(`http://localhost:4000/api/v1/companies/${companyId}`, {
        withCredentials: true,
      })
      .then((response) => {
        setUserProfile(response.data.company);
      });
    axios
      .get(`http://localhost:4000/api/v1/reviewsCompany/${companyId}`, {
        withCredentials: true,
      })
      .then((response) => {
        setReviews(response.data.reviews);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(reviews);

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
            <span>Website: </span>
            <a href={userProfile.organization_website}>
              {userProfile.organization_website}
            </a>
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
            maxLength="500"
            name="description"
            value={store.values.description}
            onChange={store.handleChange}
          />
          <input
            type="hidden"
            name="company"
            className="inputStyling"
            onChange={store.handleChange}
            value={(store.values.company = userProfile._id)}
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
