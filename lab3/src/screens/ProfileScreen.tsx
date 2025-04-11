import { View, Text, Button } from 'react-native';
import { ProfileScreenProps } from '../types/navigation';

export default function ProfileScreen({ navigation }: ProfileScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {
          itemId: 99,
          title: 'From Profile'
        })}
      />
    </View>
  );
}