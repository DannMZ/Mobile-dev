import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';

// Root Stack Param List
export type RootStackParamList = {
  MainTabs: undefined;
  Details: { itemId: number; title: string };
};

// Tab Param List
export type MainTabParamList = {
  Home: undefined;
  Profile: undefined;
};

// Об'єднуємо типи для навігації
export type CompositeNavigationProp = BottomTabNavigationProp<MainTabParamList> & 
  NativeStackNavigationProp<RootStackParamList>;

// Пропси для екранів
export type HomeScreenProps = {
  navigation: CompositeNavigationProp;
};

export type ProfileScreenProps = {
  navigation: CompositeNavigationProp;
};

export type DetailsScreenProps = {
  route: RouteProp<RootStackParamList, 'Details'>;
  navigation: NativeStackNavigationProp<RootStackParamList>;
};