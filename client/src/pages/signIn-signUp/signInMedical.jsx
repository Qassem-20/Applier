import React from "react";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import MedicalStore from "../../stores/MedicalStore";
import ApplierButton from "../../components/applierComponents/applierButton";
import ApplierInputForm from "../../components/applierComponents/applierInputForm";

const SignInMedical = () => {
  const storeMedical = MedicalStore();
  const navigate = useHistory();
  const handleLoginMedical = async (e) => {
    e.preventDefault();
    await storeMedical.loginMedicalStudent();
    //Navigate
    navigate.push("/medicalHomePage");
  };
  return (
    <Col xl={5} sm={12} className="mx-3">
      <h4>Medical Student</h4>
      <form onSubmit={handleLoginMedical}>
        <ApplierInputForm
          label="Email"
          type="email"
          placeholder="dr.Faisal@gmail.com"
          name="email"
          errorMessage="Enter a valid Email !! (Applier@Applier.com)"
          value={storeMedical.loginFormMedical.email}
          onChange={storeMedical.handleChangeLogin}
          required
        />

        <ApplierInputForm
          label="Password"
          type="password"
          placeholder="********"
          name="password"
          value={storeMedical.loginFormMedical.password}
          onChange={storeMedical.handleChangeLogin}
          errorMessage="Password must contain Minimum of eight characters, at least one letter and one number"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          required
        />

        <Row>
          <Col>
            <ApplierButton buttonType="Log In" />
          </Col>
          <Col>
            <a href="/ForgottenPassword">Forget Password?</a>

            <div className="mt-2">
              <a href="/signUpMedicalStudent">
                Don’t have an Account? Register
              </a>
            </div>
          </Col>
        </Row>
      </form>
    </Col>
  );
};

export default SignInMedical;
