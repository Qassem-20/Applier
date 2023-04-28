import React, { Fragment } from "react";
import WelcomeNav from "../components/Nav/welcomeNav";
import "../assets/css/welcoming.css";
import { Container, Row, Col } from "react-bootstrap";
import AboutUsImage from "../assets/images/AboutUs.jpg";

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
            <p style={{textAlign: "justify"}}>
            Welcome to our website, where we provide a platform for students seeking training opportunities to connect with potential companies and patients. Our website caters to a wide range of students, including medical students, who are looking to gain practical experience and enhance their skills in their respective fields. We aim to bridge the gap between students and companies by providing a user-friendly interface that allows students to browse and apply for training opportunities, while companies and patients can post their requirements and search for suitable candidates. Our mission is to facilitate the exchange of knowledge and skills between students and professionals, ultimately contributing to the development of the next generation of skilled professionals. Join us today and embark on a journey of growth and learning!            </p>
          </Col>
          <Col xl={6}>
            <img src={AboutUsImage} alt="Application" className="AboutUsImgs" />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default AboutPage;
