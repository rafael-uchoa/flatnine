import React from 'react';
import './styles.scss';

interface IProps {
  name: string;
  image: string;
}

const CategoryCard: React.FC<IProps> = ({ name, image }) => (
  <div className="CategoryCard">
    <img src={image} alt="category" />
    <h3>{name}</h3>
  </div>
);

export default CategoryCard;
