import React, {useState} from 'react'
import { View, Text, ScrollView } from "react-native"
import { Product } from '../../models'
import ImageCarousel from "../../components/ImageCarousel"
import DetailsTextBox from "../../components/DetailsTextBox"
import SellerInfo from "../../components/SellerInfo"
import MapInfo from "../../components/MapInfo"
import CallAndChatButtons from "../../components/CallAndChatButtons"
function index(props) {
    const [product, setProduct] = useState<Product>(props.route.params.product)
  return (
      <ScrollView>
      <ImageCarousel images={product.images} />
      <DetailsTextBox price={product.price} name={product.name} description={product.description} />
      <CallAndChatButtons/>
      <SellerInfo averageRating={product.rating} />
      <MapInfo/>
   </ScrollView>
  )
}

export default index