import "../../assets/css/admin.css";
import AdminNav from "../../components/Nav/adminNav";
import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import adminsStore from "../../stores/AdminsStore.js";
import { useHistory } from "react-router-dom";

const AddAdmin = () => {
  const store = adminsStore();

  const navigate = useHistory();

  const handleSignUp = async (e) => {
    e.preventDefault();
    await store.registerAdmin();
    //Navigate
    navigate.push("/adminPanel");
  };
  return (
    <Fragment>
      <AdminNav />
      <Container className="bg-white rounded p-3">
        <Row>
          <Col>
            <form onSubmit={handleSignUp}>
              <p className="labelStyling">Name:</p>
              <input
                className="inputStyling"
                type="text"
                placeholder="Name"
                name="name"
                value={store.values.name}
                onChange={store.handleChange}
              />
              <p className="labelStyling">Email:</p>
              <input
                className="inputStyling"
                type="email"
                placeholder="Email"
                name="email"
                value={store.values.email}
                onChange={store.handleChange}
              />
              <p className="labelStyling">Phone Number:</p>
              <input
                className="inputStyling"
                type="number"
                name="phone"
                placeholder="Phone number"
                value={store.values.phone}
                onChange={store.handleChange}
              />
              <p className="labelStyling">Password:</p>
              <input
                className="inputStyling"
                type="password"
                name="password"
                placeholder="Password"
                value={store.values.password}
                onChange={store.handleChange}
              />
              <p className="labelStyling">Type of the admin:</p>
              <select
                className="inputStyling"
                name="type"
                placeholder="type"
                value={store.values.type}
                onChange={store.handleChange}
              >
                <option>Please select a type</option>
                <option value="false">sub-admin</option>
                <option value="true">main-admin</option>
              </select>
              <button type="submit" className="btn btn-dark mt-4">
                submit
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default AddAdmin;
