import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index:number) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the accordion if it's already open
    } else {
      setActiveIndex(index); // Open the selected accordion
    }
  };

  const accordionData = [
    { title: 'Account Information', content: 'This is the content for item 1' },
    { title: 'Saved Addresses', content: 'This is the content for item 2' },
    { title: 'My Orders', content: 'This is the content for item 3' },
  ];

  return (
    <View style={styles.container}>
      {accordionData.map((item, index) => (
        <View key={index} style={styles.accordionItem}>
          <TouchableOpacity
            style={styles.header}
            onPress={() => toggleAccordion(index)}
          >
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
          {activeIndex === index && (
            <View style={styles.content}>
              <Text>{item.content}</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  accordionItem: {
    marginBottom: 10,
    // borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  header: {
    padding: 10,
    // backgroundColor: '#f1f1f1',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  title: {
    fontSize: 16,
  },
  content: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
});

export default Accordion;
