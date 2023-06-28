import React, { useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { TryContext } from '../../context/tryoutCont';
import { DataStore } from 'aws-amplify';
import { Product, Category } from '../../models';

interface ComponentAProps {
  text: string;
}

const ComponentA: React.FC<ComponentAProps> = ({ text }) => {
  const {
    name,
    setName,
    description,
    setDescription,
    price,
    setPrice,
    category,
    subcategory,
  } = useContext(TryContext);


  const handleCreateProduct = async () => {
    try {
      // Fetch the Category object based on the category ID
      const categoryObject = await DataStore.query(Category, category);
  
      const product = await DataStore.save(
        new Product({
          name,
          description,
          price: parseFloat(price),
          category: categoryObject,
          Subcategories: [],
        })
      );
  
      console.log('Product created:', product);
    } catch (error) {
      console.log('Error creating product:', error);
    }
  };

  return (
    <View>
      <Text>{text}</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />
      <TextInput
        value={description}
        onChangeText={setDescription}
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
      <Button title="Create Product" onPress={handleCreateProduct} />
    </View>
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
