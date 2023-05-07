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
  }, [store]);

  return (
    <Fragment>
      <AdminNav />
      <Container className="mt-3 mb-2">
        <h1>Opportunities</h1>
      </Container>
      <Container fluid>
        <Row className="opportunitiesTag">
          <Col>
            <p className="opportunitiesMainTags">Job Role</p>
          </Col>
          <Col>
            <p className="opportunitiesMainTags d-none d-sm-block">Duration</p>
          </Col>
          <Col>
            <p className="opportunitiesMainTags d-none d-sm-block">
              Created At
            </p>
          </Col>
          <Col>
            <p className="opportunitiesMainTags">Location</p>
          </Col>
          <Col>
            <p className="opportunitiesMainTags d-none d-sm-block">type</p>
          </Col>
          <Col>
            <p className="opportunitiesMainTags">Status</p>
          </Col>
        </Row>
      </Container>
      {store.opportunities &&
        store.opportunities.map((opportunity) => {
          return (
            // <Container fluid key={opportunity._id}>
            //   <Row className="opportunitiesT">
            //     <Col>
            //       <p className="opportunitiesTags">{opportunity.job_role}</p>
            //     </Col>
            //     <Col>
            //       <p className="opportunitiesTags d-none d-sm-block">
            //         {opportunity.duration}
            //       </p>
            //     </Col>
            //     <Col>
            //       <p className="opportunitiesTags d-none d-sm-block">
            //         {opportunity.createdAt.slice(0, 10)}
            //       </p>
            //     </Col>
            //     <Col>
            //       <p className="opportunitiesTags ">{opportunity.city}</p>
            //     </Col>
            //     <Col>
            //       <p className="opportunitiesTags d-none d-sm-block">
            //         {opportunity.job_type}
            //       </p>
            //     </Col>
            //     <Col className="d-flex justify-content-center">
            //       <button
            //         className="deleteBtn"
            //         onClick={() =>
            //           storeDelete.deleteOpportunity(opportunity._id)
            //         }
            //       >
            //         Delete
            //       </button>
            //     </Col>
            //   </Row>
            // </Container>
            <section className="section">
            <div className="dictionary">
              <div className="term ">
                <dt>
                  <span className="jobRole"  aria-label="Tense Biceps">
                    {opportunity.job_role}
                  </span>
                </dt>
                <dd>
                <span> <p className="opportunitiesTags"> <h5 style={{ 'margin-right': '10px'}} >Duration:  </h5>  {opportunity.duration}</p> </span>
                <span> <p className="opportunitiesTags"> <h5 style={{ 'margin-right': '10px'}} >CreatedAt:  </h5>  {opportunity.start_date}</p> </span>
                <span> <p className="opportunitiesTags"> <h5 style={{ 'margin-right': '10px'}} >Location:  </h5>  {opportunity.city}</p> </span>
                <span> <p className="opportunitiesTags"> <h5 style={{ 'margin-right': '10px'}} >Type:  </h5>  {opportunity.job_type}</p> </span>
                <span>   
                  <button 
                    className="deleteBtn opportunitiesTags"
                      onClick={() =>
                        storeDelete.deleteOpportunity(opportunity._id)}> Delete 
                  </button>
                </span>

                </dd>
              </div>

            </div>

          </section>


          );
        })}
    </Fragment>
  );
};

export default Opportunities;
