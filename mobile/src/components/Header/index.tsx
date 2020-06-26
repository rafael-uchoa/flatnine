import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { HeaderContainer, HeaderLogo, HeaderText } from './styles';

import logo from '../../assets/logo.png';

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  const navigation = useNavigation();

  function navigateToMain() {
    navigation.navigate('Main');
  }

  function openDrawer() {
    navigation.navigate('Drawer');
  }

  return (
    <HeaderContainer>
      <TouchableOpacity onPress={navigateToMain}>
        <HeaderLogo source={logo} />
      </TouchableOpacity>
      <HeaderText>{title}</HeaderText>
      <Feather name="menu" onPress={openDrawer} size={32} color="white" />
    </HeaderContainer>
  );
};

export default Header;
