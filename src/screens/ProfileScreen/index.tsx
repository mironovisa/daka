import React, { useEffect, useState } from "react";
import { View } from "react-native";
import UserProfileHeader from "../../components/UserProfileHeader";
import { DataStore, Auth, API, graphqlOperation } from "aws-amplify";
import { Product } from "../../models";

function Index() {
  const [currentUserId, setCurrentUserId] = useState("");
  const [usersItems, setUsersItems] = useState([]);
  const fetchCurrentUserId = async () => {
    const result = await Auth.currentAuthenticatedUser();
    setCurrentUserId(result.attributes.sub);
  };
  useEffect(() => {
    fetchCurrentUserId();
  }, []);
  const findUserItems = async () => {
    const result = await API.graphql(
      graphqlOperation(`
        query GetUserProducts {
          listProducts(filter: {
            userSub: { eq: "${currentUserId}" }
          }) {
            items {
              id
              images
              name
              price
              createdAt
            }
          }
        }
      `)
    );
    setUsersItems(result.data.listProducts.items);
    console.log(result.data.listProducts);
  };
  useEffect(() => {
    if (currentUserId) {
      findUserItems();
    }
  }, [currentUserId]);

  return (
    <View style={{ padding: 13 }}>
      <UserProfileHeader />
    </View>
  );
}

export default Index;
