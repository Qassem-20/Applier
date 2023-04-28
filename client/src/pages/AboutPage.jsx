import React, { Fragment } from "react";
import WelcomeNav from "../components/Nav/welcomeNav";
import "../assets/css/welcoming.css";

const AboutPage = () => {
  return (
    <Fragment>
      <WelcomeNav />
      <section>
      </section>
      <div className="container">
        <h3 style={{lineHeight: 3}}>About Us</h3>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos rem assumenda sit, eius, vel nemo amet sed, explicabo animi fugit itaque nihil reprehenderit! Voluptas fugit ipsam atque, saepe quisquam officiis.
        </p>
      </div>
    </Fragment>
  );
};

export default AboutPage;
