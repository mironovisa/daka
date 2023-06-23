import React from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
const {width, height} = Dimensions.get("window")
function index() {
  return (
      <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10,}}>
          <View style={{ marginLeft: 18, width: width*0.4, backgroundColor: "#e5e5e5", borderRadius: 12, alignItems:"center", borderWidth: 1, borderColor: "darkgrey"  }}>
              <TouchableOpacity style={{flexDirection: "row", padding: 8,}}><Ionicons name="chatbox-ellipses-outline" size={20} color="blue" />
                  <Text style={{fontSize: 20, paddingLeft: 10,}}>Chat</Text></TouchableOpacity>
          </View>
          <View style={{ marginRight: 18, width: width*0.4, backgroundColor: "#e5e5e5", borderRadius: 12, alignItems:"center", borderWidth: 1, borderColor: "darkgrey" }}>
              <TouchableOpacity style={{flexDirection: "row", padding: 8,}}>
              <Feather name="phone-call" size={20} color="green" /><Text style={{fontSize: 20, paddingLeft: 10,}}>Call</Text></TouchableOpacity>
          </View>
</View>
  )
}

export default index