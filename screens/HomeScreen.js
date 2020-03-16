import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-deck-swiper';
import { Card } from '../components/card/card';
import { HomeScreenImages } from '../constants/Pics';

const HomeScreen = () => {
  return(
    <SafeAreaView style={styles.container}>
      <Swiper
        cards={HomeScreenImages}
        renderCard={Card}
        infinite
        backgroundColor="white"
        cardHorizontalMargin={0}
        stackSize={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
})

export default HomeScreen;