import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../css/style.css';
import '../css/responsive.css';
import '../css/owl.carousel.min.css';
import '../css/bootstrap-datepicker.min.css';


const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    // Clear any stored session or authentication tokens
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("userSession");
    // Redirect to login page
    window.location.href = "/";
  };

  return (
    <div>
      {loading ? (
        <div className="loader_bg">
          <div className="loader">
            <img src="images/loading.gif" alt="Loading..." />
          </div>
        </div>
      ) : (
        <>
          <link rel="icon" href="images/fevicon.png" type="image/gif" />
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
                          <li><a className="active" href="/index">Home</a></li>
                          <li><a href="/about">About</a></li>
                          <li><a href="/service">Service</a></li>
                          <li><a href="/testimonial">Testimonial</a></li>
                          <li><a href="/blog">Blog</a></li>
                          <li><a href="/contact">Contact</a></li>
                          <li>
                            <button onClick={handleLogout} className="logout-button">
                              Logout
                            </button>
                          </li>
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


            {/* Slider */}
            <div className="slider_main">
              <div id="banner1" className="carousel slide carousel-fade" data-ride="carousel" data-interval={6000}>
                <ol className="carousel-indicators">
                  <li data-target="#banner1" data-slide-to={0} className="active" />
                  <li data-target="#banner1" data-slide-to={1} />
                  <li data-target="#banner1" data-slide-to={2} />
                </ol>
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img src="images/banner.jpg" alt="responsive image" className="d-block img-fluid" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/image1.jpg" alt="responsive image" className="d-block img-fluid" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/image2.jpg" alt="responsive image" className="d-block img-fluid" />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#banner1" role="button" data-slide="prev">
                  <i className="fa fa-angle-left" aria-hidden="true" />
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#banner1" role="button" data-slide="next">
                  <i className="fa fa-angle-right" aria-hidden="true" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <div className="willom">
                      <h1>FERICO-VORTEX</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="about">
              <div className="container -fluid">
                <div className="row d_flex">
                  <div className="col-lg-6 col-md-12">
                    <div className="titlepage text_align_left">
                      <span>About Us</span>
                      <h2>FERICO-VORTEX</h2>
                      <p>Welcome to FeriCO, where innovation meets agriculture!<br /><br />
                        At FeriCO, we understand the crucial role that soil health and the right nutrients play in achieving bountiful harvests. Our mission is to empower farmers and gardeners with tailored fertilizer solutions that enhance crop yields, improve soil quality, and promote sustainable farming practices.</p>
                      <a className="read_more" href="/learnmore">Learn More</a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="row d_flex">
                      <div className="col-md-7">
                        <div className="about_img">
                          <figure><img src="images/about_img.jpg" alt="#" /></figure>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="about_img">
                          <figure><img src="images/about_img1.jpg" alt="#" /></figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="services">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="titlepage text_align_left">
                      <span>What We Do</span>
                      <h2>SERVICES WE OFFER</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="services_box_main">
                      <div className="services_box text_align_left">
                        <figure><img src="images/service1.jpg" alt="#" /></figure>
                        <div className="veget">
                          <h3>LIQUID<br />FERTILIZERS</h3>
                          <p>Liquid fertilizers are quickly absorbed by plants, providing an immediate nutrient boost. They are useful for addressing specific nutrient deficiencies during the growing season.</p>
                        </div>
                      </div>
                      <a className="read_more" href="/liquidfer">Read More</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="services_box_main">
                      <div className="services_box text_align_left">
                        <figure><img src="images/service2.jpg" alt="#" /></figure>
                        <div className="veget">
                          <h3>ORGANIC<br />FERTILIZERS</h3>
                          <p>Organic fertilizers boost soil health and provide steady nutrients without burning plants. Check out our innovative liquid fertilizer for fall gardening, now highlighted on our site.</p>
                        </div>
                      </div>
                      <a className="read_more" href="/organic_fer">Read More</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="services_box_main">
                      <div className="services_box text_align_left">
                        <figure><img src="images/service3.jpg" alt="#" /></figure>
                        <div className="veget">
                          <h3>SLOW-RELEASE<br />FERTILIZERS</h3>
                          <p>These fertilizers release nutrients gradually over time, ensuring a consistent supply to the plants. They are often coated with a polymer or organic material that decomposes slowly.</p>
                        </div>
                      </div>
                      <a className="read_more" href="/slow_release_fer">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Customers Section */}
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
                <div id="myCarousel" className="carousel slide clients_banner" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to={0} class Name="active" />
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
                                <p>As a farmer, I’ve always struggled to figure out the right fertilizer for my crops. This system has made it so easy and efficient. The recommendations are spot-on, and I’ve noticed a significant improvement in my yields </p>
                                
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
                                <p>As an agricultural consultant, I use this system to advise multiple farmers. The accuracy of the recommendations and the detailed insights have saved me a lot of time and effort. It’s an invaluable tool for modern farming. </p>
                               
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container">
                        <div className="carousel-caption relative">
                          <div className="row d_flex">
                            <div className="col-md-6">
                              <div className="custom">
                                <div className="d_flex">
                                  <i><img src="images/customer1.jpg" alt="#" /></i>
                                  <div className="clint">
                                    <h4>ALTHAF NOUSHAD</h4>
                                    <span>Client</span>
                                  </div>
                                </div>
                                <p>Readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their </p>
                                <img src="images/test.png" alt="#" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="custom">
                                <div className="d_flex">
                                  <i><img src="images/customer2.jpg" alt="#" /></i>
                                  <div className="clint">
                                    <h4>ARJUN VINOD</h4>
                                    <span>Client</span>
                                  </div>
                                </div>
                                <p>Readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their </p>
                                <img src="images/test.png" alt="#" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container">
                        <div className="carousel-caption relative">
                          <div className="row d_flex">
                            <div className="col-md-6">
                              <div className="custom">
                                <div className="d_flex">
                                  <i><img src="images/customer1.jpg" alt="#" /></i>
                                  <div className="clint">
                                    <h4>PRAKASH</h4>
                                    <span>Client</span>
                                  </div>
                                </div>
                                <p>Readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their </p>
                                <img src="images/test.png" alt="#" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="custom">
                                <div className="d_flex">
                                  <i><img src="images/customer2.jpg" alt="#" /></i>
                                  <div className="clint">
 <h4>DANIEL B</h4>
                                    <span>Client</span>
                                  </div>
                                </div>
                                <p>Readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their </p>
                                <img src="images/test.png" alt="#" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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

            {/* Choose Section */}
            <div className="choose">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="titlepage text_align_center">
                      <h2>Why Choose Us</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="point text_align_center">
                      <h3>300+</h3>
                      <span>Regular<br />Customers</span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="point text_align_center">
                      <h3>30+</h3>
                      <span>Professional <br />Engineering</span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="point text_align_center">
                      <h3>300+</h3>
                      <span>Points of Sale  <br />Goods</span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="point text_align_center">
                      <h3>30+</h3>
                      <span>Awards <br />Won</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* News Section */}
            <div className="news">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="titlepage text_align_left">
                      <span>Our</span>
                      <h2>Latest News</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="latest">
                      <figure><img src="images/news1.jpg" alt="#" /></figure>
                      <div className="nostrud">
                        <h3>Fertilisation in Summer</h3>
                        <p>We are excited to announce that our new slow-release fertilizer is now available in our shop! This innovative product ensures a steady supply of nutrients over an extended period. Check out our detailed review.</p>
                        <a className="read_more" href="/news">Read More</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="latest box_desho">
                      <figure><img src="images/news2.jpg" alt="#" /></figure>
                      <div className="nostrud">
                        <h3>Fertilisation in Winter</h3>
                        <p>Our latest recommendation for winter gardening is the innovative biofertilizer, now highlighted on our site. Check out our detailed review and see why this biofertilizer is a game-changer for winter plant care!</p>
                        <a className="read_more" href="/news">Read More</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="latest">
                      <figure><img src="images/news3.jpg" alt="#" /></figure>
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

            {/* Contact Section */}
            <div className="contact">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 ">
                    <div className="titlepage text_align_center">
                      <span>Our Contact</span>
                      <h2>Request A Call Back</h2>
                    </div>
                  </div>
                  <div className="col-md-8 offset-md-2">
                    <form id="request" className="main_form">
                      <div className="row">
                        <div className="col-md-12 ">
                          <input className="form_control" placeholder="Your Name" type="text" name="Name" /> 
                        </div>
                        <div className="col-md-12">
                          <input className="form_control" placeholder="Phone Number" type="text" name="Phone Number" />                          
                        </div>
                        <div className="col-md-12">
                          <input className="textarea" placeholder="Message" type="text" name="message" /> 
                        </div>
                        <div className="col-md-12">
                          <div className="group_btn">
                            <button className="send_btn">Send</button>
                            <button className="send_btn">Location</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="map-responsive">
                <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width={600} height={430} frameBorder={0} style={{border: 0, width: '100%'}} allowFullScreen />
              </div>
            </div>

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
                          <li><a href="/testimonail">Testimonail</a></li>
                          <li><a href="/contact">Contact us</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="hedingh3 text_align_left">
                        <h3>Recent Posts</h3>
                        <ul className="recent">
                          <li><img src="images/resent.jpg" alt="#" />ORGANIC FERTILIZERS </li>
                          <li><img src="images/resent.jpg" alt="#" /> LIQUID FERTILIZER</li>
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
                            <a href="Javascript:void( 0)">ferico1@gmail.com</a>
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
                        <p>© 2024 All Rights Reserved by ferico<a href="https://html.design/" /></p>
                      </div>
                      <div className="col-md-4">
                        <ul className="social_icon ">
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
            {/* End footer */}
          </div>
        </>
      )}
    </div>
  );
};

export default Index;