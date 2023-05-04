import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import AdminsStore from "../../stores/AdminsStore";

export default function RequireTypeAdmin(props) {
  const store = AdminsStore();

  useEffect(() => {
    store.checkStatueAdmin();
  }, []);

  if (store.isLoading) {
    return (
      <Container className="m-auto bg-white mt-5 signInWidth pt-3 pb-4 rounded shadow">
        <p>Loading...</p>
      </Container>
    );
  }

  if (!store.isType) {
    return <Redirect to="/unauthorizedAdminMiddleWare" />;
  }

  return <div>{props.children}</div>;
}
