import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  CategoryImage,
  CategoryImageFilter,
  CategoryImageText,
} from './styles';

interface Props {
  category: any;
  image: any;
}

const CategoryCard: React.FC<Props> = ({ category, image }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Category', category)}>
      <CategoryImage source={image}>
        <CategoryImageFilter>
          <CategoryImageText>{category}</CategoryImageText>
        </CategoryImageFilter>
      </CategoryImage>
    </TouchableOpacity>
  );
};

export default CategoryCard;
