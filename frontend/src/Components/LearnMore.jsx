import React from 'react';

const LearnMore = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f4f8', padding: '50px 20px' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#2a7f61', padding: '20px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
          <div style={{ fontSize: '28px', fontWeight: '700', color: 'white' }}>
            <a href="/" style={{ color: 'white', textDecoration: 'none' }}>FERICO</a>
          </div>
          <nav>
            <ul style={{ display: 'flex', listStyleType: 'none', paddingLeft: '0' }}>
              <li style={{ marginRight: '20px' }}><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
              <li style={{ marginRight: '20px' }}><a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
              <li style={{ marginRight: '20px' }}><a href="/service" style={{ color: 'white', textDecoration: 'none' }}>Service</a></li>
              <li><a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div style={{ backgroundColor: '#ffffff', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', marginTop: '50px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '700', color: '#2a3d45', textAlign: 'center' }}>Learn More About FERICO</h1>
        <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.6', marginBottom: '20px', textAlign: 'justify' }}>
          Welcome to FeriCO, where innovation meets agriculture! At FeriCO, we understand the crucial role that soil health and the right nutrients play in achieving bountiful harvests. Our mission is to empower farmers and gardeners with tailored fertilizer solutions that enhance crop yields, improve soil quality, and promote sustainable farming practices.
        </p>
        <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.6', marginBottom: '30px', textAlign: 'justify' }}>
          We are dedicated to providing high-quality products and resources that help our customers succeed in their farming and gardening endeavors. With years of expertise, we offer personalized advice and solutions that make a significant difference in the soil and plant health.
        </p>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#2a7f61', color: 'white', padding: '40px 0', marginTop: '50px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '22px', marginBottom: '15px' }}>Newsletter</h3>
            <form style={{ display: 'flex', justifyContent: 'center' }}>
              <input type="text" name="email" placeholder="Enter Email" style={{ padding: '10px', borderRadius: '5px', border: 'none', fontSize: '16px', marginRight: '10px' }} />
              <button type="submit" style={{ backgroundColor: '#f4a261', border: 'none', padding: '12px 20px', color: 'white', borderRadius: '5px', fontSize: '16px' }}>Subscribe</button>
            </form>
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '22px', marginBottom: '15px' }}>Explore</h3>
            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
              <li><a href="/index" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
              <li><a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
              <li><a href="/service" style={{ color: 'white', textDecoration: 'none' }}>Service</a></li>
              <li><a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
            </ul>
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '22px', marginBottom: '15px' }}>Contact</h3>
            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
              <li><i className="fa fa-phone" aria-hidden="true" /> +01 1234567892</li>
              <li><i className="fa fa-envelope" aria-hidden="true" /> <a href="mailto:ferico1@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>ferico1@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div style={{ textAlign: 'center', backgroundColor: '#1e5b44', padding: '15px 0' }}>
          <p style={{ margin: '0', fontSize: '16px' }}>© 2024 All Rights Reserved. by feriCO</p>
        </div>
      </footer>
    </div>
  );
};

export default LearnMore;
