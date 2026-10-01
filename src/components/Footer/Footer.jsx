import React from 'react';
import "./Footer.css"

import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faClapperboard} from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
  return (
    <div>
      <div className="footer">
      <ul className="footer__list">
        <li className="footer__item"><FontAwesomeIcon icon={faClapperboard} className="footer__logo"/>Movies4U</li>
        <div className="footer__links">
          <li className="footer__link">Contact Us</li>
          <li className="footer__link">About</li>
        </div>
        <div className="footer__copyright">
          <p>&copy; 2026 Movies4U. All rights reserved.</p>
        </div>
      </ul>
    </div>
    </div>
  );
}

export default Footer;