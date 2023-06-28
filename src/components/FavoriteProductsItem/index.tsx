import React, {useState} from 'react'
import { Product } from '../../models'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import styles from './styles'
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Auth, DataStore } from 'aws-amplify';
import { FavoriteProduct } from '../../models';

type productProps = {
    product: Product,
    prodType:string,
}
const index = ({ product }: productProps) => {
    const [like, setLike] = useState(false);
    const navigation = useNavigation();
    const handleLike = () => {
        setLike(!like);
    }
    const addToCart = async () => {
        const userData = await Auth.currentAuthenticatedUser()
        console.log("UserData", userData);
        if (!userData) return;
        const newFavoriteProduct = new FavoriteProduct({
            userSub: userData.attributes.sub,
            productID: product.id,
        })
        await DataStore.save(newFavoriteProduct)
    }

    const cityText = product.city.length > 8 ? `${product.city.slice(0, 7)}...` : product.city;
  return (
<TouchableOpacity style={styles.favorite} onPress={()=>navigation.navigate("ProductDetails", {id:product.id})}>
<View style={styles.favoriteView}>

              <Image source={{ uri: product.image }} resizeMode="cover" style={styles.favoriteImage} />
              <View>
                  <Text style={styles.productName} numberOfLines={2} ellipsizeMode='tail'>{product.name}</Text>
                  </View>
              <View style={styles.cityPriceLabel}>
                  <View>
                      <Text style={styles.textCity}>{cityText}</Text>
                  </View>
           <View><Text style={styles.textPrice}>{product.price} ₪</Text></View>
              </View>
              <View style={styles.bottomLine}>
                  <View><Text style={styles.textDate}>{product.date}</Text></View>
                  <View><TouchableOpacity onPress={()=>addToCart()}>
{like?<FontAwesome name="heart" size={17} color="red" />:<Feather name="heart" size={17} color="gray" />}
                     
              </TouchableOpacity></View>
                  
              </View>
          </View>
      </TouchableOpacity>
  )
}

export default index