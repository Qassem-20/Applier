import "../../assets/css/admin.css";
import AdminNav from "../../components/Nav/adminNav";
import React, { Fragment, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import ConsumerStore from "../../stores/ConsumerStore.js";

const Consumers = () => {
  const store = ConsumerStore();

  async function updateStatue(_id, data) {
    try {
      const response = await axios.put(
        `api/v1/admins/suspendConsumer/${_id}`,
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
        <Row className="opportunitiesTag">
          <Col xl={2}>
            <p
              className="opportunitiesMainTags"
              id="btnNmae"
              onClick={store.sortNameConsumers}
            >
              Name
            </p>
          </Col>
          <Col xl={3}>
            <p className="opportunitiesMainTags">Email</p>
          </Col>
          <Col xl={2}>
            <p className="opportunitiesMainTags">Phone Number</p>
          </Col>
          <Col xl={2}>
            <p className="opportunitiesMainTags">nationality</p>
          </Col>
          <Col xl={2}>
            <p className="opportunitiesMainTags">Joined Date</p>
          </Col>
          <Col xl={1}>
            <p className="opportunitiesMainTags">Status</p>
          </Col>
        </Row>
      </Container>
      {store.consumers &&
        store.consumers.map((consumer) => {
          return (
            <Container fluid key={consumer._id}>
              <Row className="opportunitiesT">
                <Col xl={2}>
                  <p className="opportunitiesTags">{consumer.name}</p>
                </Col>
                <Col xl={3}>
                  <p className="opportunitiesTags">{consumer.email}</p>
                </Col>
                <Col xl={2}>
                  <p className="opportunitiesTags">{consumer.phone}</p>
                </Col>
                <Col xl={2}>
                  <p className="opportunitiesTags">{consumer.nationality}</p>
                </Col>
                <Col xl={2}>
                  <p className="opportunitiesTags">{consumer.createdAt}</p>
                </Col>
                <Col xl={1} className="ml-1">
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
                </Col>
              </Row>
            </Container>
          );
        })}
    </Fragment>
  );
};

export default Consumers;
