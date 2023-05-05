import "../../assets/css/feedback.css";
import MedicalNav from "../../components/Nav/medicalStudentNav";
import React, { Fragment, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const FeedBackMedical = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("/api/v1/medicalReviews", {
          withCredentials: true,
        });
        setReviews(response.data.reviews);
      } catch (error) {
        console.error(error);
        // TODO: Handle errors
      }
    };
    fetchReviews();
  }, []);

  const handleReport = async (reviewId) => {
    try {
      const reviewToUpdate = reviews.find((review) => review._id === reviewId);
      if (reviewToUpdate) {
        const isReported = reviewToUpdate.isReported === "yes" ? "no" : "yes";
        const response = await axios.put(
          `/api/v1/medicalStudents/reportReview/${reviewId}`,
          { isReported },
          { withCredentials: true }
        );
        console.log(response.data);
        const updatedReviews = reviews.map((review) => {
          if (review._id === reviewId) {
            return {
              ...review,
              isReported,
            };
          }
          return review;
        });
        setReviews(updatedReviews);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Fragment>
      <MedicalNav />
      <Container className="mt-5">
        <Row>
          <Col sm={6}>
            <h1>Feedback</h1>
          </Col>
        </Row>
      </Container>
      {reviews.map((review) => (
        <Container
          className="mt-4 rounded bg-white border border-dark p-2"
          key={review._id}
        >
          <Row className="rounded p-2">
            <Col sm={7}>
              <p className="pt-5">{review.description}</p>
            </Col>
            <Col className="m-auto" sm={2}>
              <div>
                <button
                  onClick={() => handleReport(review._id)}
                  className={`btn ${
                    review.isReported === "yes" ? "btn-danger" : "btn-success"
                  }`}
                >
                  {review.isReported === "yes" ? "Reported" : "Not Reported"}
                </button>
              </div>
              <span>
                {review.rate} <span>&#11088;</span>
              </span>
            </Col>
          </Row>
        </Container>
      ))}
    </Fragment>
  );
};

export default FeedBackMedical;
