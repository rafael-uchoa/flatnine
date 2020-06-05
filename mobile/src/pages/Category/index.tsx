import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';
import api from '../../services/api';
import guitar from '../../assets/guitar.png';

import Header from '../../components/Header';

const Category: React.FC = () => {
  const [products, setProducts] = useState();

  const navigation = useNavigation();
  const route = useRoute();
  const category = String(route.params);

  async function loadCategory() {
    const res = await api.get(category);
    setProducts(res.data);
  }

  useEffect(() => {
    loadCategory();
  }, []);

  return (
    <View style={styles.container}>
      <Header title={category} />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>{category}</Text>
      </TouchableOpacity>
      <View style={styles.productsContainer}>
        <FlatList
          data={products}
          keyExtractor={(product) => String(product._id)}
          renderItem={({ item: product }) => (
            <TouchableOpacity
              style={styles.productContainer}
              onPress={() => console.log('Product!')}
            >
              <Image source={guitar} style={styles.productImage} />
              <View style={styles.productTextContainer}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>
                  {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(product.price)}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Category;
