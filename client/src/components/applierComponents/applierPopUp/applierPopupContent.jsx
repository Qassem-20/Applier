import { Row, Card } from "react-bootstrap";
import "../../../assets/css/consumer.css";

const ApplierPopupContent = ({ medicalStudent }) => {
  return (
    <Card className="card-content">
      <Row>
        <p className="popUptext">Name: Dr. {medicalStudent.name}</p>
        <p className="popUptext">Speciality: {medicalStudent.specialty}</p>
        <p className="popUptext">City: {medicalStudent.city}</p>
      </Row>
    </Card>
  );
};

export default ApplierPopupContent;
