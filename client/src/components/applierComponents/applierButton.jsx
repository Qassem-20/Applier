import "react-bootstrap";

const ApplierButton = (props) => {
  const { className, onClick, buttonType } = props;

  return (
    <button
      className={`${className} btn btn-dark mt-1 ml-2`}
      type="submit"
      onClick={onClick}
    >
      {buttonType}
    </button>
  );
};

export default ApplierButton;
