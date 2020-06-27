import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './styles.scss';

import Hamburger from './Hamburger';

const Navbar: React.FC = () => (
  <div className="Navbar">
    <Link to="/" className="link">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1>Flatnine</h1>
      </div>
    </Link>
    <ul className="underline-animation">
      <Link to="/" className="link">
        <li>Home</li>
      </Link>
      <Link to="/instruments" className="link">
        <li>Instruments</li>
      </Link>
      <Link to="/about" className="link">
        <li>About Us</li>
      </Link>
      <Link to="/contact" className="link">
        <li>Contact Us</li>
      </Link>
    </ul>
    <Hamburger />
  </div>
);

export default Navbar;
