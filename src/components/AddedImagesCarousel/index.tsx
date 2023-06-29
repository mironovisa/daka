import React, { useState } from 'react';
import { View, Image, FlatList, Dimensions, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
const { width } = Dimensions.get('window');

function Index({ images, setImages }: { images: string[], setImages: React.Dispatch<React.SetStateAction<string[]>> }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImagePress = (index: number) => {
    setActiveIndex(index);
  };

  const handleDeleteImage = () => {
    // Create a copy of the images array
    const updatedImages = [...images];
    // Remove the active image from the array
    updatedImages.splice(activeIndex, 1);
    // Update the images state
    setImages(updatedImages);
    // Set the active index to the previous image if available, or the first image otherwise
    setActiveIndex(activeIndex > 0 ? activeIndex - 1 : 0);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleDeleteImage} style={styles.deleteButton}>
      <Ionicons name="trash-bin-sharp" size={24} color="red" />
      </TouchableOpacity>

      <Image source={{ uri: images[activeIndex] }} style={styles.mainImage} />

      <FlatList
        data={images}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handleImagePress(index)}>
            <Image source={{ uri: item }} style={styles.thumbnail} />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => `${item}_${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      marginBottom: 0, // Add a margin to the bottom of the container
    },
    mainImage: {
      width: 240,
      height: 426,
      resizeMode: 'cover',
      marginBottom: 10, // Reduce the margin at the bottom of the main image
    },
    thumbnail: {
      width: 50,
      height: 50,
      resizeMode: 'cover',
      marginHorizontal: 5,
      borderWidth: 2,
      borderColor: 'transparent',
    },
    deleteButton: {
      position: 'absolute',
      top: 10,
      right: 10,
      zIndex: 1,
    },
    deleteButtonText: {
      color: 'red',
      fontWeight: 'bold',
    },
    deleteButtonOverlay: {
        opacity: 0.7, // Adjust the opacity value as desired (0.0 - 1.0)
      },
  });
  

export default Index;
