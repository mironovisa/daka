import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import styles from './styles';
import productArray from '../../../assets/products';
import { Product } from '../../models';
import FavoriteProducts from '../../components/FavoriteProducts';
import MainProducts from '../../components/MainProducts';
import CategoryFilter from '../../components/CategoryFilter';

const HomeScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(productArray);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* <FavoriteProducts /> */}
      <CategoryFilter />
      <MainProducts mainProducts={products} />
    </View>
  );
};

export default HomeScreen;
