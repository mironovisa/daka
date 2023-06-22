import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import productArray from '../../../assets/products';
import { Category } from '../../models';
import FavoriteProductsItem from '../../components/FavoriteProductsItem';
import {useNavigation} from "@react-navigation/native"
import categoriesData from '../../../assets/categories';
const index = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const navigation = useNavigation();
  useEffect(() => {
    setCategories(categoriesData)
    return () => {
      setCategories([])
    }
  }, []);

  // const renderCategories = () => {
  //   return categories.map((category, index) => (
  //     <TouchableOpacity
  //       key={index}
  //       style={styles.categoryItem}
  //       onPress={() => handleCategoryPress(category)}
  //     >
  //       <Image source={category.icon} style={styles.categoryIcon} />
  //       <Text style={styles.categoryTitle}>{category.name}</Text>
  //     </TouchableOpacity>
  //   ));
  // };

  // const handleCategoryPress = (category: { icon: any; title: string }) => {
  //   navigation.navigate("CategoryFiltering", {category:item});
  //   console.log('Pressed category:', category.title);
  // };

  return (
    <ScrollView
      bounces={true}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
  
    >
       {categories.map((item:Category) => (
            <TouchableOpacity onPress={() => navigation.navigate("CategoryFiltering",{category:item})} style={styles.center}>
                <Image source={item.icon} style={styles.categoryIcon} />
                <Text style={{fontSize:11, color:'#767575',fontWeight:'bold'}}>{item.name}</Text>
            </TouchableOpacity>
        ))}
    </ScrollView>
  );
};

export default index;
