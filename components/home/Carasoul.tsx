import React from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const ITEM_SPACING = 10; // space between items
const ITEM_WIDTH = SCREEN_WIDTH - ITEM_SPACING * 2; // width of each item (with padding)

export default function CarouselWithGap() {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      snapToInterval={ITEM_WIDTH + ITEM_SPACING}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      contentContainerStyle={styles.scrollContainer}
    >
      {[1, 2, 3, 4, 5].map((item, index) => (
        <View key={index} style={styles.card}>
          {/* <Text style={styles.text}>{item}</Text> */}
          <Image
  source={{ uri: `https://icms-image.slatic.net/images/ims-web/2fea5305-262c-4bb2-a462-eedf24edbafc.jpg` }}
  style={{ width: '100%', height: 150, borderRadius: 12 }}
  resizeMode="cover"
/>

        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: ITEM_SPACING,
    marginTop:10,
  },
  card: {
    width: ITEM_WIDTH,
    height: 150,
    backgroundColor: '#ddd',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: ITEM_SPACING,
  },
  text: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
});
