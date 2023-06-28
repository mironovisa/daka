import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view';
import FirstPage from './firstPage';
import MyComponent from './store';
import { MyContextProvider } from '../../context/addItem'; // Import the MyContextProvider component
import { TryContextProvider } from '../../context/tryoutCont'; 
const MyPager = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pagerRef = useRef<PagerView>(null);

  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    pagerRef.current?.setPage(nextPage);
  };

  const onPageSelected = (e: { nativeEvent: { position: number } }) => {
    setCurrentPage(e.nativeEvent.position);
  };

    return (
      <TryContextProvider>
    <MyContextProvider>
      <PagerView
        style={styles.pagerView}
        initialPage={currentPage}
        scrollEnabled={false}
        onPageSelected={onPageSelected}
        ref={pagerRef}
      >
        <View key="1" style={styles.page}>
          <FirstPage onNextPage={handleNextPage} />
        </View>

        <View key="2" style={styles.page}>
          <MyComponent />
        </View>

        <View key="3" style={styles.page}>
          <Text>Hey!</Text>
        </View>
      </PagerView>
            </MyContextProvider>
            </TryContextProvider>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  page: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyPager;
