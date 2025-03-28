import { View, StyleSheet } from "react-native";
import {ColorSquare} from "../components/ColorSquare"

const RowLayoutScreen = () => {
  return (
    <View style={styles.container}>
      <ColorSquare color= "red" />
      <ColorSquare color= "green" />
      <ColorSquare color= "blue" />
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