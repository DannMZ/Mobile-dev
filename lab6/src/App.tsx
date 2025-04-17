import React from 'react';
import { MainScreen } from './screens/MainScreen';
import Toast from 'react-native-toast-message';
import { toastConfig } from './utils/toastConfig';

export default function App() {
  return (
    <>
      <MainScreen />
      <Toast config={toastConfig} />
    </>
  );
}