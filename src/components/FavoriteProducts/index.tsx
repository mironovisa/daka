import React, {useEffect, useState} from 'react'
import { View, Text, ScrollView} from 'react-native'
import styles from './styles'
import { AntDesign } from '@expo/vector-icons';
import productArray from '../../../assets/products';
import { Product } from '../../models';
import  FavoriteProductsItem  from '../../components/FavoriteProductsItem'
const index = () => {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    setProducts(productArray)
  },[])
  return (
      <View style={styles.productsContainer}>
      <View style={styles.titleProducts}>
        <Text style={styles.topicText}> New!</Text>
      <View style={{flexDirection: "row", alignItems: "center"}}>
          <Text style={styles.showMoreTitle}>Show more</Text>
          <AntDesign name="arrowright" size={20} color="#F24E61" />
        </View>
      </View>
      <ScrollView bounces={true} horizontal={true} showsHorizontalScrollIndicator={false}>
        {products.map((item) => {
          return <FavoriteProductsItem key={item.id} product={item}/>
})}
      </ScrollView>
    </View>
  )
}

export default index