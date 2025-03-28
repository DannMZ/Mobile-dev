import { View, StyleSheet } from "react-native";

const RowLayoutScreen = () => {
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
    flexDirection: "row",
    justifyContent: "space-around", // мб "center", "space-between"
    alignItems: "center",
  },
  square: {
    width: 69,
    height: 69,
  },
});

export default RowLayoutScreen;