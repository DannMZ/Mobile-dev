import { View, StyleSheet } from "react-native";

const ColumnLayoutScreen = () => {
    return (
      <View style={styles.container}>
        <View style={[styles.square, { backgroundColor: "red" }]} />
        <View style={[styles.square, { backgroundColor: "green" }]} />
        <View style={[styles.square, { backgroundColor: "blue" }]} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between", // Спробуйте змінити на "center"
      alignItems: "center",
    },
  square: {
    width: 69,
    height: 69,
  },
});

export default ColumnLayoutScreen;