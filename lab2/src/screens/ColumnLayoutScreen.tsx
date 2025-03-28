import { View, StyleSheet } from "react-native";
import {ColorSquare} from "../components/ColorSquare"

const ColumnLayoutScreen = () => {
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
      flexDirection: "column",
      justifyContent: "space-between", // Спробуйте змінити на "center"
      alignItems: "center",
    },
});

export default ColumnLayoutScreen;