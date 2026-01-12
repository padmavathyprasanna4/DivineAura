import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook
import './Signin.css';  // Import the CSS for styling

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  const navigate = useNavigate();  // Initialize the useNavigate hook

  const handleSignIn = (e) => {
    e.preventDefault();
    // Perform sign-in logic (validation or API call)
    console.log("Sign In clicked", { email, password, rememberMe });

    // Navigate to the Home page after successful sign-in
    navigate("/home");  // Navigate to the Home page (adjust this if the route name is different)
  };

  const handleSignUpRedirect = () => {
    navigate('/signup');  // Redirect to the sign-up page
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h1>Welcome back to Divine Aura</h1>
        <form onSubmit={handleSignIn}>
          <div className="form-field">
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <input 
              type="password" 
              placeholder="Enter your password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="remember-me">
            <input 
              type="checkbox" 
              checked={rememberMe} 
              onChange={() => setRememberMe(!rememberMe)} 
            />
            <label>Remember me</label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit" className="signin-btn">Sign In</button>
        </form>
        <div className="signup-link">
          <p>Don’t have an account? <span onClick={handleSignUpRedirect}>Sign Up</span></p>
        </div>
      </div>
    </div>
  );
}
