import "react-bootstrap";
import "../../assets/css/signUpSignIn.css";
import "../../assets/css/custom.css";

const ApplierInputForm = (props) => {
  return (
    <div>
      <label> {props.label}</label>
      <input
        className="inputStyling"
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default ApplierInputForm;
