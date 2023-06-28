import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await DataStore.query(Product);
        setProducts(results)
      } catch (error) {
        console.log('Error fetching products:', error);
      }
    }
    fetchProducts(); 
  }, []);
  
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       const product = await DataStore.query(Product, "30f86b76-0988-4406-a352-4b3e6e40d355");
  //       setProducts([product]); // Wrap the product in an array to match the useState type
  //     } catch (error) {
  //       console.log('Error fetching product:', error);
  //     }
  //   };
  
  //   fetchProduct();
  // }, []);
  

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* <FavoriteProducts /> */}
      <CategoryFilter />
      {products && products.length > 0 ? (
        <MainProducts mainProducts={products} />
      ) : (
        <ActivityIndicator/> // or some other placeholder
      )}
    </View>
  );
};

export default HomeScreen;
