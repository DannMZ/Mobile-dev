// types/navigation.ts
import { NativeStackScreenProps } from '@react-navigation/native-stack';

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