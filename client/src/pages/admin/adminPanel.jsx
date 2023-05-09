import "../../assets/css/admin.css";
import AdminNav from "../../components/Nav/adminNav";
import { Container, Row, Col, Card } from "react-bootstrap";

import adminsStore from "../../stores/AdminsStore.js";
import React, { Fragment, useEffect } from "react";
import axios from "axios";
const AdminPanel = () => {
  const store = adminsStore();

  const storeDeleteAndUpdate = adminsStore((storeDeleteAndUpdate) => {
    return {
      deleteAdmin: storeDeleteAndUpdate.deleteAdmin,
    };
  });

  async function updateType(_id, newType) {
    try {
      const response = await axios.put(
        `/api/v1/admins/${_id}`,
        { type: newType },
        { withCredentials: true }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    store.fetchAdmins();
  }, [store]);
  return (
    <Fragment>
      <AdminNav />
      <Container className="mb-2">
        <Row>
          <Col  md={6} xs={12}>
            <h1>Admin Panel</h1>
          </Col>
          <Col md={6} xs={12}>
            <a className="btn btn-dark" href="/addAdmin">
              add new admin
            </a>
          </Col>
          
        </Row>
        <hr
          style={{
          background: "#6F38C5",
          height: "5px",
          border: "none",
          marginBottom:"30px",
          }}
        />
      </Container>
    <Container fluid>

      </Container> 

      <Container fluid >
        <Row >
      {store.admins &&
        store.admins.map((admin) => {
          return (
    

   
              <Col  xl={4} md={6} sm={12} key={admin._id}>
                <Card>
                  <dt>
                    <span className="jobRole" >
                    {admin.name}
                    </span>
                  </dt>
                  <dd>
                  <span > <p className="opportunitiesTags"> <h5 style={{ 'margin-right': '10px'}} >Email:  </h5>  {admin.email}</p> </span>
                  <span> <p className="opportunitiesTags"> <h5 style={{ 'margin-right': '10px'}} >Phone Number:  </h5>  {admin.phone}</p> </span>
                  <span> <p className="opportunitiesTags"> <h5 style={{ 'margin-right': '10px'}} >  </h5>  
                    <button
                      className={`btn ${
                        admin.type === "true" ? "btn-black" : "btn-success"
                      }`}
                      onClick={() => {
                        const newType = admin.type === "true" ? "false" : "true";
                        updateType(admin._id, newType);
                      }}
                    >
                      {admin.type === "true" ? "main admin" : "sub admin"}
                    </button></p> 
                  </span>
                  <span>   
                    <button 
                      className="deleteBtn opportunitiesTags"
                        onClick={() =>
                          storeDeleteAndUpdate.deleteAdmin(admin._id)}> Delete 
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

export default AdminPanel;
