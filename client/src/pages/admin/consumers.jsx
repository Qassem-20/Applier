import "../../assets/css/admin.css";
import AdminNav from "../../components/Nav/adminNav";
import React, { Fragment, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import ConsumerStore from "../../stores/ConsumerStore.js";

const Consumers = () => {
  const store = ConsumerStore();

  async function updateStatue(_id, data) {
    try {
      const response = await axios.put(
        `/api/v1/admins/suspendConsumer/${_id}`,
        data,
        { withCredentials: true }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    store.fetchConsumers();
  }, [store]);

  return (
    <Fragment>
      <AdminNav />
      <Container className="mt-3 mb-2">
        <h1>Consumers</h1>
      </Container>
      <Container fluid>
        <Row className="opportunitiesTag" style={{marginBottom:"15px"}}>
          {/* <Col>
            <p className="opportunitiesMainTags">Name</p>
          </Col>
          <Col>
            <p className="opportunitiesMainTags">Email</p>
          </Col>
          <Col>
            <p className="opportunitiesMainTags d-none d-sm-block">
              Phone Number
            </p>
          </Col>
          <Col>
            <p className="opportunitiesMainTags d-none d-sm-block">
              nationality
            </p>
          </Col>
          <Col>
            <p className="opportunitiesMainTags d-none d-sm-block">
              Joined Date
            </p>
          </Col>
          <Col> */}
            {/* <p className="opportunitiesMainTags">Status</p>
          </Col> */}
        </Row>
      </Container>

      <Container fluid >
        <Row >
          {store.consumers &&
            store.consumers.map((consumer) => {
              return (

                    
                    <Col xl={4} md={6} sm={12} key={consumer._id}>
                      <Card key={consumer._id}>
                        <dt>
                          <span className="jobRole"  aria-label="Tense Biceps">
                          {consumer.name}
                          </span>
                        </dt>
                        <dd>
                        <span> <p className="opportunitiesTags"> <h5 style={{ 'margin-right': '6px'}} >Email:  </h5>  {consumer.email}</p> </span>
                        <span> <p className="opportunitiesTags"> <h5 style={{ 'margin-right': '6px'}} >Phone:  </h5>{consumer.phone}</p> </span>
                        <span> <p className="opportunitiesTags"> <h5 style={{ 'margin-right': '6px'}} >Nationality:  </h5>  {consumer.nationality}</p> </span>
                        <span> <p className="opportunitiesTags"> <h5 style={{ 'margin-right': '6px'}} >Created At:  </h5>  {consumer.createdAt.slice(0, 10)}</p> </span>
                        <span>   
                          <button 
                            className={`btn ${
                              consumer.statue === "true" ? "btn-success" : "btn-danger"
                            }`}
                            onClick={() => {
                              const newStatue =
                                consumer.statue === "true" ? "false" : "true";
                              updateStatue(consumer._id, { statue: newStatue });
                            }}
                            >
                            {consumer.statue === "true" ? "Unsuspend" : "Suspended"}
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

export default Consumers;

