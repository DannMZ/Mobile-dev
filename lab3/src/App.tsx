import GestureHandlerRootView from 'react-native-gesture-handler/lib/typescript/components/GestureHandlerRootView';
import RootNavigator from './navigation/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
    );
}