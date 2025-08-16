import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import axios from "axios";
import { IoSearchOutline } from "react-icons/io5";
function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post("https://shipsy-x-apsrtc.onrender.com/api/auth/login", form);
    // ✅ STEP 1: Console the response to verify structure
    console.log("Login response:", response.data);

    // ✅ STEP 2: Store token in localStorage
    localStorage.setItem("token", response.data.token); // ← THIS LINE IS CRUCIAL

    // ✅ STEP 3: Navigate only after storing token
    navigate("/home");
  } catch (err) {
    console.error("Login failed:", err);
    alert("Invalid credentials");
  }
};

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Good to see you again</h2>
        <form onSubmit={handleSubmit}>
          <label>Your email</label>
          <div className="input-group">
            <span className="icon">👤</span>
            <input
              type="email"
              name="email"
              placeholder="e.g. elon@tesla.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <label>Your password</label>
          <div className="input-group">
            <span className="icon">🔒</span>
            <input
              type="password"
              name="password"
              placeholder="e.g. ilovemangools123"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <div className="login-footer">
          <a href="/register">Don't have an account?</a>

        </div>
      </div>
    </div>
  );
}

export default Login;
