import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import CompanyStore from "../../stores/CompanyStore.js";

export default function RequireAuthCompany(props) {
  const store = CompanyStore();

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
    return <Redirect to="/signIn" />;
  }
  return <div>{props.children}</div>;
}
