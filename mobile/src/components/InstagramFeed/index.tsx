import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styles from './styles';

import instagram from '../../constants/instagram';

const InstagramFeed: React.FC = () => (
  <View>
    <Text style={styles.header}>Instagram Feed</Text>
    <FlatList
      horizontal
      data={instagram}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <ImageBackground source={item.image} style={styles.image}>
            <View style={styles.imageFilter} />
          </ImageBackground>
        </TouchableOpacity>
      )}
    />
  </View>
);

export default InstagramFeed;
