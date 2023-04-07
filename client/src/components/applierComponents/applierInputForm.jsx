import "react-bootstrap";
import "../../assets/css/signUpSignIn.css";
import "../../assets/css/custom.css";
import { useState } from "react";

const ApplierInputForm = (props) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const errorMeassages = {
    email: "Enter a valid Email !! (Applier@Applier.com)",
    password:
      "Password must contain Minimum of eight characters, at least one letter and one number",
    organization: "Enter your organization name",
    register_number: "Enter your organization registration number",
    supervisor_name: "Enter the supervisor name",
    city: "The City is a must",
    country: "The Country is a must",
    full_name: "Enter your full name",
    nationality: "Select your nationality",
    phone: "Enter your phone number for communication",
    specialty: "Enter your specialty",
    userEmail: "Enter your email",
    userPassword: "Enter your password",
    orgEmail: "Enter your Organization Account Email",
    orgPassword: "Enter your Organization Account Password",
  };

  const {
    name,
    type,
    value,
    onChange,
    placeholder,
    pattern,
    required,
    errorMessage,
    label,
    id,
    row,
  } = props;

  return (
    <div>
      <label className={`labelStyling ${row}`}> {label}</label>
      <div className="mb-3">
        <input
          id={id}
          className={`inputStyling ${row}`}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          pattern={pattern}
          onBlur={handleFocus}
          focused={focused.toString()}
          required={required}
        />

        <span className="errorMessage">{errorMeassages[errorMessage]}</span>
      </div>
    </div>
  );
};

export default ApplierInputForm;
