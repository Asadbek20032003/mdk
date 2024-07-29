import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faInstagram, faTwitter, faPinterest } from "@fortawesome/free-brands-svg-icons";
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";
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
                      <FaFacebook />
                    </Link>
                    <Link to="#">
                      <FaTwitter />
                    </Link>
                    <Link to="#">
                      <FaInstagram />
                    </Link>
                    <Link to="#">
                      <FaPinterest />
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
