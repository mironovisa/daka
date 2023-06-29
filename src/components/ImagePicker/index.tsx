import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AddedImagesCarousel from '../../components/AddedImagesCarousel';
import { Storage } from 'aws-amplify';
import { TryContext } from '../../context/tryoutCont';
import path from 'path';


const Index = () => {
  const [images, setImages] = useState<string[]>([]);
  const [count, setCount] = useState(0);
  const { setImageUrls } = useContext(TryContext);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Camera roll permission required');
      }

      const { status: cameraStatus } = await ImagePicker.requestCameraPermissionsAsync();
      if (cameraStatus !== 'granted') {
        alert('Camera permission required');
      }
    })();
  }, [count]);

  const pickImage = async () => {
    setCount(count + 1);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
        selectionLimit: 4,
        base64: false,
      quality: 1,
    });
console.log("The result is:",result);
    if (!result.canceled) {
        const newImages = result.assets.map((asset) => asset.uri);
        console.log("URIKI", newImages);
      setImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const pickImageCamera = async () => {
    setCount(count + 1);
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      // Add any other camera options you need
    });

    if (!result.canceled) {
      setImages((prevImages) => [...prevImages, result.assets[0].uri]);
    }
  };

  const fetchImageUrl = async (imageUri: string) => {
    return new Promise<Blob>((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = () => {
        resolve(xhr.response);
      };
      xhr.onerror = () => {
        reject(new Error('Error fetching image'));
      };
      xhr.open('GET', imageUri, true);
      xhr.responseType = 'blob';
      xhr.send();
    });
  };
  
  const uploadImagesToStorage = async () => {
    try {
      const uploadPromises = images.map(async (imageUri) => {
        const blob = await fetchImageUrl(imageUri);
        const filename = imageUri.split('/').pop();
        const extension = path.extname(filename).toLowerCase();
        const contentType = `image/${extension}`;
        await Storage.put(filename, blob, {
          contentType,
          progressCallback(uploadProgress) {
            console.log('Progress', uploadProgress.loaded + '/' + uploadProgress.total);
          },
        });
      });
  
      await Promise.all(uploadPromises);
  
      // Retrieve the URLs of the uploaded images
      const imageUrls = await Promise.all(
        images.map(async (imageUri) => {
          const filename = imageUri.split('/').pop();
          const response = await Storage.get(filename);
          const index = filename.indexOf('?');
          const cleanUrl = index !== -1 ? filename.substring(0, index) : filename;
          const bucketBaseUrl = 'https://daka-storage-9b499ce933107-dev.s3.eu-central-1.amazonaws.com/public/';
          return bucketBaseUrl + cleanUrl;
        })
      );
  
      setImageUrls(imageUrls);
      console.log(imageUrls);
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <AddedImagesCarousel images={images} setImages={setImages} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={pickImage} style={[styles.button, styles.galleryButton]}>
          <Text style={styles.buttonText}>Add from gallery</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={pickImageCamera} style={[styles.button, styles.cameraButton]}>
          <Text style={styles.buttonText}>Take a photo!</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={uploadImagesToStorage} style={[styles.button, styles.uploadButton]}>
          <Text style={styles.buttonText}>Upload Images</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    width: '33%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  galleryButton: {
    backgroundColor: 'lightblue',
  },
  cameraButton: {
    backgroundColor: 'lightgreen',
  },
  uploadButton: {
    backgroundColor: 'orange',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});

export default Index;
