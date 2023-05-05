import "../../assets/css/medicalStudent.css";
import MedicalNav from "../../components/Nav/medicalStudentNav";
import MedicalStore from "../../stores/MedicalStore";
import React, { Fragment, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ApplierButton from "../../components/applierComponents/applierButton";

const HomePageMedicalStudent = () => {
  const store = MedicalStore();

  const handleUpdate = async (e) => {
    e.preventDefault();
    await store.updateMedicalStudents();
    window.location.reload();
  };

  useEffect(() => {
    store.fetchMedicalProfile();
  }, []);
  if (!store.medicalStudent) {
    return <div>Loading...</div>;
  }
  return (
    <Fragment>
      <MedicalNav />
      {!store.updateProfile._id && (
        <Container>
          <h1 className="opportunitiesHeader">My Profile</h1>
          <div className="container backgroundProfile">
            <Row>
              <Col md={6} sm={12}>
                <p>Name: {store.medicalStudent.name}</p>
                <p>Email: {store.medicalStudent.email}</p>
                <p>Gender: {store.medicalStudent.gender}</p>
                <p>Nationality: {store.medicalStudent.nationality}</p>
                <p>Phone: {store.medicalStudent.phone_number}</p>
              </Col>
              <Col md={6} sm={12}>
                <p>
                  Profile Visibility: {store.medicalStudent.profile_visibility}
                </p>
                <p>City: {store.medicalStudent.city}</p>
                <p>Major: {store.medicalStudent.main_major}</p>
                <p>Specialty: {store.medicalStudent.specialty}</p>
              </Col>
              <div>
                <ApplierButton
                  buttonType="Update Profile"
                  onClick={() => store.toggleUpdate(store.medicalStudent)}
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
                <Col md={6} sm={12}>
                  <p className="labelStyling">Name:</p>
                  <input
                    className="inputStyling"
                    onChange={store.handleUpdate}
                    value={store.updateProfile.name}
                    name="name"
                  />
                  <p className="labelStyling">Phone:</p>
                  <input
                    className="inputStyling"
                    onChange={store.handleUpdate}
                    value={store.updateProfile.phone_number}
                    name="phone_number"
                  />
                  <p className="labelStyling">Nationality:</p>

                  <select
                    className="inputStyling"
                    name="nationality"
                    defaultValue={store.updateProfile.nationality}
                    onChange={store.handleUpdate}
                  >
                    <option value="saudi">Saudi</option>
                    <option value="foreign">Foreign</option>
                  </select>
                  <p className="labelStyling">Gender:</p>
                  <input
                    className="inputStyling"
                    onChange={store.handleUpdate}
                    value={store.updateProfile.gender}
                    name="gender"
                  />
                </Col>
                <Col md={6} sm={12}>
                  <p className="labelStyling">Major:</p>

                  <input
                    className="inputStyling"
                    onChange={store.handleUpdate}
                    value={store.updateProfile.main_major}
                    name="main_major"
                  />
                  <p className="labelStyling">Specialty:</p>

                  <input
                    className="inputStyling"
                    onChange={store.handleUpdate}
                    value={store.updateProfile.specialty}
                    name="specialty"
                  />
                  <p className="labelStyling">Visibility:</p>
                  <select
                    className="inputStyling"
                    name="profile_visibility"
                    defaultValue={store.updateProfile.profile_visibility}
                    onChange={store.handleUpdate}
                  >
                    <option value="shown">shown</option>
                    <option value="hidden">hidden</option>
                  </select>

                  <p className="labelStyling">City:</p>
                  <input
                    className="inputStyling"
                    onChange={store.handleUpdate}
                    value={store.updateProfile.city}
                    name="city"
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

export default HomePageMedicalStudent;
