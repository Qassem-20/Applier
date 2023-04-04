import "react-bootstrap";

const ApplierButton = (props) => {
  const { className, onClick, buttonType, isDisabled } = props;

  return (
    <button
      className={`${className} btn btn-dark ml-2`}
      disabled={isDisabled}
      type="submit"
      onClick={onClick}
    >
      {buttonType}
    </button>
  );
};

export default ApplierButton;
