import React from 'react';
import "./Nav.css"

import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faClapperboard} from "@fortawesome/free-solid-svg-icons"

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item"><FontAwesomeIcon icon={faClapperboard} className="nav__logo"/>Movies4U</li>
        <div className="nav__links">
          <Link to="/" className="nav__link">Home</Link>
          <Link to="/movies" className="nav__link">Find Movies</Link>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;