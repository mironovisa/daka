import React, {
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
  useContext,
} from "react";
import { View, Text } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { DataStore, Auth, graphqlOperation, API } from "aws-amplify";
import { Product, Chat, Message, User } from "../../models";
import Spinner from "react-native-loading-spinner-overlay";
import { TryContext } from "../../context/tryoutCont";

function Example(props) {
  const [messages, setMessages] = useState([]);
  const [sellerId, setSellerId] = useState("");
  const [currentUsersId, setCurrentUserId] = useState("");
  const [sellerIdLoading, setSellerIdLoading] = useState(true);
  const [currentUserIdLoading, setCurrentUserIdLoading] = useState(true);
  const productId = props.route.params.productId;
  const [chat, setChat] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chatMessages, setChatMessages] = useState([]);
  const { currentUserId } = useContext(TryContext);

  useEffect(() => {
    const fetchSellerAndUserId = async () => {
      await fetchSellerId();
      await findCurrentUserId();
    };

    fetchSellerAndUserId();
  }, []);

  const fetchSellerId = async () => {
    try {
      const fetchProduct = await DataStore.query(Product, productId);
      const sellerFetchedId = fetchProduct.userSub;
      const sellerInnerId = await DataStore.query(User, (c) =>
        c.and((c) => [c.userSub.eq(sellerFetchedId)])
      );
      console.log("Seller inner id: " + sellerInnerId[0].id);
      setSellerId(sellerFetchedId);
      setSellerIdLoading(false);
      console.log("SellerId:", sellerFetchedId);
    } catch (error) {
      console.log("Error fetching seller ID:", error);
    }
  };
  const findCurrentUserId = () => {
    console.log("find current id func:", currentUserId);
  };

  //   const findCurrentUserId = async () => {
  //     try {
  //       const result = await Auth.currentAuthenticatedUser();
  //       const userSub = result.attributes.sub;
  //       const userId = await DataStore.query(User, (c) =>
  //         c.and((c) => [c.userSub.eq(userSub)])
  //       );
  //       setCurrentUserId(userId[0].id);
  //       setCurrentUserIdLoading(false);
  //       console.log("UserId returned from DB:", userId[0].id);
  //     } catch (error) {
  //       console.log("Error fetching current user ID:", error);
  //     }
  //   };

  //   const fetchChatMessages = async () => {
  //     try {
  //       //   const messages = await DataStore.query(Message, (m) =>
  //       //     m.chatMessagesId("eq", chat?.id)
  //       //     );
  //       const messages = await DataStore.query(Message, (c) =>
  //         c.and((c) => [c.chatMessagesId("eq", chat?.id)])
  //       );
  //       setChatMessages(messages);
  //     } catch (error) {
  //       console.log("Error fetching chat messages:", error);
  //     }
  //   };

  const fetchMessages = async () => {
    try {
      const result = await API.graphql(
        graphqlOperation(`
            query GetMessages {
              listMessages(filter: {
                chatMessagesId: {
                  eq: "542a7035-322c-4bf6-86a2-4e77441aae85"
                }
              }) {
                items {
                  id
                  message
                  user {
                    _id
                  }
                  createdAt
                }
              }
            }
          `)
      );

      const mosages = result.data.listMessages.items;
      setMessages(mosages);
      console.log("Messages:", mosages);
      // Do something with the fetched messages
    } catch (error) {
      console.log("Error fetching messages:", error);
    }
  };

  useEffect(() => {
    if (chat) {
      fetchMessages();
    }
  }, [chat]);

  const createChatIfNoChats = async () => {
    try {
      if (!chat && sellerId && currentUsersId && productId) {
        const newChat = await DataStore.save(
          new Chat({
            sellerId: sellerId,
            productId: productId,
            buyerId: currentUsersId,
          })
        );
        setChat(newChat);
        console.log("New Chat:", newChat);
      }
    } catch (error) {
      console.log("Error creating new chat:", error);
    }
  };

  useEffect(() => {
    console.log("BuyerId", currentUsersId);
    console.log("sellerId", sellerId);

    const findOrCreateChat = async () => {
      if (!sellerIdLoading && !currentUserIdLoading) {
        try {
          const chats = await DataStore.query(Chat, (c) =>
            c.and((c) => [
              c.buyerId.eq(currentUsersId || sellerId),
              c.sellerId.eq(sellerId || currentUsersId),
              c.productId.eq(productId),
            ])
          );

          console.log("Chats:", chats);

          if (chats.length === 0) {
            await createChatIfNoChats();
          } else {
            setChat(chats[0]); // Use the first existing chat
          }

          // Perform further actions with the retrieved chat items
        } catch (error) {
          console.log("Error fetching chats:", error);
        }
      }
    };

    findOrCreateChat();
  }, [
    currentUsersId,
    sellerId,
    productId,
    currentUserIdLoading,
    sellerIdLoading,
  ]);

  const messagesFromDb = async () => {};

  useEffect(() => {}, []);

  const onSend = useCallback(
    async (messages = []) => {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages)
      );
      const { user, text } = messages[0];
      if (chat) {
        try {
          const newMessage = await DataStore.save(
            new Message({
              message: text,
              chatMessagesId: chat.id,
              messageUserId: currentUsersId,
            })
          );
          console.log("New message created", newMessage);
        } catch (error) {
          console.log("Onsend", error);
        }
      }
    },
    [chat, currentUsersId]
  );

  if (sellerIdLoading || currentUserIdLoading) {
    return <Spinner visible={true} />;
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: currentUsersId,
      }}
    />
  );
}

export default Example;
