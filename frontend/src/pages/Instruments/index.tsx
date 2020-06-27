import React from 'react';
import './styles.scss';

import Topbar from '../../components/Topbar';
import Navbar from '../../components/Navbar';
import Categories from '../../components/Categories';
import Footer from '../../components/Footer';

const Instruments: React.FC = () => (
  <div>
    <Topbar />
    <Navbar />
    <Categories />
    <Footer />
  </div>
);

export default Instruments;
