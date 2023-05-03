import "../../assets/css/admin.css";
import AdminNav from "../../components/Nav/adminNav";
import React, { Fragment, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import CompanyStore from "../../stores/CompanyStore.js";

const Companies = () => {
  const store = CompanyStore();
  async function updateStatue(_id, newStatue) {
    try {
      const response = await axios.put(
        `api/v1/admins/activateCompanies/${_id}`,
        { statue: newStatue },
        { withCredentials: true }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    store.fetchCompanies();
  }, [store]);
  return (
    <Fragment>
      <AdminNav />
      <Container className="mt-3 mb-2">
        <h1>Companies</h1>
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
            <p className="opportunitiesMainTags">Email</p>
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
                  <p className="opportunitiesTags">{company.email}</p>
                </Col>
                <Col xl={2}>
                  <p className="opportunitiesTags">
                    {company.organization_website}
                  </p>
                </Col>
                <Col xl={1}>
                  <button
                    className={`btn ${
                      company.statue === "true" ? "btn-success" : "btn-danger"
                    }`}
                    onClick={() => {
                      const newStatue =
                        company.statue === "true" ? "false" : "true";
                      updateStatue(company._id, newStatue);
                    }}
                  >
                    {company.statue === "true" ? "Active" : "Inactive"}
                  </button>
                </Col>
              </Row>
            </Container>
          );
        })}
    </Fragment>
  );
};

export default Companies;
