import { View, Text, Button } from 'react-native';
import { DetailsScreenProps, RootStackParamList } from '../types/navigation';
import { useEffect } from 'react';

export default function DetailsScreen({ route, navigation }: DetailsScreenProps) {
  const { itemId, title } = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: 'Оновлений заголовок',
      headerLeft: () => (
        <Button 
          onPress={() => navigation.goBack()} 
          title="Назад" 
        />
      ),
    });
  }, [navigation]);

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
