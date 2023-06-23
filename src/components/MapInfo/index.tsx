import React from 'react'
import { View, Text, Dimensions } from "react-native"
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'
const {width, height} = Dimensions.get("window")
function index() {
  return (
      <View style={{padding: 20,}}>
          <MapView provider={PROVIDER_GOOGLE}
              style={{height: height*0.2, borderRadius: 12, }}
              initialRegion={{
    latitude: 31.66926 ,
    longitude: 34.57149,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
          }}
          />
          <View>
              <Text style={{paddingHorizontal:16}}>Ashkelon, Yafe Nof, 4</Text>
          </View>
  </View>
  )
}

export default index