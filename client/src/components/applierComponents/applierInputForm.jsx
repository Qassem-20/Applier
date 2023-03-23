import "react-bootstrap";
import "../../assets/css/signUpSignIn.css";
import "../../assets/css/custom.css";
import { useState } from "react";

const ApplierInputForm = (props) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="applierInputComponent">
      <label className="labelStyling"> {props.label}</label>
      <input
        className="inputStyling"
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        pattern={props.pattern}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span className="errorMessage">{props.errorMessage}</span>
    </div>
  );
};

export default ApplierInputForm;
