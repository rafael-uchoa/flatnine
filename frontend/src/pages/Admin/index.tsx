import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiArrowGoBackLine, RiDeleteBin2Line } from 'react-icons/ri';
import './styles.scss';

import logo from '../../assets/logo.png';
import formatPriceToBRL from '../../services/formatPriceToBRL';
import { ProductsContext } from '../../context/products';

const Admin: React.FC = () => {
  const [newName, setNewName] = useState<string>();
  const [newImageUrl, setNewImageUrl] = useState<string>();
  const [newPrice, setNewPrice] = useState<number>();
  const [newCategory, setNewCategory] = useState<string>();

  const { products, getProducts } = useContext(ProductsContext);

  useEffect(() => {
    if (products.length === 0) getProducts('');
  });

  function handleCreateProduct(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(newName);
    console.log(newPrice);
    console.log(newCategory);
  }

  return (
    <div className="Admin">
      <header>
        <Link to="/">
          <RiArrowGoBackLine />
        </Link>
        <img src={logo} alt="logo" />
        <h1>Admin</h1>
      </header>
      <h2>Create new product</h2>
      <form onSubmit={(e) => handleCreateProduct(e)}>
        <label>Product Name</label>
        <input
          type="text"
          value={newName}
          placeholder="Enter product name..."
          onChange={(e) => setNewName(e.target.value)}
        />
        <label>Product Image URL</label>
        <input
          type="url"
          value={newImageUrl}
          placeholder="Enter product image url..."
          onChange={(e) => setNewImageUrl(e.target.value)}
        />
        <label>Product Price</label>
        <input
          type="number"
          value={newPrice}
          placeholder="Enter product price..."
          onChange={(e) => setNewPrice(parseInt(e.target.value))}
        />
        <label>Product Category</label>
        <select onChange={(e) => setNewCategory(e.target.value)}>
          <option value="guitars">Guitars</option>
          <option value="drums">Drums</option>
          <option value="keys">Keys</option>
          <option value="recording">Recording</option>
        </select>
        <button type="submit">Create Product</button>
      </form>
      <h2>Products list</h2>
      <ul>
        {products &&
          products.map((product: any) => (
            <li key={product._id}>
              <span>
                {product.category} - {product.name} -{' '}
                {formatPriceToBRL(product.price)}{' '}
              </span>
              <RiDeleteBin2Line />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Admin;
