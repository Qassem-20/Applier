import "../../assets/css/consumer.css";
import InfoIcon from "../../assets/images/infoIcon.png";
import ConsumerNav from "../../components/Nav/consumerNav";
import OpportunityStore from "../../stores/OpportunityStore";
import TraineeApplicationStore from "../../stores/traineeApplicationStore";
import ApplierInputForm from "../../components/applierComponents/applierInputForm";
import ApplierButton from "../../components/applierComponents/applierButton";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import React, { Fragment, useEffect, useState } from "react";
import ConsumerStore from "../../stores/ConsumerStore";

const Opportunities = () => {
  const store = OpportunityStore();
  const consumerStore = ConsumerStore();

  const storeDelete = TraineeApplicationStore((storeDelete) => {
    return {
      deleteTraineeApplication: storeDelete.deleteTraineeApplication,
    };
  });

  const [traineeApplications] = useState([]);

  // for searching opportunities
  const [searchTerm, setSearchTerm] = useState("");

  const [userData, setUserData] = useState({
    statue: "",
    opportunity: "",
  });

  function handleUserDataChange(event) {
    setUserData({
      ...userData,
      statue: event.target.value,
      opportunity: event.target.value,
    });
  }

  async function Apply(_id) {
    try {
      await axios.post(
        `api/v1/applications/registerApplication/${_id}`,
        userData,
        { withCredentials: true }
      );
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    store.fetchOpportunities();
  }, []);

  useEffect(() => {
    consumerStore.fetchConsumerProfile();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterOpportunities = store.opportunities
    ? store.opportunities.filter((opportunity) =>
        opportunity.major_preferred
          .toLowerCase()
          .includes(searchTerm ? searchTerm.toLowerCase() : "")
      )
    : [];

  //consumer Id
  //console.log(consumerStore.consumer._id);

  return (
    <Fragment>
      <ConsumerNav />
      {consumerStore.consumer ? (
        <div>
          <ApplierButton
            buttonType={
              consumerStore.consumer ? consumerStore.consumer.major : ""
            }
            value={consumerStore.consumer ? consumerStore.consumer.major : ""}
            onClick={(value) => setSearchTerm(value)}
          />
        </div>
      ) : (
        ""
      )}

      <Container>
        <Row>
          <Col>
            <h1 id="opportunitiesHeader">Opportunities</h1>
            <span id="msg">Make sure you completed your Profile</span>
          </Col>
          <Col>
            <ApplierInputForm
              className="row"
              label="Search"
              type="text"
              placeholder="Searching for which Major"
              id="searchInput"
              value={searchTerm}
              onChange={handleSearch}
            />
          </Col>
        </Row>
      </Container>

      <div className="row opportunitiesTag">
        <span className="col-2 opportunitiesMainTags">Role</span>
        <span className="col-2 opportunitiesMainTags">Description</span>
        <span className="col-2 opportunitiesMainTags">major</span>
        <span className="col-1 opportunitiesMainTags">Statues</span>
        <span className="col-2 opportunitiesMainTags">City</span>
        <span className="col-2 opportunitiesMainTags">Started At</span>
        <span className="col-1 opportunitiesMainTags">Company info</span>
      </div>
      {filterOpportunities.map((opportunity) => {
        // Check if the opportunity ID is in the traineeApplications array
        const isApplied = traineeApplications.some(
          (application) =>
            application.applicationStatus.opportunity === opportunity._id
        );

        return (
          <div className="row opportunitiesT" key={opportunity._id}>
            <span className="col-2 opportunitiesTags">
              {opportunity.job_role}
            </span>
            <span className="col-2 opportunitiesTags">
              {opportunity.description}
            </span>
            <span className="col-2 opportunitiesTags">
              {opportunity.major_preferred}
            </span>
            <span className="col-1 opportunitiesTags">
              {opportunity.applicationStatuses &&
              opportunity.applicationStatuses.length > 0 ? (
                opportunity.applicationStatuses.map((status) => (
                  <span key={status._id}>
                    <button
                      className={`btn ${
                        status.statue === "Hired"
                          ? "btn-success"
                          : status.statue === "Rejected"
                          ? "btn-danger"
                          : "btn-secondary"
                      }`}
                      onClick={() =>
                        storeDelete.deleteTraineeApplication(status._id)
                      }
                    >
                      {status.statue} | X
                    </button>
                  </span>
                ))
              ) : (
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
                  <input
                    type="hidden"
                    name="statue"
                    className="inputStyling"
                    value={(userData.statue = "Applied")}
                    onChange={handleUserDataChange}
                  />
                  <ApplierButton
                    buttonType={isApplied === "unApplied" ? "Applied" : "Apply"}
                    isDisabled={isApplied === "Applied"}
                    type="submit"
                    name="statue"
                    className="button"
                    value={opportunity.statue}
                  />
                </form>
              )}
            </span>
            <span className="col-2 opportunitiesTags">{opportunity.city}</span>
            <span className="col-2 opportunitiesTags">
              {opportunity.start_date}
            </span>
            <div className="col-1 d-flex justify-content-center">
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
