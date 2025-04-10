import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface Props {
  title: string;
  content?: string;
  isOpen: boolean;
  onPress: () => void;
  iconName?:any;
  arrow?:boolean;
  iconColor?:string;
}

const AccordionItem: React.FC<Props> = ({ title, content,iconName, isOpen,iconColor="#ddd", onPress,arrow=true, }) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: isOpen ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isOpen]);

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <View style={styles.accordionItem}>
      <TouchableOpacity style={styles.header} onPress={onPress}>
      <View style={styles.accordinSide}>
      {iconName && <MaterialIcons name={iconName} size={24} color={iconColor}/>}
      <Text style={styles.title}>{title}</Text>
      </View>
        {arrow && <Animated.View style={{ transform: [{ rotate: rotation }] }}>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </Animated.View>}
      </TouchableOpacity>
      {content && isOpen && (
        <View style={styles.content}>
          <Text>{content}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  accordionItem: {
    borderColor: 'rgba(0,0,0,0.1)',
    borderRadius: 5,
    borderBottomWidth:1,
  },
  accordinSide:{
    flexDirection:'row',
    gap:10,
    alignItems:'center'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    height:70,
    padding: 10,
    backgroundColor: '#f9faff',
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

export default AccordionItem;
