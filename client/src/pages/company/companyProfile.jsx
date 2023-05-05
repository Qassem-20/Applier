import React, { Fragment, useEffect } from "react";
import Nav from "../../components/Nav/companyNav";
import "../../assets/css/company.css";
import { Container, Row, Col } from "react-bootstrap";
import CompanyStore from "../../stores/CompanyStore";
import ApplierButton from "../../components/applierComponents/applierButton";

const CompanyProfile = () => {
  const store = CompanyStore();

  const handleUpdate = async (e) => {
    e.preventDefault();
    await store.updateProfileCompany();
    window.location.reload();
  };

  useEffect(() => {
    store.fetchCompanyProfile();
  }, []);
  if (!store.company) {
    return <div>Loading...</div>;
  }
  return (
    <Fragment>
      <Nav />
      {!store.updateProfile._id && (
        <Container>
          <h1 className="opportunitiesHeader">Company Profile</h1>

          <div className="container backgroundProfile">
            <p>Company name: {store.company.organization_name}</p>
            <p>Email: {store.company.email}</p>
            <p>Supervisor name (HR): {store.company.supervisor_name}</p>
            <p>Phone Number: {store.company.phone}</p>
            <hr />
            <Row>
              <Col md={6} sm={12}>
                <p>Register number: {store.company.register_number}</p>

                <span>Organization website: </span>
                <p>
                  <a href={store.company.organization_website}>
                    {store.company.organization_website}
                  </a>
                </p>
                <p>Country: {store.company.country}</p>
                <p>City: {store.company.city}</p>
              </Col>
              <Col md={6} sm={12}>
                <p>Bio:</p>
                <p>{store.company.organization_bio}</p>
              </Col>
              <div>
                <ApplierButton
                  buttonType="Update Profile"
                  onClick={() => store.toggleUpdate(store.company)}
                  className="button"
                />
              </div>
            </Row>
          </div>
        </Container>
      )}
      {store.updateProfile._id && (
        <Container>
          <h1 className="opportunitiesHeader">Update Profile</h1>
          <div className="container backgroundProfile">
            <form onSubmit={handleUpdate}>
              <Row>
                <Col>
                  <p className="labelStyling">Organization:</p>
                  <input
                    className="inputStyling"
                    onChange={store.handleUpdate}
                    value={store.updateProfile.organization_name}
                    name="organization_name"
                  />
                  <p className="labelStyling">Register number:</p>
                  <input
                    className="inputStyling"
                    onChange={store.handleUpdate}
                    value={store.updateProfile.register_number}
                    name="register_number"
                  />

                  <p className="labelStyling">About Organization:</p>
                  <input
                    className="inputStyling"
                    onChange={store.handleUpdate}
                    value={store.updateProfile.organization_bio}
                    name="organization_bio"
                  />
                  <p className="labelStyling">Organization Website:</p>

                  <input
                    className="inputStyling"
                    onChange={store.handleUpdate}
                    value={store.updateProfile.organization_website}
                    name="organization_website"
                  />
                </Col>
                <Col>
                  <p className="labelStyling">Supervisor Name(HR):</p>

                  <input
                    className="inputStyling"
                    onChange={store.handleUpdate}
                    value={store.updateProfile.supervisor_name}
                    name="supervisor_name"
                  />
                  <p className="labelStyling">Phone:</p>
                  <input
                    className="inputStyling"
                    onChange={store.handleUpdate}
                    value={store.updateProfile.phone}
                    name="phone"
                  />
                  <p className="labelStyling">City:</p>
                  <input
                    className="inputStyling"
                    onChange={store.handleUpdate}
                    value={store.updateProfile.city}
                    name="city"
                  />
                  <p className="labelStyling">Country:</p>
                  <input
                    className="inputStyling"
                    onChange={store.handleUpdate}
                    value={store.updateProfile.country}
                    name="country"
                  />
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

export default CompanyProfile;
