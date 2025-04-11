import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreenS';
import ProfileScreen from '../screens/ProfileScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { RootStackParamList } from '../types/navigation';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>        
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} 
    options={{
      title: 'Мій кастомний заголовок', 
      headerRight: () => (              
        <Button 
          onPress={() => alert('Це кнопка в хедері!')} 
          title="Дія" 
        />
      ),
      headerStyle: { backgroundColor: '#e3f2fd' },
    }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}