import React from 'react';
import './Footer.css';
import app from '../assets/footerimages/app.png';
import googleplay from '../assets/footerimages/googleplay.png';
import mastercard from '../assets/footerimages/mastercard.png';
import visa from '../assets/footerimages/visa.png';
import paypal from '../assets/footerimages/paypal.png';
import instagram from '../assets/footerimages/instagram.png';
import facebook from '../assets/footerimages/facebook.png';
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
       {/* Column 1: Logo & Divine Aura */}
        <div className="footer-column">
          <div className="logo-container">
             <img src={logo} alt="Divine Aura Logo" className="footer-logo" /><h2>DIVINE AURA</h2>
          </div>
          <div className="footer-download">
            <p>Download</p>
            <div className="footer-icons">
              <a href="#"><img src={app} alt="App Store" /></a>
              <a href="#"><img src={googleplay} alt="Google Play" /></a>
            </div>
          </div>
          <div className="footer-payments">
            <p>Secure Payments</p>
            <div className="payment-icons">
              <img src={mastercard} alt="Mastercard" />
              <img src={visa} alt="Visa" />
              <img src={paypal} alt="Paypal" />
            </div>
          </div>
        </div>

        {/* Column 2: Pages */}
        <div className="footer-column">
          <h3>Pages</h3>
          <div className="footer-links">
            <a href="#">Home</a>
            <a href="#">Collections</a>
            <a href="#">Brand</a>
            <a href="#">Blog</a>
            <a href="#">Our Service</a>
            <a href="#">Contact Us</a>
          </div>
        </div>

        {/* Column 3: Contact Us */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <div className="contact-phone">
            <p>Phone: +91 123 456 7890</p>
            <p>Email: <a href="mailto:info@divineaura.com">info@divineaura.com</a></p>
            <p>Address: 123 Fragrance Lane, DC Pondicherry</p>
          </div>
        </div>

        {/* Column 4: Follow Us */}
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-media">
            <a href="#" className="social-icon"><img src={instagram} alt="Instagram" /></a>
            <a href="#" className="social-icon"><img src={facebook} alt="Facebook" /></a>
          </div>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Shipping Policy</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>©2026 All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
