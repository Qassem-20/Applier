import Nav from "../../components/Nav/companyNav";
import "../../assets/css/company.css";
import React, { Fragment } from "react";
import OpportunityStore from "../../stores/OpportunityStore";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ApplierInputForm from "../../components/applierComponents/applierInputForm";
import ApplierButton from "../../components/applierComponents/applierButton";
const AddOpportunity = () => {
  const store = OpportunityStore();

  const history = useHistory();
  const createOpportunity = async (e) => {
    e.preventDefault();

    await store.registerOpportunity();
    history.push("/companyHomePage");
  };

  return (
    <Fragment>
      <Nav />
      <Container className="backgroundProfile">
        <form onSubmit={createOpportunity}>
          <Row>
            <Col md={6} sm={12}>
              <ApplierInputForm
                label="Job Role"
                type="text"
                name="job_role"
                value={store.values.job_role}
                onChange={store.handleChange}
              />
              <ApplierInputForm
                label="Job Description"
                type="text"
                name="description"
                value={store.values.description}
                onChange={store.handleChange}
              />
              <ApplierInputForm
                label="skills"
                type="text"
                name="skills"
                value={store.values.skills}
                onChange={store.handleChange}
              />

              <label className="labelStyling">Departments looking for</label>
              <select
                className="inputStyling mb-3"
                name="departments_preferred"
                placeholder="duration"
                value={store.values.departments_preferred}
                onChange={store.handleChange}
              >
                <option>Please select a Departments</option>
                <option value="Technical">Technical IT</option>
                <option value="Engineer">Engineer</option>
                <option value="Management">Management</option>
              </select>

              <label className="labelStyling">Training Duration</label>
              <select
                className="inputStyling mb-3"
                name="duration"
                placeholder="duration"
                value={store.values.duration}
                onChange={store.handleChange}
              >
                <option>Please select a duration</option>
                <option value="2 months">2 months</option>
                <option value="3 months">3 months</option>
                <option value="4 months">4 months</option>
                <option value="6 months">6 months</option>
              </select>

              <ApplierInputForm
                label="Starting Date"
                type="date"
                name="start_date"
                value={store.values.start_date}
                onChange={store.handleChange}
              />
            </Col>
            <Col md={6} sm={12}>
              <label className="labelStyling">Type of Job</label>
              <select
                className="inputStyling mb-3"
                name="job_type"
                placeholder="job type"
                value={store.values.job_type}
                onChange={store.handleChange}
              >
                <option>Please select a type</option>
                <option value="on-site">On-site</option>
                <option value="remote">Remote</option>
                <option value="hybrid">Hybrid</option>
              </select>

              <ApplierInputForm
                label="Major Looking for"
                type="text"
                name="major_preferred"
                placeholder="Software Engineer"
                value={store.values.major_preferred}
                onChange={store.handleChange}
              />

              <ApplierInputForm
                label="Number of seats available"
                type="number"
                name="availability_seats"
                value={store.values.availability_seats}
                onChange={store.handleChange}
              />

              <ApplierInputForm
                label="Salary"
                type="text"
                name="salary"
                value={store.values.salary}
                onChange={store.handleChange}
              />

              <ApplierInputForm
                label="City"
                type="text"
                name="city"
                value={store.values.city}
                onChange={store.handleChange}
              />
            </Col>
          </Row>
          <ApplierButton buttonType="Add opportunity" />
        </form>
      </Container>
    </Fragment>
  );
};

export default AddOpportunity;
