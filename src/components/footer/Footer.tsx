import * as React from 'react';
import { Link } from "react-router-dom";
import "./Footer.css";
import Region from "../region/Region";


const Footer = () => {
  return (
    <div className="footer-container">
    <section className="footer-countries">
          <Region />
      </section>
      <div className="footer-links wrapper">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About</h2>
            <Link to="/">About Us</Link>
            <Link to="/">Press</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Explore</h2>
            <Link to="/">About Us</Link>
            <Link to="/">Press</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Host</h2>
            <Link to="/">About Us</Link>
            <Link to="/">Press</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Support</h2>
            <Link to="/">About Us</Link>
            <Link to="/">Press</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              L<i className="fas fa-globe-americas fa-xs"></i>GO
            </Link>
          </div>
          <small className="copyrights">LOGO &copy; 2021</small>
          <div className="social-icons">
            <Link to="/"
              className="social-icon-link facebook"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="/"
              className="social-icon-link instagram"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="/"
              className="social-icon-link twitter"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="/"
              className="social-icon-link youtube"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube"></i>
            </Link>
            <Link to="/"
              className="social-icon-link linkedin"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
