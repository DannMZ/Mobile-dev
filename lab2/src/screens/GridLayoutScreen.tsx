import { View, StyleSheet } from "react-native";
import {ColorSquare} from "../components/ColorSquare"

const GridLayoutScreen = () => {
    const colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink", "brown"];
  
    return (
      <View style={styles.container}>
        {colors.map((color, index) => (
          <ColorSquare color={color} />
        ))}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
    },
  });

export default GridLayoutScreen;