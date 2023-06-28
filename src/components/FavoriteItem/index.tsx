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

function FavoriteItem({ product }: FavoriteItemProps) {
  const navigation = useNavigation();

  console.log('Rendering FavoriteItem:', product.name);

  if (!product) {
    return null;
  }

  return (
    <View style={{ backgroundColor: '#e5e5e5', margin: 5, padding: 5, borderRadius: 10 }}>
      <View style={{ flexDirection: 'row', width: '100%' }}>
        <TouchableOpacity onPress={() => navigation.navigate("ProductDetails", { product })}>
          <View>
            <Image style={{ width: width * 0.3, height: width * 0.3, borderRadius: 10 }} source={{ uri: product.image }} />
          </View>
        </TouchableOpacity>

        <View style={{ marginLeft: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate("ProductDetails", { product })}>
            <Text style={{ fontSize: 16, fontWeight: 'normal', lineHeight: 20, width: 200, height: 50 }} numberOfLines={2}>
              {product.brand}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
              <Text style={{ marginRight: 5 }}>{product.city}</Text>
              <Text style={{ marginRight: 5, fontWeight: "bold" }}>{product.price} ₪</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
              <Text style={{ marginRight: 5, fontWeight: "normal" }}>{product.createdAt} </Text>
            </View>
          </TouchableOpacity>

          <View style={{ marginTop: 5 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginRight: 5 }}>
              <AntDesign name="heart" size={24} color="red" />
              <Ionicons name="call" color="green" size={24} style={{ marginRight: 5 }} />
              <Ionicons name="chatbox-ellipses-outline" size={24} style={{ marginRight: 5 }} />
              <Ionicons name="share-social-outline" size={24} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default FavoriteItem;