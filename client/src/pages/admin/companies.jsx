import "../../assets/css/admin.css";
import AdminNav from "../../components/Nav/adminNav";
import React, { Fragment, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col , Card} from "react-bootstrap";
import CompanyStore from "../../stores/CompanyStore.js";

const Companies = () => {
  const store = CompanyStore();
  async function updateStatue(_id, newStatue) {
    try {
      const response = await axios.put(
        `/api/v1/admins/activateCompanies/${_id}`,
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
        <h1 style={{marginBottom:"30px" }}>Companies</h1>
        <hr
   style={{
   background: "#6F38C5",
   height: "5px",
   border: "none",
   marginBottom:"30px",
   }}
/>
      </Container>
      <Container fluid style={{marginBottom:"15px"}}>
        {/* <Row className="opportunitiesTag">
          <Col>
            <p className="opportunitiesMainTags">Company</p>
          </Col>
          <Col>
            <p className="opportunitiesMainTags">Register Number</p>
          </Col>
          <Col>
            <p className="opportunitiesMainTags d-none d-sm-block">
              Phone Number
            </p>
          </Col>
          <Col>
            <p className="opportunitiesMainTags d-none d-sm-block">Email</p>
          </Col>
          <Col>
            <p className="opportunitiesMainTags d-none d-sm-block">
              Joined Date
            </p>
          </Col>
          <Col>
            <p className="opportunitiesMainTags">Status</p>
          </Col>
        </Row> */}
      </Container>

      <Container fluid >
        <Row >
        {store.companies &&
        store.companies.map((company) => {
          return (

                    
                    <Col xl={4} md={6} sm={12} key={company._id}>
                      <Card >
                        <dt>
                          <span className="jobRole"  aria-label="Tense Biceps">
                          {company.organization_name}
                          </span>
                        </dt>
                        <dd>
                        <span> <p className="opportunitiesTags"> <h5 style={{ 'margin-right': '6px'}} >Registration Number:  </h5>  {company.register_number}</p> </span>
                        <span> <p className="opportunitiesTags"> <h5 style={{ 'margin-right': '6px'}} >Phone:  </h5>{company.phone}</p> </span>
                        <span> <p className="opportunitiesTags"> <h5 style={{ 'margin-right': '6px'}} >Email:  </h5>  {company.email}</p> </span>
                        <span> <p className="opportunitiesTags"> <h5 style={{ 'margin-right': '6px'}} >Created At:  </h5>   {company.createdAt.slice(0, 10)}</p> </span>
                        <span>   
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
                        </span>

                        </dd>

                      </Card>
                    </Col>
                    

              );
            })}
        </Row>
      </Container>
      {/* {store.companies &&
        store.companies.map((company) => {
          return (
            <Container fluid key={company._id}>
              <Row className="opportunitiesT">
                <Col>
                  <p className="opportunitiesTags">
                    {company.organization_name}
                  </p>
                </Col>
                <Col>
                  <p className="opportunitiesTags">{company.register_number}</p>
                </Col>
                <Col>
                  <p className="opportunitiesTags d-none d-sm-block">
                    {company.phone}
                  </p>
                </Col>
                <Col>
                  <p className="opportunitiesTags d-none d-sm-block">
                    {company.email}
                  </p>
                </Col>
                <Col>
                  <p className="opportunitiesTags d-none d-sm-block">
                    {company.createdAt.slice(0, 10)}
                  </p>
                </Col>
                <Col className="d-flex justify-content-center">
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
        })} */}
    </Fragment>
  );
};

export default Companies;
