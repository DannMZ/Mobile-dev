import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";



import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';

  // Комбіновані пропси для екранів у Tab-навігаторі
  export  type TabScreenProps<T extends keyof TabParamList> = CompositeScreenProps<
    BottomTabScreenProps<TabParamList, T>,
    NativeStackScreenProps<RootStackParamList>
  >;

// src/types/navigation.ts
export type RootStackParamList = {
    Home: undefined;
    MainTabs: undefined;
    Details: { itemId: number; title: string };
    Profile: undefined;
  };
  
  // Додаємо типи для пропсів екранів
  export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
  export type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>;
  export type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;


  
  // Визначаємо типи для Tab-навігатора
  export type TabParamList = {
    HomeTab: undefined;
    ProfileTab: undefined;
    DetailsTab: { itemId: number; title: string };
  };
  