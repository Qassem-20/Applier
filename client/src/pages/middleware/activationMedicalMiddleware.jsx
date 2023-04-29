import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import MedicalStore from "../../stores/MedicalStore";

export default function ActivationMedicalMiddleware(props) {
  const store = MedicalStore();

  useEffect(() => {
    store.checkStatueMedical();
  }, [store]);

  if (store.isLoading) {
    return (
      <Container className="m-auto bg-white mt-5 signInWidth pt-3 pb-4 rounded shadow">
        <p>Loading...</p>
      </Container>
    );
  }

  if (!store.isActive) {
    return <Redirect to="/unauthorizedCMedicalMiddleware" />;
  }

  return <div>{props.children}</div>;
}
