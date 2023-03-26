import "../../assets/css/admin.css";
import AdminNav from "../../components/Nav/adminNav";
import { Container, Row, Col } from "react-bootstrap";
import adminsStore from "../../stores/AdminsStore.js";
import React, { Fragment, useEffect, useState } from "react";

const AdminPanel = ({ userId }) => {
  const store = adminsStore();

  const storeDeleteAndUpdate = adminsStore((storeDeleteAndUpdate) => {
    return {
      deleteAdmin: storeDeleteAndUpdate.deleteAdmin,
    };
  });

  const [userType, setUserType] = useState("main-admin");

  const updateUserType = async () => {
    try {
      const newType = userType === "main-admin" ? "sub-admin" : "main-admin";
      const response = await fetch(
        `http://localhost:4000/api/v1/admins/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ type: newType }),
        },
        { withCredentials: true }
      );
      const data = await response.json();
      setUserType(data.type);
    } catch (error) {
      console.error(error);
    }
  };

  const handleButtonClick = () => {
    updateUserType("admin");
  };

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
                  <button onClick={handleButtonClick(admin._id)}>
                    {admin.type}
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
