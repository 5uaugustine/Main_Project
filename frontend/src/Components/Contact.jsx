import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [alertType, setAlertType] = useState(''); // 'success' or 'error'

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage('Sending message...');
    setAlertType('info');

    try {
      const res = await fetch('http://localhost:3001/api/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setResponseMessage('Message sent successfully!');
        setAlertType('success');
        setFormData({ name: '', phone: '', email: '', message: '' });

        // Hide the success message after 3 seconds
        setTimeout(() => setResponseMessage(''), 3000);
      } else {
        setResponseMessage(`Error: ${data.message || 'Failed to send message'}`);
        setAlertType('error');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setResponseMessage('Network error. Check server and connection.');
      setAlertType('error');
    }
  };

  return (
    <div>
      {loading && (
        <div className="loader_bg">
          <div className="loader">
            <img src="/images/loading.gif" alt="Loading..." />
          </div>
        </div>
      )}

      <div className="full_bg">
        <header className="header-area">
          <div className="container-fluid">
            <div className="row d_flex">
              <div className="col-md-2 col-sm-3">
                <div className="logo">
                  <a href="/">feri<span>co</span></a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="contact">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage text_align_center">
                  <span>Our Contact</span>
                  <h2>Request A Call Back</h2>
                </div>
              </div>

              {/* Alert Message */}
              {responseMessage && (
                <div className={`alert ${alertType === 'success' ? 'alert-success' : 'alert-danger'}`} role="alert">
                  {responseMessage}
                </div>
              )}

              <div className="col-md-8 offset-md-2">
                <form onSubmit={handleSubmit} className="main_form">
                  <div className="row">
                    <div className="col-md-12">
                      <input
                        className="form_control"
                        placeholder="Your Name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        className="form_control"
                        placeholder="Phone Number"
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        className="form_control"
                        placeholder="Your Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <textarea
                        className="textarea"
                        placeholder="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <div className="group_btn">
                        <button type="submit" className="send_btn">Send</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
