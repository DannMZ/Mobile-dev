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


type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList,'Details'>;

export { HomeScreenProps, ProfileScreenProps,DetailsScreenProps };