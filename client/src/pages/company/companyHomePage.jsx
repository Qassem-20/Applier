import React, { Fragment, useEffect, useState } from "react";
import Nav from "../../components/Nav/companyNav";
import EditOpportunities from "../../assets/images/customizeIcon.png";
import EyeIcon from "../../assets/images/eyeIcon.webp";
import opportunityStore from "../../stores/OpportunityStore";
import { Container, Row, Col } from "react-bootstrap";
import ApplierInputForm from "../../components/applierComponents/applierInputForm";

const CompanyHomePage = () => {
  const store = opportunityStore();

  useEffect(() => {
    store.fetchOpportunitiesCompany();
  }, [store]);

  const [sorted, setSorted] = useState({});

  const sortNew = () => {
    setSorted(store.fetchOpportunitiesCompanySorted);
    return sorted;
  };

  const sortOld = () => {
    setSorted(store.fetchOpportunitiesCompany);
    return sorted;
  };

  const onSelect = (e) => {
    const value = e.target.value;
    console.log(value);

    if (value === "new") {
      return sortNew();
    } else if (value === "early") {
      return sortOld();
    }
  };

  return (
    <Fragment>
      <Nav />
      <Container className="mb-4">
        <Row>
          <Col>
            <h1 id="opportunitiesHeader">Opportunities</h1>
          </Col>
          <Col>
            <label className="labelStyling">Sort By Date</label>
            <select
              className="inputStyling mb-3"
              name="sort"
              onChangeCapture={onSelect}
            >
              <option value="new">Newest</option>
              <option value="early">Earliest</option>
            </select>
          </Col>
        </Row>
      </Container>

      <div className="row opportunitiesTag">
        <span className="col-2 opportunitiesMainTags">Role</span>
        <span className="col-2 opportunitiesMainTags">Job Description</span>
        <span className="col-2 opportunitiesMainTags">Available Seats</span>
        <span className="col-2 opportunitiesMainTags">duration</span>
        <span className="col-2 opportunitiesMainTags">Created at</span>
        <span className="col-1 opportunitiesMainTags">Applications</span>
        <span className="col-1 opportunitiesMainTags">Edit</span>
      </div>
      {store.opportunities &&
        store.opportunities
          .sort((a, b) => a.date < b.date)
          .map((opportunity) => {
            return (
              <div className="row opportunitiesT" key={opportunity._id}>
                <span className="col-2 opportunitiesTags">
                  {opportunity.job_role}
                </span>
                <span className="col-2 opportunitiesTags">
                  {opportunity.description}
                </span>
                <span className="col-2 opportunitiesTags">
                  {opportunity.availability_seats}
                </span>
                <span className="col-2 opportunitiesTags">
                  {opportunity.duration}
                </span>
                <span className="col-2 opportunitiesTags">
                  {opportunity.createdAt.slice(0, 10)}
                </span>
                <div className="col-1 d-flex justify-content-center">
                  <a href={`/appliedTrainee/${opportunity._id}`}>
                    <img
                      className="infoImg"
                      src={EyeIcon}
                      alt="view Applications"
                    />
                  </a>
                </div>
                <div className="col-1 d-flex justify-content-center">
                  <a href={`/editOpportunity/${opportunity._id}`}>
                    <img
                      className="infoImg"
                      src={EditOpportunities}
                      alt="Edit Opportunity"
                    />
                  </a>
                </div>
              </div>
            );
          })}
    </Fragment>
  );
};

export default CompanyHomePage;
