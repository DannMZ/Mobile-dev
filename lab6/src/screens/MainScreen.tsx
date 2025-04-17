import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';
import { ConfirmModal } from '../components/modals/ConfirmModal';
import { ErrorModal } from '../components/modals/ErrorModal';
import { LoadingModal } from '../components/modals/LoadingModal';
import { ActionButton } from '../components/buttons/ActionButton';

export const MainScreen = () => {
  const [modalType, setModalType] = useState<'confirm' | 'error' | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const showToast = (type: 'success' | 'error' | 'info', message: string) => {
    Toast.show({ type, text1: message });
  };

  return (
    <View style={styles.container}>
      <ActionButton
        title="Confirm Action"
        onPress={() => setModalType('confirm')}
      />
      
      <ActionButton
        title="Show Error"
        onPress={() => setModalType('error')}
      />
      
      <ActionButton
        title="Toast Message"
        onPress={() => showToast('success', 'Something happened!')}
      />
      
      <ActionButton
        title="Fetch Data..."
        onPress={() => {
          setIsLoading(true);
          setTimeout(() => setIsLoading(false), 3000);
        }}
      />

      <ConfirmModal
        isVisible={modalType === 'confirm'}
        onConfirm={() => {
          setModalType(null);
          showToast('success', 'Confirmed!');
        }}
        onCancel={() => {
          setModalType(null);
          showToast('error', 'Cancelled');
        }}
      />

      <ErrorModal
        isVisible={modalType === 'error'}
        onFix={() => {
          setModalType(null);
          showToast('info', 'Trying to fix...');
        }}
        onIgnore={() => {
          setModalType(null);
          showToast('info', 'Ignored the error');
        }}
      />

      <LoadingModal isVisible={isLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
});