import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Pressable,
  Alert,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { systemLocalization } from "./systemLocalization";
import { useNavigation } from "@react-navigation/native";

export const ChooseLanguage = () => {
  const [language, setLanguage] = useState("en");
  const navigation = useNavigation();

  const storeData = async (lang, value) => {
    try {
      await AsyncStorage.setItem(lang, value);
    } catch (error) {
      // Error handling
    }
  };

  const handleLanguageChange = (itemValue) => {
    setLanguage(itemValue);
    const selectedLanguage = systemLocalization.ui.find(
      (item) => item.language === itemValue
    );
    storeData("preferredLanguage", itemValue);
    storeData("isRTL", selectedLanguage.isRTL.toString()); // Store the isRTL value as a string
  };
  const handleNextButton = async () => {
    const selectedLanguage = systemLocalization.ui.find(
      (item) => item.language === language
    );
    const isRTL = (await AsyncStorage.getItem("isRTL")) === "true";
    console.log(language);
    console.log(isRTL);
  };

  const getLocalizedButtonName = () => {
    return systemLocalization.buttons.next.find(
      (item) => item.language === language
    ).name;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {systemLocalization.ui.find((item) => item.language === language).text}
      </Text>
      <Picker
        selectedValue={language}
        onValueChange={handleLanguageChange}
        style={styles.picker}
      >
        <Picker.Item label="עברית" value="he" />
        <Picker.Item label="Русский" value="ru" />
        <Picker.Item label="Українська" value="uk" />
        <Picker.Item label="English" value="en" />
        <Picker.Item label="العربية" value="ar" />
      </Picker>
      <Pressable style={styles.buttonContainer} onPress={handleNextButton}>
        <Text style={styles.buttonText} color="#5271FF">
          {getLocalizedButtonName()}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 300,
  },
  header: {
    fontSize: 24,
    paddingBottom: 30,
  },
  picker: {
    height: 50,
    width: 200,
  },
  buttonContainer: {
    marginTop: 160,
    borderRadius: 10,
    backgroundColor: "#5271FF",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#FFFFFF",
    textAlign: "center",
  },
  imageBackground: {
    marginTop: 70,
    resizeMode: "cover",
  },
});
