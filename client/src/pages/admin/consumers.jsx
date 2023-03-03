import "../../assets/css/admin.css";
import AdminNav from "../../components/Nav/adminNav";
import React, { Fragment, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ConsumerStore from "../../stores/ConsumerStore.js";

const Consumers = () => {
  const store = ConsumerStore();

  useEffect(() => {
    store.fetchConsumers();
  }, []);

  return (
    <Fragment>
      <AdminNav />
      <Container className="mt-3 mb-2">
        <h1>Consumers</h1>
        <Row className="m-auto pt-3 pb-1">
          <Col xl={3} md={6} sm={12}>
            <input
              className="inputStyling"
              type="search"
              name=""
              value=""
              placeholder="Phone Number "
            />
          </Col>
          <Col xl={3} md={6} sm={12}>
            <input
              className="inputStyling"
              type="search"
              name=""
              value=""
              placeholder="Trainee Name"
            />
          </Col>
          <Col xl={3} md={6} sm={12}>
            <input
              className="inputStyling"
              type="date"
              name=""
              value=""
              placeholder="Joined Date"
            />
          </Col>
          <Col xl={3} md={6} sm={12}>
            <select className="inputStyling" name="cars" placeholder="Status">
              <option value="saab">Null</option>
              <option value="volvo">Unsuspend</option>
              <option value="saab">Suspended</option>
            </select>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="opportunitiesTag">
          <Col xl={2}>
            <p className="opportunitiesMainTags">Name</p>
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
            <p className="opportunitiesMainTags">suspendBy</p>
          </Col>
          <Col xl={1}>
            <p className="opportunitiesMainTags">Status</p>
          </Col>
        </Row>
      </Container>
      {store.consumers &&
        store.consumers.map((consumer) => {
          return (
            <Container fluid>
              <Row className="opportunitiesT">
                <Col xl={2}>
                  <p className="opportunitiesTags">{consumer.name}</p>
                </Col>
                <Col xl={3}>
                  <p className="opportunitiesTags">{consumer.email}</p>
                </Col>
                <Col xl={2}>
                  <p className="opportunitiesTags">{consumer.phone_number}</p>
                </Col>
                <Col xl={2}>
                  <p className="opportunitiesTags">{consumer.nationality}</p>
                </Col>
                <Col xl={2}>
                  <p className="opportunitiesTags">consumer</p>
                </Col>
                <Col xl={1}>
                  <form onSubmit={store.updateConsumer}>
                    <select name="statue" defaultValue={consumer.statue}>
                      <option value="suspend">suspend</option>
                      <option value="unsuspend">unsuspend</option>
                    </select>
                  </form>
                </Col>
              </Row>
            </Container>
          );
        })}
    </Fragment>
  );
};

export default Consumers;
