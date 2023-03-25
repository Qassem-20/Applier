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
  } = props;

  return (
    <div className="applierInputComponent">
      <label className="labelStyling"> {label}</label>
      <input
        className="inputStyling"
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
  );
};

export default ApplierInputForm;
