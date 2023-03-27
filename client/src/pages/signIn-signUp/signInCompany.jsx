import React from "react";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import CompanyStore from "../../stores/CompanyStore";
import ApplierButton from "../../components/applierComponents/applierButton";
import ApplierInputForm from "../../components/applierComponents/applierInputForm";

const SignInCompany = () => {
  const storeCompany = CompanyStore();
  const navigate = useHistory();
  const handleLoginCompany = async (e) => {
    e.preventDefault();
    await storeCompany.loginCompany();
    //Navigate
    navigate.push("/companyHomePage");
  };
  return (
    <Col xl={5} sm={12} className="mx-3">
      <h4>Company</h4>
      <form onSubmit={handleLoginCompany}>
        <ApplierInputForm
          label="Email"
          type="email"
          placeholder="Applier@Applier.com"
          errorMessage="orgEmail"
          name="email"
          value={storeCompany.loginFormCompany.email}
          onChange={storeCompany.handleChangeLogin}
          required="true"
        />

        <ApplierInputForm
          label="Password"
          type="password"
          placeholder="**********"
          name="password"
          errorMessage="orgPassword"
          value={storeCompany.loginFormCompany.password}
          onChange={storeCompany.handleChangeLogin}
          required="true"
        />

        <Row>
          <Col>
            <ApplierButton buttonType="Log In" />
          </Col>
          <Col>
            <a href="/ForgottenPassword">Forget Password?</a>
            <div className="mt-2">
              <a href="/signUpCompany">Don’t have an Account? Register</a>
            </div>
          </Col>
        </Row>
      </form>
    </Col>
  );
};

export default SignInCompany;
