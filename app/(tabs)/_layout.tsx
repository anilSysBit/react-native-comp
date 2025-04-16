import { Tabs } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Platform,Animated } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useTabVisibility } from '@/context/TabVisibilityContext';
import { opacity } from 'react-native-reanimated/lib/typescript/Colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const {tabVisible} = useTabVisibility();
  const [tabBarTranslateY] = useState<any>(new Animated.Value(0)); // For animating tab position

  useEffect(() => {
    // Trigger animation when tab visibility changes
    Animated.spring(tabBarTranslateY, {
      toValue: tabVisible ? 0 : 80, // Move tab below the screen when hidden
      useNativeDriver: true,
    }).start();
  }, [tabVisible, tabBarTranslateY]);

  return (
    <Tabs
    safeAreaInsets={{bottom:tabVisible ? undefined : -60}}
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarHideOnKeyboard:true,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            
            // transform: [{ translateY: tabBarTranslateY }], // Control tab bar position
          },
          default: {
            
            // transform: [{ translateY: tabBarTranslateY }], // Same for default platform
          },
        }),
        
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />

      <Tabs.Screen
              name="profile"
              options={{
                title: 'Profile',
                tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
              }}
            />
      
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
