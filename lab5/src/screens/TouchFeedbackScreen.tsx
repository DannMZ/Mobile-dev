import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, Pressable, StyleSheet, Alert } from 'react-native';

const TouchFeedbackScreen = () => {
  const [pressableText, setPressableText] = useState('Press Me');

  return (
    <View style={styles.container}>
      {/* TouchableOpacity */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('TouchableOpacity Pressed!')}
      >
        <Text style={styles.buttonText}>Opacity</Text>
      </TouchableOpacity>

      {/* TouchableHighlight */}
      <TouchableHighlight
        style={styles.button}
        underlayColor="#DDDDDD"
        onPress={() => Alert.alert('TouchableHighlight Pressed!')}
      >
        <Text style={styles.buttonText}>Highlight</Text>
      </TouchableHighlight>

      {/* Pressable */}
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? '#DDDDDD' : '#FFFFFF' },
        ]}
        onPressIn={() => setPressableText('Pressed!')}
        onPressOut={() => setPressableText('Press Me')}
        onLongPress={() => {
          setPressableText('Long Pressed!');
          Alert.alert('Long Press Detected!');
        }}
      >
        <Text style={styles.buttonText}>{pressableText}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    padding: 15,
    margin: 10,
    width: 200,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
  },
});

export default TouchFeedbackScreen;