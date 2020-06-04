import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import styles from './styles';

import logo from '../../assets/logo.png';
import guitar from '../../assets/guitar.png';
import drums from '../../assets/drums.png';
import keyboard from '../../assets/keyboard.png';
import recording from '../../assets/recording.png';

const categories = [
  { key: 'Guitars', image: guitar },
  { key: 'Drums', image: drums },
  { key: 'Keys', image: keyboard },
  { key: 'Recording', image: recording },
];

const Main: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.headerLogo} />
        <Text style={styles.headerText}>Home</Text>
        <Text style={styles.headerText}>+</Text>
      </View>

      <View style={styles.categories}>
        <Text style={styles.headerText}>Categories</Text>
        <FlatList
          horizontal
          data={categories}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <ImageBackground
                source={item.image}
                imageStyle={{ borderRadius: 15 }}
                style={styles.categoriesImage}
              >
                <View style={styles.categoriesImageFilter}>
                  <Text style={styles.categoriesImageText}>{item.key}</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Main;
