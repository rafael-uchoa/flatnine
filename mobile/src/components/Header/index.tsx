import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, HeaderLogo, HeaderText } from './styles';

import logo from '../../assets/logo.png';

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  const navigation = useNavigation();

  function navigateToMain() {
    navigation.navigate('Main');
  }

  return (
    <Container>
      <TouchableOpacity onPress={navigateToMain}>
        <HeaderLogo source={logo} />
      </TouchableOpacity>
      <HeaderText>{title}</HeaderText>
      <HeaderText>+</HeaderText>
    </Container>
  );
};

export default Header;
