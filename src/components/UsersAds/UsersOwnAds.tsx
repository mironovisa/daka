import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { Product } from '../../models';
import { Feather, Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

type FavoriteItemProps = {
  product: Product;
};

function Index({ product }: FavoriteItemProps) {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: '#e5e5e5', margin: 5, padding: 5, borderRadius: 10, }}>
      <View style={{ flexDirection: 'row', width: '100%' }}>
      <TouchableOpacity onPress={()=>navigation.navigate("ProductDetails", {product:product})}>
        <View>
          <Image style={{ width: width * 0.3, height: width * 0.3, borderRadius: 10, }} source={{ uri: product.image }} />
          </View>
        </TouchableOpacity>
        
        <View style={{ marginLeft: 10, }}>
        <TouchableOpacity onPress={()=>navigation.navigate("ProductDetails", {product:product})}>
          <Text style={{ fontSize: 16, fontWeight: 'normal', lineHeight: 20, width: 200, height: 50 }} numberOfLines={2}>
            {product.name}
                  </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
            <Text style={{ marginRight: 5 }}>{product.city}</Text>
                      <Text style={{ marginRight: 5, fontWeight: "bold" }}>{product.price} ₪</Text>
            </View></TouchableOpacity>
            
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                      <Text style={{ marginRight: 5, fontWeight: "normal" }}>{product.date} </Text>
                      </View>
            <View style={{ marginTop: 5,  }}>
                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-around", marginRight: 5, }}>
                      <Ionicons name="share-social-outline" size={24} color="blue" />
              <Ionicons name="trash-bin-sharp" size={24} color="brown" />
                
              </View>
            </View>
                  
                  
        </View>
      </View>
    </View>
  );
}

export default Index;
