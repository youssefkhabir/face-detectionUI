import React, { useState } from "react";
import "./SignIn.css"; // Include the CSS for better styling

function SignIn({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the entered username and password match the condition
    if (username === "admin" && password === "1234") {
      setError(""); // Clear any error message
      onLogin(true); // Notify parent (App) that the user is logged in
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        <h2 className="signin-title">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="signin-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
