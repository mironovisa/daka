import React, {useEffect, useState} from 'react'
import { View, Text, ScrollView } from 'react-native'
import productArray from '../../../assets/products';
import { Product } from '../../models';
import CategoryMainProducts from "../../components/CategoryMainProducts"
import FilteringCategory from "../../components/FilteringCategory"
function Index(props) {
    const [products, setProducts] = useState<Product[]>([])
    const [category, setCategory] = useState<Category>(props.route.params.category)
    useEffect(() => {
      setProducts(productArray)
    }, [])
    return (<View>
  <FilteringCategory category={category} />

    <CategoryMainProducts mainProducts={products} isMainPage={false} />

</View>
)

 }
export default Index