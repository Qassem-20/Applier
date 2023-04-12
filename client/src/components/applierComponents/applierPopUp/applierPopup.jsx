import { Card } from "react-bootstrap";
import ApplierPopupContent from "./applierPopupContent";

const ApplierPopUp = ({ medicalStudent }) => {
  return (
    <div>
      <Card className="card">
        <Card.Body>
          <Card.Title className="popUptext">{medicalStudent.name}</Card.Title>
        </Card.Body>
      </Card>
      <ApplierPopupContent medicalStudent={medicalStudent} />
    </div>
  );
};

export default ApplierPopUp;
