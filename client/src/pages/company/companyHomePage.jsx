import React, { Fragment, useEffect } from "react";
import Nav from "../../components/Nav/companyNav";
import EditOpportunities from "../../assets/images/customizeIcon.png";
import EyeIcon from "../../assets/images/eyeIcon.webp";
import opportunityStore from "../../stores/OpportunityStore";
const CompanyHomePage = () => {
  const store = opportunityStore();
  useEffect(() => {
    store.fetchOpportunitiesCompany();
  }, []);
  return (
    <Fragment>
      <Nav />
      <section>
        <div className="mb-4">
          <h1 id="opportunitiesHeader">&nbsp;&nbsp;&nbsp;Opportunities</h1>
        </div>
        <div className="container mb-3">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-3 m-auto">
              <input
                type="date"
                className="form-control"
                placeholder="Created At"
                name=""
                defaultValue=""
                id="searchInput"
              />
            </div>
            <div className="col-6 m-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Job role"
                name=""
                defaultValue=""
                id="searchInput"
              />
            </div>
          </div>
        </div>
      </section>
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
        store.opportunities.map((opportunity) => {
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
                {opportunity.createdAt}
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
