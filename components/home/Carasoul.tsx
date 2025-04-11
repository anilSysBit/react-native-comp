import React from "react";
import { StyleSheet,ScrollView, View, Text } from "react-native";

export default function Carasoul() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <View style={styles.card}><Text>1</Text></View>
      <View style={styles.card}><Text>2</Text></View>
      <View style={styles.card}><Text>3</Text></View>
      <View style={styles.card}><Text>4</Text></View>
      <View style={styles.card}><Text>5</Text></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        marginTop:10,
      },
      card: {
        width: 300,
        height: 150,
        marginRight: 16,
        backgroundColor: '#4CAF50',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
      },
});
