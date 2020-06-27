import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import './styles.scss';

const Topbar: React.FC = () => (
  <div className="Topbar">
    <ul>
      <Link to="/login" className="link">
        <li>
          <FaUser /> Login
        </li>
      </Link>
      <li>
        <FaShoppingCart /> 0 Items - $0,00
      </li>
    </ul>
  </div>
);

export default Topbar;
