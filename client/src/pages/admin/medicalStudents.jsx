import "../../assets/css/admin.css";
import AdminNav from "../../components/Nav/adminNav";
import React, { Fragment, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col , Card} from "react-bootstrap";
import MedicalStore from "../../stores/MedicalStore.js";
const MedicalStudents = () => {
  const store = MedicalStore();

  async function updateStatue(_id, newStatue) {
    try {
      const response = await axios.put(
        `/api/v1/admins/activateMedicalStudent/${_id}`,
        { statue: newStatue },
        { withCredentials: true }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    store.fetchMedicalStudentsAdmin();
  }, [store]);
  return (
    <Fragment>
      <AdminNav />
      <Container className="mt-3 mb-2" >
        <h1 style={{marginBottom:"30px" }}>Medical Students</h1>
        <hr
          style={{
          background: "#6F38C5",
          height: "5px",
          border: "none",
          marginBottom:"30px",
          }}
        />
      </Container>


      <Container fluid style={{marginBottom:"15px"}}>

      </Container>
     

<Container fluid >
        <Row >
        {store.medicalStudents &&
        store.medicalStudents.map((medicalStudent) => {
          return (

                    
                    <Col xl={4} md={6} sm={12} key={medicalStudent._id}>
                      <Card >
                        <dt>
                          <span className="jobRole"  aria-label="Tense Biceps">
                          {medicalStudent.name}
                          </span>
                        </dt>
                        <dd>
                        <span> <p className="opportunitiesTags"> <h5 style={{ 'margin-right': '6px'}} >Email:  </h5>  {medicalStudent.email}</p> </span>
                        <span> <p className="opportunitiesTags"> <h5 style={{ 'margin-right': '6px'}} >Phone:  </h5>{medicalStudent.specialty}</p> </span>
                        <span> <p className="opportunitiesTags"> <h5 style={{ 'margin-right': '6px'}} >Nationality:  </h5>  {medicalStudent.phone_number}</p> </span>
                        <span> <p className="opportunitiesTags"> <h5 style={{ 'margin-right': '6px'}} >Created At:  </h5>  {medicalStudent.createdAt.slice(0, 10)}</p> </span>
                        <span> <p className="opportunitiesTags"> <h5 style={{ 'margin-right': '6px'}} >Created At:  </h5>  {medicalStudent.city}</p> </span>

                        <span>   
                        <button
                    className={`btn ${
                      medicalStudent.statue === "true"
                        ? "btn-success"
                        : "btn-danger"
                    }`}
                    onClick={() => {
                      const newStatue =
                        medicalStudent.statue === "true" ? "false" : "true";
                      updateStatue(medicalStudent._id, newStatue);
                    }}
                  >
                    {medicalStudent.statue === "true" ? "Active" : "Inactive"}
                  </button>
                        </span>

                        </dd>

                      </Card>
                    </Col>
                    

              );
            })}
        </Row>
      </Container>
    </Fragment>
  );
};

export default MedicalStudents;
