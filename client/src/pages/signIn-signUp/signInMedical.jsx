import React from "react";
import { Row, Col } from "react-bootstrap";
//import { useHistory } from "react-router-dom";
import MedicalStore from "../../stores/MedicalStore";
const SignInMedical = () => {
  const storeMedical = MedicalStore();
  //const navigate = useHistory();
  const handleLoginMedical = async (e) => {
    e.preventDefault();
    await storeMedical.loginMedicalStudent();
    //Navigate
    //navigate.push("/medicalHomePage");
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
            <button className="btn login" type="submit">
              LogIn
            </button>
          </Col>
          <Col>
            <a href="/ForgottenPassword">Forget Password?</a>
          </Col>
        </Row>
        <div className="alignmentCenter mt-2">
          <a href="/signUpMedicalStudent">Don’t have an Account? Register</a>
        </div>
      </form>
    </Col>
  );
};

export default SignInMedical;
