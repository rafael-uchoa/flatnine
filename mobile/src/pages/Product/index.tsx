import React from 'react';
import { useRoute } from '@react-navigation/native';
import {
  ProductImageBackground,
  ProductImageFilter,
  ProductName,
  ProductPrice,
  OrderButtonContainer,
  OrderButtonText,
} from './styles';

import formatPriceToBRL from '../../services/formatPriceToBRL';

const Product: React.FC = () => {
  const route = useRoute();
  const product: any = route.params;

  return (
    <ProductImageBackground source={{ uri: product.imageUrl }}>
      <ProductImageFilter>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{formatPriceToBRL(product.price)}</ProductPrice>
        <OrderButtonContainer>
          <OrderButtonText>Order Now</OrderButtonText>
        </OrderButtonContainer>
      </ProductImageFilter>
    </ProductImageBackground>
  );
};

export default Product;
