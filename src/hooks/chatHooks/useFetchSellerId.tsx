import { useState, useEffect } from "react";
import { DataStore, Auth } from "aws-amplify";
import { Product, Chat, Message } from "../../models";
import { GiftedChat } from "react-native-gifted-chat";

const useChatLogic = (productId) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await Auth.currentAuthenticatedUser();
        const userId = result.attributes.sub;

        const fetchProduct = await DataStore.query(Product, productId);
        const sellerId = fetchProduct.userSub;

        const chats = await DataStore.query(Chat, (c) =>
          c.and((c) => [
            c.buyerId.eq(userId),
            c.sellerId.eq(sellerId),
            c.productId.eq(productId),
          ])
        );

        let chat = null;
        if (chats.length === 0) {
          chat = await DataStore.save(
            new Chat({
              sellerId: sellerId,
              productId: productId,
              buyerId: userId,
            })
          );
        } else {
          chat = chats[0]; // Use the first existing chat
        }

        // Fetch and set the messages for the chat
        const chatMessages = await DataStore.query(Message, (m) =>
          m.chatID("eq", chat.id)
        );
        setMessages(chatMessages);

        setLoading(false);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, [productId]);

  const onSend = async (newMessages = []) => {
    try {
      const messagesToSave = newMessages.map((message) =>
        DataStore.save(
          new Message({
            text: message.text,
            createdAt: message.createdAt,
            chatID: messages[0].chatID,
            user: message.user,
          })
        )
      );

      await Promise.all(messagesToSave);

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, newMessages)
      );
    } catch (error) {
      console.log("Error sending messages:", error);
    }
  };

  return { messages, loading, onSend };
};

export default useChatLogic;
