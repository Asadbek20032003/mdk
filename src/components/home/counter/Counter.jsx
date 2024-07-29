import { Link } from "react-router-dom";
const Counter = () => {
  return (
    <section className="counter-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="counter-text">
              <div className="section-title">
                <span>Number Speaks</span>
                <h2>
                  We have a lot of <br />
                  experience
                </h2>
              </div>
              <Link to="#" className="primary-btn">
                Read More
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="counter-item">
              <div className="ci-number count">2034</div>
              <div className="ci-text">
                <h4>Successful projects</h4>
                <p>
                  Since its establishment in 2005, Fashion has been focusing on project management &amp; implementation
                  through cooperation.
                </p>
              </div>
            </div>
            <div className="counter-item">
              <div className="ci-number count">1054</div>
              <div className="ci-text">
                <h4>Events</h4>
                <p>
                  Since its establishment in 2005, Fashion has been focusing on project management &amp; implementation
                  through cooperation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
