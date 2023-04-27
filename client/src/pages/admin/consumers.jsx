import "../../assets/css/admin.css";
import AdminNav from "../../components/Nav/adminNav";
import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import ConsumerStore from "../../stores/ConsumerStore.js";

const Consumers = () => {
  const store = ConsumerStore();

  const [userData, setUserData] = useState({ statue: "" });

  function handleUserDataChange(event) {
    setUserData({
      ...userData,
      statue: event.target.value,
    });
  }
  async function updateStatue(_id) {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/v1/admins/suspendConsumer/${_id}`,
        userData,
        { withCredentials: true }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    store.fetchConsumers();
  }, []);

  useEffect(() => {
    store.sortNameConsumers();
  }, []);

  useEffect(() => {
    store.sortDateConsumers();
  }, []);
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
                <Col xl={1}>
                  <select
                    name="statue"
                    onChange={handleUserDataChange}
                    onClick={() => updateStatue(consumer._id)}
                    defaultValue={consumer.statue}
                  >
                    <option value="true">suspend</option>
                    <option value="false">unsuspend</option>
                  </select>
                </Col>
              </Row>
            </Container>
          );
        })}
    </Fragment>
  );
};

export default Consumers;
