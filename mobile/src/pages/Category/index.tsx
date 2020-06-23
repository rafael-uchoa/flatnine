import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import {
  Container,
  ProductsContainer,
  ProductContainer,
  ProductImage,
  ProductStarsContainer,
  ProductStarContainer,
  ProductTextContainer,
  ProductName,
  ProductPrice,
} from './styles';

import api from '../../services/api';
import Header from '../../components/Header';

const Category: React.FC = () => {
  const [products, setProducts] = useState();

  const navigation = useNavigation();
  const route = useRoute();
  const category = String(route.params);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const res = await api.get(category);
      setProducts(res.data.products);
    } catch (err) {
      console.log(err);
    }
  }

  function formatPriceToBRL(price: number) {
    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  }

  function renderStars() {
    let starsArr = [];

    for (let i = 0; i < 5; i++) {
      starsArr.push(
        <ProductStarContainer key={i}>
          <FontAwesome name="star" size={32} color="#ff0132" />
        </ProductStarContainer>
      );
    }

    return starsArr;
  }

  return (
    <Container>
      <Header title={category} />
      <ProductsContainer>
        <FlatList
          data={products}
          keyExtractor={(product) => String(product._id)}
          renderItem={({ item: product }) => (
            <ProductContainer>
              <TouchableOpacity onPress={() => console.log('Product!')}>
                <ProductImage source={{ uri: product.imageUrl }} />
                <ProductStarsContainer>{renderStars()}</ProductStarsContainer>
                <ProductTextContainer>
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>{formatPriceToBRL(product.price)}</ProductPrice>
                </ProductTextContainer>
              </TouchableOpacity>
            </ProductContainer>
          )}
        />
      </ProductsContainer>
    </Container>
  );
};

export default Category;
