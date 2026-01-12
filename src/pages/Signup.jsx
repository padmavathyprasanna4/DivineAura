import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook
import './Signup.css';

export default function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const navigate = useNavigate();  // Initialize the useNavigate hook

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Sign Up clicked", { fullName, email, password });
    // You can add your sign-up logic here (e.g., API call)

    // Navigate to Home page after successful sign-up
    navigate('/home');  // Redirect to Home page
  };

  const handleSignInRedirect = () => {
    navigate('/signin');  // Navigate to Sign-In page
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Begin your fragrance journey</h1>
        <form onSubmit={handleSignUp}>
          <div className="form-field">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
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
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="terms-checkbox">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={() => setAgreeTerms(!agreeTerms)}
            />
            <label>I agree to the Terms of Service and Privacy Policy</label>
          </div>
          <button type="submit" className="signup-btn" disabled={!agreeTerms}>
            Create Account
          </button>
        </form>
        <div className="signin-link">
          <p>Already have an account? <span onClick={handleSignInRedirect}>Sign In</span></p>
        </div>
      </div>
    </div>
  );
}
