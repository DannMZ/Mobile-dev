import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";


// src/types/navigation.ts
export type RootStackParamList = {
    Home: undefined;
    Details: { itemId: number; title: string };
    Profile: undefined;
  };
  
  // Додаємо типи для пропсів екранів
  export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
  export type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>;
  export type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;