import "../../assets/css/admin.css";
import AdminNav from "../../components/Nav/adminNav";
import React, { Fragment, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import OpportunityStore from "../../stores/OpportunityStore.js";

const Opportunities = () => {
  const store = OpportunityStore();

  const storeDelete = OpportunityStore((storeDelete) => {
    return { deleteOpportunity: storeDelete.deleteOpportunity };
  });

  useEffect(() => {
    store.fetchOpportunities();
  }, []);

  return (
    <Fragment>
      <AdminNav />
      <Container className="mt-3 mb-2">
        <h1>Opportunities</h1>
      </Container>
      <Container fluid>
        <Row className="opportunitiesTag">
          <Col xl={2}>
            <p className="opportunitiesMainTags">Job Role</p>
          </Col>
          <Col xl={2}>
            <p className="opportunitiesMainTags">Duration</p>
          </Col>
          <Col xl={2}>
            <p className="opportunitiesMainTags">CreatedAt</p>
          </Col>
          <Col xl={3}>
            <p className="opportunitiesMainTags">Location</p>
          </Col>
          <Col xl={2}>
            <p className="opportunitiesMainTags">type</p>
          </Col>
          <Col xl={1}>
            <p className="opportunitiesMainTags">Status</p>
          </Col>
        </Row>
      </Container>
      {store.opportunities &&
        store.opportunities.map((opportunity) => {
          return (
            <Container fluid key={opportunity._id}>
              <Row className="opportunitiesT">
                <Col xl={2}>
                  <p className="opportunitiesTags">{opportunity.job_role}</p>
                </Col>
                <Col xl={2}>
                  <p className="opportunitiesTags">{opportunity.duration}</p>
                </Col>
                <Col xl={2}>
                  <p className="opportunitiesTags">{opportunity.createdAt}</p>
                </Col>
                <Col xl={3}>
                  <p className="opportunitiesTags">{opportunity.city}</p>
                </Col>
                <Col xl={2}>
                  <p className="opportunitiesTags">{opportunity.job_type}</p>
                </Col>
                <Col xl={1}>
                  <button
                    className="deleteBtn"
                    onClick={() =>
                      storeDelete.deleteOpportunity(opportunity._id)
                    }
                  >
                    Delete
                  </button>
                </Col>
              </Row>
            </Container>
          );
        })}
    </Fragment>
  );
};

export default Opportunities;
