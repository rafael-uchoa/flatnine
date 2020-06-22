import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import categories from '../../constants/categories';

const InstagramFeed: React.FC = () => {
  const navigation = useNavigation();

  function navigateToCategory(category: any) {
    navigation.navigate('Category', category);
  }

  return (
    <View>
      <Text style={styles.header}>Categories</Text>
      <FlatList
        horizontal
        data={categories}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToCategory(item.key)}>
            <ImageBackground source={item.image} style={styles.image}>
              <View style={styles.imageFilter}>
                <Text style={styles.imageText}>{item.key}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default InstagramFeed;
