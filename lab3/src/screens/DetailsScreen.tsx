// screens/DetailsScreen.tsx
import { View, Text, Button } from 'react-native';
import { DetailsScreenProps } from '../types/navigation';

export default function DetailsScreen({ route, navigation }: DetailsScreenProps) {
  const { itemId, title } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen (Stack)</Text>
      <Text>Item ID: {itemId}</Text>
      <Text>Title: {title}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}