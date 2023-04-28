import React, { Fragment } from "react";
import WelcomeNav from "../components/Nav/welcomeNav";
import "../assets/css/welcoming.css";
import { Container, Row, Col } from "react-bootstrap";

const AboutPage = () => {
  return (
    <Fragment>
      <WelcomeNav />
      <section>
      </section>
      <Container>
      <h3 style={{lineHeight: 3}}>About Us</h3>
        <Row>
          <Col xl={6} md={6} sm={12}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos rem assumenda sit, eius, vel nemo amet sed, explicabo animi fugit itaque nihil reprehenderit! Voluptas fugit ipsam atque, saepe quisquam officiis.
            </p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default AboutPage;
