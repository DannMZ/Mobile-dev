import { Platform,View, StyleSheet, useWindowDimensions } from "react-native";

type ColorSquareProps = {
  color: string;
};

export const ColorSquare = ({ color }: ColorSquareProps) => {
  const { width } = useWindowDimensions();
  const size = width * 0.2;

  return (
    <View style={[styles.square, { backgroundColor: color, width: size, height: size }]} />
  );
};

const styles = StyleSheet.create({
  square: {
    margin: Platform.select({
      ios: 10,
      android: 5,
      default: 8,
    }),
  },
});