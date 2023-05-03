import "../../assets/css/admin.css";
import AdminNav from "../../components/Nav/adminNav";
import React, { Fragment, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReviewStore from "../../stores/ReviewStore";
import axios from "axios";
const ReportedFeedBack = () => {
  const storeDelete = ReviewStore((storeDelete) => {
    return {
      deleteReview: storeDelete.deleteReview,
    };
  });
  const [reportedReviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("api/v1/reportedReviews", {
          withCredentials: true,
        });

        setReviews(response.data);
      } catch (error) {
        console.error(error);
        // TODO: Handle errors
      }
    };
    fetchReviews();
  }, []);

  const handleReport = async (reviewId) => {
    try {
      const reviewToUpdate = reportedReviews.find(
        (review) => review._id === reviewId
      );
      if (reviewToUpdate) {
        const isReported = reviewToUpdate.isReported === "yes" ? "no" : "yes";
        const response = await axios.put(
          `http://localhost:4000/api/v1/companies/reportReview/${reviewId}`,
          { isReported },
          { withCredentials: true }
        );
        console.log(response.data);
        const updatedReviews = reportedReviews.map((review) => {
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
      <AdminNav />
      <Container className="mt-5">
        <Row>
          <Col sm={6}>
            <h1>Feedback</h1>
          </Col>
        </Row>
      </Container>
      {reportedReviews.map((review) => (
        <Container
          className="mt-4 rounded bg-white border border-dark p-2"
          key={review._id}
        >
          <Row className="rounded p-5">
            <Col sm={7}>
              <p className="pt-5">{review.description}</p>
              <div>
                <form action="/reportedFeedBack/">
                  <button
                    className="btn btn-danger"
                    onClick={() => storeDelete.deleteReview(review._id)}
                  >
                    Delete
                  </button>
                </form>
              </div>
            </Col>
            <Col className="m-auto" sm={2}>
              <div>
                <button
                  onClick={() => handleReport(review._id)}
                  className={`btn ${
                    review.isReported === "yes" ? "btn-warning" : "btn-success"
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

export default ReportedFeedBack;
