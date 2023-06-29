import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, RefreshControl, ScrollView } from 'react-native';
import styles from './styles';
import productArray from '../../../assets/products';
// import { Product } from '../../models';
import FavoriteProducts from '../../components/FavoriteProducts';
import MainProducts from '../../components/MainProducts';
import CategoryFilter from '../../components/CategoryFilter';
import { Product } from "../../models"
import { DataStore } from 'aws-amplify';
import '@azure/core-asynciterator-polyfill'

const HomeScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchProducts = async () => {
    try {
      const results = await DataStore.query(Product);
      setProducts(results);
    } catch (error) {
      console.log('Error fetching products:', error);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchProducts();
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchProducts();
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="blue" style={styles.loadingIndicator} />
      ) : (
        <ScrollView
          refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />}
        >
          {/* <FavoriteProducts /> */}
          <CategoryFilter />
          <MainProducts mainProducts={products} />
        </ScrollView>
      )}
    </View>
  );
};

export default HomeScreen;