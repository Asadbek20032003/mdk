import { Link } from "react-router-dom";

import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-option">
              <div className="fo-logo">
                <Link to="#">
                  <img src="https://mdk.pw/img/logo.png" alt="" />
                </Link>
              </div>
              <ul>
                <li>Address: 60-49 Road 11378 New York</li>
                <li>Phone: +65 11.188.888</li>
                <li>Email: hello.colorlib@gmail.com</li>
              </ul>
              <div className="fo-social">
                <Link to="#">
                  <FaInstagram />
                </Link>
                <Link to="#">
                  <FaFacebook />
                </Link>
                <Link to="#">
                  <FaTwitter />
                </Link>
                <Link to="#">
                  <FaPinterest />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget fw-links">
              <h5>Useful Links</h5>
              <ul>
                <li>
                  <Link to="#">About Us</Link>
                </li>
                <li>
                  <Link to="#">Model</Link>
                </li>
                <li>
                  <Link to="#">Contact</Link>
                </li>
                <li>
                  <Link to="#">Serivius</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h5>Join The Newsletter</h5>
              <p>Get E-mail updates about our latest shop and special offers.</p>
              <form action="#" className="news-form">
                <input type="text" placeholder="Enter your mail" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h5>Instagram</h5>
              <div className="insta-pic">
                <img src="https://mdk.pw/img/instagram/instagram-1.jpg" alt="" />
                <img src="https://mdk.pw/img/instagram/instagram-2.jpg" alt="" />
                <img src="https://mdk.pw/img/instagram/instagram-3.jpg" alt="" />
                <img src="https://mdk.pw/img/instagram/instagram-4.jpg" alt="" />
                <img src="https://mdk.pw/img/instagram/instagram-5.jpg" alt="" />
                <img src="https://mdk.pw/img/instagram/instagram-6.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-text">
          <p>
            Copyright ©<script>document.write(new Date().getFullYear());</script>2024 All rights reserved | This
            template is made with <i className="ti-heart" aria-hidden="true"></i> by
            <Link to="https://colorlib.com" target="_blank">
              Colorlib
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
