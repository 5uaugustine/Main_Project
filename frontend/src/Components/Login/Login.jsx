import React, { useState } from 'react';
import './Login.css';
import '../../App.scss';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import video from '../../assets/video.mp4';
import logo from '../../assets/logo.png';
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';

const ALLOWED_ROLES = ['admin', 'user'];

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '', role: '' });
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
  
    const { username, role } = formData;
  
    if (!role) {
      setMessage('Please select a role.');
      setIsSuccess(false);
      setIsLoading(false);
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:3001/login', { username, role });
      const data = response.data;
  
      if (response.status === 200) {
        if (data.role !== role) {
          setMessage('Incorrect role selected. Please try again.');
          setIsSuccess(false);
          setIsLoading(false);
          return;
        }
  
        setMessage('Login successful!');
        setIsSuccess(true);
  
        // Store user role and ID (no token)
        localStorage.setItem('role', data.role);
        localStorage.setItem('id', data.id);
  
        setTimeout(() => {
          navigate(role === 'admin' ? '/adminpanel' : '/index');
        }, 2000);
      }
    } catch (error) {
      setMessage(error.response?.data?.error || 'Login failed!');
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv flex">
          <video src={video} autoPlay loop muted />
          <div className="textDiv">
            <h1 className="title">Grow Smarter, Not Harder</h1>
            <p>Unlock the power of data-driven fertilization.</p>
          </div>
          <div className="footerDiv flex">
            <span className="text">Don't Have an Account?</span>
            <Link to={'/register'}>
              <button className="btn">Sign Up</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv flex">
            <img src={logo} alt="Logo Image" />
            <h3>Welcome Back!</h3>
          </div>

          <form className="form grid" onSubmit={handleSubmit}>
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter Username"
                  value={formData.username}
                  onChange={handleChange}
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
                  name="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="role">Select Role</label>
              <div className="input flex">
                <select id="role" name="role" value={formData.role} onChange={handleChange} required>
                  <option value="">-- Select Role --</option>
                  {ALLOWED_ROLES.map((role) => (
                    <option key={role} value={role}>{role.charAt(0).toUpperCase() + role.slice(1)}</option>
                  ))}
                </select>
              </div>
            </div>

            <button type="submit" className={`btn flex ${isLoading ? 'loading' : ''}`} disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Login'}
              <AiOutlineSwapRight className="icon" />
            </button>
          </form>

          {message && (
            <p className={`message ${isSuccess === true ? 'success' : isSuccess === false ? 'error' : ''}`}>
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
