import React from 'react'
import {View, Text, TouchableOpacity} from "react-native"
import styles from "./styles"
function index() {

    return (
      <View>
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
            </View>
            </View>
  )
}

export default index