// src/screens/ItemList.tsx
import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, Switch, Button, TouchableOpacity } from 'react-native';

type Item = {
  id: string;
  name: string;
  price: number;
};

const ItemList = () => {
  // Початковий список товарів
  const initialItems: Item[] = [
    { id: '1', name: 'iPhone 13', price: 999 },
    { id: '2', name: 'Samsung Galaxy S21', price: 899 },
    { id: '3', name: 'Google Pixel 6', price: 799 },
    { id: '4', name: 'OnePlus 9 Pro', price: 969 },
    { id: '5', name: 'Xiaomi Mi 11', price: 749 },
    { id: '6', name: 'MacBook Pro', price: 1299 },
    { id: '7', name: 'Dell XPS 13', price: 999 },
    { id: '8', name: 'iPad Pro', price: 799 },
    { id: '9', name: 'AirPods Pro', price: 249 },
    { id: '10', name: 'Sony WH-1000XM4', price: 349 },
  ];
  const itemCount:number=initialItems.length
  const [items, setItems] = useState<Item[]>(initialItems);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortAscending, setSortAscending] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Фільтрація товарів
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Сортування товарів
  const sortedItems = [...filteredItems].sort((a, b) =>
    sortAscending ? a.price - b.price : b.price - a.price
  );

  // Видалення товару
  const deleteItem = (id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Оновлення списку
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setItems(initialItems);
      setRefreshing(false);
    }, 1000);
  }, []);

  // Завантаження додаткових товарів
  const loadMoreItems = () => {
    const newItems: Item[] = [
      { id: (itemCount+1)+'', name: 'Apple I'+itemCount, price: 899 },
      { id: (itemCount+2)+'', name: 'Galaxy WatchX'+(itemCount-4), price: 590 },
    ];
    setItems(prevItems => [...prevItems, ...newItems]);
  };

  // Рендер елемента списку
  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteItem(item.id)}
      >
        <Text style={styles.deleteButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search items..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <View style={styles.sortContainer}>
        <Text>Sort by price: {sortAscending ? 'Low to High' : 'High to Low'}</Text>
        <Switch
          value={sortAscending}
          onValueChange={() => setSortAscending(!sortAscending)}
        />
      </View>

      <FlatList
        data={sortedItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        refreshing={refreshing}
        onRefresh={onRefresh}
        // onEndReached={loadMoreItems}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No items found</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
    borderRadius: 8,
  },
  sortContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginBottom: 8,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    color: 'gray',
  },
  deleteButton: {
    padding: 8,
    backgroundColor: 'red',
    borderRadius: 4,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
});

export default ItemList;