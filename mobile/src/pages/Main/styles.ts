import styled from 'styled-components/native';
import { STATUSBAR_HEIGHT, FLATNINE_BLACK } from '../../constants/styles';

const Container = styled.View`
  flex: 1;
  padding: 0 10px;
  padding-top: ${STATUSBAR_HEIGHT};
  background-color: ${FLATNINE_BLACK};
`;

export { Container };
