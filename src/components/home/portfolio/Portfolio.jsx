import { Link } from "react-router-dom";
const Portfolio = () => {
  return (
    <section className="portfolio-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <span>Моё портфолио</span>
              <h2>3D и 2D оформления тем/баннеров/аватарок/статей</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div
              className="portfolio-item set-bg large-item"
              data-setbg="https://nztcdn.com/files/bcea6246-9461-4d6c-b958-42a54a155f22.webp"
              style={{ backgroundImage: 'url("https://nztcdn.com/files/bcea6246-9461-4d6c-b958-42a54a155f22.webp")' }}
            >
              <div className="pi-hover">
                <Link to="#" className="chain-icon">
                  <i className="fa fa-chain"></i>
                </Link>
                <Link
                  href="https://nztcdn.com/files/bcea6246-9461-4d6c-b958-42a54a155f22.webp"
                  className="search-icon image-popup"
                >
                  <i className="fa fa-search"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="portfolio-item set-bg"
              data-setbg="https://i.imgur.com/RtpTfp0.gif"
              style={{ backgroundImage: 'url("https://i.imgur.com/RtpTfp0.gif")' }}
            >
              <div className="pi-hover">
                <Link to="#" className="chain-icon">
                  <i className="fa fa-chain"></i>
                </Link>
                <Link to="https://i.imgur.com/RtpTfp0.gif" className="search-icon image-popup">
                  <i className="fa fa-search"></i>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div
                  className="portfolio-item set-bg"
                  data-setbg="https://nztcdn.com/files/866f71eb-0d38-4935-9e2d-9d7e5f36fe20.webp"
                  style={{
                    backgroundImage: 'url("https://nztcdn.com/files/866f71eb-0d38-4935-9e2d-9d7e5f36fe20.webp")',
                  }}
                >
                  <div className="pi-hover">
                    <Link to="#" className="chain-icon">
                      <i className="fa fa-chain"></i>
                    </Link>
                    <Link
                      href="https://nztcdn.com/files/866f71eb-0d38-4935-9e2d-9d7e5f36fe20.webp"
                      className="search-icon image-popup"
                    >
                      <i className="fa fa-search"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="portfolio-item set-bg"
                  data-setbg="https://mdk.pw/img/portfolio/portfolio-4.jpg"
                  style={{ backgroundImage: 'url("https://mdk.pw/img/portfolio/portfolio-4.jpg")' }}
                >
                  <div className="pi-hover">
                    <Link to="#" className="chain-icon">
                      <i className="fa fa-chain"></i>
                    </Link>
                    <Link to="https://mdk.pw/img/portfolio/portfolio-4.jpg" className="search-icon image-popup">
                      <i className="fa fa-search"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
