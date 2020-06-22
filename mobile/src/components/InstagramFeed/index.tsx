import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { Header, InstagramImage, InstagramImageFilter } from './styles';

import instagram from '../../constants/instagram';

const InstagramFeed: React.FC = () => (
  <View>
    <Header>Instagram Feed</Header>
    <FlatList
      horizontal
      data={instagram}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <InstagramImage source={item.image}>
            <InstagramImageFilter />
          </InstagramImage>
        </TouchableOpacity>
      )}
    />
  </View>
);

export default InstagramFeed;
