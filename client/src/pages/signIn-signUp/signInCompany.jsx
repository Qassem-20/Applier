import React from "react";
import { Row, Col } from "react-bootstrap";
//import { useHistory } from "react-router-dom";
import CompanyStore from "../../stores/CompanyStore";

const SignInCompany = () => {
  const storeCompany = CompanyStore();
  //const navigate = useHistory();
  const handleLoginCompany = async (e) => {
    e.preventDefault();
    await storeCompany.loginCompany();
    //Navigate
    //navigate.push("/companyHomePage");
  };
  return (
    <Col xl={5} sm={12} className="mx-3">
      <h4>Company</h4>
      <form onSubmit={handleLoginCompany}>
        <p className="labelTag">Email</p>
        <input
          className="inputStyling"
          type=""
          placeholder="Applier@Applier.com"
          name="email"
          value={storeCompany.loginFormCompany.email}
          onChange={storeCompany.handleChangeLogin}
        />
        <div>
          <p className="labelTag">Password</p>
          <input
            className="inputStyling"
            type="password"
            placeholder="********"
            name="password"
            value={storeCompany.loginFormCompany.password}
            onChange={storeCompany.handleChangeLogin}
          />
        </div>
        <Row>
          <Col>
            <button className="btn login" type="submit">
              LogIn
            </button>
          </Col>
          <Col>
            <a href="/ForgottenPassword">Forget Password?</a>
          </Col>
        </Row>
        <div className="alignmentCenter mt-2">
          <a href="/signUpConsumer">Don’t have an Account? Register</a>
        </div>
      </form>
    </Col>
  );
};

export default SignInCompany;
