import React, {useState, useEffect} from 'react'
import { View, ScrollView, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import filteringData from "../../../assets/filtering"
import { Category, Filtering } from '../../models'
import { Feather } from "@expo/vector-icons"
import { AntDesign } from '@expo/vector-icons'; 
import {useNavigation} from "@react-navigation/native"
const {width, height} = Dimensions.get('window')
function index({ category }: { category: Category }) {
    const navigation = useNavigation();
    const [filtering, setFiltering] = useState<Filtering[]>([])
    useEffect(() => {
        setFiltering(filteringData);
        return () => {
            setFiltering([]);
        }
    }, [])
    const handleCloseClick = () => {
        navigation.navigate("Home");
    }
  return (
      <ScrollView style={{marginHorizontal:10, marginVertical:10}}
          horizontal={true} bounces={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity onPress={handleCloseClick}>
          <View style={[{ backgroundColor: "#616161" }, styles.filteringBadge]}>
              <Image source={category.icon} style={{width: 14, height: 14, marginRight: 3,}} />
                  <Text style={{color:"white"}}>{category.name}</Text>  
                <AntDesign name="close" size={12} color="white" style={{padding: 5,}} />
              </View></TouchableOpacity>
          {filtering.map((item:Filtering) => (
              <View key={item.id} style={[{ backgroundColor: "#e5e5e5" }, styles.filteringBadge]}>
                  <Text>{item.name}</Text>  
                  <Feather style={{}} name="chevron-down" size={24}/>
              </View>
          ))}
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    filteringBadge: {
        flexDirection: 'row',
        paddingHorizontal: 10, height: height * 0.04,
        marginRight: 7,
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 20, 
        // backgroundColor: "#e5e5e5",
}
})

export default index;