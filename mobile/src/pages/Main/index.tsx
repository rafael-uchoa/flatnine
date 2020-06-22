import React from 'react';
import { View } from 'react-native';
import styles from './styles';

import Header from '../../components/Header';
import Categories from '../../components/Categories';
import InstagramFeed from '../../components/InstagramFeed';

const Main: React.FC = () => (
  <View style={styles.container}>
    <Header title="Home" />
    <Categories />
    <InstagramFeed />
  </View>
);

export default Main;
