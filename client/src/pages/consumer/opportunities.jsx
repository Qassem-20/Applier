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

const Opportunities = () => {
  const store = OpportunityStore();

  const storeDelete = TraineeApplicationStore((storeDelete) => {
    return {
      deleteTraineeApplication: storeDelete.deleteTraineeApplication,
    };
  });

  const [traineeApplications] = useState([]);
  const [cleared, setCleared] = useState(false);

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

  async function ConsumerData() {
    try {
      const response = await axios.get("/api/v1/consumerProfile", {
        withCredentials: true,
      });
      setSearchTerm(response.data.consumer.major);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    store.fetchOpportunities();
  }, []);

  useEffect(() => {
    ConsumerData();
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

  return (
    <Fragment>
      <ConsumerNav />

      <Container className="mb-2">
        <Row>
          <Col>
            <h1 id="opportunitiesHeader">Opportunities</h1>
            <span id="msg">Make sure you completed your Profile</span>
          </Col>
          <Col>
            <Row>
              <ApplierInputForm
                className="row mb-0"
                label="Search "
                type="text"
                placeholder="Major"
                id="searchInput"
                value={searchTerm}
                onChange={handleSearch}
              />
            </Row>
            <div className={cleared ? "d-none" : ""}>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  return setSearchTerm(""), setCleared(true);
                }}
              >
                Clear
              </button>

              <span id="msg" className="px-3">
                (show all opportunities)
              </span>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="row opportunitiesTag">
        <span className="col opportunitiesMainTags">Role</span>
        <span className="col opportunitiesMainTags d-none d-sm-block">
          Description
        </span>
        <span className="col opportunitiesMainTags d-none d-sm-block">
          major
        </span>
        <span className="col opportunitiesMainTags">Statues</span>
        <span className="col opportunitiesMainTags d-none d-sm-block">
          City
        </span>
        <span className="col opportunitiesMainTags d-none d-sm-block">
          Started At
        </span>
        <span className="col opportunitiesMainTags">Company</span>
      </div>
      {filterOpportunities.map((opportunity) => {
        // Check if the opportunity ID is in the traineeApplications array
        const isApplied = traineeApplications.some(
          (application) =>
            application.applicationStatus.opportunity === opportunity._id
        );

        return (
          <div className="row opportunitiesT" key={opportunity._id}>
            <span className="col opportunitiesTags">
              {opportunity.job_role}
            </span>
            <span className="col d-none d-sm-block opportunitiesTags">
              {opportunity.description}
            </span>
            <span className="col opportunitiesTags d-none d-sm-block">
              {opportunity.major_preferred}
            </span>
            <span className="col opportunitiesTags">
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
                        status.statue !== "Hired" &&
                        status.statue !== "Rejected" &&
                        storeDelete.deleteTraineeApplication(status._id)
                      }
                      disabled={
                        status.statue === "Hired" ||
                        status.statue === "Rejected"
                      }
                    >
                      {status.statue}
                      {status.statue === "Applied" && <span>| X</span>}
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
            <span className="col opportunitiesTags d-none d-sm-block">
              {opportunity.city}
            </span>
            <span className="col  opportunitiesTags d-none d-sm-block">
              {opportunity.start_date}
            </span>

            <div className="col  d-flex justify-content-center">
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
