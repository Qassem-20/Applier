import "../../assets/css/signUpSignIn.css";
import WelcomeNav from "../../components/Nav/welcomeNav";
import { Col, Row, Container } from "react-bootstrap";
import React, { Fragment } from "react";
import consumerStore from "../../stores/ConsumerStore.js";
import { useHistory } from "react-router-dom";
import SignUp from "../../components/buttons/SignUpButton";

const SignUpConsumer = () => {
  const store = consumerStore();

  const history = useHistory();

  const handleSignUp = async (e) => {
    e.preventDefault();
    await store.registerConsumer();
    //Navigate
    history.push("/signIn");
  };
  return (
    <Fragment>
      <WelcomeNav />
      <div className="SignUpFormat container">
        <Row>
          <Col xl={8}>
            <h1>Welcome to Applier</h1>
            <p>Register your account</p>
          </Col>
          <Col>
            <span> Already have an account? </span>
            <a href="/signIn">Sign In</a>
          </Col>
        </Row>
        <hr />
        <form onSubmit={handleSignUp}>
          <Container>
            <p className="labelTag">Full name</p>
            <input
              type="name"
              className="inputStyling"
              name="name"
              value={store.values.name}
              onChange={store.handleChange}
            />
            <p className="labelTag">Nationality</p>
            <select
              className="inputStyling"
              name="nationality"
              placeholder="nationality"
              value={store.values.nationality}
              onChange={store.handleChange}
            >
              <option>Please select</option>
              <option value="saudi">Saudi</option>
              <option value="foreign">Foreign</option>
            </select>
            <p className="labelTag">Phone Number</p>
            <input
              type="phone"
              className="inputStyling"
              name="phone"
              value={store.values.phone}
              onChange={store.handleChange}
            />
            <p className="labelTag">Email</p>
            <input
              type="email"
              className="inputStyling"
              name="email"
              value={store.values.email}
              onChange={store.handleChange}
            />
            <p className="labelTag">Password</p>
            <input
              type="password"
              className="inputStyling"
              name="password"
              value={store.values.password}
              onChange={store.handleChange}
            />
            <br />
            <SignUp />
          </Container>
        </form>
      </div>
    </Fragment>
  );
};

export default SignUpConsumer;
