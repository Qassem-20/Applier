import "../../assets/css/signUpSignIn.css";
import WelcomeNav from "../../components/Nav/welcomeNav";
import React, { Fragment, Component } from "react";
import ApplierButton from "../../components/applierComponents/applierButton";
import ApplierInputForm from "../../components/applierComponents/applierInputForm";

export class forgottenPassword extends Component {
  render() {
    return (
      <Fragment>
        <WelcomeNav />
        <div className="container SignUpFormat" style={{ width: "30%" }}>
          <p>Enter Your Email</p>

          <ApplierInputForm placeholder="Your Email" />

          <ApplierButton buttonType="Send Code" />
        </div>
      </Fragment>
    );
  }
}

export default forgottenPassword;
