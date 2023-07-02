import React from 'react'
import { View, Text, Modal, Button } from 'react-native'

interface ImagePickerModalProps {
    isVisible: boolean;
    onClose: () => void;
    onCameraPress: () => void;
    onLibraryPress: () => void;
  }

function ImagePickerModal({  isVisible,
    onClose,
    onCameraPress,
    onLibraryPress,}:ImagePickerModalProps) {
  return (
      <View>
                <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}
      >
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          >
            <Text style={{ marginBottom: 10 }}>
              How do you want to pick an image?
            </Text>
            <Button title="Camera" onPress={onCameraPress} />
          <Button title="Media Library" onPress={onLibraryPress} />
          <Button title="Cancel" onPress={onClose} color="red" />
          </View>
        </View>
      </Modal>
</View>
  )
}

export default ImagePickerModal