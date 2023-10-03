// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-menu">
        <ul>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/my-account">My account</a>
          </li>
          <li>
            <a href="/about-us">About Us</a>
          </li>
          <li>
            <a href="/checkout">Checkout</a>
          </li>
          <li>
            <a href="/contact-us">Contact Us</a>
          </li>
          <li>
            <a href="/plugins">Plugins</a>
          </li>
          <li>
            <a href="/resources">Resources</a>
          </li>
          <li>
            <a href="/themes">Themes</a>
          </li>
        </ul>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Your Company Name
      </div>
    </footer>
  );
};

export default Footer;
