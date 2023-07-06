import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { DataStore, Auth } from "aws-amplify";
import { Message } from "../../models";

function Example() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const messages = await DataStore.query(Message);
        const formattedMessages = messages.map((message) => ({
          _id: message.id,
          text: message.message,
          createdAt: new Date(), // Modify this based on your message's actual createdAt value
          user: {
            _id: message.owner,
            name: message.owner, // Use an appropriate name for the user
            avatar: "https://placeimg.com/140/140/any", // Replace with user avatar URL if available
          },
        }));
        setMessages(formattedMessages);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  const onSend = useCallback(async (messages = []) => {
    const newMessage = messages[0];
    const messageData = {
      owner: (await Auth.currentAuthenticatedUser()).attributes.sub,
      message: newMessage.text,
    };

    try {
      await DataStore.save(new Message(messageData));
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages)
      );
    } catch (error) {
      console.error("Error sending message:", error);
    }
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: "b324b852-0061-7087-b1d8-dc2943bd4f25", // Replace with the ID of the user on the second device
      }}
    />
  );
}

export default Example;
