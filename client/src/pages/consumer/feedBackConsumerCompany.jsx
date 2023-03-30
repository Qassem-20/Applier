import "../../assets/css/feedback.css";
import profileIcon from "../../assets/images/profileIcon.png";
import { Container, Row, Col } from "react-bootstrap";
import ConsumerNav from "../../components/Nav/consumerNav";
import CompanyStore from "../../stores/CompanyStore";
import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
const FeedBackConsumerCompany = () => {
  const store = CompanyStore();
  const { companyId } = useParams();

  useEffect(() => {
    store.fetchCompany(companyId);
  }, []);

  console.log(store.company);
  return (
    <Fragment>
      <ConsumerNav />
      {store.data &&
        store.data.map((company) => {
          return (
            <Container className="mt-5 p-5 bg-white" key={company._id}>
              <Row>
                <Col>
                  <p>Company Name: {company.organization_name}</p>
                  <p>Bio:</p>
                  <p>{company.organization_bio}</p>
                  <p>City: {company.city}</p>
                  <p>website: {company.organization_website}</p>
                </Col>
              </Row>
            </Container>
          );
        })}
      <Container>
        <h1>Add Review</h1>
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
