import "../../assets/css/admin.css";
import React, { Fragment } from "react";
import adminsStore from "../../stores/AdminsStore.js";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const AdminSignIn = () => {
  const store = adminsStore();

  const navigate = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    await store.loginAdmin();
    //Navigate
    navigate.push("/adminPanel");
  };

  return (
    <Fragment>
      <form onSubmit={handleLogin}>
        <Container className="m-auto bg-white mt-5 signInWidth pt-3 pb-4 rounded shadow">
          <h3 className="text-center">Welcome to Applier Dashboard</h3>
          <Col className="m-auto" xl={8}>
            <p className="mb-1">Email:</p>
            <input
              className="inputStyling pl-2"
              type="email"
              placeholder="John123@gmail.com"
              name="email"
              value={store.loginForm.email}
              onChange={store.handleChangeLogin}
            />
          </Col>
          <Col className="m-auto" xl={8}>
            <p className="mb-1">Password:</p>
            <input
              className="inputStyling pl-2"
              type="password"
              name="password"
              placeholder="*********"
              value={store.loginForm.password}
              onChange={store.handleChangeLogin}
            />
          </Col>
          <Col className="m-auto" xl={8}>
            <Row className="mt-3">
              <Col md={2} sm={3} xs={1}>
                <button type="submit" className="btn btn-dark login">
                  Login
                </button>
              </Col>
            </Row>
          </Col>
        </Container>
      </form>
    </Fragment>
  );
};

export default AdminSignIn;
