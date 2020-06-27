import React from 'react';
import './styles.scss';

import Topbar from '../../components/Topbar';
import Navbar from '../../components/Navbar';
import Carousel from '../../components/Carousel';
import Categories from '../../components/Categories';
import GuaranteePanel from '../../components/GuaranteePanel';
import InstagramFeed from '../../components/InstagramFeed';
import Footer from '../../components/Footer';

const Home: React.FC = () => (
  <div>
    <Topbar />
    <Navbar />
    <Carousel />
    <Categories />
    <GuaranteePanel />
    <InstagramFeed />
    <Footer />
  </div>
);

export default Home;
