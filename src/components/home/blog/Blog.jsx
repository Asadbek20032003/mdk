import { Link } from "react-router-dom";
const Blog = () => {
  return (
    <div className="blog-section latest-blog spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <span>Latest Blog</span>
              <h2>From Our Blog</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="blog-item">
              <div className="row">
                <div className="col-lg-6">
                  <div
                    className="bi-pic set-bg"
                    style={{ backgroundImage: 'url("https://mdk.pw/img/blog/blog-1.jpg")' }}
                  ></div>
                </div>
                <div className="col-lg-6">
                  <div className="bi-text">
                    <ul>
                      <li>
                        <i className="fa fa-calendar-o"></i> August 9, 2019
                      </li>
                      <li>
                        <i className="fa fa-commenting-o"></i> 0
                      </li>
                    </ul>
                    <h4>
                      <Link to="#">Every Single Way You Can Wear Pastel Makeup This Spring</Link>
                    </h4>
                    <p>Never ever think of giving up. Winners never quit and</p>
                    <div className="bt-author">
                      <div className="ba-pic">
                        <img src="https://mdk.pw/img/blog/author-1.jpg" alt="" />
                      </div>
                      <div className="ba-text">
                        <h5>Jeff Rodriguez</h5>
                        <span>Designer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="blog-item">
              <div className="row">
                <div className="col-lg-6">
                  <div
                    className="bi-pic set-bg"
                    style={{ backgroundImage: 'url("https://mdk.pw/img/blog/blog-2.jpg")' }}
                  ></div>
                </div>
                <div className="col-lg-6">
                  <div className="bi-text">
                    <ul>
                      <li>
                        <i className="fa fa-calendar-o"></i> August 9, 2019
                      </li>
                      <li>
                        <i className="fa fa-commenting-o"></i> 0
                      </li>
                    </ul>
                    <h4>
                      <Link to="#">Everything Coming to Netflix Canada in May 2019</Link>
                    </h4>
                    <p>Never ever think of giving up. Winners never quit and</p>
                    <div className="bt-author">
                      <div className="ba-pic">
                        <img src="https://mdk.pw/img/blog/author-1.jpg" alt="" />
                      </div>
                      <div className="ba-text">
                        <h5>Aaron Russell</h5>
                        <span>Content</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
