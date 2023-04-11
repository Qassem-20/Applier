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

  const [userData, setUserData] = useState({ isReported: "" });

  function handleUserDataChange(event) {
    setUserData({
      ...userData,
      isReported: event.target.value,
    });
  }
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/reportedReviews",
          {
            withCredentials: true,
          }
        );

        setReviews(response.data);
      } catch (error) {
        console.error(error);
        // TODO: Handle errors
      }
    };
    fetchReviews();
  }, []);

  const handleReport = (_id) => {
    try {
      const response = axios.put(
        `http://localhost:4000/api/v1/companies/reportReview/${_id}`,
        userData,
        { withCredentials: true }
      );
      console.log(response.data);
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
                <select
                  name="isReported"
                  defaultValue={review.isReported}
                  onChange={handleUserDataChange}
                  onClick={() => handleReport(review._id)}
                >
                  <option value="no">Not Reported</option>
                  <option value="yes">Reported</option>
                </select>
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
