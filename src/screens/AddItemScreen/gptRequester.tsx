import React, { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";
import { OPENAI_KEY } from '@env'
import {View, Text} from 'react-native'

interface GptRequesterProps {
  desc: string;
}

const GptRequester: React.FC<GptRequesterProps> = ({ desc }) => {
    const [response, setResponse] = useState<string>("");
console.log("The key is:", OPENAI_KEY)
  useEffect(() => {
      const fetchData = async () => {
        console.log("Fetching data...", desc);
      const configuration = new Configuration({
        apiKey: OPENAI_KEY,
      });
      const openAi = new OpenAIApi(configuration);
      const description = await openAi.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are an AI that improves given description to get rid of mistakes in grammar, and then translates it into 5 other languages: russian, english, hebrew, arabic, ukrainian. The answer expected to have 5 sentences, starting with language code: ru for russian, en for english, he for hebrew, ar for arabic, uk for ukrainian. Make sure you send 5 translations. Moreover, you will recieve the category and subcateogry of the product user is selling, so that you would be able to understand the context and improve the description more concretely. `,
          },
          {
            role: "user",
            content: `${desc}`,
          },
        ],
        max_tokens: 100,
      });

          const responseData = description.data.choices[0].message.content;
          console.log("Response data:", responseData);
      setResponse(responseData);
    };

    fetchData();
  }, [desc]);

  return (
      <View>
      <Text>{response}</Text>
    </View>
  );
};

export default GptRequester;
