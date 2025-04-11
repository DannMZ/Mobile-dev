import { View, Text, Button } from 'react-native';
import { TabScreenProps } from '../types/navigation';

type Props = TabScreenProps<'HomeTab'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('DetailsTab', { 
          itemId: 42, 
          title: 'Sample Item' 
        })}
      />
    </View>
  );
}