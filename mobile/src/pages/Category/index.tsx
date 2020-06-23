import React, { useState, useEffect } from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Container,
  ProductsContainer,
  ProductContainer,
  ProductImage,
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
    async function fetchCategoryData() {
      try {
        const res = await api.get(category);
        setProducts(res.data.products);
      } catch (err) {
        console.log(err);
      }
    }

    fetchCategoryData();
  }, []);

  function formatPriceToBRL(price: number) {
    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
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
