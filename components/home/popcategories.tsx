import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import HorizontalScroll from './HorizontalSlide';

export default function PopularCategories() {
    const popularCategories = [
        {header:'Home Appliances'},
        {header:'Electronics'},
        {header:'Kitchen'},
        {header:'Coesmetics'},
        {header:'Others'},
        {header:'Nice'},
    ]
  return (
    <View>
    <View style={styles.popularCategory}>
      <Text style={{fontSize:15,fontWeight:'bold'}}>Popular Categories</Text>
      <Text style={{color:'#8cb243',fontWeight:'bold'}}>See more</Text>
    </View>
    <HorizontalScroll>
      {popularCategories.map((elem,index)=>{
        return(
            <View style={styles.card} key={index}>
                <Image
                    source={{uri:`https://picsum.photos/id/23${index}/300/200.jpg`}}
                    style={{height:'65%',width:'100%',borderRadius:8}}
                    resizeMode='cover'
                />
                <Text style={{marginTop:2,fontSize:12}}>{elem?.header}</Text>
            </View>
        )
      })}
      
    </HorizontalScroll>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 120,
    height: 140,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#e0e0e0',
    borderRadius: 10,
  },
  popularCategory:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
  },
});
