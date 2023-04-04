import "../../assets/css/admin.css";
import AdminNav from "../../components/Nav/adminNav";
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import CompanyStore from "../../stores/CompanyStore.js";

const Companies = () => {
  const store = CompanyStore();

  const [userData, setUserData] = useState({ statue: "" });

  function handleUserDataChange(event) {
    setUserData({
      ...userData,
      statue: event.target.value,
    });
  }
  async function updateStatue(_id) {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/v1/admins/activateCompanies/${_id}`,
        userData,
        { withCredentials: true }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    store.fetchCompanies();
  }, []);
  return (
    <Fragment>
      <AdminNav />
      <Container className="mt-3 mb-2">
        <h1>Companies</h1>
        <Row className=" pt-3 pb-1">
          <Col xl={3} md={6} sm={12}>
            <input
              className="inputStyling"
              type="search"
              name=""
              placeholder="Phone Number "
            />
          </Col>
          <Col xl={3} md={6} sm={12}>
            <input
              className="inputStyling"
              type="search"
              name=""
              placeholder="Trainee Name"
            />
          </Col>
          <Col xl={3} md={6} sm={12}>
            <input
              className="inputStyling"
              type="date"
              name=""
              placeholder="Joined Date"
            />
          </Col>
          <Col xl={3} md={6} sm={12}>
            <select
              className="inputStyling"
              name="cars"
              defaultValue=""
              placeholder="Status"
            >
              <option defaultValue="saab">Null</option>
              <option defaultValue="volvo">Active</option>
              <option defaultValue="saab">Inactive</option>
            </select>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="opportunitiesTag">
          <Col xl={2}>
            <p className="opportunitiesMainTags">Company</p>
          </Col>
          <Col xl={3}>
            <p className="opportunitiesMainTags">Register Number</p>
          </Col>
          <Col xl={2}>
            <p className="opportunitiesMainTags">Phone Number</p>
          </Col>
          <Col xl={2}>
            <p className="opportunitiesMainTags">Location</p>
          </Col>
          <Col xl={2}>
            <p className="opportunitiesMainTags">Website</p>
          </Col>
          <Col xl={1}>
            <p className="opportunitiesMainTags">Status</p>
          </Col>
        </Row>
      </Container>
      {store.companies &&
        store.companies.map((company) => {
          return (
            <Container fluid key={company._id}>
              <Row className="opportunitiesT">
                <Col xl={2}>
                  <p className="opportunitiesTags">
                    {company.organization_name}
                  </p>
                </Col>
                <Col xl={3}>
                  <p className="opportunitiesTags">{company.register_number}</p>
                </Col>
                <Col xl={2}>
                  <p className="opportunitiesTags">{company.phone}</p>
                </Col>
                <Col xl={2}>
                  <p className="opportunitiesTags">{company.city}</p>
                </Col>
                <Col xl={2}>
                  <p className="opportunitiesTags">
                    {company.organization_website}
                  </p>
                </Col>
                <Col xl={1}>
                  <select
                    name="statue"
                    defaultValue={company.statue}
                    onChange={handleUserDataChange}
                    onClick={() => updateStatue(company._id)}
                  >
                    <option value="inactive">inactive</option>
                    <option value="active">active</option>
                  </select>
                </Col>
              </Row>
            </Container>
          );
        })}
    </Fragment>
  );
};

export default Companies;
