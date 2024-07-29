const AboutU = () => {
  return (
    <section className="about-us-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="as-pic">
              <img src="https://mdk.pw/img/about-us.jpg" alt="" />
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
              <div className="about-counter">
                <div className="ac-item">
                  <h2 className="ab-count">8384</h2>
                  <p>Member</p>
                </div>
                <div className="ac-item">
                  <h2 className="ab-count">6880</h2>
                  <p>Partner</p>
                </div>
                <div className="ac-item">
                  <h2 className="ab-count">1546</h2>
                  <p>Branch</p>
                </div>
                <div className="ac-item">
                  <h2 className="ab-count">4677</h2>
                  <p>Designs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutU;
