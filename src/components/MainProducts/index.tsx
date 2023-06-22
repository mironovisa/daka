import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from "react-native"
import { Product } from '../../models'
import styles from './styles'
import FavoriteProductsItem from '../../components/FavoriteProductsItem'

type MainProductsProps = {
    mainProducts: Product[];
}

function Index({ mainProducts }: MainProductsProps) {
  return (
    <View style={styles.productsContainer}>
      <View style={styles.titleProducts}>
        <TouchableOpacity style={styles.recOrNear}>
          <Text style={styles.topicTitle}>Recommended</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.recOrNear}>
          <Text style={styles.topicTitle}>New</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.recOrNear}>
          <Text style={styles.topicTitle}>Near You</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={mainProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <FavoriteProductsItem key={item.id} product={item} />
        )}
      />
    </View>
  )
}

export default Index;
