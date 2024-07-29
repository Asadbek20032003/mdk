import { Link } from "react-router-dom";

const MemberAb = () => {
  return (
    <section className="member-section spad ap-member">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <span>Our Team</span>
              <h2>Top Designers</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div
                className="member-item set-bg"
                style={{
                  backgroundImage: `url("https://mdk.pw/img/member/member-${index + 1}.jpg")`,
                }}
              >
                <div className="mi-text">
                  <p>
                    Quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.
                  </p>
                  <div className="mt-title">
                    <h4>Jacob Gomez</h4>
                    <span>Designer</span>
                  </div>
                  <div className="mt-social">
                    <Link to="#">
                      <i className="fa fa-facebook"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-twitter"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-instagram"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-pinterest"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemberAb;
