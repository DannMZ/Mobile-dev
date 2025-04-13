// types/navigation.ts
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';

// Root Stack Param List
export type RootStackParamList = {
  Home: undefined;
  MainTabs: undefined;
  Details: { itemId: number; title: string };
  Profile: undefined;
};

// Tab Param List
export type MainTabParamList = {
  Home: undefined;
  Profile: undefined;
  Details: { itemId: number; title: string };
  MainTabs: undefined;
};


type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Home'>,
  NativeStackScreenProps<RootStackParamList, 'Home'>
>;

type ProfileScreenProps = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Profile'>,
  NativeStackScreenProps<RootStackParamList, 'Profile'>
>;

type DetailsScreenProps = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Details'>,
  NativeStackScreenProps<RootStackParamList,'Details'>
>;

export { HomeScreenProps, ProfileScreenProps,DetailsScreenProps };