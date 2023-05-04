import "../../assets/css/company.css";
import CustomizeIcon from "../../assets/images/customizeIcon.png";
import OptionIcon from "../../assets/images/optionIcon.png";
import EyeIcon from "../../assets/images/eyeIcon.webp";
import Nav from "../../components/Nav/companyNav";
import { useParams } from "react-router-dom";
import React, { Fragment, useState, useEffect } from "react";
import OpportunityStore from "../../stores/OpportunityStore";
import axios from "axios";
import { Col, Row, Container } from "react-bootstrap";
import ApplierInputForm from "../../components/applierComponents/applierInputForm";

const AppliedTrainee = () => {
  const { opportunityId } = useParams();

  const storeDelete = OpportunityStore((storeDelete) => {
    return {
      deleteOpportunity: storeDelete.deleteOpportunity,
    };
  });
  const [userProfile, setUserProfile] = useState({});
  const [applications, setApplications] = useState([]);

  async function getApplicants(opportunityId) {
    const res = await axios.get(
      `/api/v1/applicationsOpportunity/${opportunityId}`,
      {
        withCredentials: true,
      }
    );

    setApplications(res.data);
  }
  useEffect(() => {
    axios
      .get(`/api/v1/opportunities/${opportunityId}`, {
        withCredentials: true,
      })
      .then((response) => {
        setUserProfile(response.data.opportunity);
        setSearchTerm(response.data.opportunity.major_preferred);
      });
    getApplicants(opportunityId);
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const [cleared, setCleared] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <Nav />
      <Container>
        <Row className="mb-3">
          <Col className="mt-5">
            <Row id="opportunitiesHeader">Candidates</Row>
          </Col>

          <Col>
            <Row>
              <h3 className="mb-3">Opportunity Details</h3>

              <Col md={7}>
                <p>
                  <strong>Job Role: </strong> {userProfile.job_role}
                </p>
                <p>
                  <strong>Major: </strong> {userProfile.major_preferred}
                </p>
                <p>
                  <strong>Type: </strong>
                  {userProfile.job_type}
                </p>
              </Col>
              <Col>
                <Row>
                  <a href={`/editOpportunity/${opportunityId}`}>
                    <img src={CustomizeIcon} alt="editOpportunity" />
                  </a>
                </Row>
                <Row className="mt-4">
                  <form action="/companyHomePage/">
                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        storeDelete.deleteOpportunity(opportunityId)
                      }
                    >
                      Delete
                    </button>
                  </form>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col>
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
                  (show all applicants)
                </span>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
      <div className="row opportunitiesTag">
        <span className="col-1 opportunitiesTags">Name</span>
        <span className="col-1 opportunitiesTags">LinkedIn</span>
        <span className="col-1 opportunitiesTags">Email</span>
        <span className="col-2 opportunitiesTags">Phone Number</span>
        <span className="col-1 opportunitiesTags">University</span>
        <span className="col-2 opportunitiesTags">Major</span>
        <span className="col-1 opportunitiesTags">GPA </span>
        <span className="col-2 opportunitiesTags">Statues</span>
        <span className="col-1 opportunitiesTags">Info</span>
      </div>

      {/*  {filterApplicants.map((consumer) => ( */}
      {applications.consumerInfo &&
        applications.consumerInfo
          .filter((consumer) =>
            consumer.major.toLowerCase().includes(searchTerm)
          )
          .map((consumer) => (
            <div className="row  opportunitiesT" key={consumer._id}>
              <div className="col-1 mx-auto  opportunitiesTags">
                {consumer.name}
              </div>
              <div className="col-1 d-flex justify-content-center opportunitiesTags">
                <a href={`${consumer.linkedin}`}>
                  <img
                    className="iconSize"
                    src={EyeIcon}
                    alt="LinkedInProfile"
                  />
                </a>
              </div>
              <span className="col-1  opportunitiesTags">{consumer.email}</span>
              <span className="col-2  opportunitiesTags">{consumer.phone}</span>
              <span className="col-1 opportunitiesTags">
                {consumer.university}
              </span>
              <span className="col-2 opportunitiesTags">{consumer.major}</span>
              <span className="col-1 opportunitiesTags">{consumer.gpa}</span>
              <span className="col-2 opportunitiesTags">
                <button
                  className={`btn ${
                    consumer.status === "Hired"
                      ? "btn-success"
                      : consumer.status === "Rejected"
                      ? "btn-danger"
                      : "btn-secondary"
                  }`}
                  onClick={() => {
                    const newStatus =
                      consumer.status === "Hired" ? "Rejected" : "Hired";
                    axios
                      .put(
                        `/api/v1/traineeApplications/${consumer.applicationStatusId}`,
                        { statue: newStatus },
                        { withCredentials: true }
                      )
                      .then((response) => {
                        const updatedConsumer = response.data;
                        setApplications((prevApplications) => ({
                          ...prevApplications,
                          consumerInfo: prevApplications.consumerInfo.map((c) =>
                            c.applicationStatusId ===
                            updatedConsumer.applicationStatusId
                              ? { ...c, status: updatedConsumer.status }
                              : c
                          ),
                        }));
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                    window.location.reload();
                  }}
                >
                  {consumer.status}
                </button>
              </span>
              <div className="col-1 d-flex justify-content-center">
                <a href={`/traineeDetails/${consumer._id}`}>
                  <img className="iconSize" src={OptionIcon} alt="OptionIcon" />
                </a>
              </div>
            </div>
          ))}
    </Fragment>
  );
};

export default AppliedTrainee;
