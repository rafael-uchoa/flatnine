import styled from 'styled-components/native';
import { SCREEN_WIDTH, FLATNINE_GREY } from '../../constants/styles';

const ButtonContainer = styled.View`
  width: ${SCREEN_WIDTH};
  justify-content: center;
  align-items: center;
  background-color: ${FLATNINE_GREY};
  border-radius: 7px;
  margin-bottom: 20px;
  padding: 10px 0;
`;

const ButtonText = styled.Text`
  font-size: 24px;
  color: white;
  text-transform: capitalize;
`;

export { ButtonContainer, ButtonText };
