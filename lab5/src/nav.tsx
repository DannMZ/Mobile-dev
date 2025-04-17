import { NavigationContainer } from '@react-navigation/native';
import TouchFeedbackScreen from './screens/TouchFeedbackScreen';
import ScrollExampleScreen from './screens/ScrollExampleScreen';
import SwipeListScreen from './screens/SwipeListScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  TouchFeedback: undefined;
  ScrollExample: undefined;
  SwipeList: undefined;
};

const Stack = createBottomTabNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TouchFeedback" component={TouchFeedbackScreen} />
        <Stack.Screen name="ScrollExample" component={ScrollExampleScreen} />
        <Stack.Screen name="SwipeList" component={SwipeListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}