// src/navigation/RootNavigator.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ItemList from '../screens/ItemList';
import LocationScreen from '../screens/LocationScreen';
import UserInputScreen from '../screens/UserInputScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  ItemList: undefined;
  Location: undefined;
  UserInput: undefined;
};

const Stack = createBottomTabNavigator<RootStackParamList>();

export default function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ItemList" component={ItemList} options={{ title: 'Product List' }} />
        <Stack.Screen name="Location" component={LocationScreen} options={{ title: 'Location' }} />
        <Stack.Screen name="UserInput" component={UserInputScreen} options={{ title: 'User Input' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}