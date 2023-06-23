import React, { useState } from 'react';
import { View, Image, FlatList, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

function index({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewRef = React.useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  });

  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

    return (
      <View><FlatList
      data={images}
      renderItem={({ item }) => <Image source={{ uri: item }} style={{ width: width, height: height*0.4 }} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={width}
      snapToAlignment={'center'}
      decelerationRate={'fast'}
      viewabilityConfig={viewConfigRef.current}
      onViewableItemsChanged={onViewRef.current}
        />
            <View style={styles.dotsView}>{images.map((image, index) => (
                <View style={styles.dot} key={index}></View>
            ))}</View></View>
    
  );
}

const styles = StyleSheet.create({
    dot: {width: 10, height: 10, borderRadius: 5, backgroundColor: "red"
    },
    dotsView: {
        flexDirection: "row",
        position: "absolute",
        right: 10,
        bottom: 10,
        alignItems: "center",
        borderRadius: 10,
    backgroundColor: "red"},
})

export default index;
