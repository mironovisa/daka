import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { DataStore, API, graphqlOperation } from "aws-amplify";
import { Product, Message, User } from "../../models";
import AsyncStorage from "@react-native-async-storage/async-storage";
const API_KEY = "1f0300778amsh802b70dda94c401p173641jsn7206c852587f";
import axios from "axios";

function Example(props) {
  const [messages, setMessages] = useState([]);
  const [giftedChatKey, setGiftedChatKey] = useState(0);
  const [userLanguage, setUserLanguage] = useState("");
  const currentUserId = props.route.params.currentUserId;
  const chatId = props.route.params.chatId;
  const fetchLanguage = async () => {
    try {
      const result = await AsyncStorage.getItem("preferredLanguage");
      console.log("User's language", result);
      setUserLanguage(result || ""); // Set a default value in case result is null or undefined
    } catch (error) {
      console.log("Error fetching user's language:", error);
      setUserLanguage(""); // Set a default value in case of an error
    }
  };

  useEffect(() => {
    console.log("Chatscreen check for chat", chatId);
    fetchMessages();
    fetchLanguage();
  }, []);

  const fetchMessages = async () => {
    try {
      const result = await API.graphql(
        graphqlOperation(`
          query GetMessages {
            listMessages(filter: {
              chatMessagesId: {
                eq: "${chatId}"
              }
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

      const fetchedMessages = await Promise.all(
        result.data.listMessages.items.map(async (item, index) => {
          const message = {
            ...item,
            _id: item.id,
            text: item.message,
            user: {
              _id: item.messageUserId,
            },
          };

          if (item.messageUserId !== currentUserId) {
            const translatedText = await translateText(
              item.message,
              userLanguage
            );

            if (translatedText) {
              message.text = translatedText;
            } else {
              console.log("Translation failed for message:", item.message);
              // Handle translation error
            }
          }
          return message;
        })
      );

      // Sort messages by createdAt in ascending order
      const sortedMessages = fetchedMessages.sort(
        (b, a) => new Date(a.createdAt) - new Date(b.createdAt)
      );

      setMessages(sortedMessages);
    } catch (error) {
      console.log("Error fetching messages:", error);
    }
  };

  const transformedMessages = messages.map((message) => {
    if (message.user._id !== currentUserId) {
      return {
        ...message,
        text: message.text,
      };
    }
    return message;
  });

  const translateText = async (text, toLanguage) => {
    const options = {
      method: "GET",
      url: "https://nlp-translation.p.rapidapi.com/v1/translate",
      params: {
        text,
        to: toLanguage,
      },
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "nlp-translation.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log("Translation API response:", response.data);

      const { translated_text, original_text } = response.data;
      const translatedText = translated_text[toLanguage];
      const originalText = original_text;

      console.log("Translated Text:", translatedText);
      console.log("Original Text:", originalText);

      return translatedText;
    } catch (error) {
      console.error("Translation API error:", error);
      return null;
    }
  };

  const onSend = useCallback(
    async (newMessages = []) => {
      const updatedMessages = [...messages, ...newMessages];
      setMessages(updatedMessages);

      if (chatId) {
        try {
          const savedMessages = await Promise.all(
            newMessages.map((newMessage) =>
              DataStore.save(
                new Message({
                  message: newMessage.text,
                  chatMessagesId: chatId,
                  messageUserId: currentUserId,
                })
              )
            )
          );
          console.log("New messages created", savedMessages);
        } catch (error) {
          console.log("Onsend", error);
        }
        fetchMessages(); // Fetch new messages after sending
      }
    },
    [chatId, currentUserId, messages]
  );

  useEffect(() => {
    setGiftedChatKey((prevKey) => prevKey + 1);
  }, [messages]);

  // const transformedMessages = messages.map((message) => {
  //   if (message.user._id !== currentUserId) {
  //     const translatedText = message.text;
  //     return {
  //       ...message,
  //       text: translatedText,
  //     };
  //   }
  //   return message;
  // });

  return (
    <GiftedChat
      key={giftedChatKey} // Add key prop to trigger re-render
      messages={transformedMessages}
      onSend={(newMessages) => onSend(newMessages)}
      user={{
        _id: currentUserId,
      }}
    />
  );
}

export default Example;
