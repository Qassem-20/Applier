import "../../assets/css/feedback.css";
import profileImg from "../../assets/images/profileIcon.png";
import flagIcon from "../../assets/images/flagIcon.png";
import replyIcon from "../../assets/images/replyIcon.webp";
import React, { Fragment, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CompanyNav from "../../components/Nav/companyNav";
import ReviewStore from "../../stores/ReviewStore";

const FeedBackCompany = () => {
  const reviewStore = ReviewStore();

  // useEffect(() => {
  //   reviewStore.fetchReviewsCompany();
  // }, []);

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
        {/* {reviewStore.reviews &&
          reviewStore.reviews.map((review) => {
            <Row>
              <Col sm={3}>
                <img className="m-auto" src={profileImg} alt="" />
                <p className="text-center">{review.consumer}</p>
              </Col>
              <Col sm={7}>
                <p>{review.description}</p>
              </Col>
              <Col className="m-auto" sm={2}>
                <img className="infoImg" src={flagIcon} alt="Report Icon" />
                <img className="infoImg" src={replyIcon} alt="Reply Icon" />
                <span>
                  {review.rate} <span>&#11088;</span>
                </span>
              </Col>
            </Row>;
            
          })} */}
        <div>SJSKSKKS</div>
      </Container>
    </Fragment>
  );
};

export default FeedBackCompany;
