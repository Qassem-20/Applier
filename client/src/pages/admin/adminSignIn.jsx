import "../../assets/css/admin.css";
import React, { Fragment, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const AdminSignIn = () => {
  //use state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginAdmin(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:4000/api/v1/loginAdmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    if (data.user) {
      localStorage.setItem("token", data.user);
      alert("Login successful");
      window.location.href = "/adminSignIn";
    } else {
      alert("Please check your username and password");
    }
  }
  return (
    <Fragment>
      <form action={loginAdmin}>
        <Container className="m-auto bg-white mt-5 signInWidth pt-3 pb-4 rounded shadow">
          <h3 className="text-center">Welcome to Applier Dashboard</h3>
          <Col className="m-auto" xl={8}>
            <p className="mb-1">e-mail:</p>
            <input
              className="inputStyling pl-2"
              type="email"
              placeholder="John123@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
          <Col className="m-auto" xl={8}>
            <p className="mb-1">Password:</p>
            <input
              className="inputStyling pl-2"
              type="password"
              placeholder="*********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Col>
          <Col className="m-auto" xl={8}>
            <Row>
              <Col md={8} sm={6} xs={4}>
                <a href="/adminForgottenPassword">Forget Password?</a>
              </Col>
              <Col md={1} sm={1} xs={3}></Col>
              <Col md={2} sm={3} xs={1}>
                <input type="submit" className="btn login" value="LOGIN" />
              </Col>
            </Row>
          </Col>
        </Container>
      </form>
    </Fragment>
  );
};

export default AdminSignIn;
