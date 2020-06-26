import styled from 'styled-components/native';
import {
  SCREEN_WIDTH,
  FLATNINE_GREY,
  FLATNINE_RED,
} from '../../constants/styles';

const ProductContainer = styled.View`
  background-color: ${FLATNINE_GREY};
  width: ${SCREEN_WIDTH};
  margin-bottom: 20px;
`;

const ProductImage = styled.Image`
  height: 400px;
  width: 100%;
`;

const ProductStarsContainer = styled.View`
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  padding: 14px 14px 0;
`;

const ProductStarContainer = styled.View`
  margin-right: 7px;
`;

const ProductTextContainer = styled.View`
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 7px 14px 14px;
`;

const ProductName = styled.Text`
  color: white;
  font-size: 22px;
  text-transform: capitalize;
`;

const ProductPrice = styled.Text`
  color: ${FLATNINE_RED};
  font-size: 18px;
  text-transform: capitalize;
`;

export {
  ProductContainer,
  ProductImage,
  ProductStarsContainer,
  ProductStarContainer,
  ProductTextContainer,
  ProductName,
  ProductPrice,
};
