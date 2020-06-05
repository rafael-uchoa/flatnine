import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

import logo from '../../assets/logo.png';

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => (
  <View style={styles.header}>
    <Image source={logo} style={styles.headerLogo} />
    <Text style={styles.headerText}>{title}</Text>
    <Text style={styles.headerText}>+</Text>
  </View>
);

export default Header;
