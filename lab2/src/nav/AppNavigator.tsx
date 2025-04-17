import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RowLayoutScreen from "../screens/RowLayoutScreen";
import ColumnLayoutScreen from "../screens/ColumnLayoutScreen";
import GridLayoutScreen from "../screens/GridLayoutScreen";
import { Ionicons } from "@expo/vector-icons"; // Для іконок

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "blue", // Колір активної вкладки
        tabBarInactiveTintColor: "gray", // Колір неактивної
      }}
    >
      <Tab.Screen
        name="Row"
        component={RowLayoutScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Column"
        component={ColumnLayoutScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="reorder-three" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Grid"
        component={GridLayoutScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};