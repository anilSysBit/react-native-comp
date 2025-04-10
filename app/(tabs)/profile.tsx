import Accordion from '@/components/customs/Accordin';
import React, { useState } from 'react';
import {StyleSheet, Text, ScrollView,Image,Modal,View,Button,TouchableOpacity, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
// import { TouchableOpacity } from 'react-native';

const Profile = () => {
    const [modalVisible,setModalVisible] = useState(false);
    const toggleModal =()=>{
        setModalVisible(!modalVisible);
    }
    return(
  <SafeAreaProvider>
    <View style={styles.profileView}>
        <TouchableOpacity onPress={toggleModal}>
        <View style={styles.imageWrapper}>
            <Image
           source={require('@/assets/images/logo.png')}
           style={{ width: '90%', height: '90%',borderRadius:75 }}
        />
            </View>
        </TouchableOpacity>
              {/* Modal Popup */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>This is your popup content!</Text>
            <Button title="Close" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
        <Text style={{color:'white',marginTop:5,fontWeight:'bold'}}>Anil Wagle</Text>
        </View>
    {/* <SafeAreaView style={styles.container} edges={['top']}> */}
    
      <ScrollView style={styles.scrollView}>
      <Accordion/>

      </ScrollView>
    {/* </SafeAreaView> */}
  </SafeAreaProvider>
);
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'white',
  },
  text: {
    fontSize: 42,
    padding: 12,
  },
  profileView:{
    height:220,
    // flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#3bab57',
  },
  imageWrapper: {
    width: 100,
    height: 100,
    borderRadius: 80,
    // backgroundColor: '#ffeed7',
    padding: 5,
    borderWidth: 2,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    overflow:'hidden'
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default Profile;