import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import AdminsStore from "../../stores/AdminsStore.js";

export default function RequireAuthAdmin(props) {
  const store = AdminsStore();

  useEffect(() => {
    if (store.loggedIn === null) {
      store.checkAuth();
    }
  }, []);

  if (store.loggedIn === null) {
    return (
      <Container className="m-auto bg-white mt-5 signInWidth pt-3 pb-4 rounded shadow">
        <p>Loading...</p>
      </Container>
    );
  }
  if (store.loggedIn === false) {
    return <Redirect to="/adminSignIn" />;
  }
  return <div>{props.children}</div>;
}
