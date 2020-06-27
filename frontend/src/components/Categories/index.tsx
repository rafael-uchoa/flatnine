import React from 'react';
import drums from '../../assets/drums.jpg';
import guitar from '../../assets/guitar.jpg';
import keys from '../../assets/keys.jpg';
import recording from '../../assets/recording.jpg';
import './styles.scss';

import CategoryCard from './CategoryCard';

const Categories: React.FC = () => (
  <div className="Categories">
    <h1>Categories</h1>
    <div className="Categories-Grid">
      <CategoryCard name="Guitars" image={guitar} />
      <CategoryCard name="Drums" image={drums} />
      <CategoryCard name="Keys" image={keys} />
      <CategoryCard name="Recording" image={recording} />
    </div>
  </div>
);

export default Categories;
