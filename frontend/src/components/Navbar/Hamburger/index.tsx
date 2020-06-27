import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Hamburger: React.FC = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  function displayMenuHandler() {
    setDisplayMenu(!displayMenu);
  }

  return (
    <div className="Hamburger">
      <button onClick={displayMenuHandler}>
        <div>
          <div></div>
        </div>
      </button>
      <nav
        style={{
          display: displayMenu ? 'block' : 'none',
        }}
      >
        <div>
          <Link to="/" className="link">
            <h1>Home</h1>
          </Link>
          <Link to="/instruments" className="link">
            <h1>Instruments</h1>
          </Link>
          <Link to="/about" className="link">
            <h1>About Us</h1>
          </Link>
          <Link to="/contact" className="link">
            <h1>Contact Us</h1>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Hamburger;
