import "react-bootstrap";

const ApplierButton = (props) => {
  const { className, onClick, buttonType, isDisabled, value } = props;

  return (
    <button
      className={`${className} btn btn-dark ml-2 mt-2`}
      disabled={isDisabled}
      type="submit"
      onClick={onClick}
      value={value}
    >
      {buttonType}
    </button>
  );
};

export default ApplierButton;
