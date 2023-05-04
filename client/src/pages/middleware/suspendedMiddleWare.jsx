import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import ConsumerStore from "../../stores/ConsumerStore";

export default function SuspendedMiddleWare(props) {
  const store = ConsumerStore();

  useEffect(() => {
    store.checkStatueConsumer();
  }, []);

  if (store.isLoading) {
    return (
      <Container className="m-auto bg-white mt-5 signInWidth pt-3 pb-4 rounded shadow">
        <p>Loading...</p>
      </Container>
    );
  }

  if (!store.isSuspended) {
    return <Redirect to="/unauthorizedConsumerMiddleware" />;
  }

  return <div>{props.children}</div>;
}
