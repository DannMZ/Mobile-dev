import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

type Props = {
  isVisible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

export const ConfirmModal = ({ isVisible, onConfirm, onCancel }: Props) => (
  <Modal isVisible={isVisible}>
    <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>Are you sure?</Text>
      <Text>This action cannot be undone.</Text>
      <View style={styles.modalButtons}>
        <Pressable style={[styles.button, styles.cancelButton]} onPress={onCancel}>
          <Text style={styles.buttonText}>No</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.confirmButton]} onPress={onConfirm}>
          <Text style={styles.buttonText}>Yes</Text>
        </Pressable>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#bdbdbd',
  },
  confirmButton: {
    backgroundColor: '#4caf50',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});