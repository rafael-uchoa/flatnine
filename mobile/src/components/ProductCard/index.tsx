import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import {
  ProductContainer,
  ProductImage,
  ProductStarsContainer,
  ProductStarContainer,
  ProductTextContainer,
  ProductName,
  ProductPrice,
} from './styles';

import formatPriceToBRL from '../../services/formatPriceToBRL';

interface Props {
  product: {
    imageUrl: string;
    name: string;
    price: number;
  };
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const navigation = useNavigation();

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

  function navigateToProduct(product: any) {
    navigation.navigate('Product', product);
  }

  return (
    <ProductContainer>
      <TouchableOpacity onPress={() => navigateToProduct(product)}>
        <ProductImage source={{ uri: product.imageUrl }} />
        <ProductStarsContainer>{renderStars()}</ProductStarsContainer>
        <ProductTextContainer>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>{formatPriceToBRL(product.price)}</ProductPrice>
        </ProductTextContainer>
      </TouchableOpacity>
    </ProductContainer>
  );
};

export default ProductCard;
