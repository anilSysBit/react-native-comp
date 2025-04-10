import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import AccordionItem from '../customs/Accordin';

const AccordionScreen = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeIndex2, setActiveIndex2] = useState<number | null>(null);
  const [activeIndex3, setActiveIndex3] = useState<number | null>(null);

  const accordionData = [
    { title: 'Account Information', content: 'This is the content for item 1',icon:'person' },
    { title: 'Saved Addresses', content: 'This is the content for item 2',icon:'location-pin' },
    { title: 'My Orders', content: 'This is the content for item 3',icon:'shopping-cart' },
    { title: 'Payment Methods', content: 'This is the content for item 3',icon:'attach-money' },
    { title: 'My Vouchers', content: 'This is the content for item 3',icon:'library-books' },
  ];

  const customerData = [
    { title: 'My Reviews', content: 'This is the content for item 1',icon:'person' },
    { title: 'Customer Support', content: 'This is the content for item 2',icon:'location-pin' },
    { title: 'Rate our App', content: 'This is the content for item 3',icon:'shopping-cart' },
  ]

  const lastData = [
    { title: 'Logout',content:'',icon:'logout' },
  ]


  return (
    <>
    <View style={styles.container}>
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          iconName={item.icon}
          title={item.title}
          content={item.content}
          isOpen={activeIndex === index}
          onPress={() => setActiveIndex(activeIndex === index ? null : index)}
        />
      ))}
    </View>

    <View style={styles.container}>
      {customerData.map((item, index) => (
        <AccordionItem
          key={index}
          iconName={item.icon}
          title={item.title}
          content={item.content}
          isOpen={activeIndex2 === index}
          onPress={() => setActiveIndex3(activeIndex2 === index ? null : index)}
        />
      ))}
    </View>

    <View style={styles.container}>
      {lastData.map((item, index) => (
        <AccordionItem
          key={index}
          iconName={item.icon}
          title={item.title}
          content={item?.content}
          arrow={false}
          iconColor="red"
          isOpen={activeIndex3 === index}
          onPress={() => setActiveIndex3(activeIndex3 === index ? null : index)}
        />
      ))}
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop:5,
    borderRadius:5,
  },
});

export default AccordionScreen;
