import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, StyleSheet, PanResponder, Animated } from 'react-native';

const SwipeableItem = ({ text, onSwipe }: { text: string; onSwipe: () => void }) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x }], { useNativeDriver: false }),
    onPanResponderRelease: (_, gesture) => {
      if (gesture.dx < -100) {
        onSwipe();
      } else {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      }
    },
  });

  return (
    <View style={styles.swipeableContainer}>
      <Animated.View
        style={[
          styles.swipeableItem,
          { transform: [{ translateX: pan.x }] },
        ]}
        {...panResponder.panHandlers}
      >
        <Text>{text}</Text>
      </Animated.View>
    </View>
  );
};

const SwipeListScreen = () => {
  const [items, setItems] = useState(
    Array.from({ length: 5 }, (_, i) => `Item ${i + 1}`)
  );

  const handleSwipe = (index: number) => {
    setItems(prevItems => prevItems.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <SwipeableItem
          key={index}
          text={item}
          onSwipe={() => handleSwipe(index)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  swipeableContainer: {
    marginBottom: 10,
  },
  swipeableItem: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default SwipeListScreen;