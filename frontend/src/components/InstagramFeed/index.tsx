import React from 'react';
import './styles.scss';

import InstagramCard from './InstagramCard';

import instagram01 from '../../assets/instagram01.jpg';
import instagram02 from '../../assets/instagram02.jpg';
import instagram03 from '../../assets/instagram03.jpg';
import instagram04 from '../../assets/instagram04.jpg';
import instagram05 from '../../assets/instagram05.jpg';
import instagram06 from '../../assets/instagram06.jpg';
import instagram07 from '../../assets/instagram07.jpg';

const InstagramFeed: React.FC = () => (
  <div className="InstagramFeed">
    <h1>Instagram Feed</h1>
    <div className="InstagramFeed-Grid">
      <InstagramCard image={instagram01} />
      <InstagramCard image={instagram02} />
      <InstagramCard image={instagram03} />
      <InstagramCard image={instagram04} />
      <InstagramCard image={instagram05} />
      <InstagramCard image={instagram06} />
      <InstagramCard image={instagram07} />
    </div>
  </div>
);

export default InstagramFeed;
