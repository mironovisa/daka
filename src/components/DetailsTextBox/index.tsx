import React from 'react'
import {View, Text, Dimensions} from "react-native"
import { FontAwesome5 } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
const {width, height} = Dimensions.get("window")
function index({price, name, description}:{price:number, name:string, description?:string}) {
  return (
      <View>
          <View>
              <View style={{flexDirection: "row", alignItems:"center", padding: 15, justifyContent: "space-between"}}>
                  <View style={{flexDirection: "row", alignItems: "center"}}>
                      <View><Text style={{ fontSize: 24, fontWeight: "bold" }}>{price}</Text></View>
                      <View><FontAwesome5 name="shekel-sign" size={20} color="black" /></View></View>
                  <View style={{flexDirection: "row", alignItems: "center",  borderRadius: 10, backgroundColor: "#e5e5e5"}}>
                      <View style={{padding: 10}}><Text style={{color: "darkgrey"}}>14</Text></View>
                      <View style={{padding: 3}}><AntDesign name="eyeo" size={24} color="darkgrey" /></View>
              
                  </View>
                  </View>
              <View style={{paddingLeft: 15}}>
                  <Text style={{fontSize: 19, fontWeight: "bold"}}>{name}</Text>
          </View>
          </View>
       
          <View style={{width: width, alignItems: "center", justifyContent: "center", padding: 9,  }}><View
              style={{padding: 20,backgroundColor: "#e5e5e5", borderRadius: 10,}}><Text>{description}</Text></View></View>
    </View>
  )
}

export default index