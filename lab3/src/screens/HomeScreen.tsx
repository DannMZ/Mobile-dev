import { View, Text, Button } from 'react-native';
import { HomeScreenProps } from '../types/navigation';

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', { itemId: 42, title: 'Sample Item' })}
      />
    </View>
  );
}