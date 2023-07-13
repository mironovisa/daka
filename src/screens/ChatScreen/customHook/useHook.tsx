import { useState, useEffect } from "react";
import { Auth, DataStore } from "aws-amplify";
import { Chat } from "../../../models";
import { API, graphqlOperation } from "aws-amplify";
import { createChat } from "../../../graphql/mutations";

export default function useHook(productId, sellerId) {
  const [currentUserId, setCurrentUserId] = useState("");
  const [chat, setChat] = useState("");

  useEffect(() => {
    const fetchCurrentUserId = async () => {
      try {
        const result = await Auth.currentAuthenticatedUser();
        const currentUserIdFetched = result.attributes.sub;
        console.log("Hook fetched currentID:", currentUserIdFetched);
        setCurrentUserId(currentUserIdFetched);
      } catch (error) {
        console.log("Error fetching current user ID:", error);
      }
    };

    fetchCurrentUserId();
  }, []);

  const createChatIfNoChats = async () => {
    try {
      const input = {
        buyerId: currentUserId,
        sellerId: sellerId,
        productId: productId,
      };

      const newChat = await API.graphql(
        graphqlOperation(createChat, { input })
      );

      setChat(newChat.data.createChat.id);
      console.log("New Chat:", newChat.data.createChat.id);
    } catch (error) {
      console.log("Error creating new chat:", error);
    }
  };

  //   useEffect(() => {
  //     if (currentUserId && sellerId && productId) createChatIfNoChats();
  //   }, [currentUserId, sellerId, productId]);

  useEffect(() => {
    const findOrCreateChat = async () => {
      try {
        console.log("Finding or creating chat...");
        console.log("Current User ID:", currentUserId);
        console.log("Seller ID:", sellerId);

        const result = await API.graphql(
          graphqlOperation(
            `query GetChats {
              listChats(
                filter: {
                  buyerId: { eq: "${currentUserId}" }
                  sellerId: { eq: "${sellerId}" }
                  productId: { eq: "${productId}" }
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
        console.log("Chats:", chats);

        if (chats.length === 0) {
          console.log("No chats found. Creating a new chat...");
          await createChatIfNoChats();
        } else {
          const chatId = chats[0].id;
          console.log("Chat found:", chatId);
          if (!chat) {
            setChat(chatId);
          }
        }
      } catch (error) {
        console.log("Error fetching chats:", error);
      }
    };

    if (!chat) {
      findOrCreateChat();
    }
  }, [currentUserId, sellerId, productId]);

  return { currentUserId, chat };
}
