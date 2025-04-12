import React from 'react';
import { View, Text, StyleSheet,Image,Dimensions } from 'react-native';
import HorizontalScroll from './HorizontalSlide';
import { MaterialIcons } from '@expo/vector-icons';


const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function PopularCategories() {
    const productList = [
        {
          name: 'Smart LED TV',
          category: 'Electronics',
          price: 500,
          discountedPrice: 399,
          rating: 4.5,
        },
        {
          name: 'Microwave Oven',
          category: 'Kitchen',
          price: 200,
          discountedPrice: 179,
          rating: 4.2,
        },
        {
          name: 'Vacuum Cleaner',
          category: 'Home',
          price: 150,
          discountedPrice: 129,
          rating: 4.0,
        },
        {
          name: 'Lipstick Set',
          category: 'Coesmetics',
          price: 50,
          discountedPrice: 39,
          rating: 4.6,
        },
        {
          name: 'Scented Candles Pack',
          category: 'Others',
          price: 30,
          discountedPrice: 25,
          rating: 4.1,
        },
        {
          name: 'Bluetooth Speaker',
          category: 'Nice',
          price: 100,
          discountedPrice: 85,
          rating: 4.3,
        },
      ];
      
  return (
    <View style={{marginTop:10}}>
    <View style={styles.popularCategory}>
      <Text style={{fontSize:15,fontWeight:'bold'}}>Trending Products</Text>
      <Text style={{color:'#8cb243',fontWeight:'bold'}}>See more</Text>
    </View>
    <HorizontalScroll>
      {productList.map((elem,index)=>{
        return(
            <View style={styles.card} key={index}>
                <Image
                    source={{uri:`https://picsum.photos/id/2${index}/300/200.jpg`}}
                    style={{height:'50%',width:'100%'}}
                    resizeMode='cover'
                />
                <View style={styles.category}>
                    <Text style={{fontSize:12,color:'#8cb243'}}>{elem?.category}</Text>
                    <Text style={{fontSize:12,fontWeight:'bold',flexDirection:'row',gap:10}}><MaterialIcons name='star' size={10} color={'gold'}/>{elem?.rating}</Text>
                </View>
                <Text style={{fontWeight:'bold',paddingLeft:5,paddingRight:5,marginTop:2}}>{elem?.name}</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:5,paddingRight:15,marginTop:2}}>
                    <Text style={{color:'red',fontSize:12,textDecorationLine:'line-through'}}>Rs{elem.price}</Text>
                    <Text style={{color:'green',fontWeight:'bold',fontSize:12}}>Rs.{elem.discountedPrice}</Text>
                </View>
            </View>
        )
      })}
      
    </HorizontalScroll>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: SCREEN_WIDTH / 2 - 40,
    height: 200,
    marginRight: 16,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#f1f1f1',
    overflow:'hidden',
    borderRadius: 10,
  },
  popularCategory:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
  },
  category:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:5,
    paddingRight:5,
    marginTop:2,
  },
});
