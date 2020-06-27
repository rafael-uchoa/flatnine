import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa';
import logo from '../../assets/logo.png';
import './styles.scss';

const Footer: React.FC = () => (
  <div className="Footer">
    <ul>
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
    <div>
      <img src={logo} alt="logo" />
      <p>
        Flatnine <span>&copy; 2020 All Rights Reserved</span>
      </p>
    </div>
    <ul>
      <li>
        <FaFacebookSquare />
      </li>
      <li>
        <FaInstagram />
      </li>
      <li>
        <FaTwitter />
      </li>
      <li>
        <FaYoutube />
      </li>
    </ul>
  </div>
);

export default Footer;
