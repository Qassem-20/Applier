import React, { Fragment } from "react";
import WelcomeNav from "../components/Nav/welcomeNav";
import Header from "../components/homePage/header";
import Services from "../components/homePage/services.jsx";
import About from "../components/homePage/about.jsx";

const HomePage = () => {
  return (
    <Fragment>
      <WelcomeNav />
      <section>
        <Header />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <About />
      </section>
    </Fragment>
  );
};

export default HomePage;
