import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../nav/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, View } from 'react-native';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Row'>;

const RowLayoutScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View>
      <Button 
        title="Go to Column Layout" 
        onPress={() => navigation.navigate('Column')} 
      />
    </View>
  );
};