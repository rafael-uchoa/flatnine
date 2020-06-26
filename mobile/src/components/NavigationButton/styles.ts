import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const SCREEN_WIDTH = `${Dimensions.get('window').width - 20}px`;

const ButtonContainer = styled.View`
  width: ${SCREEN_WIDTH};
  justify-content: center;
  align-items: center;
  background-color: #25262a;
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
