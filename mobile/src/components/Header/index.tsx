import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import logo from '../../assets/logo.png';

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('Main')}>
        <Image source={logo} style={styles.headerLogo} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
      <Text style={styles.headerText}>+</Text>
    </View>
  );
};

export default Header;
