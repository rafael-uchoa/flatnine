import React, { useContext, useEffect } from 'react';
import './styles.scss';

import Topbar from '../../components/Topbar';
import Navbar from '../../components/Navbar';
import Categories from '../../components/Categories';
import ProductCard from '../../components/ProductCard';
import Footer from '../../components/Footer';

import { ProductsContext } from '../../context/products';

const Instruments: React.FC = () => {
  const { products, getProducts } = useContext(ProductsContext);

  useEffect(() => {
    if (products.length === 0) getProducts('');
  }, [products, getProducts]);

  return (
    <div>
      <Topbar />
      <Navbar />
      <Categories />
      <div className="products-grid">
        {products &&
          products.map((product: any) => (
            <ProductCard
              key={product._id}
              image={product.imageUrl}
              name={product.name}
              price={product.price}
            />
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default Instruments;
