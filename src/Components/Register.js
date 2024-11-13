import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Components/Context";
import Footer from "./Footer";
import Direct from "./Navbar";
import "./Register.css";

function Register() {
  const { login } = useContext(AppContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    login();

    alert("Registration successful!");

    navigate("/login");
  };

  return (
    <>
      <Direct />
      <div className="register-container">
        <div className="register-form-container">
          <h2 className="register-heading">Register</h2>
          <form onSubmit={handleRegister} className="register-form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
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
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-input"
              />
            </div>
            <button type="submit" className="register-btn">
              Register
            </button>
          </form>

          <div className="login-link">
            <p>Already have an account?</p>
            <button onClick={() => navigate("/login")} className="login-btn">
              Login
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
