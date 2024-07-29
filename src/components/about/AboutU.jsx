import React from "react";
import Counter from "./Counter"; // `Counter` komponentini to'g'ri import qiling

const AboutCounter = () => (
  <div className="about-counter">
    <Counter start={0} end={8384} duration={2000} label="Member" />
    <Counter start={0} end={6880} duration={2000} label="Partner" />
    <Counter start={0} end={1546} duration={2000} label="Branch" />
    <Counter start={0} end={4677} duration={2000} label="Designs" />
  </div>
);

const AboutU = () => {
  return (
    <section className="about-us-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="as-pic">
              <img src="https://mdk.pw/img/about-us.jpg" alt="About Us" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="as-text ap-text">
              <div className="section-title">
                <span>About us</span>
                <h2>Our Story</h2>
              </div>
              <p className="f-para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <p className="s-para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Tempor incididunt ut labore et
                dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <AboutCounter />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutU;
