import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function DetailsScreen({ route, navigation }: Props) {
  const { itemId, title } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>Item ID: {itemId}</Text>
      <Text>Title: {title}</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}