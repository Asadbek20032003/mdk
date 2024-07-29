import { Link } from "react-router-dom";
const BreadCrumb = () => {
  return (
    <section className="breadcrumb-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="breadcrumb-option">
              <Link to="/">Home</Link>
              <span>BLog</span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="breadcrumb-text">
              <h3>Our BLog</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumb;
