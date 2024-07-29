import { Link } from "react-router-dom";

const Callto = () => {
  return (
    <section className="callto-section" style={{ backgroundImage: 'url("https://mdk.pw/img/ctc-bg.jpg")' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 m-auto">
            <div className="ctc-text">
              <h2>We Create Trends For The World</h2>
              <p>
                Donec faucibus consequat ante. Mauris eget mi sed ex efficitur porta id non quam. Cras aliquam turpis
                tellus, quis laoreet lacus congue sed. Nullam at est quis urna vestibulum interdum. Praesent auctor leo
                ut massa ultrices tempor.
              </p>
              <Link to="#" className="primary-btn ctc-btn">
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Callto;
