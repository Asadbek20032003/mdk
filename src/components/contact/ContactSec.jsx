import { FaEnvelope, FaMapMarkerAlt, FaMobile } from "react-icons/fa";
const ContactSec = () => {
  return (
    <section className="contact-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="contact-text">
              <h4>Contacts Us</h4>
              <div className="ct-item">
                <div className="ci-icon">
                  <span className="ti-location-pin">
                    <FaMapMarkerAlt />
                  </span>
                </div>
                <div className="ci-text">
                  <ul>
                    <li>
                      <span>Our Location</span>
                      60-49 Road 11378 New York
                    </li>
                  </ul>
                </div>
              </div>
              <div className="ct-item">
                <div className="ci-icon">
                  <span className="ti-mobile">
                    <FaMobile />
                  </span>
                </div>
                <div className="ci-text">
                  <ul>
                    <li>
                      <span>Phone:</span>
                      +65 11.188.888
                    </li>
                  </ul>
                </div>
              </div>
              <div className="ct-item">
                <div className="ci-icon">
                  <span className="ti-email">
                    <FaEnvelope />
                  </span>
                </div>
                <div className="ci-text">
                  <ul>
                    <li>
                      <span>Mail</span>
                      hellocolorlib@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="contact-option">
              <h4>Leave A Comment</h4>
              <form action="#" className="comment-form contact-form">
                <div className="row">
                  <div className="col-lg-6">
                    <input type="text" placeholder="Name" />
                  </div>
                  <div className="col-lg-6">
                    <input type="text" placeholder="Email" />
                  </div>
                  <div className="col-lg-12">
                    <textarea placeholder="Messages"></textarea>
                    <button type="submit" className="site-btn">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSec;
