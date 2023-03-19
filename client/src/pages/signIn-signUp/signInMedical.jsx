import React from "react";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import MedicalStore from "../../stores/MedicalStore";
import LogIn from "../../components/buttons/LogInButton";

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
        <p className="labelTag">Email</p>
        <input
          className="inputStyling"
          type=""
          placeholder="dr.Faisal@gmail.com"
          name="email"
          value={storeMedical.loginFormMedical.email}
          onChange={storeMedical.handleChangeLogin}
        />
        <div>
          <p className="labelTag">Password</p>
          <input
            className="inputStyling"
            type="password"
            placeholder="********"
            name="password"
            value={storeMedical.loginFormMedical.password}
            onChange={storeMedical.handleChangeLogin}
          />
        </div>
        <Row>
          <Col>
            <LogIn />
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
