import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function MyInput() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
    <View style={styles.customInput}>
    <Feather name='search' size={20} style={styles.searchIcon}/>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={text}
        onChangeText={setText}
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width:'85%',
    // borderWid
  },
  customInput:{
    backgroundColor:'white',
    height:40,
    width:'auto',
    flexDirection:'row',
    alignItems:'center',
    borderRadius:25,
    overflow:'hidden',


  },
  searchIcon:{
    width:'10%',
    paddingLeft:15,
  },
  input: {
    height: 40,
    width:'90%',
    borderWidth: 1,
    borderColor: 'transparent',
    paddingHorizontal: 12,
    // borderRadius: 25,
    backgroundColor: '#fff',
    
  },
});
