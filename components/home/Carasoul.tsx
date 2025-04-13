import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
  NativeScrollEvent,
  NativeSyntheticEvent,
  TouchableOpacity,
  Animated,
} from 'react-native';

const { width } = Dimensions.get('window');

interface CarouselItem {
  id: string;
  uri: string;
}

const dotsWidth:number = 6;

const originalImages: CarouselItem[] = [
  { id: '1', uri: 'https://picsum.photos/id/1011/400/200' },
  { id: '2', uri: 'https://picsum.photos/id/1025/400/200' },
  { id: '3', uri: 'https://picsum.photos/id/1035/400/200' },
  { id: '3', uri: 'https://picsum.photos/id/1036/400/200' },
  { id: '3', uri: 'https://picsum.photos/id/1037/400/200' },
  { id: '3', uri: 'https://picsum.photos/id/1038/400/200' },
  { id: '3', uri: 'https://picsum.photos/id/1039/400/200' },
  { id: '3', uri: 'https://picsum.photos/id/1040/400/200' },
  { id: '3', uri: 'https://picsum.photos/id/1041/400/200' },
  { id: '3', uri: 'https://picsum.photos/id/1042/400/200' },
];
interface CarouselProps {
  autoLoop?: boolean;
}



const Carousel: React.FC<CarouselProps> = ({autoLoop=false}) => {
  const flatListRef = useRef<FlatList<CarouselItem>>(null);
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [isUserInteracting, setIsUserInteracting] = useState<boolean>(false);

  const scrollX = useRef(new Animated.Value(0)).current;


  // Create infinite scroll illusion by adding last to start and first to end
  const data = [
    originalImages[originalImages.length - 1],
    ...originalImages,
    originalImages[0],
  ];

  useEffect(() => {
    // Scroll to the first actual item on mount
    setTimeout(() => {
      flatListRef.current?.scrollToIndex({ index: 1, animated: false });
    }, 0);
  }, []);

  useEffect(() => {
    if (!autoLoop || isUserInteracting) return;
  
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = prev + 1;
        flatListRef.current?.scrollToIndex({
          index: nextIndex,
          animated: true,
        });
        return nextIndex;
      });
    }, 3000); // scroll every 3 seconds
  
    return () => clearInterval(interval);
  }, [autoLoop, isUserInteracting]);
  

  const handleScroll =  Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    {
      useNativeDriver: false,
      listener: (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / width);
        setActiveIndex(index);
      },
    }
  );

  const handleScrollBeginDrag = () => {
    // When the user starts dragging, stop autoLoop
    setIsUserInteracting(true);
  };
  
  const handleScrollEndDrag = () => {
    // When the user stops dragging, start autoLoop again after a delay
    setTimeout(() => {
      setIsUserInteracting(false);
    }, 1000); // You can adjust the delay here
  };
  
  const handleMomentumScrollEnd = () => {
    // Ensure the index is corrected when scrolling ends, especially after looping
    if (activeIndex === 0) {
      flatListRef.current?.scrollToIndex({ index: originalImages.length, animated: false });
      setActiveIndex(originalImages.length);
    } else if (activeIndex === originalImages.length + 1) {
      flatListRef.current?.scrollToIndex({ index: 1, animated: false });
      setActiveIndex(1);
    }
  };
  const renderItem = ({ item }: { item: CarouselItem }) => (
    <View style={styles.imageView}>
      <Image source={{ uri: item.uri }} style={styles.image} />
    </View>
  );


  const Pagination = () => {
    const handleDotClick = (index: number) => {
      flatListRef.current?.scrollToIndex({
        index: index + 1, // Account for the dummy images at the beginning and end
        animated: true,
      });
      setActiveIndex(index + 1); // Update active index to keep track of the current slide
    };
    return (
      <View style={styles.pagination}>
        {originalImages.map((_, i) => {
          const inputRange = [
            (i + 0) * width,
            (i + 1) * width,
            (i + 2) * width,
          ];
  
          const dotOpacity = scrollX.interpolate({
            inputRange: [
              (i + 1 - 1) * width,
              (i + 1) * width,
              (i + 1 + 1) * width,
            ],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
  
          const dotScale = scrollX.interpolate({
            inputRange: [
              (i + 1 - 1) * width,
              (i + 1) * width,
              (i + 1 + 1) * width,
            ],
            outputRange: [1, 1.2, 1],
            extrapolate: 'clamp',
          });
          const dotWidth = scrollX.interpolate({
            inputRange: [
              (i + 1 - 1) * width,
              (i + 1) * width,
              (i + 1 + 1) * width,
            ],
            outputRange: [dotsWidth,dotsWidth*2,dotsWidth], // 16 for active dot, 8 for others
            extrapolate: 'clamp',
          });
  
          return (
            <Animated.View
              key={i}
              style={[
                styles.dot,
                {
                  opacity: dotOpacity,
                  transform: [{ scale: dotScale }],
                  width:dotWidth,
                  
                },
              ]}
            >
              <TouchableOpacity onPress={() => handleDotClick(i)} style={styles.dotButton} />
            </Animated.View>
          );
        })}
      </View>
    );
  };
  
  

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        onScroll={handleScroll}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        onScrollBeginDrag={handleScrollBeginDrag}
        onScrollEndDrag={handleScrollEndDrag}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        initialScrollIndex={1}
      />
      <Pagination />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 210,
  },
  imageView:{
    width:width,
    height:200,
    padding:10,
    // borderWidth:2,
  },
  image: {
    width:'auto',
    height:'100%',
    resizeMode: 'cover',
    borderRadius:10,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: dotsWidth,
    height: dotsWidth,
    borderRadius: 4,
    marginHorizontal: 3,
    backgroundColor: '#333',
  },
  dotButton: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1, // Make sure the button is above the dot
  },
});

export default Carousel;
