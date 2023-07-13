import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  Image,
} from "react-native";
import styles from "./styles";
import MainProducts from "../../components/MainProducts";
import CategoryFilter from "../../components/CategoryFilter";
import { Product, User } from "../../models";
import { DataStore, Auth } from "aws-amplify";
import "@azure/core-asynciterator-polyfill";
import { TryContext } from "../../context/tryoutCont";

const HomeScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [user, setUser] = useState("");
  const { currentUserId, setCurrentUserId } = useContext(TryContext);

  // const fetchOrCreateUser = async () => {
  //   const result = await Auth.currentAuthenticatedUser();
  //   const userSub = result.attributes.sub;
  //   const findUser = await DataStore.query(User, (c) =>
  //     c.and((c) => [c.userSub.eq(userSub)])
  //   );
  //   setCurrentUserId(findUser[0].id);
  //   console.log("User found", findUser);
  //   if (findUser.length === 0) {
  //     const newUser = await DataStore.save(
  //       new User({
  //         userSub: userSub,
  //       })
  //     );
  //     console.log("New user saved", newUser.id);
  //     setCurrentUserId(newUser.id);
  //   }
  // };

  // useEffect(() => {
  //   fetchOrCreateUser();
  // }, []);

  const fetchProducts = async () => {
    try {
      const results = await DataStore.query(Product);
      setProducts(results);
    } catch (error) {
      console.log("Error fetching products:", error);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  // const mainUserFindId = async () => {
  //   try {
  //     const userData = await Auth.currentAuthenticatedUser();
  //     const userSub = userData.attributes.sub;
  //     const existingUser = await DataStore.query(User, (u) =>
  //       u.userSub("eq", userSub)
  //     );
  //     if (existingUser.length > 0) {
  //       // Update lastSeen field
  //       const user = existingUser[0];
  //       user.lastSeen = new Date();
  //       await DataStore.save(user);
  //     } else {
  //       // Create new User
  //       const temporaryId = Math.random().toString();
  //       const language = "en"; // Replace with your logic to get the language from context
  //       const newUser = new User({
  //         userSub: userSub,
  //         tempId: temporaryId,
  //         lastSeen: new Date().toISOString(),
  //         language: language,
  //       });
  //       await DataStore.save(newUser);
  //     }
  //   } catch (error) {
  //     console.log("Error finding or creating user:", error);
  //   }
  // };

  // useEffect(() => {
  //   mainUserFindId();
  // }, []);

  useEffect(() => {
    setIsLoading(true);
    fetchProducts();
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchProducts();
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="blue"
          style={styles.loadingIndicator}
        />
      ) : (
        <View>
          <CategoryFilter />
          <MainProducts mainProducts={products} />
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={handleRefresh}
              />
            }
          >
            {/* <FavoriteProducts /> */}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
