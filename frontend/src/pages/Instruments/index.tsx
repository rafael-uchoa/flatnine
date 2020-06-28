import React, { useState, useEffect } from 'react';
import './styles.scss';
import api from '../../services/api';

import Topbar from '../../components/Topbar';
import Navbar from '../../components/Navbar';
import Categories from '../../components/Categories';
import ProductCard from '../../components/ProductCard';
import Footer from '../../components/Footer';

const Instruments: React.FC = () => {
  const [products, setProducts] = useState<any>();

  useEffect(() => {
    console.log('hi');
    fetchProducts('');
  }, []);

  async function fetchProducts(category: string) {
    console.log('hello');
    const res = await api.get(category);

    console.log(res.data);

    setProducts(res.data.products);
  }

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
