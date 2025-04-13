// navigation/RootNavigator.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { RootStackParamList } from '../types/navigation';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootStackParamList>();

function ProfDraw() {
  return (    
  <Drawer.Navigator
    screenOptions={{
      drawerPosition: 'left', // 'right' для правої сторони
      drawerType: 'front',   // 'back', 'slide' для анімації
      headerShown: true,     // Показати хедер
    }}
  >
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen 
        name="Details" 
        component={DetailsScreen} 
        options={{ title: 'Details' }}
        initialParams={{ itemId: 99, title: 'From Tab' }} // Параметри тут
      />
    </Drawer.Navigator>
  );
}
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen 
        name="Details" 
        component={DetailsScreen} 
        options={{ title: 'Details' }}
        initialParams={{ itemId: 99, title: 'From Tab' }} // Параметри тут
      />
    </Stack.Navigator>
  );
}

export default function RootNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeStack} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen name="Profile" component={ProfDraw} />
      <Tab.Screen 
      
        name="Details" 
        component={DetailsScreen}
        options={{ title: 'Details from tab' }}
        initialParams={{ itemId: 99, title: 'From Tab' }} // Параметри тут
      />
      
    </Tab.Navigator>
  );
}