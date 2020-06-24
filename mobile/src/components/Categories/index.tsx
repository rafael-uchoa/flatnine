import React from 'react';
import { View } from 'react-native';
import { Header, CategoriesContainer } from './styles';

import categories from '../../constants/categories';
import CategoryCard from './CategoryCard';

const Categories: React.FC = () => (
  <View>
    <Header>Categories</Header>
    <CategoriesContainer>
      <CategoryCard category={categories[0].key} image={categories[0].image} />
      <CategoryCard category={categories[1].key} image={categories[1].image} />
    </CategoriesContainer>
    <CategoriesContainer>
      <CategoryCard category={categories[2].key} image={categories[2].image} />
      <CategoryCard category={categories[3].key} image={categories[3].image} />
    </CategoriesContainer>
  </View>
);

export default Categories;
