import React from "react";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ConsumerStore from "../../stores/ConsumerStore";
import ApplierButton from "../../components/applierComponents/applierButton";
import ApplierInputForm from "../../components/applierComponents/applierInputForm";

const SignInUser = () => {
  const storeConsumer = ConsumerStore();
  const history = useHistory();

  const handleLoginConsumer = async (e) => {
    e.preventDefault();
    await storeConsumer.loginConsumer();
    //Navigate
    history.push("/consumerProfile");
  };

  return (
    <Col xl={5} sm={12} className="mx-3">
      <h4>User</h4>
      <form onSubmit={handleLoginConsumer}>
        <ApplierInputForm
          label="Email"
          type="email"
          placeholder="Fouad28@gmail.com"
          name="email"
          errorMessage="Enter a valid Email !! (Applier@Applier.com)"
          value={storeConsumer.loginFormConsumer.email}
          onChange={storeConsumer.handleChangeLogin}
          required="true"
        />

        <ApplierInputForm
          label="Password"
          type="password"
          placeholder="**********"
          name="password"
          errorMessage="Password must contain Minimum of eight characters, at least one letter and one number"
          value={storeConsumer.loginFormConsumer.password}
          onChange={storeConsumer.handleChangeLogin}
          required="true"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
        />

        <Row>
          <Col>
            <ApplierButton buttonType="Log In" />
          </Col>

          <Col>
            <a href="/ForgottenPassword">Forget Password?</a>

            <div className="mt-2">
              <a href="/signUpConsumer">Don’t have an Account? Register</a>
            </div>
          </Col>
        </Row>
      </form>
    </Col>
  );
};

export default SignInUser;
