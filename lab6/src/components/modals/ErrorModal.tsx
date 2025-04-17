import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

type Props = {
  isVisible: boolean;
  onFix: () => void;
  onIgnore: () => void;
  errorMessage?: string;
};

export const ErrorModal = ({ 
  isVisible, 
  onFix, 
  onIgnore, 
  errorMessage = "Something went wrong. What do you want to do?" 
}: Props) => (
  <Modal
    isVisible={isVisible}
    animationIn="fadeIn"
    animationOut="fadeOut"
    backdropTransitionOutTiming={0}
  >
    <View style={styles.modalContent}>
      <View style={styles.header}>
        <Text style={styles.title}>⚠️ Error</Text>
      </View>
      
      <View style={styles.body}>
        <Text style={styles.message}>{errorMessage}</Text>
      </View>
      
      <View style={styles.footer}>
        <Pressable 
          style={({ pressed }) => [
            styles.button,
            styles.ignoreButton,
            pressed && styles.buttonPressed
          ]}
          onPress={onIgnore}
        >
          <Text style={styles.buttonText}>Ignore</Text>
        </Pressable>
        
        <Pressable 
          style={({ pressed }) => [
            styles.button,
            styles.fixButton,
            pressed && styles.buttonPressed
          ]}
          onPress={onFix}
        >
          <Text style={styles.buttonText}>Fix It</Text>
        </Pressable>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    overflow: 'hidden',
    width: '85%',
    alignSelf: 'center',
  },
  header: {
    backgroundColor: '#FF3B30',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  title: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  body: {
    padding: 20,
  },
  message: {
    color: '#333',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ignoreButton: {
    backgroundColor: '#F5F5F5',
    borderRightWidth: 1,
    borderRightColor: '#EEE',
  },
  fixButton: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  buttonPressed: {
    opacity: 0.7,
  },
});

// Типізація для пресетів помилок
type ErrorPreset = 'network' | 'auth' | 'validation' | 'server';

export const errorPresets: Record<ErrorPreset, string> = {
  network: "Network connection failed. Check your internet and try again.",
  auth: "Authentication failed. Please log in again.",
  validation: "Invalid data provided. Please check your input.",
  server: "Server error occurred. Our team has been notified.",
};