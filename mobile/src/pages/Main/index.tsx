import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import categories from '../../constants/categories';
import Header from '../../components/Header';
import InstagramFeed from '../../components/InstagramFeed';

const Main: React.FC = () => {
  const navigation = useNavigation();

  function navigateToCategory(category: any) {
    navigation.navigate('Category', category);
  }

  return (
    <View style={styles.container}>
      <Header title="Home" />
      <View>
        <Text style={styles.sectionText}>Categories</Text>
        <FlatList
          horizontal
          data={categories}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigateToCategory(item.key)}>
              <ImageBackground
                source={item.image}
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
      <InstagramFeed />
    </View>
  );
};

export default Main;
