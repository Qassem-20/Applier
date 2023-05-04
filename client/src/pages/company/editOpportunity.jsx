import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import OpportunityStore from "../../stores/OpportunityStore";
import ApplierInputForm from "../../components/applierComponents/applierInputForm";
import ApplierButton from "../../components/applierComponents/applierButton";
import Nav from "../../components/Nav/companyNav";
import "../../assets/css/company.css";
const EditOpportunity = () => {
  const store = OpportunityStore();

  const editOpportunity = async (e) => {
    e.preventDefault();
    await store.updateOpportunity();
    window.location.reload();
  };
  const { opportunityId } = useParams();

  useEffect(() => {
    store.fetchOpportunity(opportunityId);
  }, []);

  if (!store.opportunity) {
    return <div>Loading...</div>;
  }
  return (
    <Fragment>
      <Nav />
      {!store.updateStatue._id && (
        <Container className="backgroundProfile">
          <Row>
            <Col md={6} sm={12}>
              <label className="labelStyling">Role:</label>
              <p>{store.opportunity.job_role}</p>

              <label className="labelStyling">Description:</label>
              <p>{store.opportunity.description}</p>

              <label className="labelStyling">Skills:</label>
              <p>{store.opportunity.skills}</p>

              <label className="labelStyling">Departments looking for</label>
              <p>{store.opportunity.departments_preferred}</p>

              <label className="labelStyling">Training Duration</label>
              <p>{store.opportunity.duration}</p>

              <label className="labelStyling">Start Date:</label>
              <p>{store.opportunity.start_date}</p>
            </Col>
            <Col md={6} sm={12}>
              <label className="labelStyling">Type of Job:</label>
              <p>{store.opportunity.job_type}</p>

              <label className="labelStyling">Major Looking for:</label>
              <p>{store.opportunity.major_preferred}</p>

              <label className="labelStyling">Number of seats available:</label>
              <p>{store.opportunity.availability_seats}</p>

              <label className="labelStyling">Salary:</label>
              <p>{store.opportunity.salary}</p>

              <label className="labelStyling">City:</label>
              <p>{store.opportunity.city}</p>
            </Col>
          </Row>
          <ApplierButton
            buttonType="Edit opportunity"
            onClick={() => store.toggleUpdate(store.opportunity)}
          />
        </Container>
      )}
      {store.updateStatue._id && (
        <Container>
          <h1 className="opportunitiesHeader">Update Opportunity</h1>
          <div className="container backgroundProfile">
            <form onSubmit={editOpportunity}>
              <Row>
                <Col>
                  <ApplierInputForm
                    label="Job Role"
                    type="text"
                    name="job_role"
                    value={store.updateStatue.job_role}
                    onChange={store.handleUpdate}
                  />
                  <ApplierInputForm
                    label="Job Description"
                    type="text"
                    name="description"
                    value={store.updateStatue.description}
                    onChange={store.handleUpdate}
                  />
                  <ApplierInputForm
                    label="skills"
                    type="text"
                    name="skills"
                    value={store.updateStatue.skills}
                    onChange={store.handleUpdate}
                  />
                  <ApplierInputForm
                    label="Number of seats available"
                    type="number"
                    name="availability_seats"
                    value={store.updateStatue.availability_seats}
                    onChange={store.handleUpdate}
                  />
                  <ApplierInputForm
                    label="Salary"
                    type="text"
                    name="salary"
                    value={store.updateStatue.salary}
                    onChange={store.handleUpdate}
                  />
                  <ApplierInputForm
                    label="Major Looking for"
                    type="text"
                    name="major_preferred"
                    placeholder="Software Engineer"
                    value={store.updateStatue.major_preferred}
                    onChange={store.handleUpdate}
                  />
                </Col>
                <Col>
                  <ApplierInputForm
                    label="City"
                    type="text"
                    name="city"
                    value={store.updateStatue.city}
                    onChange={store.handleUpdate}
                  />
                  <ApplierInputForm
                    label="Starting Date"
                    type="date"
                    name="start_date"
                    value={store.updateStatue.start_date}
                    onChange={store.handleUpdate}
                  />
                  <label className="labelStyling">Training Duration</label>
                  <select
                    className="inputStyling mb-3"
                    name="duration"
                    placeholder="duration"
                    value={store.updateStatue.duration}
                    onChange={store.handleUpdate}
                  >
                    <option>Please select a duration</option>
                    <option value="2 months">2 months</option>
                    <option value="3 months">3 months</option>
                    <option value="4 months">4 months</option>
                    <option value="6 months">6 months</option>
                  </select>
                  <label className="labelStyling">Type of Job</label>
                  <select
                    className="inputStyling mb-3"
                    name="job_type"
                    placeholder="job type"
                    value={store.updateStatue.job_type}
                    onChange={store.handleUpdate}
                  >
                    <option>Please select a type</option>
                    <option value="on-site">On-site</option>
                    <option value="remote">Remote</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                  <label className="labelStyling">
                    Departments looking for
                  </label>
                  <select
                    className="inputStyling mb-3"
                    name="departments_preferred"
                    placeholder="duration"
                    value={store.updateStatue.departments_preferred}
                    onChange={store.handleUpdate}
                  >
                    <option>Please select a Departments</option>
                    <option value="Technical">Technical IT</option>
                    <option value="Engineer">Engineer</option>
                    <option value="Management">Management</option>
                  </select>
                </Col>
              </Row>
              <ApplierButton
                buttonType="Submit"
                type="submit"
                className="button"
              />
            </form>
          </div>
        </Container>
      )}
    </Fragment>
  );
};

export default EditOpportunity;
