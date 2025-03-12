import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>Portal S4RAS</h2>

        <form action="/login" method="POST">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password</label>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="password-toggle"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button className='login-button' type="submit">Login</button>
        </form>

        <p className="forgot-password"><a href="#">Lupa Password?</a></p>
      </div>
    </div>
  );
}

export default Login;