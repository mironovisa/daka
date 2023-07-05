import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { Product } from "../../models";
import styles from "./styles";
import FavoriteProductsItem from "../../components/FavoriteProductsItem";
import FilteringTabs from "../../components/FilteringTabs";

type MainProductsProps = {
  mainProducts: Product[];
  isMainPage?: boolean;
};

function Index({ mainProducts, isMainPage = true }: MainProductsProps) {
  return (
    <View>
      {isMainPage ? <FilteringTabs /> : null}

      <FlatList
        data={mainProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <FavoriteProductsItem key={item.id} product={item} />
        )}
      />
    </View>
  );
}

export default Index;
