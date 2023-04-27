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

    try {
      await storeMedical.loginMedicalStudent();
      //Navigate
      navigate.push("/medicalHomePage");
    } catch (err) {
      console.error(err.response.data);
      alert(
        `${err.response.data}, Please enter a valid login credentials, or sign up if you don't have an account`
      );
    }
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
          errorMessage="userEmail"
          value={storeMedical.loginFormMedical.email}
          onChange={storeMedical.handleChangeLogin}
          required={true}
        />

        <ApplierInputForm
          label="Password"
          type="password"
          placeholder="**********"
          name="password"
          errorMessage="userPassword"
          value={storeMedical.loginFormMedical.password}
          onChange={storeMedical.handleChangeLogin}
          required={true}
        />

        <Row>
          <Col>
            <ApplierButton buttonType="Log In" />
          </Col>
          <Col>
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
