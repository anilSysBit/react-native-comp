import { Image, StyleSheet, Platform, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Carasoul from '@/components/home/Carasoul';
import MyInput from '@/components/home/SearchInput';
import { Feather } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <SafeAreaProvider >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.topSearch}>
        <MyInput/>
          <View style={styles.cartIcon}>
          <Feather name='shopping-cart' size={25} color="white"/>
          </View>
        </View>
        <View style={styles.container}>
         <Carasoul/>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea:{
    backgroundColor:'#3bab57'
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
