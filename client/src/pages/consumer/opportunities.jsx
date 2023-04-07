import "../../assets/css/consumer.css";
import InfoIcon from "../../assets/images/infoIcon.png";
import ConsumerNav from "../../components/Nav/consumerNav";
import OpportunityStore from "../../stores/OpportunityStore";
import ApplierInputForm from "../../components/applierComponents/applierInputForm";
import ApplierButton from "../../components/applierComponents/applierButton";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";

import React, { Fragment, useEffect, useState } from "react";

const Opportunities = () => {
  const opportunityStore = OpportunityStore();

  const [userData, setUserData] = useState({ statue: "", opportunity: "" });
  function handleUserDataChange(event) {
    setUserData({
      ...userData,
      statue: event.target.value,
      opportunity: event.target.value,
    });
  }
  async function Apply(_id) {
    try {
      const response = await axios.post(
        `http://localhost:4000/api/v1/applications/registerApplication/${_id}`,
        userData,
        { withCredentials: true }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  // For getting the status of the application (will work on it later)
  // async function applicationStatus(_id) {
  //   const response = await axios.get;
  // }

  useEffect(() => {
    opportunityStore.fetchOpportunities();
  }, []);

  return (
    <Fragment>
      <ConsumerNav />

      <Container>
        <Row>
          <Col>
            <h1 id="opportunitiesHeader">Opportunities</h1>
          </Col>
          <Col>
            <ApplierInputForm
              row={"row"}
              label="Search"
              type="text"
              placeholder="Searching for ..."
              id="searchInput"
            />
          </Col>
        </Row>
      </Container>

      <div className="row opportunitiesTag">
        <span className="col-2 opportunitiesMainTags">Role</span>
        <span className="col-2 opportunitiesMainTags">major</span>
        <span className="col-2 opportunitiesMainTags">Statues</span>
        <span className="col-2 opportunitiesMainTags">City</span>
        <span className="col-2 opportunitiesMainTags">Salary</span>
        <span className="col-2 opportunitiesMainTags">Company info</span>
      </div>
      {opportunityStore.opportunities &&
        opportunityStore.opportunities.map((opportunity) => {
          return (
            <div className="row opportunitiesT" key={opportunity._id}>
              <span className="col-2 opportunitiesTags">
                {opportunity.job_role}
              </span>
              <span className="col-2 opportunitiesTags">
                {opportunity.major_preferred}
              </span>
              <span className="col-2 opportunitiesTags">
                <form
                  onClick={() =>
                    Apply((userData.opportunity = opportunity._id))
                  }
                >
                  <input
                    type="hidden"
                    name="opportunity"
                    className="inputStyling"
                    value={(userData.opportunity = opportunity._id)}
                    onChange={handleUserDataChange}
                  />
                  <ApplierButton
                    buttonType={userData.statue}
                    isDisabled={userData.statue === "Apply"}
                    type="submit"
                    name="statue"
                    className="button"
                    value={(userData.statue = "Applied")}
                  />
                </form>
              </span>
              <span className="col-2 opportunitiesTags">
                {opportunity.city}
              </span>
              <span className="col-2 opportunitiesTags">
                {opportunity.salary}
              </span>
              <div className="col-2 d-flex justify-content-center">
                <Link to={`/feedBackConsumerCompany/${opportunity.company}`}>
                  <img className="infoImg" src={InfoIcon} alt="InfoIcon" />
                </Link>
              </div>
            </div>
          );
        })}
    </Fragment>
  );
};

export default Opportunities;
