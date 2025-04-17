import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

type Props = {
  isVisible: boolean;
};

export const LoadingModal = ({ isVisible }: Props) => (
  <Modal isVisible={isVisible} backdropOpacity={0.7}>
    <View style={styles.loadingContent}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={styles.loadingText}>Fetching data...</Text>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  loadingContent: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 15,
    fontSize: 16,
  },
});