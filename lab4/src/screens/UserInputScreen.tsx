// src/screens/UserInputScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Button, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const UserInputScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [airplaneMode, setAirplaneMode] = useState(false);
  const [wifiEnabled, setWifiEnabled] = useState(true);
  const [selectedSize, setSelectedSize] = useState('M');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSubmit = () => {
    Alert.alert(
      'Form Submitted',
      `Username: ${username}\nPassword: [hidden]\nSize: ${selectedSize}\nDate: ${date.toDateString()}`
    );
  };

  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Information</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <Text>Current username: {username}</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      
      <View style={styles.switchContainer}>
        <Text>Airplane Mode</Text>
        <Switch
          value={airplaneMode}
          onValueChange={(value) => {
            setAirplaneMode(value);
            if (value) setWifiEnabled(false);
          }}
        />
      </View>
      
      <View style={styles.switchContainer}>
        <Text>Wi-Fi</Text>
        <Switch
          value={wifiEnabled}
          onValueChange={(value) => {
            if (!airplaneMode) setWifiEnabled(value);
          }}
          disabled={airplaneMode}
        />
      </View>
      
      <Text style={styles.sectionTitle}>Clothing Size</Text>
      <Picker
        selectedValue={selectedSize}
        onValueChange={(itemValue:string) => setSelectedSize(itemValue)}
      >
        <Picker.Item label="Small" value="S" />
        <Picker.Item label="Medium" value="M" />
        <Picker.Item label="Large" value="L" />
        <Picker.Item label="Extra Large" value="XL" />
      </Picker>
      
      <Text style={styles.sectionTitle}>Date Selection</Text>
      <Button
        title={`Select Date: ${date.toDateString()}`}
        onPress={() => setShowDatePicker(true)}
      />
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
      
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    borderRadius: 4,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
});

export default UserInputScreen;