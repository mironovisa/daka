import React, { useState } from 'react';
import { Product } from '../../models';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Auth, DataStore } from 'aws-amplify';
import { FavoriteProduct } from '../../models';

type productProps = {
  product: Product;
  // prodType: string;
};

const index = ({ product }: productProps) => {
    if (!product) {
        // Handle the case when product is null or undefined
        return null; // or render an error message or loading state
      }
  const [like, setLike] = useState(false);
  const navigation = useNavigation();
  const handleLike = () => {
    setLike(!like);
  };
  const addToCart = async () => {
    const userData = await Auth.currentAuthenticatedUser();
    console.log('UserData', userData);
    if (!userData) return;
    const newFavoriteProduct = new FavoriteProduct({
      userSub: userData.attributes.sub,
      productID: product.id,
    });
    await DataStore.save(newFavoriteProduct);
  };

  // Format the createdAt value
  const formattedDate = new Date(product.createdAt).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const createdAt = formattedDate.split(' ').join(' ');

  const cityText =
    product.city.length > 8 ? `${product.city.slice(0, 7)}...` : product.city;
  return (
    <TouchableOpacity style={styles.favorite}>
      <View style={styles.favoriteView}>
        <Image source={{ uri: product.images[0] }} resizeMode="cover" style={styles.favoriteImage} />
        <View>
          <Text style={styles.productName} numberOfLines={2} ellipsizeMode="tail">
            {product.name}
          </Text>
        </View>
        <View style={styles.cityPriceLabel}>
          <View>
            <Text style={styles.textCity}>{cityText}</Text>
          </View>
          <View>
            <Text style={styles.textPrice}>{product.price} ₪</Text>
          </View>
        </View>
        <View style={styles.bottomLine}>
          <View>
            <Text style={styles.textDate}>{createdAt}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => addToCart()}>
              {like ? (
                <FontAwesome name="heart" size={17} color="red" />
              ) : (
                <Feather name="heart" size={17} color="gray" />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default index;
