import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, View, Text, Animated, StyleSheet, ScrollViewProps } from 'react-native';
import { useTabVisibility } from '@/context/TabVisibilityContext';

// Define the props for ScrollViewLayout component
interface ScrollViewLayoutProps extends ScrollViewProps {
  children: React.ReactNode; // To accept any children inside ScrollView (this is previous update here)
  tabHidingOnScrolling: boolean; // Prop to control whether the tab hides on scrolling
}

const ScrollViewLayout: React.FC<ScrollViewLayoutProps> = ({
  tabHidingOnScrolling,
  children,
  ...props
}) => {
  const { setTabVisibility } = useTabVisibility(); // Use the context to set tab visibility
  const scrollY = useRef(new Animated.Value(0)).current; // Animated value to track scroll position
  const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position
  const [isScrollingDown, setIsScrollingDown] = useState(false); // Whether the user is scrolling down

  // Scroll handler to detect the scroll position
  const scrollHandler = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false } // We can't use the native driver here for scrollY
  );

  useEffect(() => {
    // If tabHidingOnScrolling is enabled, handle the scroll behavior
    if (!tabHidingOnScrolling) return;

    // Add listener to scrollY value to track scrolling
    const listenerId = scrollY.addListener(({ value }) => {
      // Track the scroll direction
      if (value > lastScrollY) {
        setIsScrollingDown(true); // Scrolling down
      } else {
        setIsScrollingDown(false); // Scrolling up
      }

      // If scrolling down, hide the tab bar
      if (value > 50 && isScrollingDown) {
        setTabVisibility(false); // Hide tab if scrollY > 50 and scrolling down
      } else if (value <= 50 || !isScrollingDown) {
        setTabVisibility(true); // Show tab when scrolled back up or scrolling up
      }

      // Update the last scroll position
      setLastScrollY(value);
    });

    return () => {
      scrollY.removeListener(listenerId); // Clean up listeners when the component unmounts
    };
  }, [tabHidingOnScrolling, setTabVisibility, scrollY, lastScrollY, isScrollingDown]);

  return (
    <ScrollView
      {...props} // Spread all the props passed to ScrollViewLayout, like style, contentContainerStyle, etc.
      scrollEventThrottle={16} // Throttling the scroll event to avoid performance issues
      onScroll={tabHidingOnScrolling ? scrollHandler : undefined} // Enable scroll handler if tab hiding is enabled
    >
      {children} {/* Render the children inside the ScrollView */}
    </ScrollView>
  );
};

export default ScrollViewLayout;
