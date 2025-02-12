import React, { useState } from "react";
import "./Register.css";
import "../../App.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdOutlineMarkEmailRead } from "react-icons/md";

import video from "../../assets/video.mp4";
import logo from "../../assets/logo.png";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input fields
    if (!email || !username || !password) {
      setErrorMessage("All fields are required!");
      return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorMessage("Please enter a valid email address!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/register", {
        email,
        username,
        password,
      });

      if (response.status === 201) {
        setSuccessMessage("Registration successful! Redirecting to login...");
        setTimeout(() => navigate("/"), 2000);
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.error || "An error occurred during registration."
      );
    }
  };

  return (
    <div className="RegisterPage flex">
      <div className="container flex">
        {/* Video Section */}
        <div className="videoDiv flex">
          <video src={video} autoPlay loop muted />
          <div className="textDiv">
            <h1 className="title">Grow Smarter, Not Harder</h1>
            <p>Unlock the power of data-driven fertilization.</p>
          </div>
          <div className="footerDiv flex">
            <span className="text">Already Have an Account?</span>
            <Link to="/">
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>

        {/* Form Section */}
        <div className="formDiv flex">
          <div className="headerDiv flex">
            <img src={logo} alt="Logo" />
            <h3>Let us Know!</h3>
          </div>

          {/* Success and Error Messages */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}

          {/* Registration Form */}
          <form className="form grid" onSubmit={handleSubmit}>
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdOutlineMarkEmailRead className="icon" />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  placeholder="Enter Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn flex">
              <span>Register</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotpassword">
              Forgot your Password? <Link to="/forgot-password">Click Here</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
