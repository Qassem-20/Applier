import "../../assets/css/admin.css";
import AdminNav from "../../components/Nav/adminNav";
import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import adminsStore from "../../stores/AdminsStore.js";

const AddAdmin = () => {
  const store = adminsStore();

  return (
    <Fragment>
      <AdminNav />
      <Container className="bg-white rounded p-3">
        <Row>
          <Col>
            <form onSubmit={store.registerAdmin}>
              <p className="mb-1">Name:</p>
              <input
                className="inputStyling"
                type="text"
                placeholder="Name"
                name="name"
                value={store.values.name}
                onChange={store.handleChange}
              />
              <p className="mb-1">Email:</p>
              <input
                className="inputStyling"
                type="email"
                placeholder="Email"
                name="email"
                value={store.values.email}
                onChange={store.handleChange}
              />
              <p className="mb-1">Phone Number:</p>
              <input
                className="inputStyling"
                type="number"
                name="phone"
                placeholder="Phone number"
                value={store.values.phone}
                onChange={store.handleChange}
              />
              <p className="mb-1">Password:</p>
              <input
                className="inputStyling"
                type="password"
                name="password"
                placeholder="Password"
                value={store.values.password}
                onChange={store.handleChange}
              />
              <p className="mb-1">Type of the admin:</p>
              <select
                className="inputStyling"
                name="type"
                placeholder="type"
                value={store.values.type}
                onChange={store.handleChange}
              >
                <option>Please select a type</option>
                <option value="sub-admin">sub-admin</option>
                <option value="main-admin">main-admin</option>
              </select>
              <button type="submit" className="btn login">
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
