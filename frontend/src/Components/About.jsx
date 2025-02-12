import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../css/style.css';
import '../css/responsive.css';
import '../css/owl.carousel.min.css';
import '../css/bootstrap-datepicker.min.css';

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., data fetching)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Loader Background */}
      {loading && (
        <div className="loader_bg">
          <div className="loader">
            <img src="images/loading.gif" alt="Loading..." />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="full_bg">
        {/* Header */}
        <header className="header-area">
          <div className="container-fluid">
            <div className="row d_flex">
              <div className="col-md-2 col-sm-3">
                <div className="logo">
                  <Link to="/index">feri<span>co</span></Link>
                </div>
              </div>
              <div className="col-md-8 col-sm-9">
                <div className="navbar-area">
                  <nav className="site-navbar">
                    <ul>
                      <li><Link to="/index">Home</Link></li>
                      <li><Link to="/about" className="active">About</Link></li>
                      <li><Link to="/service">Service</Link></li>
                      <li><Link to="/projects">Projects</Link></li>
                      <li><Link to="/testimonial">Testimonial</Link></li>
                      <li><Link to="/blog">Blog</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
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

      {/* About Section */}
      <div className="about">
        <div className="container-fluid">
          <div className="row d_flex">
            <div className="col-lg-6 col-md-12">
              <div className="titlepage text_align_left">
                <span>About Us</span>
                <h2>FERICO-VORTEX</h2>
                <p>
                  Welcome to FeriCO, where innovation meets agriculture!<br /><br />
                  At FeriCO, we understand the crucial role that soil health and
                  the right nutrients play in achieving bountiful harvests. Our mission
                  is to empower farmers and gardeners with tailored fertilizer solutions
                  that enhance crop yields, improve soil quality, and promote sustainable
                  farming practices.
                </p>
                <Link to="/learnmore" className="read_more">Learn More</Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="row d_flex">
                <div className="col-md-7">
                  <div className="about_img">
                    <figure><img src="images/about_img.jpg" alt="About" /></figure>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="about_img">
                    <figure><img src="images/about_img1.jpg" alt="About" /></figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About Section */}

      {/* Footer */}
      <footer>
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="hedingh3 text_align_left">
                  <h3>Newsletter</h3>
                  <form id="colof" className="form_subscri">
                    <input
                      className="newsl"
                      placeholder="Enter Email"
                      type="text"
                      name="Email"
                    />
                    <button className="subsci_btn">
                      <img src="images/new.png" alt="Subscribe" />
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="hedingh3 text_align_left">
                  <h3>Explore</h3>
                  <ul className="menu_footer">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/service">Service</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/testimonials">Testimonial</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="hedingh3 text_align_left">
                  <h3>Recent Posts</h3>
                  <ul className="recent">
                    <li><img src="images/resent.jpg" alt="Post" /> ORGANIC FERTILIZERS</li>
                    <li><img src="images/resent.jpg" alt="Post" /> LIQUID FERTILIZER</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="hedingh3 flot_right text_align_left">
                  <h3>Contact</h3>
                  <ul className="top_infomation">
                    <li><i className="fa fa-phone" aria-hidden="true" /> +01 1234567892</li>
                    <li><i className="fa fa-envelope" aria-hidden="true" />
                      <a href="mailto:ferico1@gmail.com">ferico1@gmail.com</a>
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
                  <p>© 2024 All Rights Reserved. by feriCO</p>
                </div>
                <div className="col-md-4">
                  <ul className="social_icon">
                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
