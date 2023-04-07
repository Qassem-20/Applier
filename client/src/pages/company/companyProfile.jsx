import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Nav from "../../components/Nav/companyNav";
import "../../assets/css/company.css";
import { Container, Row, Col } from "react-bootstrap";
import CompanyStore from "../../stores/CompanyStore";
import ApplierInputForm from "../../components/applierComponents/applierInputForm";
import ApplierButton from "../../components/applierComponents/applierButton";
import { useHistory } from "react-router-dom";

const CompanyProfile = () => {
  const store = CompanyStore();

  const history = useHistory();

  // const handleUpdate = async (e) => {
  //   e.preventDefault();

  //   await store.updateProfileCompany();

  //   history.push("/companyHomePage");
  // };
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const fetchCompanyProfile = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/companyProfile",
          {
            withCredentials: true,
          }
        );
        setCompany(response.data.company);
      } catch (error) {
        console.error(error);
        // TODO: Handle errors
      }
    };
    fetchCompanyProfile();
  }, []);
  if (!company) {
    return <div>Loading...</div>;
  }
  return (
    <Fragment>
      <Nav />
      <Container>
        <Container>
          <h1 className="opportunitiesHeader">Company Profile</h1>
        </Container>
        <div className="container backgroundProfile">
          <p>Company name: {company.organization_name}</p>
          <p>Email: {company.email}</p>
          <p>Supervisor name (HR): {company.supervisor_name}</p>
          <p>Phone Number: {company.phone}</p>
          <hr />
          <Row>
            <Col>
              <p>Register number: {company.register_number}</p>
              <p>Bio: {company.organization_bio}</p>
              <p>Statue of the Account: {company.statue}</p>
            </Col>
            <Col>
              <p>Country: {company.country}</p>
              <p>City: {company.city}</p>

              <span>Organization website: </span>
              <span>
                <a href={company.organization_website}>
                  {company.organization_website}
                </a>
              </span>
            </Col>
            <div>
              <ApplierButton
                buttonType="Update Profile"
                className="button"
                onClick={() => store.toggleUpdate()}
              />
            </div>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default CompanyProfile;
