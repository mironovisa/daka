import React, {useEffect, useState} from 'react'
import {View, Text, FlatList} from "react-native"
import products from '../../../assets/products'
import { Product } from '../../models'
import UsersOwnAds from "../../components/UsersAds/UsersOwnAds"
import UserProfileHeader from "../../components/UserProfileHeader"


function Index(){
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([])
  useEffect(() => {
    setFavoriteProducts(products)
    return () => {
      setFavoriteProducts([])
    }
  },[])
  return (
    <View style={{ padding: 13, }}>
      <UserProfileHeader />
      <FlatList
        data={favoriteProducts}
        renderItem={({ item, index }) => (
          <UsersOwnAds product={item} />
        )}
        showsVerticalScrollIndicator={false}
      />
  </View>   
  )
}

export default Index