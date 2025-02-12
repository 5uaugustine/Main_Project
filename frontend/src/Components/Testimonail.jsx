import React, { useEffect } from 'react';

const Testimonial = () => {
  useEffect(() => {
    // Wait for the page to load and then hide the loader
    window.addEventListener("load", () => {
      document.querySelector(".loader_bg").style.display = "none";
    });
  }, []);

  return (
    <div>
      <title>ferico</title>
      <meta name="keywords" content />
      <meta name="description" content />
      <meta name="author" content />
      {/* Bootstrap CSS */}
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      {/* Style CSS */}
      <link rel="stylesheet" href="css/style.css" />
      {/* Responsive */}
      <link rel="stylesheet" href="css/responsive.css" />
      {/* Favicon */}
      <link rel="icon" href="images/fevicon.png" type="image/gif" />
      {/* Tweaks for older IEs */}
      <link rel="stylesheet" href="css/owl.carousel.min.css" />
      <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" />
      <link rel="stylesheet" href="css/bootstrap-datepicker.min.css" />
      
      {/* Body */}
      {/* Loader */}
      <div className="loader_bg">
        <div className="loader">
          <img src="images/loading.gif" alt="#" />
        </div>
      </div>
      {/* End Loader */}
      
      <div className="full_bg">
        {/* Header */}
        <header className="header-area">
          <div className="container-fluid">
            <div className="row d_flex">
              <div className="col-md-2 col-sm-3">
                <div className="logo">
                  <a href="/index">feri<span>co</span></a>
                </div>
              </div>
              <div className="col-md-8 col-sm-9">
                <div className="navbar-area">
                  <nav className="site-navbar">
                    <ul>
                      <li><a href="/index">Home</a></li>
                      <li><a href="/about">About</a></li>
                      <li><a href="/service">Service</a></li>
                      <li><a className="active" href="/testimonail">Testimonial</a></li>
                      <li><a href="/blog">Blog</a></li>
                      <li><a href="/contact">Contact</a></li>
                    </ul>
                    <button className="nav-toggler">
                      <span />
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* End Header */}
      </div>
      
      {/* Banner */}
      {/* Customers */}
      <div className="customers">
        <div className="clients_bg">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="titlepage text_align_left">
                  <span>Our Customers</span>
                  <h2>TESTIMONIALS</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Start Slider Section */}
        <div id="myCarousel" className="carousel slide clients_banner" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to={0} className="active" />
            <li data-target="#myCarousel" data-slide-to={1} />
            <li data-target="#myCarousel" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="carousel-caption relative">
                  <div className="row d_flex">
                    <div className="col-md-6">
                      <div className="custom">
                        <div className="d_flex">
                          <i><img src="images/customer1.jpg" alt="#" /></i>
                          <div className="clint">
                            <h4>NYGIL BINOY</h4>
                            <span>Client</span>
                          </div>
                        </div>
                        <p>Readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                        
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="custom">
                        <div className="d_flex">
                          <i><img src="images/customer2.jpg" alt="#" /></i>
                          <div className="clint">
                            <h4>NIDHUL P</h4>
                            <span>Client</span>
                          </div>
                        </div>
                        <p>Readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Repeat similar blocks for other carousel items */}
          </div>
          
          <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <i className="fa fa-angle-left" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <i className="fa fa-angle-right" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      {/* End Customers */}
      
      {/* Footer */}
      <footer>
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="hedingh3 text_align_left">
                  <h3>Newsletter</h3>
                  <form id="colof" className="form_subscri">
                    <input className="newsl" placeholder="Enter Email" type="text" name="Email" />
                    <button className="subsci_btn"><img src="images/new.png" alt="#" /></button>
                  </form>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="hedingh3 text_align_left">
                  <h3>Explore</h3>
                  <ul className="menu_footer">
                    <li><a href="/index">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/service">Service</a></li>
                    <li><a href="Javascript:void(0)">Projects</a></li>
                    <li><a href="/testimonail">Testimonial</a></li>
                    <li><a href="/contact">Contact us</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="hedingh3 text_align_left">
                  <h3>Recent Posts</h3>
                  <ul className="recent">
                    <li><img src="images/resent.jpg" alt="#" />ea commodo consequat.</li>
                    <li><img src="images/resent.jpg" alt="#" />ea commodo consequat.</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="hedingh3 flot_right text_align_left">
                  <h3>Contact</h3>
                  <ul className="top_infomation">
                    <li><i className="fa fa-phone" aria-hidden="true" />
                      +01 1234567892
                    </li>
                    <li><i className="fa fa-envelope" aria-hidden="true" />
                      <a href="Javascript:void(0)">demo@gmail.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="container">
              <div className="row d_flex">
                <div className="col-md-8">
                  <p>© 2024 All Rights Reserved by FERICO <a href="https://html.design/" /></p>
                </div>
                <div className="col-md-4">
                  <ul className="social_icon">
                    <li><a href="Javascript:void(0)"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                    <li><a href="Javascript:void(0)"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                    <li><a href="Javascript:void(0)"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* End Footer */}
      {/* JavaScript files */}
    </div>
  );
};

export default Testimonial;
