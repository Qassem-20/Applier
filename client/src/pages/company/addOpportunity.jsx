import Nav from "../../components/Nav/companyNav";
import "../../assets/css/company.css";
import React, { Fragment, useState } from "react";

const AddOpportunity = () => {
  //use states
  const [job_role, setJobRole] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");
  const [job_type, setJobType] = useState("");
  const [departments_preferred, setDepartmentPreferred] = useState("");
  const [major_preferred, setMajorPreferred] = useState("");
  const [availability_seats, setAvailabilitySeats] = useState("");
  const [salary, setSalary] = useState("");
  const [start_date, setStartDate] = useState("");
  const [duration, setDuration] = useState("");
  const [city, setCity] = useState("");
  const [visibility, setVisibility] = useState("");
  const [createdBy, setCreatedBy] = useState("");

  async function createOpportunity(event) {
    event.preventDefault();
    const response = await fetch(
      "http://localhost:4000/api/v1/addOpportunity",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          job_role,
          description,
          skills,
          job_type,
          departments_preferred,
          major_preferred,
          availability_seats,
          salary,
          start_date,
          duration,
          city,
          visibility,
          createdBy,
        }),
      }
    );
    const data = await response.json();
    console.log("Opportunity Added", data);
  }

  return (
    <Fragment>
      <Nav />
      <section>
        <form onSubmit={createOpportunity}>
          <div className="container backgroundAdd">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <p className="labelTag">Job Role</p>
                <input type="input" className="inputStyling" name="" value="" />
                <p className="labelTag">Job Description</p>
                <input type="text" className="inputStyling" name="" value="" />
                <p className="labelTag">Departments looking for</p>
                <select>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
                <p className="labelTag">Major Looking for</p>
                <select>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
                <p className="labelTag">Training Duration</p>
                <input
                  type="number"
                  className="inputStyling"
                  name=""
                  value=""
                />
              </div>
              <div className="col-sm-12 col-md-6">
                <p className="labelTag">Type of Job</p>
                <input type="radio" name="" value="" />
                <input type="radio" name="" value="" />
                <input type="radio" name="" value="" />
                <div>
                  <label className="labelTag">Paid Opportunity?</label>
                  <input type="checkbox" name="" value="" />
                </div>
                <div>
                  <input
                    type="text"
                    className="inputStyling"
                    name=""
                    value=""
                  />
                </div>
                <p className="labelTag">Place of the Job</p>
                <input type="text" className="inputStyling" name="" value="" />
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
