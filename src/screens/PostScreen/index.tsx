import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { FavoriteProduct, Product } from "../../models";
import FavoriteItem from "../../components/FavoriteItem";
import { DataStore, Auth } from "aws-amplify";

function Index() {
  const [favoriteProducts, setFavoriteProducts] = useState<FavoriteProduct[]>([]);
  const [fetchedProducts, setFetchedProducts] = useState<Product[]>([]);

  const fetchFavoriteProducts = async () => {
    const userData = await Auth.currentAuthenticatedUser();
    console.log("Fetching favorite products...");
    DataStore.query(FavoriteProduct, (fp) => fp.userSub.eq(userData.attributes.sub))
      .then((data) => {
        console.log("Favorite products fetched successfully:", data);
        setFavoriteProducts(data);
      })
      .catch((error) => {
        console.log("Error fetching favorite products:", error);
      });
  };

  useEffect(() => {
    const subscription = DataStore.observe(FavoriteProduct).subscribe((msg) => {
      console.log("Received a subscription message:", msg);
      fetchFavoriteProducts();
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (favoriteProducts.length === 0) {
      // Return early if there are no favorite products
      return;
    }

    const fetchProducts = async () => {
      const productIds = Array.from(new Set(favoriteProducts.map((favProd) => favProd.productID))); // Use Set to remove duplicates
      console.log("Product IDs:", productIds);

      try {
        const products = await Promise.all(
          productIds.map(async (productId) => {
            const foundProducts = await DataStore.query(Product, (p) => p.id.eq(productId));
            return foundProducts[0]; // Get the first item from the array
          })
        );
        console.log("Fetched products:", products);

        setFetchedProducts(products);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [favoriteProducts]);

  if (favoriteProducts.filter((fp) => !fp.product).length !== 0)
    return <ActivityIndicator />;

  console.log("Rendering favorite products:", favoriteProducts);

  return (
    <View style={{ padding: 13 }}>
      <FlatList
        data={fetchedProducts}
        keyExtractor={(item) => item.id} // Add keyExtractor to specify a unique key for each item
        renderItem={({ item, index }) => <FavoriteItem key={item.id} product={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default Index;
