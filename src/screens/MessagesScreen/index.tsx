import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { Message, Chat } from "../../models";
import { DataStore, API, graphqlOperation, Auth } from "aws-amplify";
import MessageItem from "../../components/MessageItem";

function Index() {
  const [chats, setChats] = useState([]);
  const [currentUserId, setCurrentUserId] = useState("");

  const fetchCurrentUser = async () => {
    const result = await Auth.currentAuthenticatedUser();
    console.log("Fetched user from Messages Screen", result.attributes.sub);
    setCurrentUserId(result.attributes.sub);
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);
  const fetchChats = async () => {
    try {
      const result = await API.graphql(
        graphqlOperation(
          `query GetChats {
            listChats(
              filter: {
                or: [
                  { buyerId: { eq: "${currentUserId}" } },
                  { sellerId: { eq: "${currentUserId}" } }
                ]
              }
            ) {
              items {
                id
                buyerId
                sellerId
                productId
              }
            }
          }`
        )
      );
      const chats = result.data.listChats.items;

      const uniqueChats = new Map();
      chats.forEach((chat) => {
        const chatKey = `${chat.productId}-${chat.sellerId}-${chat.buyerId}`;
        if (!uniqueChats.has(chatKey)) {
          uniqueChats.set(chatKey, chat);
        }
      });

      const filteredChats = Array.from(uniqueChats.values());

      setChats(filteredChats);
    } catch (error) {
      console.log("Error fetching chats:", error);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  if (!chats) {
    return <ActivityIndicator />;
  }

  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => <MessageItem item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}
export default Index;

// const fetchedChats = await DataStore.query(Chat, (c) =>
//   c.or((c) => [c.buyerId.eq(currentUserId), c.sellerId.eq(currentUserId)])
// );
// console.log("Fetched a chat:", fetchedChats);
// setChats(fetchedChats);

{
  /* <Text>Chat ID: {chat.id}</Text>
<Text>Seller ID: {chat.sellerId}</Text>
<Text>Buyer ID: {chat.buyerId}</Text>
<Text>Product ID: {chat.productId}</Text> */
}
