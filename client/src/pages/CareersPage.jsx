import React, { Fragment } from "react";
import WelcomeNav from "../components/Nav/welcomeNav";
import About from "../components/homePage/about";
import "../assets/css/welcoming.css";
import { Container } from "react-bootstrap";

const CareersPage = () => {
  return (
    <Fragment>
      <WelcomeNav />
      <Container>
      <h3 style={{lineHeight: 3, flex:1}}>Coming Soon...</h3>
      </Container>
      <div style={{position:"absolute", bottom:0, width: "100%"}}>
        <About />
      </div>
    </Fragment>
  );
};

export default CareersPage;
