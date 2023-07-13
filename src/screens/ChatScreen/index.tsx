import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { DataStore, API, graphqlOperation } from "aws-amplify";
import { Product, Message, User } from "../../models";
import useHook from "./customHook/useHook";

function Example(props) {
  const [messages, setMessages] = useState([]);
  const currentUserId = props.route.params.currentUserId;
  const chatId = props.route.params.chatId;

  useEffect(() => {
    console.log("Chatscreen check for chat", chatId);
  }, []);

  const fetchMessages = async () => {
    try {
      const result = await API.graphql(
        graphqlOperation(`
          query GetMessages {
            listMessages(filter: {
              chatMessagesId: {
                eq: "${chatId}"           }
            }) {
              items {
                id
                message
                messageUserId
                user {
                  id
                }
                createdAt
              }
            }
          }
        `)
      );

      const fetchedMessages = result.data.listMessages.items.map((item) => ({
        ...item,
        _id: item.id,
        text: item.message,
        user: {
          _id: item.messageUserId,
        },
      }));
      setMessages(fetchedMessages);
      console.log("Messages:", fetchedMessages);
    } catch (error) {
      console.log("Error fetching messages:", error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const onSend = useCallback(
    async (messages = []) => {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages)
      );
      const { user, text } = messages[0];
      if (chatId) {
        try {
          const newMessage = await DataStore.save(
            new Message({
              message: text,
              chatMessagesId: chatId,
              messageUserId: currentUserId,
            })
          );
          console.log("New message created", newMessage);
        } catch (error) {
          console.log("Onsend", error);
        }
      }
    },
    [chatId, currentUserId]
  );

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: currentUserId,
      }}
    />
  );
}

export default Example;

// useEffect(() => {
//     if (currentUserId) {
//       setMessages([
//         {
//           _id: 1,
//           text: "Hello developer",
//           createdAt: new Date(),
//           user: {
//             _id: currentUserId,
//           },
//         },
//         {
//           _id: 2,
//           text: "Developer",
//           createdAt: new Date(),
//           user: {
//             _id: 2,
//           },
//         },
//       ]);
//     }
//   }, [currentUserId]);
