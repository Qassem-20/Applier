import "../../assets/css/admin.css";
import AdminNav from "../../components/Nav/adminNav";
import { Container, Row, Col } from "react-bootstrap";
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
  }, []);
  return (
    <Fragment>
      <AdminNav />
      <Container className="mb-2">
        <Row>
          <Col md={6} xs={12}>
            <h1>Admin Panel</h1>
          </Col>
          <Col md={6} xs={12}>
            <a className="btn btn-dark" href="/addAdmin">
              add new admin
            </a>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="opportunitiesTag">
          <Col xl={3} md={2} xs={3}>
            <p className="opportunitiesMainTags">Name</p>
          </Col>
          <Col xl={3} md={3} xs={3}>
            <p className="opportunitiesMainTags">Email</p>
          </Col>
          <Col xl={3} md={3} xs={2}>
            <p className="opportunitiesMainTags">Phone Number</p>
          </Col>
          <Col xl={1} md={1} xs={1}>
            <p className="opportunitiesMainTags">type</p>
          </Col>
          <Col xl={2} md={1} xs={1}>
            <p className="opportunitiesMainTags">Status</p>
          </Col>
        </Row>
      </Container>
      {store.admins &&
        store.admins.map((admin) => {
          return (
            <Container fluid key={admin._id}>
              <Row className="opportunitiesT">
                <Col xl={3} md={2} xs={3}>
                  <p className="opportunitiesTags">{admin.name}</p>
                </Col>
                <Col xl={3} md={3} xs={3}>
                  <p className="opportunitiesTags">{admin.email}</p>
                </Col>
                <Col xl={3} md={3} xs={2}>
                  <p className="opportunitiesTags">{admin.phone}</p>
                </Col>
                <Col xl={2} md={1} xs={1}>
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
                  </button>
                </Col>
                <Col xl={1} md={1} xs={1}>
                  <button
                    className="deleteBtn"
                    onClick={() => storeDeleteAndUpdate.deleteAdmin(admin._id)}
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

export default AdminPanel;
