import "../../assets/css/admin.css";
import React, { Fragment } from "react";
import adminsStore from "../../stores/AdminsStore.js";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ApplierInputForm from "../../components/applierComponents/applierInputForm";

const AdminSignIn = () => {
  const store = adminsStore();

  const navigate = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await store.loginAdmin();
      //Navigate
      navigate.push("/reportedFeedBack");
    } catch (err) {
      console.error(err.response.data);
      alert(`${err.response.data}, Please enter a valid login credentials`);
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleLogin}>
        <Container className="m-auto bg-white mt-5 signInWidth pt-3 pb-4 rounded shadow">
          <h3 className="text-center">Welcome to Applier Dashboard</h3>
          <Col className="m-auto" xl={7}>
            <ApplierInputForm
              label="Email"
              type="email"
              placeholder="Applier@Applier.com"
              errorMessage="orgEmail"
              name="email"
              value={store.loginForm.email}
              onChange={store.handleChangeLogin}
              required={true}
            />
          </Col>
          <Col className="m-auto" xl={7}>
            <ApplierInputForm
              label="Password"
              type="password"
              placeholder="**********"
              name="password"
              errorMessage="orgPassword"
              value={store.loginForm.password}
              onChange={store.handleChangeLogin}
              required={true}
            />
          </Col>
          <Col className="m-auto" xl={7}>
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
