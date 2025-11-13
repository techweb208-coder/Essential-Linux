import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>Feito com ❤️ por entusiastas do Linux • © 2025</p>

      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/techweb208-coder" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}
