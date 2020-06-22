import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Header,
  CategoryImage,
  CategoryImageFilter,
  CategoryImageText,
} from './styles';

import categories from '../../constants/categories';

const Categories: React.FC = () => {
  const navigation = useNavigation();

  function navigateToCategory(category: any) {
    navigation.navigate('Category', category);
  }

  return (
    <View>
      <Header>Categories</Header>
      <FlatList
        horizontal
        data={categories}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToCategory(item.key)}>
            <CategoryImage source={item.image}>
              <CategoryImageFilter>
                <CategoryImageText>{item.key}</CategoryImageText>
              </CategoryImageFilter>
            </CategoryImage>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Categories;
