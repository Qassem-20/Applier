import Nav from "../../components/Nav/companyNav";
import "../../assets/css/company.css";
import React, { Fragment } from "react";
import OpportunityStore from "../../stores/OpportunityStore";
import { useHistory } from "react-router-dom";
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
      <section>
        <form onSubmit={createOpportunity}>
          <div className="container backgroundAdd">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <p className="labelTag">Job Role</p>
                <input
                  type="input"
                  className="inputStyling"
                  name="job_role"
                  value={store.values.job_role}
                  onChange={store.handleChange}
                />
                <p className="labelTag">Job Description</p>
                <input
                  type="text"
                  className="inputStyling"
                  name="description"
                  value={store.values.description}
                  onChange={store.handleChange}
                />
                <p className="labelTag">skills</p>
                <input
                  type="text"
                  className="inputStyling"
                  name="skills"
                  value={store.values.skills}
                  onChange={store.handleChange}
                />
                <p className="labelTag">Departments looking for</p>
                <select
                  className="inputStyling"
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
                <p className="labelTag">Training Duration</p>
                <select
                  className="inputStyling"
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
                <p className="labelTag">starting Date</p>
                <input
                  type="date"
                  className="inputStyling"
                  name="start_date"
                  value={store.values.start_date}
                  onChange={store.handleChange}
                />
              </div>
              <div className="col-sm-12 col-md-6">
                <p className="labelTag">Type of Job:</p>
                <select
                  className="inputStyling"
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
                <p className="labelTag">Major Looking for:</p>
                <input
                  type="text"
                  className="inputStyling"
                  name="major_preferred"
                  placeholder="Software Engineer"
                  value={store.values.major_preferred}
                  onChange={store.handleChange}
                />
                <p className="labelTag">Number of seats available:</p>
                <input
                  type="number"
                  className="inputStyling"
                  name="availability_seats"
                  value={store.values.availability_seats}
                  onChange={store.handleChange}
                />
                <p className="labelTag">Salary</p>
                <div>
                  <input
                    type="text"
                    className="inputStyling"
                    name="salary"
                    value={store.values.salary}
                    onChange={store.handleChange}
                  />
                </div>
                <p className="labelTag">Place of the Job</p>
                <input
                  type="text"
                  className="inputStyling"
                  name="city"
                  value={store.values.city}
                  onChange={store.handleChange}
                />
                <div>
                  <button className="primaryButton" type="submit">
                    add opportunity
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </Fragment>
  );
};

export default AddOpportunity;
