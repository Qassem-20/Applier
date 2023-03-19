import "../../assets/css/signUpSignIn.css";
import WelcomeNav from "../../components/Nav/welcomeNav";
import React, { Fragment, Component } from "react";
import ApplierButton from "../../components/applierComponents/applierButton";

export class forgottenPassword extends Component {
  render() {
    return (
      <Fragment>
        <WelcomeNav />
        <div className="container SignUpFormat">
          <p>Enter your Email</p>
          <input type="email" name="" value="" />
          <div>
            <ApplierButton buttonType="Send Code" />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default forgottenPassword;
