import React, {useEffect, useState} from 'react'
import {View, Text, FlatList} from "react-native"
import products from '../../../assets/products'
import { Product } from '../../models'
import FavoriteItem from "../../components/FavoriteItem"
function index() {
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([])
  useEffect(() => {
    setFavoriteProducts(products)
    return () => {
      setFavoriteProducts([])
    }
  },[])
  return (
      <View style={{padding: 13,}}>
      <FlatList
        data={favoriteProducts}
        renderItem={({ item, index }) => (
          <FavoriteItem product={item}/>
        )}
        showsVerticalScrollIndicator={false}
      />
  </View>
  )
}

export default index