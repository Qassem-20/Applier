import "../../assets/css/feedback.css";
import profileImg from "../../assets/images/profileIcon.png";
import flagIcon from "../../assets/images/flagIcon.png";
import replyIcon from "../../assets/images/replyIcon.webp";
import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CompanyNav from "../../components/Nav/companyNav";
import axios from "axios";

const FeedBackCompany = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/reviews",
          {
            withCredentials: true,
          }
        );

        setReviews(response.data.reviews);
      } catch (error) {
        console.error(error);
        // TODO: Handle errors
      }
    };
    fetchReviews();
  }, []);

  const handleReport = (reportedReview) => {
    axios.put(
      `http://localhost:4000/api/v1/reportReviewCompany/:${reportedReview}`,
      {
        withCredentials: true,
      }
    );
  };

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
        {reviews.map((review) => (
          <Row key={review._id} className="rounded border-bottom p-5">
            <Col sm={3}>
              <img className="m-auto" src={profileImg} alt="" />
            </Col>
            <Col sm={7}>
              <p className="pt-5">{review.description}</p>
            </Col>
            <Col className="m-auto" sm={2}>
              <a href="" onClick={handleReport(review)}>
                <img className="infoImg" src={flagIcon} alt="Report Icon" />
              </a>

              <img className="infoImg" src={replyIcon} alt="Reply Icon" />
              <span>
                {review.rate} <span>&#11088;</span>
              </span>
            </Col>
          </Row>
        ))}
      </Container>
    </Fragment>
  );
};

export default FeedBackCompany;
