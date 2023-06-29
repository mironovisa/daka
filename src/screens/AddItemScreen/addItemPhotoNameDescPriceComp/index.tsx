import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, Image, ScrollView } from 'react-native';
import { TryContext } from '../../../context/tryoutCont';
import { DataStore } from 'aws-amplify';
import { Product, Category } from '../../../models';
import GptRequester from '../gptRequester';
import ImagePicker from "../../../components/ImagePicker"

interface ComponentAProps {
  text: string;
}

const ComponentA: React.FC<ComponentAProps> = ({ text }) => {
  const {
    userSub,
    name,
    setName,
    price,
    setPrice,
    category,
    subcategory,
    imageUrls,
  } = useContext(TryContext);

  const [tempDescription, setTempDescription] = useState('');
  const [shouldCallGptRequester, setShouldCallGptRequester] = useState(false);

  const handleCreateProduct = async () => {
    try {
      // Fetch the Category object based on the category ID
      const categoryObject = await DataStore.query(Category, category);

      const now = new Date();
      const createdAt = now.toISOString();
      const updatedAt = now.toISOString();

      const product = await DataStore.save(
        new Product({
          name,
          description: tempDescription, // Use the temporary description
          price: parseFloat(price),
          category: categoryObject,
          Subcategories: [],
          city: "default",
          images: imageUrls,
        })
      );

      console.log('Product created:', product);
      setShouldCallGptRequester(true); // Set the flag to call GptRequester
    } catch (error) {
      console.log('Error creating product:', error);
    }
  };

  return (
    <ScrollView>
      <ImagePicker />
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />
      <TextInput
        value={tempDescription}
        onChangeText={setTempDescription}
        placeholder="Description"
        style={styles.input}
      />
      <TextInput
        value={price}
        onChangeText={setPrice}
        placeholder="Price"
        style={styles.input}
        keyboardType="numeric"
      />
      {shouldCallGptRequester && <GptRequester desc={tempDescription} />}
      <Button title="Create Product" onPress={handleCreateProduct} />
    </ScrollView>
  );
};

const styles = {
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
};

export default ComponentA;
