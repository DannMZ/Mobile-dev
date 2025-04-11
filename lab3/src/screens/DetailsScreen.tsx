// screens/DetailsScreen.tsx
import { View, Text, Button } from 'react-native';
import { MainTabParamList } from '../types/navigation';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';

type DetailsTabProps = BottomTabScreenProps<MainTabParamList, 'Details'>;

export default function DetailsScreen({ route }: DetailsTabProps) {
  // Якщо параметри не передані, використовуємо значення за замовчуванням
  const { itemId = 0, title = 'Default Title' } = route.params || {};

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen (Tab Version)</Text>
      <Text>Item ID: {itemId}</Text>
      <Text>Title: {title}</Text>
    </View>
  );
}