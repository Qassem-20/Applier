import "react-bootstrap";

const ApplierButton = (props) => {
  return (
    <button
      className={`${props.className} btn btn-dark mt-1 ml-2`}
      type="submit"
      onClick={props.onClick}
    >
      {props.buttonType}
    </button>
  );
};

export default ApplierButton;
