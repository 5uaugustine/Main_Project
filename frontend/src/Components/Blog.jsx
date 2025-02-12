import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';         
import '../css/responsive.css';  
import '../css/owl.carousel.min.css';
// import 'https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css'; 
import '../css/bootstrap-datepicker.min.css';

const Blog = () => {
  useEffect(() => {
    // Hide loader after the component has mounted
    const loader = document.querySelector('.loader_bg');
    if (loader) {
      loader.style.display = 'none'; // Hide loader
    }
  }, []);

  return (
    <div>
      {/* loader */}
      <div className="loader_bg">
        <div className="loader"><img src="images/loading.gif" alt="loading" /></div>
      </div>
      {/* end loader */}
      
      <div className="full_bg">
        {/* header */}
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
                      <li><a href="javascript:void(0)">Projects</a></li>
                      <li><a href="/testimonail">Testimonial</a></li>
                      <li><a className="active" href="/blog">Blog</a></li>
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
        {/* end header inner */}
      </div>

      {/* news */}
      <div className="news">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage text_align_left">
                <span>Our</span>
                <h2>Latest Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="latest">
                <figure><img src="images/news1.jpg" alt="news1" /></figure>
                <div className="nostrud">
                  <h3>Fertilisation in Summer</h3>
                  <p>We are excited to announce that our new slow-release fertilizer is now available in our shop! This innovative product ensures a steady supply of nutrients over an extended period. Check out our detailed review.</p>
                  <a className="read_more" href="/news">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="latest box_desho">
                <figure><img src="images/news2.jpg" alt="news2" /></figure>
                <div className="nostrud">
                  <h3>Fertilisation in Winter</h3>
                  <p>Our latest recommendation for winter gardening is the innovative biofertilizer, now highlighted on our site. Check out our detailed review and see why this biofertilizer is a game-changer for winter plant care!</p>
                  <a className="read_more" href="/news">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="latest">
                <figure><img src="images/news3.jpg" alt="news3" /></figure>
                <div className="nostrud">
                  <h3>Fertilisation in Fall</h3>
                  <p>Our latest recommendation for fall gardening is the innovative liquid fertilizer, now highlighted on our site. Check out our detailed review and see why this liquid fertilizer is a game-changer for fall plant care!</p>
                  <a className="read_more" href="/news">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="hedingh3 text_align_left">
                  <h3>Newsletter</h3>
                  <form id="colof" className="form_subscri">
                    <input className="newsl" placeholder="Enter Email" type="text" name="Email" />
                    <button className="subsci_btn"><img src="images/new.png" alt="subscribe" /></button>
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
                    <li><a href="javascript:void(0)">Projects</a></li>
                    <li><a href="/testimonail">Testimonial</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="hedingh3 text_align_left">
                  <h3>Recent Posts</h3>
                  <ul className="recent">
                    <li><img src="images/resent.jpg" alt="recent1" />ORGANIC FERTILIZERS</li>
                    <li><img src="images/resent.jpg" alt="recent2" />LIQUID FERTILIZER</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="hedingh3 flot_right text_align_left">
                  <h3>Contact</h3>
                  <ul className="top_infomation">
                    <li><i className="fa fa-phone" aria-hidden="true" />+01 1234567892</li>
                    <li><i className="fa fa-envelope" aria-hidden="true" />
                      <a href="javascript:void(0)">ferico1@gmail.com</a>
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
                  <p>© 2022 All Rights Reserved. ferico <a href="https://html.design/" target="_blank" rel="noopener noreferrer">HTML Design</a></p>
                </div>
                <div className="col-md-4">
                  <ul className="social_icon">
                    <li><a href="javascript:void(0)"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                    <li><a href="javascript:void(0)"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                    <li><a href="javascript:void(0)"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* end footer */}
    </div>
  );
};

export default Blog;
