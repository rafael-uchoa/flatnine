import React from 'react';
import './styles.scss';

import formatPriceToBRL from '../../services/formatPriceToBRL';

interface IProps {
  image: string;
  name: string;
  price: number;
}

const ProductCard: React.FC<IProps> = ({ image, name, price }) => (
  <div className="ProductCard">
    <img src={image} alt="product" />
    <h3>{name}</h3>
    <h2>{formatPriceToBRL(price)}</h2>
  </div>
);

export default ProductCard;
