import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png"; // Update with your actual logo path
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="nav-wrap">
      <nav className="nav-bar">
        {/* LEFT BRAND */}
        <Link to="/" className="brand" onClick={closeMenu}>
          <img src={logo} alt="Divine Aura Logo" className="brand-logo" />
          <div className="brand-text">
            <span className="brand-title">DIVINE AURA</span>
          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="nav-links desktop-only">
          <NavLink to="/home" end className="nav-link">
            Home
          </NavLink>
          <NavLink to="/collections" className="nav-link">
            Collections
          </NavLink>
          <NavLink to="/blog" className="nav-link">
            Blog
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact Us
          </NavLink>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="nav-right">
          <div className="nav-icons">
            <i className="bi bi-search" />
            <i className="bi bi-heart" />
            <NavLink to="/cart">
              <i className="bi bi-cart" style={{ color: '#333' }} />
            </NavLink>

            {/* Replaced the bi-person icon with a NavLink to Sign-In page */}
            <NavLink to="/signin" className="nav-link">
              <i className="bi bi-person" />
            </NavLink>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="menu-btn mobile-only"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <NavLink to="/home" end className="mobile-link" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/collections" className="mobile-link" onClick={closeMenu}>
          Collections
        </NavLink>
        <NavLink to="/blog" className="mobile-link" onClick={closeMenu}>
          Blog
        </NavLink>
        <NavLink to="/contact" className="mobile-link" onClick={closeMenu}>
          Contact Us
        </NavLink>

        {/* Mobile Sign In and Sign Up links */}
        <NavLink to="/signin" className="mobile-link" onClick={closeMenu}>
          Sign In
        </NavLink>
        <NavLink to="/signup" className="mobile-link" onClick={closeMenu}>
          Sign Up
        </NavLink>
      </div>
    </header>
  );
}
