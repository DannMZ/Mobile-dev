import { View, StyleSheet } from "react-native";

const GridLayoutScreen = () => {
    const colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink", "brown"];
  
    return (
      <View style={styles.container}>
        {colors.map((color, index) => (
          <View key={index} style={[styles.square, { backgroundColor: color }]} />
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
    square: {
      width: 60,
      height: 50,
      margin: 5, 
    },
  });

export default GridLayoutScreen;