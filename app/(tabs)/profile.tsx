import Accordion from "@/components/customs/Accordin";
import AccordionScreen from "@/components/page/ProfileAccordin";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Modal,
  View,
  Button,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
// import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import BottomSheet from "@/components/customs/BottomSheet";

const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const [showSheet, setShowSheet] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.profileView}>
          <TouchableOpacity onPress={toggleModal}>
            <View style={styles.editIcon}> 
             <Feather name="edit"  size={10} color={'gray'} />
            </View>
            <View style={styles.imageWrapper}>
              <Image
                source={require("@/assets/images/logo.png")}
                style={{ width: "90%", height: "90%", borderRadius: 75 }}
              />
            </View>
          </TouchableOpacity>
          <Feather
            name="settings"
            size={25}
            color={"white"}
            style={styles.settingIcon}
            onPress={()=>setShowSheet(true)}
          />

<BottomSheet visible={showSheet} onClose={() => setShowSheet(false)}>
        <Text style={styles.sheetText}>This is a custom bottom sheet</Text>
        <Button title="Close" onPress={() => setShowSheet(false)} />
      </BottomSheet>
          <Text />
          {/* Modal Popup */}
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={toggleModal}
          >
            <View style={styles.modalBackground}>
              <View style={styles.modalContainer}>
                <Text style={styles.modalText}>
                  This is your popup content!
                </Text>
                <Button title="Close" onPress={toggleModal} />
              </View>
            </View>
          </Modal>
          <Text style={{ color: "white", fontSize:20 }}>
            Anil Wagle
          </Text>
          <Text style={{ color: "white", marginTop: 2 }}>
            anil.wagle808@gmail.com
          </Text>
        </View>
        {/* <SafeAreaView style={styles.container} edges={['top']}> */}

        <ScrollView style={styles.scrollView}>
          <AccordionScreen />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    backgroundColor: "#3bab57",
  },
  scrollView: {
    backgroundColor: "white",
  },
  settingIcon: {
    position: "absolute",
    top: 20,
    right: 30,
  },
  editIcon: {
    position:'absolute',
    right:0,
    top:5,
    backgroundColor:'white',
    height:20,
    width:20,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    zIndex:1,
    // padding:5,
  },
  text: {
    fontSize: 42,
    // padding: 12,
  },
  profileView: {
    height: 170,
    // flex:1,
    alignItems: "center",
    backgroundColor: "#3bab57",
  },
  imageWrapper: {
    width: 80,
    height: 80,
    borderRadius: 80,
    backgroundColor: '#cfd5e3',
    padding: 5,
    borderWidth: 2,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent background
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  sheetText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default Profile;
