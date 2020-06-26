import styled from 'styled-components/native';

const ProductImageBackground = styled.ImageBackground`
  flex: 1;
  background-color: #171717;
`;

const ProductImageFilter = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: flex-start;
  padding: 0 20px;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ProductName = styled.Text`
  color: white;
  font-size: 32px;
  text-transform: capitalize;
`;

const ProductPrice = styled.Text`
  color: #ff0132;
  font-size: 32px;
  text-transform: capitalize;
`;

const OrderButtonContainer = styled.TouchableOpacity`
  margin-top: 40px;
  background-color: #ff0132;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
`;

const OrderButtonText = styled.Text`
  color: white;
  font-size: 24px;
  text-transform: uppercase;
  font-weight: bold;
`;

export {
  ProductImageBackground,
  ProductImageFilter,
  ProductName,
  ProductPrice,
  OrderButtonContainer,
  OrderButtonText,
};
