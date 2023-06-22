import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import productArray from '../../../assets/products';
import { Product } from '../../models';
import FavoriteProductsItem from '../../components/FavoriteProductsItem';

const categories = [
    
    { icon: require('../../../assets/agreement.png'), title: 'Real Estate' },
    { icon: require('../../../assets/car.png'), title: 'Transportation' },
    { icon: require('../../../assets/iphone.png'), title: 'Electronics' },
    { icon: require('../../../assets/jobsearch.png'), title: 'Jobs' },
    { icon: require('../../../assets/customerservice.png'), title: 'Services' },
    { icon: require('../../../assets/clotheshanger.png'), title: 'Fashion' },
    { icon: require('../../../assets/petcare.png'), title: 'Pets' },
];

const Index = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(productArray);
  }, []);

  const renderCategories = () => {
    return categories.map((category, index) => (
      <TouchableOpacity
        key={index}
        style={styles.categoryItem}
        onPress={() => handleCategoryPress(category)}
      >
        <Image source={category.icon} style={styles.categoryIcon} />
        <Text style={styles.categoryTitle}>{category.title}</Text>
      </TouchableOpacity>
    ));
  };

  const handleCategoryPress = (category: { icon: any; title: string }) => {
    // Handle the press event for each category here
    console.log('Pressed category:', category.title);
  };

  return (
    <ScrollView
      bounces={true}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.container}>
        <Text style={styles.headerText}>Hey!</Text>
        <View style={styles.categoryContainer}>{renderCategories()}</View>
      </View>
    </ScrollView>
  );
};

export default Index;
