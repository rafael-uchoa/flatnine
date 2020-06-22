import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Constants from 'expo-constants';

const STATUSBAR_HEIGHT = `${Constants.statusBarHeight + 20}px`;
const SCREEN_WIDTH = `${Dimensions.get('window').width - 20}px`;

const Container = styled.View`
  flex: 1;
  padding: 0 10px;
  padding-top: ${STATUSBAR_HEIGHT};
  background-color: #171717;
`;

const ProductsContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const ProductContainer = styled.View`
  background-color: #25262a;
  width: ${SCREEN_WIDTH};
  margin-bottom: 20px;
`;

const ProductImage = styled.Image`
  height: 240px;
  width: 100%;
`;

const ProductTextContainer = styled.View`
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 14px;
`;

const ProductName = styled.Text`
  color: white;
  font-size: 22px;
  text-transform: capitalize;
`;

const ProductPrice = styled.Text`
  color: #ff0132;
  font-size: 18px;
  text-transform: capitalize;
`;

export {
  Container,
  ProductsContainer,
  ProductContainer,
  ProductImage,
  ProductTextContainer,
  ProductName,
  ProductPrice,
};
