import styled from 'styled-components/native';
import { STATUSBAR_HEIGHT, FLATNINE_BLACK } from '../../constants/styles';

const Container = styled.View`
  flex: 1;
  padding: 0 10px;
  padding-top: ${STATUSBAR_HEIGHT};
  background-color: ${FLATNINE_BLACK};
`;

const ProductsContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export { Container, ProductsContainer };
