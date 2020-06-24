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

interface Props {
  imageUrl: string;
  name: string;
  price: number;
}

const Category: React.FC<Props> = ({ imageUrl, name, price }) => {
  const navigation = useNavigation();

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
    <ProductContainer>
      <TouchableOpacity onPress={() => console.log('Product!')}>
        <ProductImage source={{ uri: imageUrl }} />
        <ProductStarsContainer>{renderStars()}</ProductStarsContainer>
        <ProductTextContainer>
          <ProductName>{name}</ProductName>
          <ProductPrice>{formatPriceToBRL(price)}</ProductPrice>
        </ProductTextContainer>
      </TouchableOpacity>
    </ProductContainer>
  );
};

export default Category;
