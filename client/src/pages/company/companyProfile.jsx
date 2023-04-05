import React, { Fragment } from "react";
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

  const handleUpdate = async (e) => {
    e.preventDefault();

    await store.updateProfileCompany();

    history.push("/companyHomePage");
  };

  return (
    <Fragment>
      <Nav />
      <Container>
        <Container>
          <h1 className="opportunitiesHeader">Company Profile</h1>
        </Container>
        <Container className="backgroundProfile">
          <form onSubmit={handleUpdate}>
            <Row>
              <Col md={6} sm={12}>
                <ApplierInputForm
                  type="text"
                  label="Organization name"
                  name="organization_name"
                  onChange={store.handleChange}
                  value={store.values.organization_name}
                />

                <ApplierInputForm
                  type="text"
                  label="Organization registration number"
                  name="register_number"
                  onChange={store.handleChange}
                  value={store.values.register_number}
                  errorMessage="register_number"
                />

                <ApplierInputForm
                  type="link"
                  label="Organization website (if exists)"
                  placeholder="http://google.com"
                  name="organization_website"
                  onChange={store.handleChange}
                  value={store.values.organization_website}
                />

                <ApplierInputForm
                  type="text"
                  label="About organization"
                  name="organization_bio"
                  onChange={store.handleChange}
                  value={store.values.organization_bio}
                />

                <ApplierInputForm
                  type="password"
                  label="Password"
                  placeholder="**********"
                  name="password"
                  onChange={store.handleChange}
                  value={store.values.password}
                  errorMessage="password"
                  pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                />
              </Col>
              <Col md={6} sm={12}>
                <ApplierInputForm
                  type="name"
                  label="Supervisor full name"
                  name="supervisor_name"
                  onChange={store.handleChange}
                  value={store.values.supervisor_name}
                />

                <ApplierInputForm
                  type="email"
                  label="Supervisor email"
                  name="email"
                  placeholder="Fouad28@gmail.com"
                  errorMessage="email"
                  onChange={store.handleChange}
                  value={store.values.email}
                />
                <ApplierInputForm
                  type="phone"
                  label="Supervisor phone"
                  name="phone"
                  onChange={store.handleChange}
                  value={store.values.phone}
                />

                <ApplierInputForm
                  type="text"
                  name="country"
                  label="Country"
                  onChange={store.handleChange}
                  value={store.values.country}
                  errorMessage="country"
                />

                <ApplierInputForm
                  type="text"
                  name="city"
                  label="City"
                  onChange={store.handleChange}
                  value={store.values.city}
                />
              </Col>
            </Row>
            <ApplierButton onClick={handleUpdate} buttonType="Update Profile" />
          </form>
        </Container>
      </Container>
    </Fragment>
  );
};

export default CompanyProfile;
