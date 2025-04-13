// screens/DetailsScreen.tsx
import { View, Text, Button, StyleSheet } from 'react-native';
import { DetailsScreenProps } from '../types/navigation';
import { useState, useEffect } from 'react';

export default function DetailsScreen({ route, navigation }: DetailsScreenProps) {
  const { itemId, title } = route.params;
  const [currentTime, setCurrentTime] = useState<string>('');

  // Оновлення часу кожну секунду
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Додаткові деталі на основі itemId
  const getItemDetails = (id: number) => {
    switch (id) {
      case 42:
        return "Це секретний об'єкт з всесвіту «Автостопом по галактиці»";
      case 99:
        return "Спеціальний об'єкт для тестування";
      default:
        return "Звичайний об'єкт без особливостей";
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Деталі об'єкта</Text>
      
      <View style={styles.detailCard}>
        <Text style={styles.label}>ID:</Text>
        <Text style={styles.value}>{itemId}</Text>
      </View>

      <View style={styles.detailCard}>
        <Text style={styles.label}>Назва:</Text>
        <Text style={styles.value}>{title}</Text>
      </View>

      <View style={styles.detailCard}>
        <Text style={styles.label}>Опис:</Text>
        <Text style={styles.value}>{getItemDetails(itemId)}</Text>
      </View>

      <View style={styles.detailCard}>
        <Text style={styles.label}>Поточний час:</Text>
        <Text style={styles.timeText}>{currentTime}</Text>
      </View>

      <Button 
        title="Назад" 
        onPress={() => navigation.goBack()} 
        color="#6a1b9a"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  detailCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    fontWeight: '500',
    color: '#222',
  },
  timeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6a1b9a',
    textAlign: 'center',
    marginTop: 5,
  },
});