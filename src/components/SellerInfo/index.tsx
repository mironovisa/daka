import React, {useState} from 'react';
import { View, Text, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 
import { FontAwesome, Feather } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

function index({averageRating}:{averageRating:number}) {
    return (
      <TouchableOpacity>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
      <View>
        <View style={{paddingLeft: 15}}>
          <Image
            style={{ height: 50, width: 50, borderRadius: 20 }}
            source={{
              uri:
                'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
            }}
          />
              </View>
              <View style={{position: "absolute", left: 50, top: 40}}><AntDesign name="checkcircle" size={14} color="green" /></View>
              
          </View>
          <View>
              <View><Text style={{
                  fontWeight: "bold",
              paddingLeft: 8, marginTop: 8, fontSize: 16}}>John Riblich</Text>
              </View>
              {/* <View style={{flexDirection: "row", paddingHorizontal: 4, marginTop: 4,}}><FontAwesome name="star" size={20} color="orange" /><FontAwesome name="star" size={20} color="orange" /><FontAwesome name="star" size={20} color="orange" /><FontAwesome name="star-o" size={20} color="darkgrey" /><FontAwesome name="star-o" size={20} color="darkgrey" /></View> */}
              <View style={{flexDirection: "row", paddingHorizontal: 4, marginTop: 4,}}>
                  {[0,0,0,0,0].map((el, i)=>(<View style={{padding: 3}}><FontAwesome name="star" size={20} color={i<Math.floor(averageRating)?"#FFD200":"#DFDFDF"} key={i}  /></View>))}
              </View>
          </View></View>
          <View><Feather name="chevron-right" size={28} color="grey"/></View>
    </View></TouchableOpacity>
  );
}

export default index;
