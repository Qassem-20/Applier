import "react-bootstrap";

const ApplierButton = (props) => {
  return (
    <button className="btn btn-dark" type="submit">
      {props.buttonType}
    </button>
  );
};

export default ApplierButton;
