import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.scss';

import { ProductsContext } from '../../../context/products';

interface IProps {
  name: string;
  image: string;
}

const CategoryCard: React.FC<IProps> = ({ name, image }) => {
  const { getProducts } = useContext(ProductsContext);
  const history = useHistory();

  function handleNavigation() {
    getProducts(name.toLocaleLowerCase());
    history.push('/instruments');
  }

  return (
    <div className="CategoryCard" onClick={handleNavigation}>
      <img src={image} alt="category" />
      <h3>{name}</h3>
    </div>
  );
};

export default CategoryCard;
