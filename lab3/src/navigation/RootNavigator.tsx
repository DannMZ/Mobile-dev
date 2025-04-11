// navigation/RootNavigator.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import DetailsScreen from '../screens/DetailsScreen';
import { RootStackParamList } from '../types/navigation';
import { Button } from 'react-native/Libraries/Components/Button';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="MainTabs" 
          component={TabNavigator} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{ 
            title: 'Custom Header',
            headerRight: () => (
              <Button 
                title="Info" 
                onPress={() => alert('Info button pressed!')} 
              />
            ),
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}