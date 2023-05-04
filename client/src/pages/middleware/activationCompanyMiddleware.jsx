import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import CompanyStore from "../../stores/CompanyStore";

export default function ActivationCompanyMiddleware(props) {
  const store = CompanyStore();

  useEffect(() => {
    store.checkStatueCompany();
  }, []);

  if (store.isLoading) {
    return (
      <Container className="m-auto bg-white mt-5 signInWidth pt-3 pb-4 rounded shadow">
        <p>Loading...</p>
      </Container>
    );
  }

  if (!store.isActive) {
    return <Redirect to="/unauthorizedCompanyMiddleware" />;
  }

  return <div>{props.children}</div>;
}
