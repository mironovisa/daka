import React, {useEffect, useState} from 'react'
import { View, Text, ScrollView} from 'react-native'
import styles from './styles'
import { AntDesign } from '@expo/vector-icons';
import productArray from '../../../assets/products';
import { Product } from '../../models';
import FavoriteProducts from '../../components/FavoriteProducts'
import MainProducts from "../../components/MainProducts"
import CategoryFilter from "../../components/CategoryFilter"
const index = () => {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    setProducts(productArray)
  },[])
  return (
    <ScrollView style={{backgroundColor: "white", height: "100%"}}>
      {/* <FavoriteProducts />  */}
<CategoryFilter/>
      <MainProducts mainProducts={products} />
   </ScrollView>
  )
}

export default index