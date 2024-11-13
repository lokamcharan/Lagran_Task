import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Components/Context";
import Direct from "./Navbar";
import Footer from "./Footer";
import "./Login.css";

function Login() {
  const { login } = useContext(AppContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username && password) {
      login();
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Please fill in both fields");
    }
  };

  return (
    <div>
      <Direct />
      <div className="login-container">
        <div className="login-form-container">
          <h2 className="login-heading">Login</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-input"
              />
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
          <div className="register-link">
            <p>Do not have an account?</p>
            <button
              onClick={() => navigate("/register")}
              className="register-btn"
            >
              Register
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
