import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import productArray from '../../../assets/products';
import { Category } from '../../models';
import FavoriteProductsItem from '../../components/FavoriteProductsItem';
import { useNavigation } from '@react-navigation/native';
import categoriesData from '../../../assets/categories';

const Index = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    setCategories(categoriesData);
    return () => {
      setCategories([]);
    };
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        bounces={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {categories.map((item: Category, index: number) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('CategoryFiltering', { category: item })}
            style={styles.center}
            key={index}
          >
            <Image source={item.icon} style={styles.categoryIcon} />
            <Text style={{ fontSize: 11, color: '#767575', fontWeight: 'bold' }}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Index;
