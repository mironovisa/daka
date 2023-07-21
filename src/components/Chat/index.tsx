import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
} from "react-native";

const { height, width } = Dimensions.get("window");

function ChatModal({ onClose }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    // Logic to handle sending the inputted data to the chat
    console.log("Sending a message:", message);
    setMessage("");
  };

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        {/* Chat content goes here */}
        {/* <Text>Hey!</Text> */}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message"
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  closeIcon: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10,
  },
  modalHeading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  modalContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  sendButton: {
    backgroundColor: "#007AFF",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  sendButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ChatModal;
