import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ButtonContainer, ButtonText } from './styles';

interface Props {
  onPress(): void;
  name: string;
}

const NavigationButton: React.FC<Props> = ({ onPress, name }) => (
  <TouchableOpacity onPress={onPress}>
    <ButtonContainer>
      <ButtonText>{name}</ButtonText>
    </ButtonContainer>
  </TouchableOpacity>
);

export default NavigationButton;
