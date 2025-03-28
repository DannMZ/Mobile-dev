
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RowLayoutScreen from '../screens/RowLayoutScreen';
import ColumnLayoutScreen from '../screens/ColumnLayoutScreen';
import GridLayoutScreen from '../screens/GridLayoutScreen';

const Tab = createBottomTabNavigator();


export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Row" component={RowLayoutScreen} />
      <Tab.Screen name="Column" component={ColumnLayoutScreen} />
    <Tab.Screen name="Grid" component={GridLayoutScreen} />
    </Tab.Navigator>
  );
}