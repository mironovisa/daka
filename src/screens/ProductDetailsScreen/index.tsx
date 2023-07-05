import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Product } from "../../models";
import ImageCarousel from "../../components/ImageCarousel";
import DetailsTextBox from "../../components/DetailsTextBox";
import SellerInfo from "../../components/SellerInfo";
import MapInfo from "../../components/MapInfo";
import CallAndChatButtons from "../../components/CallAndChatButtons";
import { DataStore } from "aws-amplify";

const { width, height } = Dimensions.get("window");

function Index(props) {
  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    if (!props.route.params?.id) return;
    const fetchProducts = async () => {
      const results = await DataStore.query(Product, props.route.params.id);
      setProduct(results);
    };
    fetchProducts();
  }, [props.route.params.id]);

  if (!product) {
    return <ActivityIndicator />;
  }

  const renderItem = ({ item, index }) => {
    switch (item.type) {
      case "carousel":
        return <ImageCarousel images={item.images} key={`carousel-${index}`} />;
      case "detailsTextBox":
        return (
          <DetailsTextBox
            price={item.price}
            name={item.name}
            description={item.description}
            key={`detailsTextBox-${index}`}
          />
        );
      case "callAndChatButtons":
        return (
          <CallAndChatButtons
            key={`callAndChatButtons-${index}`}
            userId={item.userId}
          />
        );
      case "sellerInfo":
        return (
          <SellerInfo averageRating={item.rating} key={`sellerInfo-${index}`} />
        );
      case "mapInfo":
        return <MapInfo key={`mapInfo-${index}`} />;
      default:
        return null;
    }
  };

  const data = [
    { type: "carousel", images: product.images },
    {
      type: "detailsTextBox",
      price: product.price,
      name: product.name,
      description: product.description,
    },
    { type: "callAndChatButtons", userId: product.userId },
    { type: "sellerInfo", rating: product.rating },
    { type: "mapInfo" },
  ];

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${item.type}-${index}`}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default Index;
