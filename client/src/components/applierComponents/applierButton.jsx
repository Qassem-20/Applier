import "react-bootstrap";

const ApplierButton = (props) => {
  return (
    <button
      className={`${props.className} btn btn-dark`}
      type="submit"
      onClick={props.onClick}
    >
      {props.buttonType}
    </button>
  );
};

export default ApplierButton;
