import React, { ReactNode } from 'react';
import { ScrollView, StyleSheet, ViewStyle } from 'react-native';

type HorizontalScrollProps = {
  children: ReactNode;
  containerStyle?: ViewStyle;
};

export default function HorizontalScroll({ children, containerStyle }: HorizontalScrollProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[styles.container, containerStyle]}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 5,
  },
});
