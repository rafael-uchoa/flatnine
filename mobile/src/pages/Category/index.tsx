import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Container, Loading, ProductsContainer } from './styles';

import api from '../../services/api';
import loadingGif from '../../assets/loading.gif';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';

const Category: React.FC = () => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);

  const route = useRoute();
  const category = String(route.params);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const res = await api.get(category);

      setProducts(res.data.products);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      {loading && <Loading source={loadingGif} />}
      <Header title={category} />
      <ProductsContainer>
        <FlatList
          data={products}
          keyExtractor={(product) => String(product._id)}
          renderItem={({ item: product }) => <ProductCard product={product} />}
        />
      </ProductsContainer>
    </Container>
  );
};

export default Category;
