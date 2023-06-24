import React, { useState } from 'react';
import { View, Image, FlatList, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

function Index({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewRef = React.useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  });

  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({ item, index }) => (
          <Image key={`${item}_${index}`} source={{ uri: item }} style={{ width: width, height: height * 0.4 }} />
        )}
        keyExtractor={(item, index) => `${item}_${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
      />
      <View style={styles.dotsView}>
        {images.map((image, index) => (
          <View
            style={[styles.dot, { backgroundColor: index === activeIndex ? 'white' : 'gray' }]}
            key={`${image}_${index}`}
          ></View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: 'white',
    marginVertical: 6,
    marginHorizontal: 8,
  },
  dotsView: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 5,
    left: '45%',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default Index;
