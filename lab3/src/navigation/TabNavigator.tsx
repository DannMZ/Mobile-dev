// navigation/TabNavigator.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { MainTabParamList, RootStackParamList } from '../types/navigation';
import { Button } from 'react-native/Libraries/Components/Button';

const Tab = createBottomTabNavigator<MainTabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen 
        name="Details" 
        component={DetailsScreen} 
        options={{ 
          title: 'Details',
          headerRight: () => (
            <Button 
              title="Info" 
              onPress={() => alert('Info!')} 
            />
          ),
        }} 
      />
    </Stack.Navigator>
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeStack} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen 
      
        name="Details" 
        component={DetailsScreen}
        options={{ title: 'Details' }} // Кастомний заголовок для таби
      />
      
    </Tab.Navigator>
  );
}