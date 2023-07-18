import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useIsFocused } from "@react-navigation/native"; // Import useIsFocused hook
import PagerView from "react-native-pager-view";
import CategoryPicker from "./CategoryPicker";
import MyComponent from "./store";
import ImagePicker from "../../components/ImagePicker";
import AddInitDataComp from "./addItemPhotoNameDescPriceComp";
import RedirectionCategoryUtil from "../../util/redirectionCategoryUtil";

const MyPager = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pagerRef = useRef<PagerView>(null);
  const isFocused = useIsFocused(); // Get the screen focus state

  useEffect(() => {
    // Reset current page to 0 whenever the screen gains focus
    if (isFocused) {
      setCurrentPage(0);
      pagerRef.current?.setPage(0);
    }
  }, [isFocused]);

  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    pagerRef.current?.setPage(nextPage);
  };

  const handleBackPage = () => {
    const prevPage = currentPage - 1;
    setCurrentPage(prevPage);
    pagerRef.current?.setPage(prevPage);
  };

  const onPageSelected = (e: { nativeEvent: { position: number } }) => {
    setCurrentPage(e.nativeEvent.position);
  };

  return (
    <PagerView
      style={styles.pagerView}
      initialPage={currentPage}
      scrollEnabled={false}
      onPageSelected={onPageSelected}
      ref={pagerRef}
    >
      <View key="1" style={styles.page}>
        <CategoryPicker onNextPage={handleNextPage} />
      </View>
      <View key="2" style={styles.page}>
        <RedirectionCategoryUtil onNextPage={handleNextPage} />
      </View>
      <View key="3" style={styles.page}>
        <ImagePicker onNextPage={handleNextPage} onPrevPage={handleBackPage} />
      </View>
      <View key="4" style={styles.page}>
        <AddInitDataComp
          onNextPage={handleNextPage}
          onPrevPage={handleBackPage}
        />
      </View>
    </PagerView>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  page: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MyPager;
