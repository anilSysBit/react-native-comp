import { Image, StyleSheet, Platform,ScrollView, View,Dimensions, Button,Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Carasoul from '@/components/home/Carasoul';
import MyInput from '@/components/home/SearchInput';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import HorizontalScroll from '@/components/home/HorizontalSlide';
import PopularCategories from '@/components/home/popcategories';
import ProductList from '@/components/home/Product';
// import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated';
const { width: SCREEN_WIDTH } = Dimensions.get('window');
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import ScrollViewLayout from '@/components/layouts/ScrollViewLayout';

export default function HomeScreen() {
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <SafeAreaProvider >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.topSearch}>
        <MyInput/>
          <View style={styles.cartIcon}>
          <MaterialIcons name='person' size={25} color="white"/>
          </View>
        </View>
        <ScrollViewLayout tabHidingOnScrolling>

        <View style={styles.container}>
         <Carasoul />
         <PopularCategories/>
         <ProductList/>
         <View style={styles.advertise}>
          <Image 
            source={{uri:"https://tipsmake.com/data/images/collection-of-the-most-beautiful-fashion-banners-picture-32-8h2n0YQtr.jpg"}}
            resizeMode='cover'
            style={{height:'100%',width:'100%',borderRadius:8}}
          />
         </View>
         <ProductList/>

        </View>
        </ScrollViewLayout>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea:{
    backgroundColor:'orange',
    flex:1,
  },
  advertise:{
    width:'auto',
    height:180,
    padding:10,
  },

  topSearch:{
    flexDirection:'row',
    justifyContent:'space-between',
    // borderWidth:2,
  },
  cartIcon:{
    width:'15%',
    // borderWidth:2,
    alignItems:'center',
    justifyContent:'center',
  },
  container:{
    backgroundColor:'white',
    paddingBottom:10,
    height:'auto',
    // borderWidth:2,
  
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
