import React, { useState, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { View, Text } from "react-native";
import { Auth, DataStore } from "aws-amplify";
import { Chat, Message } from "../../models";
import axios from "axios";

const API_KEY = "1f0300778amsh802b70dda94c401p173641jsn7206c852587f";

function ChatScreen({ route }) {
  const userId = route.params;
  const [messages, setMessages] = useState([]);
  const [userTwoId, setUserTwoId] = useState(null);
  const productTitle = "Sample Product"; // Replace with your actual product title

  const mainUserFindId = async () => {
    const userData = await Auth.currentAuthenticatedUser();
    const fetchedUserTwoId = userData.attributes.sub;
    console.log(fetchedUserTwoId);
    setUserTwoId(fetchedUserTwoId);
  };

  useEffect(() => {
    mainUserFindId();
  }, []);

  useEffect(() => {
    if (userTwoId) {
      setMessages([
        {
          _id: userId.userId,
          text: "Hello developer",
          createdAt: new Date(),
          user: {
            _id: userTwoId,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any",
          },
        },
      ]);
      console.log(userId.userId, userTwoId);
    }
  }, [userTwoId]);

  async function translateText(text, fromLanguage, toLanguage) {
    const options = {
      method: "GET",
      url: "https://nlp-translation.p.rapidapi.com/v1/translate",
      params: {
        text,
        to: toLanguage,
        from: fromLanguage,
      },
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "nlp-translation.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      return response.data.translated_text;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async function onSend(newMessages) {
    const translatedMessages = await Promise.all(
      newMessages.map(async (message) => {
        const translatedText = await translateText(message.text, 'en', 'ru');
        let text = message.text; // Default to original text if translation fails
  
        if (typeof translatedText === 'object' && translatedText.hasOwnProperty('ru')) {
          text = translatedText.ru;
        }
  
        return {
          ...message,
          text,
        };
      })
    );
  
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, translatedMessages)
    );
  
    const messagesToSave = translatedMessages.map((message) => ({
      id: message._id,
      userId: message.user._id,
      date: message.createdAt.toISOString(),
      chatID: Math.random(), // Provide the chat ID here
    }));
  
    await Promise.all(
      messagesToSave.map((message) => DataStore.save(new Message(message)))
    );
  }

  function renderChatFooter() {
    return (
      <View style={{ padding: 10, backgroundColor: "#f0f0f0" }}>
        <Text style={{ fontWeight: "bold" }}>{productTitle}</Text>
      </View>
    );
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={onSend}
      user={{
        _id: userTwoId, // User ID
      }}
      renderChatFooter={renderChatFooter}
    />
  );
}

export default ChatScreen;
